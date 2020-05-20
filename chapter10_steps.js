let pageObjectFile = require('./Pages/pageObject.js')

module.exports = function () {

    /********************************************************************************************************************************************/
    this.Given(/^Open protractor website$/, function (callback) {
        pageObjectFile.OpenWebUrl().then(function () {
            callback();
        }, function (err) {
            callback("error is >> " + err)
        });


    });

    /********************************************************************************************************************************************/
    this.When(/^User click on View on GitHub button$/, function (callback) {
        pageObjectFile.clickOnButton().then(function () {
            callback();
        }, function (err) {
            callback("error is >>> " + err)
        })

    });
    /********************************************************************************************************************************************/
    this.Then(/^Verify that User is redirected to the GitHub page$/, function (callback) {
        browser.waitForAngularEnabled(false);
        browser.getTitle().then(function (browserTitle) {
            if (browserTitle === 'GitHub - angular/protractor: E2E test framework for Angular apps') {
                callback();
            }
            else {
                callback("Browser title mismatch");
            }

        }, function (err) {
            callback(new error("error is " + err));
        })

    })




}; // end of main function
