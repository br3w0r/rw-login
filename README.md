# RW.Login
Part of **ReWidgets** library to simplify account management with token authorization.
## Table of contents
- [Note](#note)
- [ToDo List](#todo-list)
- [Usage](#usage)
  * [Last look](#last-look)
- [Latest changes](#latest-changes)
- [Help](#help)
## Note
This is a really raw version which lacks of functionality and usability. For now, any changes could be made that break compatibility with other versions. I'll try to announce all of them in last changes section
## ToDo List
- [x] Log in form
- [ ] Sign up form
- [ ] Forgot password form
- [ ] Make convenient library look
- [x] Separate library and expamles
## Usage
### Installation
Go to your dev directory and run:
```
npm i rw-login -D
```
It should install rw-login in ```node_modules``` folder.
To import functions you need, simply declare it in .js file:
```javascript
import {login, loginHandler} from 'rw-login'
```
For now, the widget **needs to be built with bundling tool** (webpack is recommended) and has few functions at ```index.js```:
### login(apiAuthUrl, callback, creds)
Calls **loginApi(apiAuthUrl, creds)** at ```Api/main.js```, sends credentials (username and password) and talks with callback about success.
If authorization succeed, **login()** sends ```{token: <token>}``` to callback as **body** argument.
### loginHandler(token)
Simple handler that sends ```{token: <token>}``` to **localStorage**
### callback function
This function must have **success** as first argument **without** default state and and **body with** default state:
```javascript
function callback(success, body={}) {
    if (success) {
        //Handle body as you want. The easiest way is shown below.
        loginHandler(body.token);
    } else {
        //What to do if authorization failed.
    }
}
```
### loginApi(apiAuthUrl, creds)
Uses credentials from **creds** argument and sends them in body of the **fetch** with POST method to ```window.origin + apiAuthUrl```:
```javascript
const fetchInit = {
    method: 'POST',
    headers: new Headers({
        "Content-Type": "application/json"
    }),
    body: JSON.stringify({
        "username": creds.username,
        "password": creds.password
    })
};
const response = await fetch(window.origin + apiAuthUrl, fetchInit);
```
As you can see, it's **necessary** to use ```/``` in the first position of **apiAuthUrl** argument. It's also more safely to use ```/``` in the end, too.
### Last look
```javascript
function callback(success, body={}) {
    if (success) {
        loginHandler(body.token);
    } else {
        console.log("FAILURE!");
    }
}

const creds = {
    username: "admin",
    password: "admin123"
}

login("/token-auth/", callback, creds);
```
## Latest changes
- Almost complete remake: lib look, examples are now separated to **[rw-login-example](https://github.com/br3w0r/rw-login-example)**.
## Help
Contact with me at br3w0r-concepts@outlook.com if you want to make ReWidgets better.
