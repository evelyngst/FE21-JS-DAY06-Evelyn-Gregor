var newdata = JSON.parse(employees);

console.log(newdata);
console.table(newdata);

function createTable() {
  var table = document.getElementById("myTable");
  var row = table.insertRow();
  var cell1 = row.insertCell();
      var cell2 = row.insertCell();
      var cell3 = row.insertCell();
      var cell4 = row.insertCell();
      var cell5 = row.insertCell();
      var cell6 = row.insertCell();
      cell1.innerHTML = "ID";
      cell2.innerHTML = "First Name";
      cell3.innerHTML = "Last Name";
      cell4.innerHTML = "E-mail";
      cell5.innerHTML = "Job title";
      cell6.innerHTML = "salary";

  for (i = 0; i < newdata.length; i++) {
    // Create an empty <tr> element and add it to the 1st position of the table:
      var row = table.insertRow();
    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
      var cell1 = row.insertCell();
      var cell2 = row.insertCell();
      var cell3 = row.insertCell();
      var cell4 = row.insertCell();
      var cell5 = row.insertCell();
      var cell6 = row.insertCell(); 
      
      // Add some text to the new cells:
    cell1.innerHTML = newdata[i].ID;
    cell2.innerHTML = newdata[i].first_name;
    cell3.innerHTML = newdata[i].last_name;
    cell4.innerHTML = newdata[i].email;
    cell5.innerHTML = newdata[i].job_title;
    cell6.innerHTML = newdata[i].salary;
  }  
}
createTable();