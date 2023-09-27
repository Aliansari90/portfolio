// let arr = ["hi" , "hello" , "kese ho?"]

// function greeting(){
//     let name = prompt("Enter your name")
//     let randomNumber= Math.floor(Math.random()*arr.length)
//     console.log(name , arr[randomNumber])
// }
// greeting()

// function check(x = Math.floor(Math.random()*10) , y = Math.floor(Math.random()*10)){
//     let sum = x + y
//     console.log(x , y)
//     console.log(sum)
// }

// check()

// let arrowFunction = (x , y) => (x * y)
// console.log(arrowFunction(10 , 5))

// let arr = ['Sufyan' , 'Danish' , 'Ahmed']
// let arr1 = ['Umer' , ...arr , 'Mustafa']
// console.log(arr1)

// function spread (x , y , z){
//     console.log(x + y + z)
// }
// let arr = [1 , 5 , 6 ]
// spread(...arr)

// function somefunction(arr , ...arr1){
//     console.log(arr , arr1)
// }
// somefunction("Hi there" , "Hello" , "How are you")
function addToTable() {
           
    var nameValue = document.getElementById("name").value;
    var fatherNameValue = document.getElementById("fatherName").value;
    var scoreValue = parseFloat(document.getElementById("score").value); // Parse Score as Float
  
    var tableBody = document.getElementById("tableBody");
    var newRow = tableBody.insertRow();
   
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    cell1.innerHTML = nameValue;
    cell2.innerHTML = fatherNameValue;
    cell3.innerHTML = scoreValue;
    
    var total = 0;
    var tableRows = tableBody.getElementsByTagName("tr");
    for (var i = 0; i < tableRows.length; i++) {
        var rowScore = parseFloat(tableRows[i].getElementsByTagName("td")[2].innerHTML);
        if (!isNaN(rowScore)) {
            total += rowScore;
        }
    }
    cell4.innerHTML = total.toFixed(2);
   
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.onclick = function() {
        deleteRow(newRow);
    };
    cell5.appendChild(deleteButton);
   
    document.getElementById("name").value = "";
    document.getElementById("fatherName").value = "";
    document.getElementById("score").value = "";
}
function deleteRow(row) {
    var tableBody = document.getElementById("tableBody");
    tableBody.removeChild(row);
  
    var total = 0;
    var tableRows = tableBody.getElementsByTagName("tr");
    for (var i = 0; i < tableRows.length; i++) {
        var rowScore = parseFloat(tableRows[i].getElementsByTagName("td")[2].innerHTML);
        if (!isNaN(rowScore)) {
            total += rowScore;
        }
    }
   
    var lastRow = tableRows[tableRows.length - 1];
    var totalCell = lastRow.getElementsByTagName("td")[3];
    totalCell.innerHTML = total.toFixed(2);
}