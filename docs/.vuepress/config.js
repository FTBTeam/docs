/**
 * @file Manages the sidebar programmatically.
 * @author Feed The Beast Ltd
 */

//Import theme and user config from VuePress
import {
    defaultTheme,
    defineUserConfig
} from 'vuepress'

//Import filesystem methods to walk the documentation tree and build the sidebar
import fs from 'fs';
import path from 'path';

//Allows consuming lines one by one in a buffer (https://www.npmjs.com/package/n-readlines)
import nReadlines from 'n-readlines';

//Sets the root directory containing all documentation in the project
const ROOT_FOLDER = "docs";

/* Sets the name of the text file that contains the order of which folders or files show in the sidebar in priority.
You can add one of those files per folder. The contents of the file can contain one name per line, either a folder
or a file that is in the same folder as this order file. */
const ORDER_FILENAME = "order.txt";

//Contains the name of the read me files. Read me files are used to add a "front" page for a folder.
const README_FILENAME = "README.md";

/*Contains the name of the folder that can contain assets such as pictures, videos or even other procedures. The contents
of that folder will not be mapped to the sidebar, but is still accessible!*/
const ASSETS_FOLDER = "assets";

//Allows blacklisting folders or files in the root folder specified above. Those folders or files will not be put on the sidebar.
const ROOT_FOLDER_BLACKLIST = [".vuepress", README_FILENAME, ORDER_FILENAME, ASSETS_FOLDER];

//Allows blacklisting folders or files in the subfolders under root. Those folders or files will not be put on the sidebar.
const COMMON_FOLDERS_BLACKLIST = [README_FILENAME, ORDER_FILENAME, ASSETS_FOLDER];

/*Decides if the folders in the sidebar will be displayed as collapsible or not. If they are not made collapsible, they will display
all of their content at once. If they are collapsible (true), their contents will be hidden until the user clicks them once.*/
const COLLAPSE_FOLDERS = true;

//Helps the file reader finding the frontmatter information in the documentation pages. Should always be set to "-".
const FRONTMATTER_LEADING_CHAR = "-";

//Helps the file reader look for titles inside markdown files. Should always be set to "title:".
const FRONTMATTER_TITLE_TEXT = "title:";

/*Determines the maximum amount of lines that the reader will check to find the title of a file. If you know your titles are at the start of
documents in the frontmatter, set this to a low value. This value is only reached if the reader cannot find the title at all.*/
const MAX_LINES_READ = 10;

//Decides the type of encoding files are using so that the reader can appropriately check the text inside files to find the title of files.
const ENCODING = "utf8";

//Used for throwing exceptions internally if the sidebar fails to be constructed properly and the program needs to default to one.
const SIDEBAR_ERR = "ErrorConstructingSidebar";

/*In the case of an error building the sidebar, this default sidebar will be used instead. It should be minimal and recognizable and allow
the website to load at least correctly. The search in VuePress can be used to find documents while an error like this persists. */
const DEFAULT_SIDEBAR = [
    {
        text: 'Home',
        link: '/'
    }
]

/**
 * An object that holds information about one clickable text in the sidebar.
 * @class
 * @classdesc
 * Object oriented construct that holds data for a node in a sidebar.
 * Example (all DocumentationObject objects):
 *  Docs
 *  └ Books
 *    └ Authors
 *    └ Pages
 *  └ History
 *    └ Middle Ages
 *    └ Parchment
 * 
 * @property {string} text Holds the information about the name of this article or folder.
 * @property {string} link This holds the link (URI) for the article for VuePress to be able to correctly redirect to said article when clicking that sidebar object.
 * @property {boolean} collapsible For folders, holds if the folder is collapsible in the sidebar, or expanded by default.
 * @property {DocumentationObject} children[] Array of DocumentationObject objects that represent nodes in the sidebar under a specific node.
 */
class DocumentationObject {
    constructor() { }

    collapsible = false;
    children = []
    text = ""
    link = ""

    /**
     * Returns a parent node as a DocumentationObject that contains information about the sidebar.
     * @summary Returns this parent node in a minified notation that's ready for immediate use in the sidebar format of VuePress.
     * @returns {DocumentationObject} This parent node
     */
    get sidebarObject() {
        let obj;

        //Folders have children while files do not
        if (this.children.length >= 1) {
            //Initialize an array to hold copies of the children, that we will ask to format themselves correctly. This is recursive.
            let formattedChildren = []
            for (const childNode of this.children) {
                formattedChildren.push(childNode.sidebarObject)
            }

            //Folders can have empty links if they don't offer a "README.md" file for VuePress to route (to show in the website).
            if (this.link === "") {
                obj = {
                    text: this.text,
                    collapsible: this.collapsible,
                    children: formattedChildren
                }
            } else {
                obj = {
                    text: this.text,
                    link: this.link,
                    collapsible: this.collapsible,
                    children: formattedChildren
                }
            }
        } else {
            obj = {
                text: this.text,
                link: this.link
            }
        }

        return obj;
    }
}

/**
 * Reads the contents of a folder, and applies recursive actions to specific elements.
 * @example
 * //rootNode points to an object on "/"
 * readAndHandleFolderRecursively("docs", true, (DocumentationObject) rootNode)
 * @example
 * //parentNode points to an object on "docs/info"
 * readAndHandleFolderRecursively("docs/info/help", false, (DocumentationObject) parentNode)
 * 
 * @param {string} folderpath The relative path from the current working directory to reach the file resource to handle.
 * @param {boolean} isRoot If the file resource to handle is actually the first in the arborescence (the root).
 * @param {DocumentationObject} parentNode The object directly parenting the file resource to reach and handle.
 * 
 */
function readAndHandleFolderRecursively(folderpath, isRoot, parentNode) {
    //Read the current folder contents
    let unfilteredFilenames;
    try {
        unfilteredFilenames = fs.readdirSync(folderpath);
        stats.foldersListed++;
    } catch (err) {
        logError("There has been an error reading the contents of the folder \"%s\".", folderpath);
        handleSidebarError(err);
    }

    //Filter the names of the files/folders before use by respecting the blacklists
    let filenames;
    if (isRoot) {
        filenames = unfilteredFilenames.filter(f => !ROOT_FOLDER_BLACKLIST.includes(f));
    } else {
        filenames = unfilteredFilenames.filter(f => !COMMON_FOLDERS_BLACKLIST.includes(f));
    }

    //If the current folder contains something
    if (filenames.length > 1) {
        //Check if the order file exists, and apply it
        let orderFileExists = false;
        let orderFilepath = path.join(folderpath, ORDER_FILENAME);
        try {
            orderFileExists = fs.existsSync(orderFilepath)
            stats.filesSynced++;
        } catch (err) {
            logError("Could not check the existence of the \"%s\" file at \"%s\".", ORDER_FILENAME, orderFilepath);
            //Can still recover from this. The order of docs will be forced alphanumeric, but at least they'll be accessible.
            console.error(err);
            stats.errorsCtr++;
        }

        if (orderFileExists) {
            let reader;
            try {
                reader = new nReadlines(orderFilepath);
                stats.orderFilesRead++;
                let line;

                while (line = reader.next()) {
                    line = line.toString(ENCODING);
                    let fileTarget = line.trim();
                    let index = filenames.indexOf(fileTarget);

                    //If the target was found
                    if (index != -1) {
                        //Cut the file/folder from the array of files left to process after the order file
                        filenames.splice(index, 1);

                        //Handle it through recursion
                        handleDocumentationObject(folderpath, fileTarget, parentNode);
                        stats.filesOrdered++;
                    } else {
                        //Else, this is a human error and the file needs maintenance and the unknown entry be corrected or removed
                        logWarning("Order file at \"%s\" contains unknown \"%s\" entry.", path.join(folderpath, ORDER_FILENAME), fileTarget)
                        stats.warningsCtr++;
                    }
                }
            } catch (err) {
                if (reader !== undefined) {
                    let line = reader.next();
                    if (line) {
                        //If line contains an object that's not "false", that means we didn't hit EOF yet, so we have to close the reader manually
                        reader.close();
                    }
                }
                logError("Error encountered while reading the lines of the order file at \"%s\".", path.join(folderpath, ORDER_FILENAME));
                /*Cannot recover from this if an error reaches here. The integrity of the rootNode is compromised and the filenames may be partial
                because we are using splice to remove processed entries.*/
                handleSidebarError(err);
            }
        }
        //Else don't do anything, the order file is optional

        //Handle the remaining sorted files
        filenames.sort();
        filenames.forEach(filename => {
            handleDocumentationObject(folderpath, filename, parentNode);
        });
    } else if (filenames.length == 1) {
        //Handle one documentation object
        handleDocumentationObject(folderpath, filenames[0], parentNode);
    }
    else {
        //The folder is empty, log a message and do nothing
        logWarning("The folder at \"%s\" is empty, consider removing it!", folderpath)
        stats.warningsCtr++;
    }
}

/**
 * Checks the file type at the path specified by the "parentFolder" and "filename", and adds a new children to its parent object.
 * @example
 * //rootNode points to the folder at "docs"
 * handleDocumentationObject("docs", "VuePress is nice.md", (DocumentationObject) rootNode)
 * @example
 * //parentNode points to the folder at "docs/info/help"
 * handleDocumentationObject("docs/info/help", "What is a computer.md", (DocumentationObject) parentNode)
 * 
 * @param {string} parentFolder The relative path from the current working directory to reach the parenting folder of this current file resource (immediate parent folder).
 * @param {string} filename The full name of the file resource (with extension when applicable, such as for files). 
 * @param {DocumentationObject} parentNode The object directly parenting the file resource to reach and handle.
 */
function handleDocumentationObject(parentFolder, filename, parentNode) {
    //Get some information about which type of file we're dealing with (file or folder)
    const filepath = path.join(parentFolder, filename);
    let stat;
    try {
        stat = fs.statSync(filepath);
        stats.filesSynced++;
    } catch (err) {
        logError("Error getting file information about a document at path \"%s\".", filepath);
        //Can't recover from this, file system might have permission issue
        handleSidebarError(err);
    }
    const isFile = stat.isFile();

    let dobj = new DocumentationObject();
    if (isFile) {
        let reader;
        try {
            reader = new nReadlines(filepath);
            stats.filesRead++;

            let line;

            if (line = reader.next()) {
                line = line.toString(ENCODING);

                //If the first line is the frontmatter
                if (isFrontmatterCharLine(line.trimEnd())) {
                    let ctr = 0;
                    /*Represents if the text of the DocumentationObject was set correctly. There's a chance it's not if the while
                    condition is immediately false.*/
                    let textNotSet = true;

                    //Read subsequent lines to search for the title in the file up to a threshold (ctr)
                    while ((line = reader.next()) && ctr < MAX_LINES_READ) {
                        line = line.toString(ENCODING).trim();
                        if (line.startsWith(FRONTMATTER_TITLE_TEXT)) {

                            //Check if the title is not empty. Line's been trimmed just above, so whitespace don't count as valid title here.
                            if (line.length > FRONTMATTER_TITLE_TEXT.length) {
                                dobj.text = line.substring(FRONTMATTER_TITLE_TEXT.length, line.length).trimStart();
                            } else {
                                //Title appears empty, infer from filename instead and log a recommendation.
                                logWarning("File at \"%s\" has unrecognized title \"%s\".", filepath, line)
                                stats.warningsCtr++;
                                dobj.text = toTitleCase(path.parse(filename).name);
                            }
                            //Assigned title, exit the loop.
                            textNotSet = false;
                            break;

                        } else if (isFrontmatterCharLine(line.trimEnd())) {

                            //Found the end of the frontmatter without finding a title, infer from filename and log a recommendation.
                            logWarning("No title found in frontmatter at \"%s\"! Please add a \"%s\" within the first %d lines.", filepath, FRONTMATTER_TITLE_TEXT, MAX_LINES_READ)
                            stats.warningsCtr++;
                            dobj.text = toTitleCase(path.parse(filename).name);
                            textNotSet = false;
                            break;
                        }
                        ctr++;
                    }

                    //In case the loop ends immediately, give it a text
                    if (textNotSet) {
                        logWarning("File at \"%s\" reached end of frontmatter prematurely. Check the frontmatter and ensure \"%s\" is reachable or raise the line counter threshold \"%s\" (currently: %d).", filepath, FRONTMATTER_TITLE_TEXT, varToString({ MAX_LINES_READ }), MAX_LINES_READ);
                        stats.warningsCtr++;
                        dobj.text = toTitleCase(path.parse(filename).name);
                    }

                } else {
                    //Infer title from the filename and log a warning
                    logWarning("File at \"%s\" should have a frontmatter written.", filepath)
                    stats.warningsCtr++;
                    dobj.text = toTitleCase(path.parse(filename).name);
                }
            } else {
                logWarning("File at \"%s\" is empty and shouldn't be!", filepath);
                stats.warningsCtr++;
            }
        } catch (err) {
            logError("File error while trying to read the contents of the frontmatter of file at \"%s\".", filepath);
            //Do not throw here in this case, we can recover from this. Just print the filestream error
            console.error(err);
            stats.errorsCtr++;
            dobj.text = toTitleCase(path.parse(filename).name);
        } finally {
            //If reader ain't null and needs closing, close it.
            if (reader !== undefined) {
                let line = reader.next();
                if (line) {
                    reader.close();
                }
            }
        }

        //Pass the filepath as the link and pad appropriately for VuePress sidebar object formats. Backslash to slash for Windows
        dobj.link = filepath.substring(ROOT_FOLDER.length, filepath.length).replaceAll("\\", "/");

        //Add the dobj to its parent as children
        //End of recursion after this line
        parentNode.children.push(dobj);
    } else {
        //It's a folder
        dobj.text = toTitleCase(filename);
        let readmeFileExists = false;
        let readmeFilepath = path.join(filepath, README_FILENAME);

        try {
            readmeFileExists = fs.existsSync(readmeFilepath);
            stats.filesSynced++;
        } catch (err) {
            logError("Could not check the existence of the \"%s\" file at \"%s\".", README_FILENAME, orderFilepath);
            //Can recover from this, just don't assign any link
            console.error(err);
            stats.errorsCtr++;
        }

        if (readmeFileExists) {
            //Pass the filepath as the link and pad appropriately for VuePress sidebar object formats. Backslash to slash for Windows
            dobj.link = filepath.substring(ROOT_FOLDER.length, filepath.length).replaceAll("\\", "/");
            stats.readmesDetected++;
        }
        dobj.collapsible = COLLAPSE_FOLDERS;

        //Handle the rest of the folder recursively and also to fill the children property of this current dobj
        readAndHandleFolderRecursively(filepath, false, dobj);

        //Add the dobj to its parent as children since its a valid node (non-empty).
        parentNode.children.push(dobj);
    }
}

/**
 * Allows checking if a line is composing the heading or ending of the VuePress frontmatter.
 * @example
 * isFrontmatterCharLine("---")
 * @param {string} l The line to verify (can be empty).
 * @returns {boolean} True if the line is entirely composed of the frontmatter's special character, otherwise false.
 */
function isFrontmatterCharLine(l) {
    if (l === "") {
        return false;
    }

    let b = true;
    for (var i = 0; i < l.length && b; i++) {
        b = b && (l.charAt(i) === FRONTMATTER_LEADING_CHAR);
    }
    return b;
}

/**
 * Elevates the first letters of some words in a string.
 * Reference: https://stackoverflow.com/a/196991
 * @example
 * //returns "Happyhour"
 * toTitleCase("happyhour")
 * @example
 * //returns "Happy Hour"
 * toTitleCase("happy hour")
 * @example
 * //returns "Happy-Hour"
 * toTitleCase("happy-hour")
 * @example
 * //returns "Happy Hour"
 * toTitleCase("happy_hour")
 * @param {string} str The string to raise to title case (elevate the first letter of some words to capitals).
 * @returns {string} The string with uppercased letters on word boundaries or underscore boundaries (which have been replaced to spaces).
 */
function toTitleCase(str) {
    return str.replaceAll("_", " ").replace(
        /\w*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
        }
    );
}

/**
 * Logs a caught exception on the error channel of the console and throws a managed error.
 * The thrown error can be caught somewhere else in the program for additional error handling.
 * @param {*} err Any exception object.
 * @throws Throws a SIDEBAR_ERR exception.
 */
function handleSidebarError(err) {
    //Log to error channel and throw the error
    console.error(err);
    throw SIDEBAR_ERR;
}

/**
 * Obtains the name of a variable in the code as a string.
 * @example
 * //prints the text "MyVar"
 * console.log(varToString(MyVar))
 * @param {*} varObj Any code variable.
 * @returns {string} The name of the variable itself as a string.
 */
const varToString = varObj => Object.keys(varObj)[0]

/**
 * Logs a message to the console to describe what the program is doing.
 * @example
 * //prints "INFO Here's some information.", with "INFO" in cyan.
 * function logWarning("Here's some information.")
 * @param {string} msg The information message to write on the console in cyan.
 * @param  {...any} args The additional arguments for the message such as formatting objects, if applicable.
 */
function logInfo(msg, ...args) {
    console.log("\x1b[36mINFO\x1b[0m " + msg, ...args)
}

/**
 * Logs a message to the console to describe a warning that should be looked at.
 * @example
 * //prints "WARN Here's a warning.", with "WARN" in yellow.
 * function logWarning("Here's a warning.")
 * @param {string} msg The warning message to write on the console in yellow.
 * @param  {...any} args The additional arguments for the message such as formatting objects, if applicable.
 */
function logWarning(msg, ...args) {
    console.log("\x1b[33mWARN\x1b[0m " + msg, ...args)
}

/**
 * Logs a message to the console to describe an error that should be looked at.
 * @example
 * //prints "ERR Here's an error.", with "ERR" in red.
 * function logWarning("Here's an error.")
 * @param {string} msg The error message to write on the console in red.
 * @param  {...any} args The additional arguments for the message such as formatting objects, if applicable.
 */
function logError(msg, ...args) {
    console.log("\x1b[31mERR\x1b[0m " + msg, ...args)
}

//Main program
//Init global variables for stats at the end of the loading phase.
let stats = {
    warningsCtr: 0,
    errorsCtr: 0,
    foldersListed: 0,
    readmesDetected: 0,
    orderFilesRead: 0,
    filesRead: 0,
    filesOrdered: 0,
    filesSynced: 0
}

//Initialize a new root node to use for the root folder
logInfo("Initializing the sidebar root node...")
let rootNode = new DocumentationObject();

//These lines are not needed, but for comprehension we could do this with no side effects, but only for the Root node
//rootNode.text = "Root";
//rootNode.link = "/";
//rootNode.collapsible = true;

logInfo("Searching the file tree...")
console.time("Completed in")
let sidebarLoadedProperly = false;

try {
    //Call the function to populate the root node. Recursive calls begin.
    await readAndHandleFolderRecursively(ROOT_FOLDER, true, rootNode);
    sidebarLoadedProperly = true;
} catch (err) {
    if (err === SIDEBAR_ERR) {
        //This error is user thrown and already handled in other code
        logError("Handled sidebar construction error.")
        stats.errorsCtr++;
    } else {
        //This is where the error fell outside all the safety nets and checks
        logError("Unhandled error! Code may need adjusting if this error is repetitive.");
        console.error(err);
        stats.errorsCtr++;
    }
    logInfo("Defaults will be used to allow the site to load.")
}

//Stats, can be useful in the case of issues/errors to see if they are significant
logInfo("Generating stats...")
const statsStruct = [
    { Action: "Sync File", Amount: stats.filesSynced},
    { Action: "Scan Folder", Amount: stats.foldersListed },
    { Action: "Detect " + README_FILENAME, Amount: stats.readmesDetected },
    { Action: "Read " + ORDER_FILENAME, Amount: stats.orderFilesRead },
    { Action: "Apply File Order", Amount: stats.filesOrdered},
    { Action: "Read Documentation File", Amount: stats.filesRead }
];

console.table(statsStruct);
console.timeEnd("Completed in")

//Tell the status of loading the documentation.
if (stats.warningsCtr + stats.errorsCtr == 0) {
    console.log('\x1b[32m%s\x1b[0m', `0 issues found. All clear!`);
} else if (stats.errorsCtr > 0) {
    console.log('\x1b[31m%s\x1b[0m', `${stats.warningsCtr + stats.errorsCtr} issue(s) found. Please verify the errors or warnings.`);
} else { //stats.warningsCtr is the only one containing a count
    console.log('\x1b[33m%s\x1b[0m', `${stats.warningsCtr + stats.errorsCtr} issue(s) found. Please verify the warnings.`);
}

let sidebar;
if (sidebarLoadedProperly) {
    sidebar = rootNode.sidebarObject.children;
} else {
    sidebar = DEFAULT_SIDEBAR;
}
logInfo("Sidebar constructed!")

//Uncomment the next line to print the sidebar to the console if necessary.
//logInfo(JSON.stringify(sidebar))

//The VuePress configuration, where the sidebar variable is used, along other configuration options.
export default defineUserConfig({
    theme: defaultTheme({
        sidebar: sidebar,
        lang: 'en-US',
        title: 'Feed The Beast Docs',
        description: 'Documentation for content made by Feed The Beast.',
        logo: 'https://vuejs.org/images/logo.png',
        repo: 'https://github.com/ftbteam/docs',
        docsRepo: 'https://github.com/ftbteam/docs/docs',
        docsBranch: 'main',
        contributors: false,
        darkMode: true
    })
})