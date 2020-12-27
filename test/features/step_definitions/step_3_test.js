var webdriver = require('selenium-webdriver');
var {Given, When, Then } = require('cucumber');
var assert = require('assert');

  Given('I go to the user_phone input', function() {
    this.open('https://www.epam.com/')
  });

  When('I start typing {string}', function (button) {
    return this.driver.findElement(webdriver.By.xpath(driver.find_element_by_xpath("//input[@name='user_phone']"))).sendKeys(button, driver.Key.ENTER)
  });

  Then('Then I should check if input is filled correctly', function() {

    return this.driver.findElement(webdriver.By.xpath(driver.find_element_by_xpath("//input[@name='user_phone']")))
    .getAttribute('aria-invalid')
    .then(function(elems) {
        assert.equal(elems, false, "wrong url");
    });
  
  });