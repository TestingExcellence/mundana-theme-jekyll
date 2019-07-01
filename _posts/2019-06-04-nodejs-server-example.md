---
layout: page-sidebar
title:  "Node.js - Hello World HTTP Server Example"
author: Amir
categories: [ node.js, tutorials ]
image: assets/images/nodejs-server-hello-world.png
---

In this example we'll show how to create an HTTP server using Node.js. The server will listen on port 1337, and will send `Hello, World!` to the browser upon a GET request.

<!--more-->

Note that, instead of using port 1337, you can use any port number of your choice which is currently not in use by any other service.

The http module is a Node.js **core module** (a module included in Node.js's source, that does not require installing additional resources). 

The `http` module provides the functionality to create an HTTP server using the `http.createServer()` method. 

To create the application, create a file containing the following JavaScript code.

```javascript
const http = require('http'); // Loads the http module 

http.createServer((request, response) => {
    
    // 1. Tell the browser everything is OK (Status code 200), and the data is in plain text
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    // 2. Write the announced text to the body of the page
    response.write('Hello, World!\n');

    // 3. Tell the server that all of the response headers and body have been sent
    response.end();

}).listen(1337); // 4. Tells the server what port to be on
```

Save the file with any file name. In this case, if we name it `hello.js` we can run the application by going to the directory the file is in and using the following command:

```bash
node hello.js
```

The created server can then be accessed with the URL `http://localhost:1337` or `http://127.0.0.1:1337` in the browser.

A simple web page will appear with a `Hello, World!` text at the top, as shown in the screenshot below:

![Node.js Server Example]({{ site.baseurl }}/assets/images/nodejs-hello-world-http-server.png)