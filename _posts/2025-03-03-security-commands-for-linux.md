---
layout: post
title: "Security Commands for Linux"
date: 2025-03-03
---

# **Security Commands for Linux**

## 📂 **File and Directory Management**

Security teams often need to search logs, access files, and manage data for investigations.

|Command|Purpose|Example|
|---|---|---|
|`ls`|List files in a directory|`ls -la` (long format, includes hidden files)|
|`cat`|View file contents (e.g., logs)|`cat /var/log/auth.log`|
|`grep`|Search for keywords or patterns|`grep "Failed password" /var/log/auth.log`|
|`find`|Locate files based on criteria|`find /var/log -name "*.log"`|
|`tail`|View last few lines of a file (live logs)|`tail -f /var/log/syslog`|
|`cp`, `mv`, `rm`|Copy, move, and delete files|`cp file.txt /tmp/`|

---

## 📊 **Log Analysis and Monitoring**

These commands help analysts parse and review logs from various sources, such as system logs, firewall logs, and IDS/IPS alerts.

|Command|Purpose|Example|
|---|---|---|
|`journalctl`|View systemd logs (modern Linux distros)|`journalctl -xe`|
|`awk`|Text processing (great for parsing logs)|`awk '{print $5}' /var/log/syslog`|
|`sed`|Stream editor (modify text in files)|`sed 's/error/alert/g' /var/log/syslog`|
|`cut`|Extract fields from text|`cut -d' ' -f1-3 /var/log/auth.log`|
|`sort` & `uniq`|De-duplication and sorting|`cat auth.log|

---

## 🌐 **Network Analysis**

Analysts monitor network connections for suspicious activity (part of threat hunting).

|Command|Purpose|Example|
|---|---|---|
|`netstat`|Show network connections|`netstat -tuln` (listening ports)|
|`ss`|Faster socket statistics (replacing netstat)|`ss -tuln`|
|`ifconfig` / `ip`|Show network interface info|`ip a` (modern version of ifconfig)|
|`ping`|Check network reachability|`ping 8.8.8.8`|
|`traceroute`|Trace packet route to destination|`traceroute google.com`|
|`tcpdump`|Packet capture (CLI Wireshark)|`tcpdump -i eth0 port 80`|
|`whois`|Domain lookup|`whois example.com`|
|`dig`|DNS queries|`dig example.com`|

---

## 🔐 **User Management & Permissions**

Monitoring account changes and privilege escalations.

|Command|Purpose|Example|
|---|---|---|
|`who`|See logged-in users|`who`|
|`w`|See user activity|`w`|
|`last`|Review login history|`last`|
|`passwd`|Change passwords|`passwd user`|
|`sudo`|Run commands with elevated privilege|`sudo cat /etc/shadow`|

---

## 🚨 **System Security & Forensics**

Helpful for investigating incidents, suspicious files, and system integrity.

|Command|Purpose|Example|
|---|---|---|
|`ps`|Process monitoring|`ps aux`|
|`top` / `htop`|System resource monitoring|`htop`|
|`df`|Check disk space usage|`df -h`|
|`du`|Disk usage per directory/file|`du -sh /var/log`|
|`stat`|File metadata (timestamps, permissions)|`stat /etc/passwd`|
|`md5sum`, `sha256sum`|Hash file for integrity|`sha256sum suspiciousfile.bin`|
|`file`|Identify file type|`file malware_sample.exe`|
|`strings`|Extract readable text from binary|`strings malware_sample.exe`|
|`lsof`|List open files (used by processes)|`lsof -i`|

---

## 🔧 **Process & Service Analysis**

Investigate suspicious processes or services.

|Command|Purpose|Example|
|---|---|---|
|`systemctl`|Manage services (modern systems)|`systemctl status sshd`|
|`service`|Manage services (older systems)|`service sshd status`|
|`kill` / `pkill`|Terminate processes|`kill -9 <PID>`|

---

## 📡 **Remote Access & File Transfer**

Used in IR to collect artifacts from remote systems.

|Command|Purpose|Example|
|---|---|---|
|`ssh`|Secure shell access|`ssh analyst@remotehost`|
|`scp`|Secure file copy|`scp log.txt analyst@remotehost:/tmp/`|
|`rsync`|Efficient file syncing|`rsync -av /data /backup`|

---

## 📦 **Package & Tool Management**

Important for installing forensic tools (like Wireshark, Snort, etc.)

|Command|Purpose|Example|
|---|---|---|
|`apt`, `yum`, `dnf`|Install packages|`apt install wireshark`|
|`tar`|Archive extraction|`tar -xvf logs.tar.gz`|

---

## 🧰 **Security & Forensics-Specific Tools (Examples)**

These tools are usually installed via package managers, but used heavily:

|Tool|Purpose|
|---|---|
|`nmap`|Network scanning|
|`wireshark` / `tshark`|Packet capture and analysis|
|`clamav`|Open-source antivirus|
|`chkrootkit`|Rootkit detection|
|`lynis`|Security auditing|
|`auditctl` / `ausearch`|System auditing|

---

# 🔎 **Practical Scenarios for SOC Analysts**

Here are practical examples of these commands in action:

|Scenario|Command(s) Example|
|---|---|
|Investigate brute force SSH login|`grep "Failed password" /var/log/auth.log`|
|Check suspicious outbound connections|`netstat -anp|
|Hash files for evidence collection|`sha256sum /tmp/suspect_file`|
|Watch live log file for alerts|`tail -f /var/log/auth.log`|
|Scan open ports on remote server|`nmap -sV -Pn target-ip`|
|Capture network traffic for analysis|`tcpdump -i eth0 -w capture.pcap`|

---

# 🗂️ **Reference Materials**

- [Linux Command Line Basics - Cybersecurity Edition (Cybersecurity Guide)](https://linuxcommand.org/)
- SANS Linux Security Cheat Sheet
- [Cybersecurity Blue Team Linux Toolkit (GitHub)](https://github.com/trimstray/the-book-of-secret-knowledge)

---

# 💡 Pro Tip

If you want to practice, consider setting up a **home lab** using a SIEM like **Security Onion** (which runs on Linux) or build a detection pipeline with ELK (Elasticsearch, Logstash, Kibana) and ingest logs from Linux systems. This will simulate real SOC workflows.