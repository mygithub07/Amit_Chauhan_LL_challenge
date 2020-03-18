class deleteuser  {
get okButton()       { return $('button.btn.ng-scope.ng-binding.btn-primary'); }
get adduserButton() { return $('[ type="add"]'); }
delete (uname) {

      var selectedrow ;
      const table = $('.smart-table.table.table-striped');
      const rows = $$('.smart-table.table.table-striped tr');

      rows.forEach((row, rownum) => {
          const columns = rows[rownum].$$('td');
          columns.forEach((col, colnum) => {
            if (columns[colnum].getText() == uname){
               selectedrow = rownum;
            }

            if ((colnum == 10 && rownum == selectedrow)){

              var elem=  col.$('button.btn.btn-link');
               elem.waitForClickable({ timeout: 10000 });
               elem.click();
              if(this.okButton.isClickable()){
                browser.pause(3000);
                this.okButton.click();
            

              }

            }
          });

      });


   }


}
export default new deleteuser()
