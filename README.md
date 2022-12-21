# hioscar-wdio-cucumber

Automation Project to run tests in web browser (chrome, firefox, safari) using webdriverIO & Cucumber

## Requirements

- Node version 16 or higher
- chrome latest
- firefox latest
- safari latest --> (https://developer.apple.com/documentation/webkit/testing_with_webdriver_in_safari)

# How to run the test

```sh
$ BROWSERSTACK_USERNAME=${USERNAME} BROWSERSTACK_ACCESS_KEY=${ACCESS_KEY} npm run browserstack-multi
```
To run tests in browserstack with all browsers (chrome, firefox, safari)
```sh
$ npm run chrome
```
To run tests in chrome browser

```sh
$ npm run firefox
```
To run tests in firefox browser

```sh
$ npm run safari
```
To run tests in safari browser

```sh
$ npm run multi
```
To run tests in chrome, firefox & safari at the same time



# Test results run on browser stack

- [Safari](https://automate.browserstack.com/builds/8dfdee30f13bec9d449f75247a8363b8756d52c4/sessions/a204fda07cd9b5e270ff362c7b87a29c76373ade?auth_token=d4ad1571d07b213c7b0204524d7acf938750f7f7669043880d05a4dc3b1e9a15)
- [Firefox](https://automate.browserstack.com/builds/8dfdee30f13bec9d449f75247a8363b8756d52c4/sessions/d4b891c3cbe830dbefc9e7e3bf48f509667cbaef?auth_token=ebe0821f131984995b72f895cc2d866b90ba5bac9b28d63077de723a247be47a)
- [Chrome](https://automate.browserstack.com/builds/8dfdee30f13bec9d449f75247a8363b8756d52c4/sessions/ff6db2af9edd2f7de60109457e484932b4cce64d?auth_token=cc4a38285f104714961f4ce9735f62127b8ac0c2b91a8ef943f50a974307bb94)