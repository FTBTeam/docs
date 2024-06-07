---
title: Disable FTB Hide/FTB Progress
---

FTB Hide/FTB Progress are mods that are included in some modpacks that hide the loading screen and show the loading progress in the app. This guide will show you how to disable them.

# Disabling the FTB Hide/FTB Progress mods

:::tip Terminology
The word `Instance` is typically used to relate to a Modpack that you have installed to the FTB App
:::


## Disabling FTB Hide/FTB Progress

1. Open the FTB App
2. Go to the Instance you want to disable FTB Hide/FTB Progress on
3. Click on the three dots next to the play button
4. Select the option titled `Open`
5. Then select the option titled `Instance Folder`
6. Create a new file in this folder called `.no_loading_mods.marker`
   - The `.` at the start of the file name is important and will cause this file to be a hidden file, so dont worry if you no longer see the file after creating it
7. Now open the `mods` folder and delete the `ftb-hide.jar` and `ftb-progress.jar` mods

When you start the modpack up now, you should notice that the loading screen is no longer hidden.
