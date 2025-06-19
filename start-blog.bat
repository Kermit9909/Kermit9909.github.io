@echo off
cd /d "%~dp0"
echo ===============================
echo Launching your Jekyll blog...
echo Site will be available at:
echo http://localhost:4000
echo ===============================
bundle exec jekyll serve
pause
