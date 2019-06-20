---
layout: post
title: "How to Test Responsive Web Design"
author: Amir
categories: [ software testing ]
tags: [ testing fundamentals ]
image: assets/images/coming-soon.jpg
---

## Testing Responsive Web Design

[caption id="attachment_10607" align="aligncenter" width="550"]![testing-responsive-design](https://www.testingexcellence.com/wp-content/uploads/2015/03/testing-responsive-design.png) testing-responsive-design[/caption]

How do you test a responsive website? What are the challenges involved in testing websites in different devices? How is testing a website on a desktop monitor different from testing on a handheld device such as a mobile phone? What tools can we use to test responsive websites?

### <span style="color: #000000;">What is responsive web design?</span>

Responsive web design (RWD) is an approach to web design aimed at crafting sites to provide an optimal viewing experience—easy reading and navigation with a minimum of resizing, panning, and scrolling—across a wide range of devices (from desktop computer monitors to mobile phones).

A site designed with RWD adapts the layout to the viewing environment by using fluid, proportion-based grids, flexible images, and CSS3 media queries, an extension of the @media rule, in the following ways:

*   The fluid grid concept calls for page element sizing to be in relative units like percentages, rather than absolute units like pixels or points.

*   Flexible images are also sized in relative units, so as to prevent them from displaying outside their containing element.

*   Media queries allow the page to use different CSS style rules based on characteristics of the device the site is being displayed on, most commonly the width of the browser.

### <span style="color: #000000;">Challenges in testing responsive web design</span>

Many people nowadays use their mobile phones or tablets to access websites, so testing a responsive web design is important because the user experience on mobile devices is quite different from desktops.

Possibly the most challenging part of testing a responsive website is making sure the website works as expected on multiple devices and platforms, but actual testing on all the mobile devices in the market isn't practical for most of us.

Many testers who start testing responsive web design, they usually start by resizing the browser's window to fit the viewport or breakpoints sizes of a mobile phone, tablet, and desktop.

This technique is usually adequate for a quick visual check of the website in different viewports and helps us to identify major rendering issues as we shrink or enlarge the browser window.

However, testing on real mobile devices is a totally different experience as you now have gestures like finger swipes, tapping, pinch-to-zoom, portrait or landscape. Likewise, on desktops, you have hovering, right-clicking, mouse scrolls, etc.

Responsive design should take into consideration all these variances.

### Using Emulators

![testing-responsive-design-emulators](https://www.testingexcellence.com/wp-content/uploads/2015/03/testing-responsive-design-emulators.png)

A mobile emulator is a web-based simulation of how websites and applications will appear and function in a mobile environment.

**[You can download an Android Emulator from Google](http://developer.android.com/tools/help/emulator.html "Android Emulator")**

We all want to support as many devices as possible so, buying or using third-party services to gain access to real devices can be useful for seeing how a web application functions in “real world” conditions, but is significantly more expensive and more difficult to scale than using emulators.

While emulators can’t give you the exact testing facilities that you might need they are still powerful and a cost-effective solution to test a website’s functionality on a high-level, i.e. what works, and how the components squeeze, expand and adjust with varying screen size.

### Google DevTools - Device Mode

![google-device-mode](https://www.testingexcellence.com/wp-content/uploads/2015/03/google-device-mode-e1427733356213.png)

Google Chrome’s **[DevTools](http://sixrevisions.com/tutorials/devtools-tutorials/ "Google Chrome DevTools Tutorials")** has a feature called **device mode** that’s loaded with helpful tools for testing and debugging responsive designs.

Unlike most other responsive design testing tools which simply resize your viewport, device mode actually emulates the mobile device experience, particularly touchscreen interactions like tapping and swiping, right in your web browser.

The tools features are:

*   Test your responsive designs by **emulating different screen sizes and resolutions**, including Retina displays.

*   Evaluate your site's performance using the **network emulator**, without affecting traffic to other tabs.

*   Visualize and **inspect CSS media queries**.

*   Accurately **simulate device input** for touch events, geolocation, and device orientation.

*   Enhance your current debugging workflow by combining device mode with the existing DevTools.

**[Get started with Device Mode.](https://developer.chrome.com/devtools/docs/device-mode "device-mode") **

### Some General Rules for Testing Responsive Web Design

*   Text, controls and images are aligned properly

*   Hover and selection states highlight and color changes

*   Suitable clickable area

*   Color, shading, and gradient are consistent

*   Check for correct padding around the edges

*   Text, images, controls, and frames do not run into the edges of the screen

*   Font size, style and color are consistent for each type of text

*   Typed text (data entry) scrolls and displays properly

*   Pages should be readable on all resolutions.

*   Never visualize the horizontal bar in the page.

*   Content deﬁned ‘important’ need to be visible in all breakpoints.

**Breakpoints**

Each breakpoint requires an adaptation of the layout, with modules that change their position and rules. Another possibility is to have a ﬂuid layout, with text and images that ﬁt proportionately in relation to the width of the page.

**Modules**

Check for location of modules as you shrink and expand the browser window or as you rotate a mobile device. Different modules may disappear as you go from desktop to mobile, but make sure you know exactly which modules should be displayed in which viewport.

### Finally

*   Decide how your web application is used. You can get a great wealth of information from Google Analytics tool to see which devices your customers use to reach your website

*   From the analytics, narrow down your choice of device testing to target the majority, i.e. make sure your website works for majority of people as there is no practical way to test on every device combination.

*   Know exactly the breakpoints and what should appear as you go from one breakpoint to another

*   Utilize automated tools and emulators to do the basic checks and high-level functional testing and combine that with real device manual testing