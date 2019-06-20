---
layout: post
title: "How to Download and Save Images with Selenium RC"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

In this tutorial we will take a look at how we can download and save images from a website using Selenium RC and Java.

If you want to know how to upload files and images to remote server, then please read **[How to Upload and Submit Files Using Selenium](http://testingexcellence.com/how-to-upload-files-using-selenium-and-autoit/)**

While Selenium is an excellent tool to run automated tests, it can also be used for information gathering from other websites and to download available materials.

Normally when you want to download an image from a website, you right click on the image and from the context menu choose the 'Save As' option. With Selenium the right click functionality is a bit difficult to implement.

The trick is to get Selenium to read the location of the image and then open another browser pointing to the full URL path of the image and then get Selenium to save the image by using the _CTRL_+_S_ keys combination.  
**Please note,** this will only work in **FireFox** and **Google Chrome** browsers. Internet Explorer does not call the 'Save As' dialog box by the _CTRL_+_S_ keys combination.

Once the 'Save As' dialog box is opened, a simple AutoIt script can be called to deal with the dialog.  
This simple script contains 2 lines:

    WinWaitActive("Save As")

    Send("{ENTER}") //this will just hit the enter key

_please read documentation on [AutoIt](http://www.autoitscript.com/autoit3/index.shtml) website to learn how to save the scripts as an executable file.  
_  
Sine the default selected button on the 'Save As' dialog box is 'Save' then we only need to "hit" the Enter key and the above AutoIt script sending an 'ENTER' command will hit the Enter key on the 'Save' button.

Once we have the executable of the above AutoIt script we can call it within the Java program.

In the below program, I have assumed that the selenium server is already running. If you want to see how to start selenium server in Java, then read **[How to Start Selenium Server With Java Code/](http://www.testingexcellence.com/how-to-start-selenium-server-with-java-code/)**

    import java.awt.Robot;
    import java.awt.event.KeyEvent;
    import com.thoughtworks.selenium.DefaultSelenium;
    import com.thoughtworks.selenium.Selenium;

    public class DownloadImage {
       public void getImage() throws Exception{
          String[] commands = new String[]{};
          String AutoItScriptpath = "c:testsaveImage.exe";
          commands = new String[]{AutoItScriptpath };
          Runtime.getRuntime().exec(commands);

          selenium = new DefaultSelenium("localhost", 4444,
          "googlechrome", "http://www.testingexcellence.com");
          selenium.start();
          selenium.open("/images/logo.jpg");
          selenium.windowMaximize();

          //native key strokes for CTRL and S keys
          Robot robot = new  Robot();
          robot.keyPress(KeyEvent.VK_CONTROL);
          robot.keyPress(KeyEvent.VK_S);
          robot.keyRelease(KeyEvent.VK_S);
          robot.keyRelease(KeyEvent.VK_CONTROL);
          //once the dialog box is displayed, the autoIt script
          //will fire off and send an Enter command.
       }
    }

The location of the download is usually the default folder that is used by the browser. Of course you can modify the AutoIt script to first type the desired location for the file to be saved before sending the Enter command.