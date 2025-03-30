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
This article is intended for anyone who is new to IT or just wanting to get there computer working to the best of its ability.  I started my IT journey a few years ago, and in hindsight I should have focused on Windows much more than I did at first. It is easy when studying for your Comptia A+ certification to get excited about Linux, and all its amazing features -especially that it is free and open source- but the world runs on Windows. However, Windows has stepped its game up over the last couple years and there are a lot of cool features to learn.  Windows has a bunch of built-in tools—like Task Manager, Disk Cleanup, System Restore, and Device Manager.  Plus some incredibly useful CMD commands like ***sfc /scannow***, ***ipconfig***, and ***nslookup***. Let’s walk through how to use these features and tools.

# 1. Task Manager

Picture this: your laptop’s chugging along slower than a Monday morning, and you’re wondering what’s eating up all the juice. That’s when I pull up **Task Manager**, my go-to for sniffing out troublemakers. Just hit ***Ctrl + Shift + Esc***—bam, it’s open—or right-click the taskbar and pick it from the menu.

![Task Manager Screenshot](/assets/images/winblog/taskmanager.png)

Ok, let's talk about a few important features in Task Manager.

So **Processes** is the first tab that will pop up and it gives you a clear picture of what's going on with your system.  You can click at the top of each column (CPU, Memory, Disk, Network) to see what is consuming the most resources of each. 

### When you need to use Processes:

 * Most common is troubleshooting a ***frozen application***:  `Right Click` the application line and `End Task`. 
 * When you need to get an overview of the the system quickly.

 **Performance**is an amazing visual of the percentages you saw in Processes.  It gives real time computational statistics in a bar graph style that is easy to understand.  This is great to open up when you start your computer so you can see it in action.  When I can hear my computer running I like to go to Performance to see the statistics.  I have been that guy who has downloaded a malicious linux iso file.  I would here my computer just running like crazy, and Task Manager helped me see that my CPU would just start throttling for no reason.  After putting the pieces of the puzzle together I realized that I probubly had malware on my computer so I took appropriate action.  Also, if you are getting into running LLMs with Ollama, just pick a model that has roughly 7 billion or more parameters (for my laptop at least) and watch it just max out your CPU!!!!!

### When you need to use Performance

 * Check CPU usage, uptime, speed, and specs
 * Find out how much memory the system has, how much in use, cached and hardware form factors.
 * Disk transfer rate and capacity
 * Ethernet IPv4 / IPv6 addresses, performance, transfer rates.
 * Wi-Fi throughput in real-time, network adapter info, connection type, and IP addresses.
 * Check the GPU (Ollama!) how much, and driver versions.

### What is ***App History*** about, and will I ever use it? 

Good question, I have never had to use App History personally.  However, it's possible that IT technician would want to use the App History tab in Task Manager on Windows to monitor resource usage by apps over time. Mostly, for troubleshooting performance issues, identifying apps that consume excessive CPU, memory, or network resources, and diagnosing why a system might be running slowly. 

### Lets move on...

The ***Users*** tab in Task Manager is a quick way to see who’s logged in, and how much CPU, memory, or disk they’re hogging —perfect for spotting a resource hog in a shared system. 

The ***Details*** tab dives deeper, listing every process with PIDs and user accounts, letting you kill a stubborn app or confirm what’s running where. 

Lastly, the ***Services*** tab shows background system tasks (like Windows Update), offering stop/start options without leaving the window. Sure, you could get more detailed user info from Computer Management, troubleshoot processes better with Resource Monitor, or manage services via the Services.msc app—but Task Manager’s magic is having it all in one spot. No need to bounce around when you’re in a pinch!

Check out this quick video, [Microsoft’s Task Manager guide](https://learn.microsoft.com/en-us/shows/inside/task-manager) for more info.

# 2. Device Manager

 For hardware troubleshooting, though, Device Manager still is the go to.  Just type Device Manager in the search bar from the desktop, or go to 

 When your PC starts acting like it’s forgotten how to talk to its own hardware, Device Manager is your go-to troubleshooter. I’ve had a printer vanish or . Hit Win + X and select Device Manager from the menu. Look for yellow triangles marking trouble (like a driver gone AWOL), right-click to update drivers, roll them back, or disable a glitchy device. 

Bonus tip: refresh the view with Action > Scan for hardware changes if something’s not showing up. Want the full scoop? Microsoft’s [Device Manager](https://learn.microsoft.com/en-us/windows-hardware/drivers/install/using-device-manager) guide has you covered.






[Microsoft’s Task Manager guide](https://learn.microsoft.com/en-us/shows/inside/task-manager) has the nitty-gritty.

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


