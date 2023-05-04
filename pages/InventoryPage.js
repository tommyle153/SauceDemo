const sauceDemoCommands = {
    clickLoginButton() {
      return this.waitForElementVisible('@loginButton', 5 * 1000)
        .click('@loginButton')
        .waitForElementNotVisible('@loginButton');
    },
    /**
     * Sends text to search bar and clicks enter
     * @param {String} text - user text input
     * @returns 
     */
    inputUsername(text) {
      return this.waitForElementVisible('@usernameInput', 5000) // accessing elements.searchBar
        .sendKeys('@usernameInput', [text, browser.Keys.ENTER])
        .pause(3 * 1000)
    },
    inputPassword(text) {
        return this.waitForElementVisible('@passwordInput', 5000) // accessing elements.searchBar
          .sendKeys('@passwordInput', [text, browser.Keys.ENTER])
          .pause(3 * 1000)
      },
  };
  
  module.exports = {
    /*
    url can also be a function; use case for this is to support different test environments.
    url: function() { 
      return this.api.launchUrl + '/login'; // this.api.launchUrl is what is being called under the hood?
    },
    */
    url: 'https://www.saucedemo.com/',
    commands: [sauceDemoCommands],
    // single source of truth for elements prevents hard-coding selectors in tests
    elements: {
      usernameInput: {
        selector: '//input[@data-test="username"]',
        locateStrategy: 'xpath'
      },
      passwordInput: {
        selector: '//input[@data-test="password"]',
        locateStrategy: 'xpath'
      },
      loginButton: {
        selector: '//input[@data-test="login-button"]',
        locateStrategy: 'xpath'
      }
    },
  };
  