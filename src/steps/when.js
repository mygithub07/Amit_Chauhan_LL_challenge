
import adduser from '../support/pageobjects/adduser';
import deleteuser from '../support/pageobjects/deleteuser';

const { When } = require('cucumber');

When(/^I add  user with the following information "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, function (fn, ln,usrn,pass,em,cph) {
    adduser.add(fn,ln,usrn,pass,em,cph);    // entering user name, password and and submiting the page
});

When(/^I delete "([^"]*)"$/, function (usrn) {
    deleteuser.delete(usrn);    // delete user
});
