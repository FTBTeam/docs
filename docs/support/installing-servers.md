# Installing a Feed the Beast Server

So you've downloaded your modpack on the *FTB App*, played around and decided to create a server for you and your friends. Well this guide is all about helping you do that! This will use the **Server Installer**, which will help you download the modpack and all its dependencies such as *Forge*.

First, you'll need to get the **Server Installer** either on the Feed the Beast website or from inside your *FTB App*.

::: tip
To get it on the *FTB App*, head to the modpack page and click the Versions tab. The server files will be listed on a button. Skip ahead a few steps if you choose this.
:::

To get it on the site, view and choose the modpack you want to install a server for. For this example, we'll be installing FTB University 1.16, but it works exactly the same for other modpacks or versions.

Open [**https://www.feed-the-beast.com/modpack**](https://www.feed-the-beast.com/modpack) and click the title of the modpack.

![A click on the title will open the modpack page.](Installing%20a%20Feed%20the%20Beast%20Server%20e9eca2b7446b48fb82af61699c840195/modpacks.png)

A click on the title will open the modpack page.

Next, you'll see the "Server Files" section on the page. Click it to access files!

![Untitled](Installing%20a%20Feed%20the%20Beast%20Server%20e9eca2b7446b48fb82af61699c840195/Untitled.png)

You'll then see various versions and downloads for that server. Choose the download based on the machine that you will use to initially configure the server. This machine is usually your own computer.
I'll be using a Windows machine to configure the server as an example.

![Untitled](Installing%20a%20Feed%20the%20Beast%20Server%20e9eca2b7446b48fb82af61699c840195/Untitled%201.png)

It will be added to your Downloads.

![Untitled](Installing%20a%20Feed%20the%20Beast%20Server%20e9eca2b7446b48fb82af61699c840195/Untitled%202.png)

Next up, create a folder for your server. That folder should not be placed in a position where it can be synced to cloud software for its proper functioning. For example, placing it under your User folder on any OS will work just fine.

For example, *OneDrive* on Windows will mark folders with a green checkmark if they are synced.

This is **not** a good folder to place your server in. 🚫

![A synced folder, indicated by the green checkmark.](Installing%20a%20Feed%20the%20Beast%20Server%20e9eca2b7446b48fb82af61699c840195/onedrive_example.png)

A synced folder, indicated by the green checkmark.

An example of a good folder location on Windows, where the folder is not synced to a cloud service. The folder for this example will be called "FTB_University".

![A normal, good folder for your server.](Installing%20a%20Feed%20the%20Beast%20Server%20e9eca2b7446b48fb82af61699c840195/server_folder_example.png)

A normal, good folder for your server.

Now that you have created your new folder, take the **Server Installer** from your Downloads folder, and place it inside the newly created folder.

![Untitled](Installing%20a%20Feed%20the%20Beast%20Server%20e9eca2b7446b48fb82af61699c840195/Untitled%203.png)

Executing the file is the next thing to do in order to install the server. This differs depending on the OS you are using.

<aside>
💡 The **Server Installer** is a binary file made by the Feed the Beast team. It is signed by *CreeperHost LTD*, which is affiliated with Feed the Beast and provides infrastructure to download your modpack files.

</aside>

**Windows**:

- Double-click the file and it will be executed.
  Note that the installation window will close once it is done with this method.

**Linux** and **MacOS**:

- Open a terminal of your choice to write commands.
- Navigate to your folder using `cd` to change directory.
  (e.g. `cd ~/Servers/FTB_University`)
- Add the permission required for the file to run with `chmod +x`.
  (e.g. `chmod +x serverinstall_90_2073`)
- Run the file by calling it from the current directory you are in:
  (e.g. `./serverinstall_90_2073`)
  The period before the slash signifies the current directory. Of course, your file name will most likely be different than the one in this example.

Afterwards, the operations are the same no matter which OS you are using.

![cmd1.png](Installing%20a%20Feed%20the%20Beast%20Server%20e9eca2b7446b48fb82af61699c840195/cmd1.png)

Press **Enter**, since we are installing the server in the current folder.

![cmd2.png](Installing%20a%20Feed%20the%20Beast%20Server%20e9eca2b7446b48fb82af61699c840195/cmd2.png)

Press **Enter** again, yes we want to install here anyways.

![cmd3.png](Installing%20a%20Feed%20the%20Beast%20Server%20e9eca2b7446b48fb82af61699c840195/cmd3.png)

Confirm that this is the version of the modpack you wanted to install. You can change it later by updating your server.
If you made a mistake and need to abort the installation, press **Control + C** to close it.
Otherwise press **Enter** to begin the installation process.

You will then see in the terminal all modpack files being downloaded:

![Untitled](Installing%20a%20Feed%20the%20Beast%20Server%20e9eca2b7446b48fb82af61699c840195/Untitled%204.png)

Depending on your internet connection this can take a while. A full server download is situated in the few hundreds megabytes.
The **Server Installer** will finish with lines similar to these if opened in a terminal or command prompt earlier:

![server_installed.png](Installing%20a%20Feed%20the%20Beast%20Server%20e9eca2b7446b48fb82af61699c840195/server_installed.png)

The original contents of your new server folder will now look like this:

![server_overview.png](Installing%20a%20Feed%20the%20Beast%20Server%20e9eca2b7446b48fb82af61699c840195/server_overview.png)

The server is now installed! All that needs to be done is to start the server with the script.

For **1.18.2 modpacks** such as FTB Chocolate and FTB Presents Direwolf20 1.18.2, the script you have to use to boot the server is called `run`:

On Windows this script will be called `run.bat`, or if you have extensions hidden, only `run`. You can double click it to start it.
On Linux and MacOS this script will be called `run.sh`. You will need to open a terminal and add the permission to execute it like you did earlier with the **Server Installer**, then call it.

For **modpacks on other versions** such as 1.7.10, 1.12.2 or 1.16.5: FTB Monster, FTB Revelation, FTB Presents Direwolf20 1.16.5, the script you have to use to boot the server is called `start`:

On Windows this script will be called `start.bat`, or if you have extensions hidden, only `start`. You can double click it to start it.
On Linux and MacOS this script will be called `start.sh`. You will need to open a terminal and add the permission to execute it like you did earlier with the **Server Installer**, then call it.

<aside>
💡 Reminder: Navigate to a location with `cd`. Example: `cd ~/Servers/FTB_University`.

                 Modpacks in Minecraft 1.18.2:
                 Add a permission to execute with `chmod +x`. Example: `chmod +x run.sh`.
                 Execute a file by calling it in its directory. Example: `./run.sh`.

                 Modpacks in Minecraft 1.6.4, 1.7.10, 1.10.2, 1.12.2, 1.15.2, 1.16.5:
                 Add a permission to execute with `chmod +x`. Example: `chmod +x start.sh`.
                 Execute a file by calling it in its directory. Example: `./start.sh`.

</aside>

That's all! Once you start the server, everything should get going normally. If you host the server yourself, you can connect to it in the Multiplayer menu with `localhost` in the address field.
If you get errors, give us a visit in the FTB Discord support channel!

---

## Advanced **Server Installer** Usage

There are some command line switches that you can pass to the **Server Installer** to further customise how the installer runs.
The `--help` switch will allow you to see all those options more clearly.

![modpacksch.png](Installing%20a%20Feed%20the%20Beast%20Server%20e9eca2b7446b48fb82af61699c840195/modpacksch.png)

Using the various command line options listed here you can have the installer run without user prompts for a completely scriptable install, update or integrity check.

Note that the installer initially pulls the *modpack id* and *version id* from the filename of the installer itself.

In the case from before, FTB University 1.16 is represented by *modpack id* 90 and its version 1.2.0 is represented by *version id* 2073.
This is why the installer was called `serverinstall_90_2073` for this example.

Using the `--latest` switch we would have obtained the most recent version for that modpack, which at the time of writing this procedure was 1.2.0 anyways.

**End of page. Use the breadcrumb below to navigate to other sections.**