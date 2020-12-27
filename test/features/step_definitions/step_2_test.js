var webdriver = require('selenium-webdriver');
var {Given, When, Then } = require('cucumber');
var assert = require('assert');

let textToCompare = ''

  Given('I go to web site', function() {
    this.open('https://www.epam.com/')
  });

  When('I find the div with classname {string}', function (classname) {
    return this.driver.findElement(webdriver.By.className(classname)).getText().then(text =>  textToCompare = text )
  })

  Then('I should check text {string}', function(linkText) {
    
    return this.driver.getCurrentUrl()
      .then(function() {
        assert.equal(textToCompare, linkText, "wrong text");
    });
  
  });