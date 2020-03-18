
import verifyuser from '../support/pageobjects/verifyuser';


const { Then } = require('cucumber');
var IsuserAdded = new Boolean();

Then(
    /^I see user "([^"]*)" added to the table$/, function (usrn){
     var IsuserAdded = verifyuser.verifyAdded(usrn);
      expect(IsuserAdded).to.be.true;

});

Then(
    /^user "([^"]*)" is deleted$/, function (usrn){
    verifyuser.verifyDeleted(usrn);
});
