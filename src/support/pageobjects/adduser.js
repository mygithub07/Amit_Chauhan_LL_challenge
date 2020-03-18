class adduser  {

  // define elements

   get searchBox()       { return $('[placeholder="Search]'); }
   get adduserButton() { return $('[ type="add"]'); }
   get firstNameInput()  { return $('[name="FirstName"]');}
   get lastNameInput() { return $('[name="LastName"]'); }
   get usernameInput()   { return $('[name="UserName"]'); }
   get passwordInput()   { return $('[name="Password"]');}
   get customerCompany() { return $('input[name="optionsRadios"][value="15"]'); }
   get roleMenu()      { return $('[name="RoleId"]');}
   get rolesalesteam() {return $('body > div.modal.ng-scope > div.modal-body > form > table > tbody > tr:nth-child(6) > td:nth-child(2) > select > option:nth-child(2)');}
   get emailInput()    { return $('[name="Email"]');}
   get cellPhoneInput()    { return $('[name="Mobilephone"]');}
   get saveButton()  { return $('button.btn.btn-success'); }


    //  your page specific methods

    waitForUserToBeAdded () {
        if(!this.searchBox.isDisplayed()){
            this.searchBox.waitForDisplayed(10000);
        }
    }

    add (fname,lname,username, password,email,cellphone) {

        this.adduserButton.waitForClickable({ timeout: 10000 });
        this.adduserButton.click();
        browser.pause(1000);

        this.firstNameInput.waitForClickable({ timeout: 10000 });
        this.firstNameInput.setValue(fname);
        browser.pause(1000);

        this.lastNameInput.waitForClickable({ timeout: 10000 });
        this.lastNameInput.setValue(lname);
        browser.pause(1000);

        this.usernameInput.waitForClickable({ timeout: 10000 });
        this.usernameInput.setValue(username);
        browser.pause(1000);

        this.passwordInput.waitForClickable({ timeout: 10000 });
        this.passwordInput.setValue(password);
        browser.pause(1000);

        this.passwordInput.waitForClickable({ timeout: 10000 });
        this.customerCompany.click();
        browser.pause(1000);

        this.roleMenu.waitForClickable({ timeout: 10000 });
        this.roleMenu.click();
        browser.pause(1000);

        this.rolesalesteam.click();
        browser.pause(1000);

        this.emailInput.waitForClickable({ timeout: 10000 });
        this.emailInput.setValue(email);
        browser.pause(1000);

        this.cellPhoneInput.waitForClickable({ timeout: 10000 });
        this.cellPhoneInput.setValue(cellphone);
        browser.pause(1000);

        this.saveButton.waitForClickable({ timeout: 10000 });
        this.saveButton.click();
        browser.pause(1000);
    }
}

export default new adduser()
