# RW.Login
## Description
Part of **ReWidgets** library to simplify account management with token authorization.
## Table of contents
- [Note!](#note-)
- [ToDo List](#todo-list)
- [Example](#example)
  * [Start Django server](#start-django-server)
    + [Windows cmd](#windows-cmd)
    + [Ubuntu](#ubuntu)
    + [Create user to login](#create-user-to-login)
  * [Done](#done)
- [Usage](#usage)
- [Help](#help)
## Note
This is a really raw version which lacks of functionallity and usability. For now, any changes could be made that break copatibility with other versions. I'll try to announce all of them in last changes section
## ToDo List
- [x] Log in form
- [ ] Sign up form
- [ ] Forgot password form
- [ ] Make convenient library look
- [ ] Separate library and expamles
## Example
rw-login comes with a little example to show how it works.
### Start Django server
Make sure that you installed **python>=3.4** and **requirements** with requirements.txt file in **rw_login_backend**:
```bash
pip install -r requirements.txt
```
Then, start djnago developer server:
#### Windows cmd
```
py manage.py migrate
py manage.py runserver
```
#### Ubuntu
```bash
python3 manage.py migrate
python3 manage.py runserver
```
#### Create user to login
Turn off the server by pressing **Ctrl+C** and execute this command:
```
python3 (or "py" on Windows cmd) manage.py createsuperuser
```
### Done
Now you can start the server and open example at [http://localhost:8000/login/](http://localhost:8000/login/)
## Usage
For now, the widget has few functions at src/actions directory:
- **login(callback, creds)** - calls loginApi at src/Api/main.js, sends credentials (username and password) and talks with callback about success.
- **loginHandler(token)** - simple handler which sends **LOGIN** action to loginReducer at src/Reducers/main.
## Help
Contact with me at <span style="color:blue">br3w0r-concepts@outlook.com</span> if you want to make ReWidgets better.
