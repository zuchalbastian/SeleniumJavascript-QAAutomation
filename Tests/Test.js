const homePage = require('../Helpers/Homepage.js')
const registerPage = require('../Helpers/Registerpage.js')
var webDriver = require("selenium-webdriver")
const assert = require("assert")
var driver = new webDriver.Builder().forBrowser('chrome').build();


async function testOne(){
   homePage.navigateToHomePage(driver);
   homePage.navigateToSignon(driver);
   homePage.navigateToFlights(driver);
   homePage.navigateToRegisterPage(driver);
   await driver.sleep(8000);
   registerPage.fillForm(driver);
   await driver.sleep(9000);
   driver.close();
}



testOne();

    