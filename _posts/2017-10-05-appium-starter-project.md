---
layout: post
title: "Appium Starter Project - Step By Step Guide"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

In this Appium tutorial, we take a look at how to create a sample maven project to use for Mobile Test Automation using Appium with Java.

This is an Appium starter project for mobile automation testing for both native and web view. It uses a sample app (Wikipedia) on an android emulator to run a basic search test. The idea is to show how to write automated tests for a mobile app using Appium.

The project will automatically install the Wikipedia app on the virtual device which you will create in the following steps and then runs two search tests on the Wikipedia app.

*   **[How to create Test Automation Framework from scratch](https://www.testingexcellence.com/develop-test-automation-framework-scratch/)**
*   **[Opensource Mobile Test Automation Tools](https://www.testingexcellence.com/open-source-mobile-test-automation-tools/)**
*   **[Run Automated Mobile Tests on Multiple Devices](https://www.testingexcellence.com/browsersynch-synchronize-mobile-testing-on-multiple-devices/)**

### Appium Project Setup Requirements

As this is a Java-based starter project, you need to have Java 8 installed. You will also need to have Android SDK to be able to interact with the Android emulator.

You can clone this project from my Github repo

**[https://github.com/AmirGhahrai/appiumTests](https://github.com/AmirGhahrai/appiumTests)**

### Appium Project Setup

The instructions given here are for OSX

#### 1 - Install latest Android SDK

    https://developer.android.com/studio/install.html

#### 2 - The installer will install Android SDK in the following location

    /Users/<YOUR-USERNAME>/Library/Android/sdk

#### 3 - Edit your .bash_profile to have the following:

    export ANDROID_HOME=/Users/<YOUR-USERNAME>/Library/Android/sdk
    export ANDROID_SDK_ROOT=$ANDROID_HOME
    export JAVA_HOME=$(/usr/libexec/java_home)

    PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin
    PATH=$PATH:$ANDROID_SDK_ROOT/emulator
    PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
    PATH=$PATH:$JAVA_HOME/bin

**N.B.** Your .bash_profile should be in `~/.bash_profile`

If you don't have a .bash_profile then run this command to create it: `touch ~/.bash_profile`

To edit your .bash_profile run: `sudo nano ~/.bash_profile`

#### 4 - Install the latest platform tools by running the following command in a terminal

    sdkmanager "platform-tools" "platforms;android-26"

#### 5 - Download necessary packages

    sdkmanager "system-images;android-26;google_apis;x86"

#### 6 - Create an avd (Android Virtual Device) with a name TestAvd and device Nexus 5X

    avdmanager create avd -n TestAvd -k "system-images;android-26;google_apis;x86" -d "Nexus 5X"

#### 7 - Launch the emulator to see if everything is working

    emulator -avd TestAvd -skin 1440x2560

#### 8 - Now install Appium

    npm install -g appium

#### 9 - Start the Appium server by running the following command

    appium

#### 10 - Run the tests from the project root (where pom.xml resides)

    mvn clean test

**N.B. **To run the tests you need to clone the project from [https://github.com/AmirGhahrai/appiumTests](https://github.com/AmirGhahrai/appiumTests)