---
title: How to play with friends
sidebar_position: 1
---

# How to play with friends

There are many different ways you can play Minecraft modpacks together with your friends.
This page will outline some of the easiest and most reliable options to host for just you and a couple friends to play without having to setup a dedicated server.

## Security consideration

First up, a quick reminder that exposing your game client to the Internet so that your friends can join you carries some risk - there is no way to guarantee it is perfectly safe. Please be aware that when using "Open to LAN", the normal access control options that you have on a dedicated server do not exist (`/ban`, `/whitelist` and related).

## `e4mc` - only the host has to do anything

This option is by far the simplest for most casual players. Only the person who is going to be the host needs to add the mod. Then when in game, the hoster can use "Open to LAN" to get a domain for the other players to join them at.

[Curseforge](https://www.curseforge.com/minecraft/mc-mods/e4mc)

### Essential mod

Another commonly used mod that makes it easy to join your friends is [Essential Mod](https://www.curseforge.com/minecraft/mc-mods/essential-mod) (Not to be confused with [FTB Essentials](/docs/mods/suite/Essentials/index.md)).
Although Essential mod will usually work, `e4mc` is the preferred option because it is a simpler mod with less room for bugs.

## Port Forwarding

Although normally only considered when hosting a dedicated server, it is possible to let your friends connect to you when using "Open to LAN" with no changes to the clients if you setup port forwarding. This guide will not cover how to do port forwarding because there are many, many guides out there for this. But we will mention a couple important caveats when using this method to host:

1. Make sure you manually set the port number when using "Open to LAN". Otherwise, it will pick a random port number and you will need to update your port forwarding rule every time.
2. It is not a guarantee that you can make use of port forwarding on your network. Many ISPs have changed to a system known as [Carrier-grade NAT](https://en.wikipedia.org/wiki/Carrier-grade_NAT) due to the lack of IPv4 addresses. To check if your ISP is using CGNAT, you will need to check if the public IP address reported by websites you are visiting (searching for "what is my ip" in the search engine of your choice) matches with the WAN IP address reported by the router you configured your port forwarding rule on. If they do not match, you will not be able to use port forwarding to host anything.

## VPN methods

First off, there are two different ways the "VPN" term is used.

The colloquial way is for a service that claims to improve privacy by routing all of your Internet traffic through it to a specified endpoint elsewhere. Some of these services are actually capable of helping you host a minecraft server by supporting port forwarding. This is out of scope for this guide and not recommended due to potentially large increases in latency for players.

The second way is more helpful for hosting for your friends. The core concept is that each person installs software on their machine and configures it to join a private network which will allow for direct connections to each other regardless of how the network between them is configured.

A couple straightforward and powerful options for this are:

1. **[Recommended]** [ZeroTier](https://docs.zerotier.com/quickstart/) (Free for up to 10 devices)
2. [Tailscale](https://tailscale.com/kb/1017/install) (Free for up to 3 devices)

For each of these, the hoster will need to sign up for an account. Each player will need to download and install the software. And then the hoster will have to get each player's device joined to the private network. The full instructions and documentation for them are linked above. Hamachi is another common option here that used to be much more popular. It still works, but has been known to cause issues on latest MC versions and has more connectivity issues.

## Running a dedicated server

If you want a server that is available 24/7, you should use a dedicated server of using Open to LAN. If you want to run it yourself, you can follow [this Guide](/docs/support/Guides/Server/index.md) to get the files for FTB Packs so you can run your server.

## `Ad` This all seems a bit complicated...

We 100% agree! Running a server is no trivial task... If all this seems like too much of a pain in the rear end, maybe managed server hosting is what you're looking for? It's actually more affordable than you might think.

FTB is partnered with BisectHosting. With **24/7/365** support, **2,000+** Minecraft modpacks, and hosting for over **70+** games, you're in good hands.

Click the image below to get started!

[![BisectHosting](https://cdn.feed-the-beast.com/assets/promo/ftb-bh-promo-large.png)](https://bisecthosting.com/ftb)
