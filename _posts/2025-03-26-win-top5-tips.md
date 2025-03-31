---
layout: single
title: "Top 5 Common Windows 10/11 Troubleshooting Tips for Beginners"
date: 2025-03-26
categories: [Windows]
tags: [Windows 10, Windows 11, Troubleshooting, Task Manager, Disk Cleanup, Troubleshooter, IT Support, Beginners]
excerpt: "A practical guide addressing frequent Windows issues such as slow performance and update failures."
author: Sean Elggren
---

*By [Sean Elggren](https://www.linkedin.com/in/sean-m-elggren-3477271a5/), IT Enthusiast | March 27, 2025*

###### A practical guide addressing frequent Windows issues, such as slow performance, update failures, no network connection, or missing drivers. This article focuses on using built-in tools like Task Manager, Disk Cleanup, Windows Restore, Device Manager and commands such as: sfc /scannow, and ipconfig.

---
This article is intended for anyone who is new to IT or just wanting to get their computer working to the best of its ability.  I started my IT journey a few years ago, and in hindsight I should have focused on Windows much more than I did at first. It is easy when studying for your CompTIA A+ certification to get excited about Linux, and all its amazing features -especially that it is free and open source- but the world runs on Windows. However, Windows has stepped its game up over the last couple years and there are a lot of cool features to learn.  Windows has a bunch of built-in tools—like Task Manager, Disk Cleanup, System Restore, and Device Manager.  Plus some incredibly useful CMD commands like ***sfc /scannow***, and ***ipconfig***. Let’s walk through how to use these features and tools.

# 1. Task Manager

Picture this: your laptop’s chugging along slower than a Monday morning, and you’re wondering what’s eating up all the juice. That’s when I pull up **Task Manager**, my go-to for sniffing out troublemakers. Just hit ***Ctrl + Shift + Esc***—bam, it’s open—or right-click the taskbar and pick it from the menu.

![Task Manager Screenshot](/assets/images/winblog/taskmanager.png)

Ok, let's talk about a few important features in Task Manager.

So **Processes** is the first tab that will pop up and it gives you a clear picture of what's going on with your system.  You can click at the top of each column (CPU, Memory, Disk, Network) to see what is consuming the most resources of each. 

### When you need to use Processes:

 * Most common is troubleshooting a **frozen application**:  **<Right-Click>** the application line and **End Task**. 
 * When you need to get an overview of the the system quickly.

 **Performance** is an amazing visual of the percentages you saw in Processes.  It gives real time computational statistics in a bar graph style that is easy to understand.  This is great to open up when you start your computer so you can see it in action.  When I can hear my computer running I like to go to **Performance** to see the statistics.  I have been that guy who has downloaded a malicious linux iso file.  I would here my computer just running like crazy, and Task Manager helped me see that my CPU would just start throttling for no reason.  After putting the pieces of the puzzle together I realized that I probably had malware on my computer so I took appropriate action.  Also, if you are getting into running LLMs with [Ollama][1], just pick a model that has roughly 7 billion or more parameters (for my laptop at least) and watch it just max out your CPU!!!!!

 [1]: https://ollama.com/search

### When you need to use Performance

 * Check CPU usage, uptime, speed, and specs
 * Find out how much memory the system has, how much in use, cached and hardware form factors.
 * Disk transfer rate and capacity
 * Ethernet IPv4 / IPv6 addresses, performance, transfer rates.
 * Wi-Fi throughput in real-time, network adapter info, connection type, and IP addresses.
 * Check the GPU (Ollama!) how much, and driver versions.

### What is **App History** about, and will I ever use it? 

Good question, I have never had to use App History personally.  However, it's possible that in a corporate environment would want to use the **App History** tab in Task Manager on Windows to monitor resource usage by apps over time. Mostly, for troubleshooting performance issues, identifying apps that consume excessive CPU, memory, or network resources, and diagnosing why a system might be running slowly. 

### Lets move on...

The ***Users*** tab in Task Manager is a quick way to see who’s logged in, and how much CPU, memory, or disk space they’re hogging —perfect for spotting a resource hog in a shared system. 

The ***Details*** tab dives deeper, listing every process with PIDs and user accounts, letting you kill a stubborn app or confirm what’s running where. 

Lastly, the ***Services*** tab shows background system tasks (like Windows Update), offering stop/start/restart options without leaving the window. However, if you **<Right-Click**> the service you can open it in Window's designated **Services** setting (services.msc)

![Services Screenshot](/assets/images/winblog/services.png)

Check out this quick video, [Microsoft’s Task Manager guide](https://learn.microsoft.com/en-us/shows/inside/task-manager) for more info.

# 2. Device Manager

 For hardware troubleshooting, though, Device Manager still is the go to.  Just type Device Manager in the search bar from the desktop, or go to acces it by typing `devmgnt.msc` into the run command window.

 I once had my little brother sync his Meta Quest headset to my mother's PC and it completely took over the audio inputs and ouputs controls.  My mother had an interview for a job and she asked me why she could not get audio and video to work on her PC.  So, I went to ***Device Manager*** as uninstalled all the Meta devices.  However, Meta removed her 'Microphone Array (Realtek(R) Audio) and Speaker (Realtek(r) Audio) for Device Manager!  Needless to say, this took some Windows troubleshooting skills and I was grateful for my training for my A+ cert.  I would have to go into ***Control Panel*** and enable all the devices from their so they would be recognized by device manager again.   

 ![Device Manager Screenshot](/assets/images/winblog/devicemanager.png)

Bonus tip: Refresh the view with Action > Scan for hardware changes if something’s not showing up. Want to learn more? Microsoft’s [Device Manager](https://learn.microsoft.com/en-us/windows-hardware/drivers/install/using-device-manager) guide has you covered.


Now, if your PC feels like it’s drowning in digital clutter, **Disk Cleanup** is your broom and dustpan. I’ve let temporary files and old update leftovers pile up before—oops—and this tool sweeps them away. Press **<Win + R**>, type ```cmd cleanmgr ```, and hit Enter. Pick your main drive (usually `C:`), check off things like *Temporary Files* or *Recycle Bin*, and let it rip with *OK* and *Delete Files*. Bonus tip: run it as Administrator (right-click Command Prompt, choose *Run as Administrator*) to unlock extra cleanup power.

![Disk Cleanup Pic](/assets/images/winblog/diskcleanup.png)

Also, it is always good to check the Window's system files to make sure they are all working properly.  Windows has a system file checker command that will repair damaged Windows files.  These are the core operating system files, not applications.  Try this command:

![SFC Scan Now](/assets/images/winblog/sfcscannow.png)


 Curious about the details? [Microsoft’s Disk Cleanup page](https://support.microsoft.com/en-us/windows/free-up-drive-space-in-windows-85529ccb-c365-490d-b548-831022bc9b32) breaks it down.
 Windows System File Checker Info: [Windows SFC](https://support.microsoft.com/en-us/topic/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system-files-79aa86cb-ca52-166a-92a3-966e85d4094e)


---

Ever had Windows Update throw a tantrum and refuse to finish? Been there. That’s when I turn to **System Restore** to rewind the clock to happier times. Search *System Restore* in the Start menu, click *Create a restore point*, then hit the *System Restore* button. Pick a date before the update madness started, follow the prompts, and let your PC reboot to a better yesterday. It won’t touch your files, but it might delete recent apps, so heads up.

![Restore Point](/assets/images/winblog/restorepoint.png)

If you’re wondering how it all works, [Microsoft’s System Restore guide](https://support.microsoft.com/en-us/windows/use-system-restore-to-recover-your-pc-0d3e9708-4e5e-4c1e-9f9e-8e6d8f7e8f8d) is a solid read.

Then there’s the dreaded “No Internet” icon staring at you. When my Wi-Fi drops, I head straight to **Command Prompt** for some quick fixes. Open it as Administrator (search *cmd*, right-click, *Run as Administrator*), and try this:  

```cmd
ipconfig /release
```
```cmd
ipconfig /renew
```

This will enable your DHCP server to issue you a new IP address.  However, most internet browser isues are DNS related and the ***ipconfig** command has other options to address this as well.  Try:

```cmd
ipconfig /flushdns
```
```cmd
ipcofig /registerdns
```
This will clear DNS caches, and usually works really well for browser issues.

Of, course you can go simple as well.  **<Right-Click>** the Wi-Fi connection you are connected to and click **Forget** resign in and this will establish a new connection. 

![Forget Connection](/assets/images/winblog/forgetconnection.png)

 Also, if you are having real issues go to **Control Panel** > **Network and Internet** > **Network Connections**, <Right-Click> your internet adapter and **Disable** than **Enable** to reset the network adapter.  

![Disable Adapter](/assets/images/winblog/adapter.png)



