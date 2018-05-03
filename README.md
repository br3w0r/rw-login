# RW.Login
Part of **ReWidgets** library to simplify account management with token authorization.
## Table of contents
- [Note](#note)
- [ToDo List](#todo-list)
- [Usage](#usage)
- [Latest changes](#latest-changes)
- [Help](#help)
## Note
This is a really raw version which lacks of functionallity and usability. For now, any changes could be made that break compatibility with other versions. I'll try to announce all of them in last changes section
## ToDo List
- [x] Log in form
- [ ] Sign up form
- [ ] Forgot password form
- [ ] Make convenient library look
- [x] Separate library and expamles
## Usage
For now, the widget has few functions at src/actions directory:
- **login(callback, creds)** - calls loginApi at src/Api/main.js, sends credentials (username and password) and talks with callback about success.
- **loginHandler(token)** - simple handler which sends **LOGIN** action to loginReducer at src/Reducers/main.
## Latest changes
- Almost complete remake: lib look, examples are now separated to [rw-login-example](https://github.com/br3w0r/rw-login-example)
## Help
Contact with me at br3w0r-concepts@outlook.com if you want to make ReWidgets better.
