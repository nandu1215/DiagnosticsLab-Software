document.getElementById("selectedTest").style.visibility = "hidden";
document.getElementById("searchResult").style.visibility = "hidden";
var test = { "testcase": [{ "testname": "Blood Test" }, 
    { "testname": "Urine Test" }, 
    { "testname": "White Blood Cells Test" }, 
    { "testname": "Culture Test" }, 
    { "testname": "1 hour Glucose Test" }, 
    { "testname": "3 hours Glucose Test" }] 
};

var text = test.testcase;
function clicked() {
     var patientID, testcase;
        patientID = document.getElementById("patientID");
        testcase = document.getElementById("testSearch");
        if (patientID.value === "" || testcase.value === "") {
            document.getElementById("error").innerHTML = "Enter patientID or TestCase to Search";
            addClass("#patientID", 'error');
            addClass("#testSearch", 'error');
        } else {
            removeClass("#patientID", 'error');
            removeClass("#testSearch", 'error');
            document.getElementById('error').innerHTML="";
            myFunction();
        }
}; 

function createclicked() {
     var patientID, testcase,row;
        patientID = document.getElementById("patientID");
        testcase = document.getElementById("testSearch");
        row=document.getElementById("selectedTest").rows.length;
        if (patientID.value === "" || testcase.value === "" || row < 2)  {
            if(patientID.value === "" || testcase.value === ""){
            document.getElementById("error").innerHTML = "Enter patientID or Test Search";
            }else{
               document.getElementById("error").innerHTML = "Select the Test Case To move Futher"; 
            }

            addClass("#patientID", 'error');
            addClass("#testSearch", 'error');
        } else {
            removeClass("#patientID", 'error');
            removeClass("#testSearch", 'error');
            document.getElementById('error').innerHTML="";
        }
}; 

function myFunction() {
 document.getElementById("searchResult").style.visibility = "visible";  
    text.forEach(function(i){
var table = document.getElementById("searchResult");
        console.log(i.testname);
    var newrow = table.insertRow(1);
    var cell = newrow.insertCell(0);
    // cell.innerHTML = text[i.testname];
    cell.innerHTML=i.testname;
    // cell.className="dynamic";
    console.log(text[i.testname]);
}); 
};
$(document).ready(function(){
    var table = $('#searchResult');
$("#searchResult tbody").delegate('tr','click',function(){
    $('#selectedTest').css('visibility', 'visible');
    var newtable=document.getElementById("selectedTest");
    var newrows = newtable.insertRow(1);
    newrows.innerHTML = this.innerHTML;
});

$("#reset").click(function(){
  $('#selectedTest').css('visibility', 'hidden');  
  $('#searchResult').css('visibility', 'hidden');
  $('#testSearch').val('');
  $('#patientID').val('');
  $('#patientName').val('');
});
});