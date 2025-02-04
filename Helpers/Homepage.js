const {Builder, By, Key, util} = require("selenium-webdriver");


function navigateToHomePage(driver){
    driver.get("http://demo.guru99.com/test/newtours/index.php");
}

function navigateToRegisterPage(driver){
    driver.findElement(By.linkText("REGISTER")).click();
}

async function navigateToSignon(driver){
    driver.findElement(By.linkText("SIGN-ON")).click();
}

function navigateToFlights(driver){
    driver.findElement(By.linkText("Flights")).click();
}


module.exports = {
    navigateToHomePage,
    navigateToSignon,
    navigateToFlights,
    navigateToRegisterPage
}


   


