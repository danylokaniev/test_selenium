// // This Cucumber.js tutorial support file to perform validations and initialization for our app // //
 
var webdriver = require('selenium-webdriver');
const { setWorldConstructor, setDefaultTimeout } = require('cucumber')
 
const {Builder, By, Key, until} = require('selenium-webdriver');
 
var chrome = require('selenium-webdriver/chrome');
 
class CustomWorld {
  constructor() {
    setDefaultTimeout(100 * 1000)
    this.driver = new Builder().forBrowser('chrome').build();
  }

  open(url) {
    return this.driver.get(url);
  }

  findAndClick (className) {
    return this.driver.findElement(webdriver.By.className(className)).click();
  }
}
  
setWorldConstructor(CustomWorld)
 
module.exports = function() {
 
  this.World = CustomWorld;
 
  this.setDefaultTimeout(100 * 1000);
};