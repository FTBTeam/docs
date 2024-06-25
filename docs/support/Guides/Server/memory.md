---
title: Memory Allocation
---

## How to change the amount of memory allocated to your server

To increase the memory allocated to your server, you will need to edit the `run.(sh|bat)` file.
You can open the `run.(sh|bat)` file with any text editor, such as Notepad or Notepad++.

:::tip
This is an example of what the last line in the `run.(sh|bat)` file looks like, the last line may look different to you, but it will always have the `-Xmx8192M` and `-Xms6144M` flags.
:::
Once you have the file open, you will want to scroll down to the very bottom line of the file where you will see something like this:
```sh
"jre/jdk-17.0.11+9-jre/Contents/Home/bin/java" -javaagent:log4jfix/Log4jPatcher-1.0.0.jar -XX:+UseG1GC -XX:+UnlockExperimentalVMOptions -Xmx8192M -Xms6144M @user_jvm_args.txt @libraries/net/neoforged/neoforge/20.4.237/unix_args.txt nogui
```

Don't worry, you don't need to understand what all of this means, you just need to know that the `-Xmx8192M` is the maximum amount of memory allocated to the server and the `-Xms6144M` is the initial amount of memory allocated to the server.

:::tip
You can use `M` for megabytes and `G` for gigabytes. For example, `-Xmx8192M` and `-Xmx8G` are the same.
:::

So to change the amount of memory allocated to the server, you will need to change the `-Xmx8192M` to the amount of memory you want to allocate to the server, if you are lowering the amount of memory allocated to the server, you will need to change both the `-Xmx8192M` and `-Xms6144M`

For example, if you want to allocate 4GB of memory to the server, you will need to change the `-Xmx8192M` to `-Xmx4096M` and the `-Xms6144M` to `-Xms4096M` or if you want to increase the amount of memory allocated to the server to 16GB, you will need to change the `-Xmx8192M` to `-Xmx16384M`
