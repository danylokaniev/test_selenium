var webdriver = require('selenium-webdriver');
var {Given, When, Then } = require('cucumber');
var assert = require('assert');

  Given('I go to the user_phone input', function() {
    return this.driver.get('https://www.epam.com/about/who-we-are/contact/');
  });

  When('I start typing {string}', function (text) {
    return this.driver.findElement(webdriver.By.xpath("//input[@name='user_phone']"))
    .sendKeys(text,  webdriver.Key.RETURN)
  });

  Then('Then I should check if input is filled correctly', function() {

    return this.driver.findElement(webdriver.By.xpath("//input[@name='user_phone']"))
    .getAttribute('aria-invalid')
    .then(function(elems) {
        console.log(elems)
        assert.equal(elems, false, "dsfsdf");
    });
  
  });