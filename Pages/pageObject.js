let pageObject = function(){
    var EC = protractor.ExpectedConditions;
    var deferred = protractor.promise.defer();

    this.OpenWebUrl = async function(){
        await browser.get('https://www.protractortest.org/#/');
        deferred.fulfill();     
    }

    this.clickOnButton = async function(){
        let viewOnGitHub = element(by.css("img[alt='github logo']"));
        await browser.wait(EC.visibilityOf(viewOnGitHub), 10000);
        await viewOnGitHub.click();
        deferred.fulfill(); 
        
    }

}
module.exports = new pageObject;