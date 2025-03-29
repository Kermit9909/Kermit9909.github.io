---
layout: single
title: "Top 5 Common Windows 10/11 Troubleshooting Tips for Beginners"
date: 2025-03-26
categories: [Windows]
tags: [Windows 10, Windows 11, Troubleshooting, Task Manager, Disk Cleanup, Troubleshooter, IT Support]
excerpt: "A practical guide addressing frequent Windows issues such as slow performance and update failures."
author: Sean Elggren
---

*By [Sean Elggren](https://www.linkedin.com/in/sean-m-elggren-3477271a5/), IT Enthusiast | March 27, 2025*

*A practical guide addressing frequent Windows issues, such as slow performance, update failures, no network connection, or missing drivers. This article focuses on using built-in tools like Task Manager, Disk Cleanup, Windows Restore, Device Manager and commands such as: sfc /scannow, ipconfig, and nslookup.*

---
This article is intended for anyone who is new to IT or just wanting to get there computer working to the best of its ability.  I started my IT journey a few years ago, and in hindsight I should have focused on Windows much more than I did at first. It is easy when studying for you Comptia A+ certification to get excited about Linux and all its amazing features -especially that it is free and open source- but the world runs on Windows, and there are a lot of cool features to learn.  Windows has a bunch of built-in tools—like Task Manager, Disk Cleanup, System Restore, and Device Manager.  Plus some incredibly useful CMD commands like `sfc /scannow`, `ipconfig`, and `nslookup`. Let’s walk through how to use these features and tools.

Picture this: your laptop’s chugging along slower than a Monday morning, and you’re wondering what’s eating up all the juice. That’s when I pull up **Task Manager**, my go-to for sniffing out troublemakers. Just hit `Ctrl + Shift + Esc`—bam, it’s open—or right-click the taskbar and pick it from the menu.

![Task Manager Screenshot](/assets/images/winblog/taskmanager.png)



 Once you’re in, head to the Processes tab and click the headers for CPU, Memory, or Disk to see who’s hogging what. If some random app’s guzzling 80% of your RAM, right-click it and hit *End Task*. Just don’t mess with stuff like *Windows Explorer* or *System*—those are the good guys keeping things running. Want to geek out more? [Microsoft’s Task Manager guide](https://learn.microsoft.com/en-us/shows/inside/task-manager) has the nitty-gritty.

---

Now, if your PC feels like it’s drowning in digital clutter, **Disk Cleanup** is your broom and dustpan. I’ve let temporary files and old update leftovers pile up before—oops—and this tool sweeps them away. Press `Win + R`, type ```cmd cleanmgr ```, and hit Enter. Pick your main drive (usually `C:`), check off things like *Temporary Files* or *Recycle Bin*, and let it rip with *OK* and *Delete Files*. Bonus tip: run it as Administrator (right-click Command Prompt, choose *Run as Administrator*) to unlock extra cleanup power. Curious about the details? [Microsoft’s Disk Cleanup page](https://support.microsoft.com/en-us/windows/free-up-drive-space-in-windows-85529ccb-c365-490d-b548-831022bc9b32) breaks it down.

---

Ever had Windows Update throw a tantrum and refuse to finish? Been there. That’s when I turn to **System Restore** to rewind the clock to happier times. Search *System Restore* in the Start menu, click *Create a restore point*, then hit the *System Restore* button. Pick a date before the update madness started, follow the prompts, and let your PC reboot to a better yesterday. It won’t touch your files, but it might zap recent apps, so heads up. If you’re wondering how it all works, [Microsoft’s System Restore guide](https://support.microsoft.com/en-us/windows/use-system-restore-to-recover-your-pc-0d3e9708-4e5e-4c1e-9f9e-8e6d8f7e8f8d) is a solid read.

---

Then there’s the dreaded “No Internet” icon staring at you. When my Wi-Fi drops, I head straight to **Command Prompt** for some quick fixes. Open it as Administrator (search *cmd*, right-click, *Run as Administrator*), and try this trio:  
```cmd
ipconfig /release
ipconfig /renew
ipconfig /flushdns