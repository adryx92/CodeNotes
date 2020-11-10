@ECHO off

echo # Creating Executable in 'dist' directory ...
@REM use "-i icon.ico" to specify an icon for the executable
pyinstaller -F GetPrice.py > output.log 2>&1

echo # Cleaning up
del output.log
del GetPrice.spec
rmdir /s /q __pycache__
rmdir /s /q build