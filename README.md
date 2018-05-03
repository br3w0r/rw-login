# RW.Login
Part of **ReWidgets** library to simplify account management with token authorization.
## Table of contents
- [Note](#note)
- [ToDo List](#todo-list)
- [Usage](#usage)
- [Example](#example)
- [Help](#help)
## Note
This is a really raw version which lacks of functionallity and usability. For now, any changes could be made that break compatibility with other versions. I'll try to announce all of them in last changes section
## ToDo List
- [x] Log in form
- [ ] Get rid of react part
- [ ] Sign up form
- [ ] Forgot password form
- [ ] Make convenient library look
- [ ] Separate library and expamles
## npm commands
  **Please, note**, that these commands may be changed or even deleted during development process.
  - **start** - build webpack at dist directory without massive compressions. Useful for debugging.
  - **build** - build webpack at dist directory with compressions. 
## Usage
For now, the widget has few functions at src/actions directory:
- **login(callback, creds)** - calls loginApi at src/Api/main.js, sends credentials (username and password) and talks with callback about success.
- **loginHandler(token)** - simple handler which sends **LOGIN** action to loginReducer at src/Reducers/main.
### Callback function
This function is sent to the **login()** function to handle the login process:
```javascript
function callback(success, body={}) {
  if (success) {
    //handle if login success
  } else {
    //hendle if login fails
  }
}
```
As you can see, body argument isn't neccessary in case of failure.
## Example
Make sure that you installed **python>=3.4** and **requirements** with requirements.txt file in **rw_login_backend**:
```bash
pip install -r requirements.txt
```
Then, start djnago developer server:
#### Windows cmd
```
py manage.py runserver
```
#### Ubuntu
```bash
python3 manage.py runserver
```
### Create user to login
Server already has superuser with login **admin** and password **admin123**, but you can create your own one. Turn off the server by pressing **Ctrl+C** and execute this command:
```
python3 (or "py" on Windows cmd) manage.py createsuperuser
```
### Done
Now you can start the server and open example at [http://localhost:8000/login/](http://localhost:8000/login/)
## Help
Contact with me at <span style="color:blue">br3w0r-concepts@outlook.com</span> if you want to make ReWidgets better.
