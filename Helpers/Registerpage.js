const {Builder, By, Key, util} = require("selenium-webdriver");


 function fillForm(driver){
    
    driver.findElement(By.name("firstName")).sendKeys("Adrian");
    driver.findElement(By.name("lastName")).sendKeys("Michel");
    driver.findElement(By.name("phone")).sendKeys("1234567899");
    driver.findElement(By.name("userName")).sendKeys("am136@ymail.com");
    driver.findElement(By.name("address1")).sendKeys("7900 Test Dr.");
    driver.findElement(By.name("city")).sendKeys("Chiraq");
    driver.findElement(By.name("state")).sendKeys("Florida");
    driver.findElement(By.name("postalCode")).sendKeys("69420");
    driver.findElements(By.css("[name='country'] option")).then((countrydropdown) => {
        countrydropdown[30].click()
     });
    driver.findElement(By.name("email")).sendKeys("am136@ymail.com");
    driver.findElement(By.name("password")).sendKeys("password123");
    driver.findElement(By.name("confirmPassword")).sendKeys("password123");
    driver.findElement(By.name("submit")).click();
}


module.exports = {
    fillForm,
}