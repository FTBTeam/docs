---
title: Delete App Cache/Data
description: Guide on how to purge/delete instance/app data such as install caches, Java runtimes and modloader data
---

# Deleting/Purging Caches & Data

If your app is running into issues with installing or starting up modpacks, your app may have some corrupted caches or data.
This guide will walk you through deleting/purging various caches and data that the app uses to run modpacks.

:::warning
Some of the following actions will require you to repair any installed modpacks afterwards to re-download any necessary files that were deleted.
:::

## Reloading instance data

The app will cache and store data for modpacks and versions that are on our API to help speed up the loading times of the app.
If you are running into issues with modpacks not showing up or versions not being correct, it's possible that the cached data is out of date.

To reload the instance data, you can follow these steps:

1. Click on the settings cog in the sidebar of the app
2. Make sure you are on the `App` tab on the left side
3. Scroll down to the `Caches & Data` section
4. Click the `Reload Instance Data` button
    - This will clear the cached instance data and reload it from our API, and should fix any issues with modpacks or versions not showing up for you.

## Purging instance/install caches

If you are running into issues with installing modpacks or starting up modpacks, it's possible that the install caches for modpacks contains a corrupted file.
To purge the install caches, you can follow these steps:

1. Click on the settings cog in the sidebar of the app
2. Make sure you are on the `App` tab on the left side
3. Scroll down to the `Caches & Data` section
4. Click the `Purge Instance Caches` button
    - This will delete all install caches for modpacks, and will force the app to re-download any necessary files when installing or starting up modpacks.

## Purging Java runtimes
Sometimes Java runtimes can become corrupted or outdated, which can cause issues with starting up modpacks.

To purge the Java runtimes, you can follow these steps:
1. Click on the settings cog in the sidebar of the app
2. Make sure you are on the `App` tab on the left side
3. Scroll down to the `Caches & Data` section
4. Click the `Purge Java Runtimes` button
    - This will delete all Java runtimes that the app has downloaded, and will force the app to re-download the necessary Java runtime when starting up a modpack.
      - If you run into issues starting up a modpack after purging the Java runtimes, you may need to right-click on the modpack then click `Settings` and then click `Repair` to re-download the necessary Java runtime for the modpack.

## Purging Minecraft and Modloader data
This will delete all Minecraft and Modloader assets that the app has downloaded

To purge the Minecraft and Modloader data, you can follow these steps:
1. Click on the settings cog in the sidebar of the app
2. Make sure you are on the `App` tab on the left side
3. Scroll down to the `Caches & Data` section
4. Click the `Purge Minecraft & Modloader Data` button
    - You will need to right-click on a modpack then click `Settings` and then click `Repair` to re-download the necessary assets for the modpack after purging this data.

