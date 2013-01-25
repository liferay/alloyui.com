AUI().use('aui-datatable', function(A) {

  var columns = ["name", "address", "city", "state"];

  var data = [
    { name:"John A. Smith", address:"1236 Some Street", city:"San Francisco", state:"CA" },
    { name:"Joan B. Jones", address:"3271 Another Ave", city:"New York",      state:"NY" },
    { name:"Bob C. Uncle",  address:"9996 Random Road", city:"Los Angeles",   state:"CA" },
    { name:"John D. Smith", address:"1623 Some Street", city:"San Francisco", state:"CA" },
    { name:"Bob F. Uncle",  address:"9899 Random Road", city:"Los Angeles",   state:"CA" }
  ];

  var table = new A.DataTable.Base({
    columnset: columns,
    recordset: data
  }).render('#myDataTable');

});