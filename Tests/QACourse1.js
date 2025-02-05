const { Builder, By, Key } = require("selenium-webdriver");
const driver = new Builder().forBrowser("chrome").build();
driver.manage().window().maximize();


async function example() {
    await driver.get("https://cmnewtr.churchmarshal.com/index.php");
    await driver.quit();

}

example();