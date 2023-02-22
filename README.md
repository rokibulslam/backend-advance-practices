### What is NodeJS?
NodeJs is server runtime. Using nodeJs we can run javascript on the server side. It has its own library called NPM. Node Js is a platform that provides server-side feature to javascript.

### NodeJS Module:
* Core Modules
    http, url, querystring, path, fs, util, etc.
* Local Modules
    Created by us
* Third Party Modules
    Created by others

### Create first node Server
### HTTP Request-Response model
Client Computer ==> Request ==> Server
Server ==> Response ==> Client Computer
HTTP Basic Request Methods:
* GET()
* POST()
* DELETE()
* PUT()
* OPTION()
* HEAD()

Response Has two Parts:
* Response Status Code
    200 == OK
    201 == Created
    400 == Bad Request => The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
    500 == Internal server Error=> The server has encountered a situation it does not know how to handle.
    [MoreCode..](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

* Response Data has Two parts:
    1. Head(for sensitive Data: User password)
    2. Data(Normal Data). It can be JASON, string etc.

### HTTP Client
 HTTP client is a software application/library/module that sends http request to a server over HTTP protocol and server response back to the client, which can be displayed to the user or application.
Exapmple of HTTP Client:
* Axios (Javascript)
* Fetch (Javascript)
* Jquery Ajax  (Javascript)
* Postman for Testing build with electron js
* Fiddler for testing
* cURL
* Retrofit
etc
### Package.json : Information of the application
package.json is a file that is used in Node.js-based projects to define various properties of the project, including its name, version, dependencies, scripts, and other metadata. It is a key part of the Node.js ecosystem and is used to manage packages and dependencies for a project.

Create package.json
```
npm init
```
or 
```
npm init --y
```
### JSON Best Practices

