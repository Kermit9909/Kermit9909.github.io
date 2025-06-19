---
layout: single
title: "Security Commands for Linux"
date: 2025-03-03
categories: [Linux, Security]
tags: [Linux, Security Tools, SOC, Blue Team, Command Line]
excerpt: "A quick, practical walkthrough of the most useful Linux security and forensic commands for analysts and students."
author: Sean Elggren
---

*By [Sean Elggren](https://www.linkedin.com/in/sean-m-elggren-3477271a5/)*

---

When I first started learning cybersecurity, I kept seeing long Linux commands in forums and books, but I had no idea what most of them did. Over time, I realized that knowing these commands is like having a toolbox for everything from log analysis to threat hunting.

This isn’t meant to be a Linux manual. It’s a practical walkthrough of the commands I’ve actually used — or at least practiced — as I’ve studied for my Security+ and explored SOC tools.

Here’s a breakdown of what I’ve found most useful in different areas of security work.

---

## File and Directory Basics (Because You’ll Use These Constantly)

Let’s start with the basics. If you're checking logs, chasing indicators of compromise, or investigating odd system behavior, you're probably poking around files and directories.

- `ls -la`  
  Lists everything in the directory, including hidden files.

- `cat /var/log/auth.log`  
  Prints the contents of a file. Great for skimming logs.

- `grep "Failed password" /var/log/auth.log`  
  Filters for lines that match a keyword. Very useful when digging into SSH failures or brute force attempts.

- `find /var/log -name "*.log"`  
  Locates files that match a pattern.

- `tail -f /var/log/syslog`  
  Streams the bottom of a log file live — super handy for watching real-time activity.

- `cp`, `mv`, `rm`  
  Copy, move, and delete files — just be careful with `rm`, especially as root.

---

## Log Analysis: The Daily Grind in a SOC

Reading logs is what most SOC analysts spend a lot of time doing. These commands help sort through the noise.

- `journalctl -xe`  
  Shows recent system logs on distros that use systemd.

- `awk '{print $5}' /var/log/syslog`  
  Pulls specific fields from a file.

- `sed 's/error/alert/g' /var/log/syslog`  
  Replaces words in a file (good for redacting or reformatting).

- `cut -d' ' -f1-3`  
  Grabs selected columns — great for timestamps and IPs.

- `sort | uniq`  
  Combines with other commands to clean up repeated lines or count events.

---

## Network Monitoring and Threat Hunting

If you're tracking suspicious traffic or investigating connections, this is your toolkit.

- `netstat -tuln` or `ss -tuln`  
  Shows open/listening ports.

- `ip a`  
  Displays all IP addresses and interfaces.

- `ping 8.8.8.8`  
  Simple connectivity check.

- `traceroute google.com`  
  Maps the path packets take — useful for investigating delays or routing anomalies.

- `tcpdump -i eth0 port 80`  
  Captures packets on a given interface and port. Great CLI alternative to Wireshark.

- `whois`, `dig`  
  Domain info and DNS troubleshooting.

---

## User and Account Activity

You’ll use these when looking into user behavior or privilege abuse.

- `who`, `w`  
  See who’s logged in and what they’re doing.

- `last`  
  View login history.

- `passwd user`  
  Change a user's password.

- `sudo`  
  Run a command with root privileges.

---

## System Security and Forensics Commands

Dig into system integrity, check disk usage, and validate files.

- `ps aux`, `top`, `htop`  
  See what's running and using CPU/memory.

- `df -h`, `du -sh`  
  Check disk space and folder sizes.

- `stat /etc/passwd`  
  Get timestamps and permissions on a file.

- `md5sum`, `sha256sum`  
  Verify file integrity — crucial in malware investigations.

- `file`, `strings`  
  Identify file types and extract human-readable text from binaries.

- `lsof -i`  
  Lists open files or network connections.

---

## Services and Process Analysis

Some processes hide as services, so these are great for checking their status.

- `systemctl status sshd`  
  For modern systems using systemd.

- `service sshd status`  
  For older systems.

- `kill -9 <PID>`  
  Forces a process to stop. Use with care.

---

## Remote Access and File Transfer

These are great for incident response or pulling logs from a compromised machine.

- `ssh analyst@remotehost`  
  Connect to a remote system securely.

- `scp log.txt analyst@remotehost:/tmp/`  
  Securely copy files between systems.

- `rsync -av /data /backup`  
  Sync files or directories — useful for backups.

---

## Installing Tools and Unpacking Logs

Most tools you'll use in security come from packages or tar files.

- `apt install wireshark`  
  Install software on Debian-based systems.

- `tar -xvf logs.tar.gz`  
  Extract compressed log archives.

---

## Some Security-Specific Tools I Recommend Trying

These aren't installed by default, but they’re essential:

- `nmap`  
  Port scanning and network discovery.

- `tshark`  
  Terminal version of Wireshark.

- `clamav`  
  Free antivirus scanner.

- `chkrootkit`  
  Detects known rootkits.

- `lynis`  
  Security auditing tool.

- `auditctl`, `ausearch`  
  Audit log control and searching.

---

## A Few Real-World Examples

Let’s make it practical.

- Investigate SSH brute force attempts:  
  `grep "Failed password" /var/log/auth.log`

- Look for outbound connections:  
  `netstat -anp`

- Hash a file before collecting it as evidence:  
  `sha256sum /tmp/suspect_file`

- Watch log entries live during an event:  
  `tail -f /var/log/auth.log`

- Scan for open ports:  
  `nmap -sV -Pn target-ip`

- Capture raw network traffic:  
  `tcpdump -i eth0 -w capture.pcap`

---

## Want to Practice?

If you want to try these in a real environment, spin up a home lab. Tools like **Security Onion** or a DIY ELK Stack are great for ingesting and visualizing logs from Linux systems.

---

## More Resources

- [Linux Command Line Basics - Cybersecurity Edition](https://linuxcommand.org/)
- SANS Linux Security Cheat Sheet
- [The Book of Secret Knowledge on GitHub](https://github.com/trimstray/the-book-of-secret-knowledge)

---

This list isn’t everything, but it’s more than enough to get started or build some confidence in a SOC-like environment. Whether you're studying for certs or just exploring what Linux can do, keep a terminal open and start typing.

If you’ve got other go-to commands, let me know. I’m still learning every day too.