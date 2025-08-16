---
title: Login Issues
description: Troubleshooting logging into Microsoft accounts in FTB App
sidebar_position: 1
---

:::warning
**This guide is long, but it is important to read through it carefully if you are having issues logging into your Microsoft account in the FTB App. It covers common issues and solutions that can help you resolve the problem.**
:::

Let's get straight to the point, if you are having issues logging into your Microsoft account in the FTB App, here are some things you can try:

## Common issues and solutions

### 1. Wrong account

Make sure you are using the correct Microsoft account. If you have multiple accounts, ensure you are logging in with the one that has access to Minecraft.

You may think you are using the correct account, but it is worth checking. If you have multiple accounts, try logging in with each one to see if it works.

### 2. Account age

Ensure that you are not trying to log in with a child account. Microsoft has restrictions on child accounts that may prevent you from logging in.

### 3. Account password

Make sure that your account has a password set. If you are using a Microsoft account without a password it may not work.

You can check this by going to https://account.live.com/proofs/manage/additional

### 4. GitHub accounts

If you are using a GitHub account to log in, try setting a password for your Microsoft account. Then login with that password instead of your GitHub account.

### 5. Two-factor authentication

If you don't have two-factor authentication enabled, try enabling it. This can sometimes resolve login issues.

This can be done by going to https://account.live.com/proofs/manage/additional

### 6. Firewalls

Ensure that your firewall is not blocking the FTB App. You can try temporarily disabling your firewall to see if it resolves the issue or add an exception for the FTB App and Java.

## The above solutions did not work

If you are still having issues after trying the above solutions, here are some additional steps you can take:

### Revoke FTB App permissions

1. Go to https://account.live.com/consent/Manage
2. Make sure to login with the Microsoft account you are having issues with.
3. Find `FTB App` in the list then click `Edit` -> `Remove these permissions`.
4. Reopen the FTB App and try logging in again.

### Change your Microsoft account password

Go to https://account.live.com/password/change then change your password. After changing your password, try logging in to the FTB App again.

### VPN or Proxy

If you are using a VPN or proxy, try disabling it and then logging in again. Sometimes VPNs or proxies can interfere with the login process.

### DNS ad blockers/filters 

If you use a DNS ad blocker or filter such as AdGuard, Pi-hole, or NextDNS, try disabling it temporarily. These services can sometimes block the necessary connections for logging in.

---

## If you are still having issues

If you have tried all the above solutions and are still having issues logging in, please join our [Discord server](https://go.ftb.team/discord) and ask for help in the #app-support channel.

Make sure to provide as much information as possible about the issue you are experiencing, including any error messages you may have received and follow the instructions provided by the bot.
