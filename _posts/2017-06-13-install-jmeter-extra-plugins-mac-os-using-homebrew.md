---
layout: post
title: "How to Install JMeter With Extra Plugins on Mac OS Using HomeBrew"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

There are multiple approaches to installing JMeter on Mac OS. You can either do it manually just like we do in windows (i.e. downloading the binaries and executing the installer) or you can follow a more simplistic method to install JMeter via HomeBrew.

## Install JMeter on Mac OS With HomeBrew

**1.** Open a Mac Terminal, where we will be running all the commands.

**2.** First, check to see if HomeBrew is installed on your Mac by executing this command. You can either run `brew help` or `brew -v`

**3.** If HomeBrew is not installed, run the following command to install HomeBrew on Mac

    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

Once HomeBrew is installed, we can continue to install JMeter.

**4.** To install JMeter without the extra plugins, run the following command

    brew install jmeter

**5.** To install JMeter with all the extra plugins, run the following command

    brew install jmeter --with-plugins

**6.** Finally, verify the installation by executing `JMeter -v`

**7.** Run JMeter using `JMeter` which should load the JMeter GUI.