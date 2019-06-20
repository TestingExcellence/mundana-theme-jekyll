---
layout: post
title: "How to Start Selenium Server with Java Code"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

When test automating a web application using Selenium, we have to start the Selenium server first, so that a new Selenium session is created to talk to the web browser. This can be either done manually, i.e. user running a command line to start the Selenium server, or to get the pure automation effect of Selenium, it is best to start the Selenium server via a program code. The code below is written in Java and starts the Selenium server when called. Normally this would be the first action within your main() function.

    package com.company;
    import org.openqa.selenium.server.RemoteControlConfiguration;
    import org.openqa.selenium.server.SeleniumServer;
    import com.thoughtworks.selenium.Selenium;
    import java.net.BindException;
    import java.net.ServerSocket;

    public class Server {

        public static SeleniumServer server;
        public static void startSeleniumServer() throws Exception {

            try {
                ServerSocket serverSocket = new ServerSocket(RemoteControlConfiguration.DEFAULT_PORT);
                serverSocket.close();
    //Server not up, start it
                try {
                    RemoteControlConfiguration rcc = new RemoteControlConfiguration();
                    rcc.setPort(RemoteControlConfiguration.DEFAULT_PORT);
                    server = new SeleniumServer(false, rcc);

                } catch (Exception e) {
                    System.err.println("Could not create Selenium Server because of: "
                            + e.getMessage());
                    e.printStackTrace();
                }
                try {
                    server.start();
                    System.out.println("Server started");
                } catch (Exception e) {
                    System.err.println("Could not start Selenium Server because of: "
                            + e.getMessage());
                    e.printStackTrace();
                }
            } catch (BindException e) {
                System.out.println("Selenium server already up, will reuse...");
            }
        }

        public static void stopSeleniumServer(Selenium selenium){
            selenium.stop();
            if (server != null)
            {
                try
                {
                    selenium.shutDownSeleniumServer();
                    server.stop();

                    server = null;
                }
                catch (Exception e)
                {
                    e.printStackTrace();
                }
            }
        }
    }

Another very simple and easy way to start selenium server inside the program, and if you are not bothered about setting specific port, just call these few lines in your program (before starting selenium session):

    SeleniumServer _server = new SeleniumServer();
    _server.boot();
    _server.start();
    _server.stop();