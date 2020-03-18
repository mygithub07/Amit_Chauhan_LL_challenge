class verifyuser  {

    get getTable()      {return  $('.smart-table.table.table-striped' );  }
    get getRows()       { return $$('.smart-table.table.table-striped tr'); }
    get adduserButton() { return $('[ type="add"]'); }
verifyAdded(usr){

   const rows = this.getRows;
   var isUserAdded = new Boolean();
   isUserAdded = false;
       rows.forEach((row, rownum) => {
           const columns = rows[rownum].$$('td');
           columns.forEach((col, colnum) => {

             if (columns[colnum].getText() == usr){
             isUserAdded = true;
              return isUserAdded;
             }
           });
       });
     return isUserAdded;
}

verifyDeleted (usr) {
    browser.pause(4000);
    var selectedrow ;
    const table = this.getTable;
    const rows =  this.getRows;
    var isUserDeleted = new Boolean();
  rows.forEach((row, rownum) => {
      const columns = rows[rownum].$$('td');
      columns.forEach((col, colnum) => {
        if (columns[colnum].getText() != usr){           
          isUserDeleted = true;
        }
        else{
            isUserDeleted = false;
        }

      });


  });

}

}

export default new verifyuser()
