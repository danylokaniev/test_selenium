var webdriver = require('selenium-webdriver');
var {Given, When, Then } = require('cucumber');
var assert = require('assert');

  Given('I go to web site', function() {
    this.open('https://www.epam.com/')
  });

  When('I find the button {string}', function (button) {
    this.findAndClick(button)
  });

  Then('I should go to {string}', function(linkText) {
    return this.driver.getCurrentUrl()
      .then(function(elems) {
        assert.equal(elems, linkText, "wrong url");
    });
  
  });