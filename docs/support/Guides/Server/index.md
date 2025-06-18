---
title: Create your own Server
description: Detailed guide on how to create a Minecraft Server for any FTB Modpacks
---

# Create your own server for any FTB Modpack

Creating a server for an FTB modpack is a little different from most other modpack providers. To help you through these differences we've outlined each step in detail below.

:::tip Disclaimer
This guide is only intended to show you how to download the files required to setup a Minecraft server for an FTB modpack. This guide will not help you run a Minecraft Server. There are many other guides out there on how to do this.
:::

## Downloading the server files

Unlike other providers, FTB ships a single binary file (executable) that contains a system that can download, update, and extract out all the modpack files from our servers.

This tool is called the `Server Installer` and each modpack has one on it's modpack's page.

For the reminder of this guide, we're going to use `FTB StoneBlock 3` modpack from FTB as the modpack we're going to setup a server for.

### Locating the Server files

Right, now that's out of the way, here are the steps to locate the server files.

- Go to the [FTB Website Server Files](https://feed-the-beast.com/modpacks/server-files) page
- Click on the Operating System you want to install the server on.
- Find the modpack you want to install, in this case, it's going to be `FTB StoneBlock 3`

You should now be on a page that looks like this

![The FTB Website on the StoneBlock 3 server files page](../../_assets/images/server-guide/ftb-server-files-page.png)

- Now select the version of the modpack you need the server files for from the dropdown box.
    - Typically, the latest version is the one you'd need
- Under the selected version, you will see a few download methods, select the one that suits you best. Both methods download the same file, just in different ways.
    - The Desktop option has 2 buttons that will just download the server installer for you.
    - The Server options gives you a `curl` command that you can run in your terminal to download the server installer.

![The FTB website focused on the server files section](../../_assets/images/server-guide/ftb-server-files-download-highlight.png)

Now you have this downloaded, we can move onto how to use the server installer

:::caution
Do not rename this file! The server installer uses the file name to know which pack to install! If you do modify the file's name. You will be asked for the pack ID and version ID.
:::

## Using the server installer

### Windows

Using the server installer on windows couldn't be simpler. Just put file you downloaded from above into the folder you'd like to have the server install to and double-click the .exe you downloaded. This will asked you some basic questions, then install the server. Once the tool has finished, you can use the `run.bat` file that has been placed in that folder to start the server!

### Mac & Linux

As with all good things, Mac & Linux have to make it a bit more complicated. You'll need to experience with the terminal to progress here. We'll try and help out as much as possible but it's worth noting that terminal experience is **required** for running a Modded Minecraft Server.

1. Create a new folder in the location you'd like to install the server to.
2. Place the downloaded file into location you created above.
3. Open the Terminal (In Linux (and sometimes MacOS) you should be able to right-click in this folder and click `open in terminal`. If this is present, you can skip step 3)
    - If you're running a Linux server with no Desktop. We expect you to know how to get to `step 4`.
4. `cd` into the folder that you created in `step 1`. For example, if I created a folder at `/home/mikey/servers/Stoneblock3` I would then use the following command `cd /home/servers/Stoneblock3`
5. Now that you are in the right folder you will need to give the server installer `execution` permissions. You do this by running the following command.
    - `chmod +x serverinstaller_{id}_{versionid}` replace the `{id}` and `{versionid}` with the numbers present in your file name.
6. Finally, run `./serverinstaller_{id}_{versionid}` again, replacing the `{id}` and `{versionid}` with the correct numbers.
7. You will now be asked some questions, answer them and the installer should start installing the pack.
8. You're done! You can now use the `run.sh` to start the server.

## Troubleshooting

:::info How do I use terminal!
We won't guide you through this as it's easily google-able, just google it :D
:::

:::info How do I do X on the server
This guide is only intended to help you create the server. Using the server is up to you to research and learn.
:::

:::info The server installer failed
If for any reason the server installer stopped working. You will want to create an issue on our Github which can be [found here](https://github.com/FTBTeam/FTB-Server-Installer/issues).
:::

:::info Why can't you just offer a .zip file
This is a question we see pop up occasionally. The reason we do it this is way is that we can hot fix modpacks without having to ship out a new version. Say a file is missing from a version, we can just patch this in and the FTB App and the server installer with automatically know to use this new file. This is super handy for anyone involved.

We also do it this way to reduce load on our servers. Having 100k+ people downloading a 500mb+ every couple of seconds is a big strain on our systems. The server installer uses heavily cached files from our distribution system which dramatically reduces the load on our systems.
:::

:::info What if I don't want to use your run.sh
No problem, just delete it and make your own. Just make sure you include the right arguments to Java
:::

## `Ad` This all seems a bit complicated...

We 100% agree! Running a server is no trivial task... If all this seems like too much of a pain in the rear end, maybe managed server hosting is what you're looking for? It's actually more affordable than you might think.

FTB is partnered with BisectHosting. With **24/7/365** support, **2,000+** Minecraft modpacks, and hosting for over **70+** games, you're in good hands.

Click the image below to get started!

[![BisectHosting](https://cdn.feed-the-beast.com/assets/promo/ftb-bh-promo-large.png)](https://bisecthosting.com/ftb)

