module.exports = {
  // beforeEach test hook handles all browser navigation
  beforeEach: function (browser) {
    browser.maximizeWindow();
    // creating Page object, using filename as class/constructor
    let homePage = browser.page.SauceDemoHomePage();
    // navigates to POM.url value
    homePage.navigate();
  },
  "user can login successfully with username and password": function (browser) {
    // need to create object instance within each test?
    let homePage = browser.page.SauceDemoHomePage();
    // using class method/command under POM.commands
    homePage
      .inputUsername("standard_user")
      .inputPassword("secret_sauce")
      .clickLoginButton()
      .useXpath()
      // .waitForElementVisible('//div[@class="app_logo" and contains(text(),"Swag Labs")]', 5000)
      .click(
        '//div[@class="inventory_item_name" and contains(text(),"Sauce Labs Backpack")]'
      )
      .assert.containsText(
        '//div[@class="inventory_details_name large_size"]',
        "Sauce Labs Backpack"
      )
      .assert.containsText(
        '//div[@class="inventory_details_desc large_size"]',
        "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."
      )
      // verify item’s title says “Sauce Labs Backpack”
      // click
      .end()
      // wait for element to exist
      // click //div[@class="inventory_item_name" and contains(text(),'Sauce Labs Backpack')]
  },
};
