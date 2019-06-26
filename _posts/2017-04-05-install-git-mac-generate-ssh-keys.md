---
layout: post
title: "How to Install Git on Mac and Generate SSH Keys"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

In this step-by-step Git Tutorial, we will go through how to install Git on a Mac machine, how to generate SSH keys and upload your public SSH key to your GitHub account for authorization.

## How to Install Git on Mac

<span style="font-weight: 400;">Open a terminal and type</span>

    $ brew install git

This will install Git on your system. To confirm the installation, type

    $ git --version

This will print the version of Git installed on your machine.

## **How to generate SSH key for GitHub authorization**

1.  <span style="font-weight: 400;">Open a terminal</span>
2.  <span style="font-weight: 400;">Go to your home directory by typing cd ~/</span>
3.  <span style="font-weight: 400;"><span style="font-weight: 400;">Type the following command</span></span>

        $ ssh-keygen -t rsa

    *   <span style="font-weight: 400;">This will prompt you to enter a filename to store the key</span>
    *   <span style="font-weight: 400;">Just press enter to accept the default filename (/Users/you/.ssh/id_rsa)</span>
    *   <span style="font-weight: 400;">Then it will ask you to create a passphrase. This is optional, either create a passphrase or press enter for no passphrase</span>
4.  <span style="font-weight: 400;">When you press enter, two files will be created</span>
    *   <span style="font-weight: 400;">`~/.ssh/id_rsa`</span>
    *   <span style="font-weight: 400;">`~/.ssh/id_rsa.pub`</span>
5.  <span style="font-weight: 400;">Your public key is stored in the file ending with .pub, i.e. `~/.ssh/id_rsa.pub`</span>

## How to access and copy public SSH key

In order to authenticate yourself and your device with GitHub, you need to upload your public SSH key which you generated above to your GitHub account.

**Copy public SSH key**

Open a terminal and type

    $ pbcopy < ~/.ssh/id_rsa.pub

This will copy the contents of the id_rsa.pub file to your clipboard.

## **How to upload your public SSH key to GitHub**

1.  Once you have copied your public SSH key, login to your GitHub account and go to
2.  [<span style="font-weight: 400;">https://github.com/settings/profile</span>](https://github.com/settings/profile)
3.  On the left-hand side menu, you will see a link "SSH and GPG keys"
4.  Click on that link which will take you to a page where you can enter your public SSH key that you copied earlier.
5.  Click the button which says ‘New SSH key’
6.  Then enter a title name - can be anything, e.g. newMac
7.  Paste the public SSH key in the key textbox
8.  Click “Add SSH key”

**Test your GitHub authorization:**

Open a terminal and type

    $ git clone git@github.com:AmirGhahrai/Rima.git

1.  It will ask you if you want to continue to connect, type yes
2.  If you created a passphrase when you were generating the public key, then it will ask you to enter it.
3.  Enter your passphrase and press enter.
4.  It will then start to clone the project to your directory.

<span style="font-weight: 400;">You are all now set up to use Git and GitHub.</span>

**Further reading:**

*   **[Git Cheatsheet - Common Git Commands](https://www.testingexcellence.com/git-cheat-sheet-git-commands-testers/)**
*   [**How to uninstall IntelliJ from Mac OS**](https://www.testingexcellence.com/uninstall-intellij-mac-os/)
*   **[How to install JMeter with Extra Plugins on Mac OS](https://www.testingexcellence.com/install-jmeter-extra-plugins-mac-os-using-homebrew/)**