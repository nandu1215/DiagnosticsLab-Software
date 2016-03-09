 document.getElementById("searchResult").style.visibility = "hidden";
    var test = {
        "testcase": [{
            "testname": "Blood Test"
        }, {
            "testname": "Urine Test"
        }, {
            "testname": "White Blood Cells Test"
        }, {
            "testname": "Culture Test"
        }, {
            "testname": "1 hour Glucose Test"
        }, {
            "testname": "3 hours Glucose Test"
        }]
    };
    var selected = false;
    var text = test.testcase;

    function clicked() {
        var patientID, testcase;
        patientID = document.getElementById("patientID");

        if (patientID.value === "") {
            document.getElementById("error").innerHTML = "Enter patientID";
            addClass("#patientID", 'error');
        } else {
            removeClass("#patientID", 'error');
            document.getElementById('error').innerHTML = "";
            myFunction();
        }
    };

    function viewclicked() {
        var id = $('#PatientID').val();
        if (id == "" || id == undefined && !selected) {
            event.preventDefault();
            $("#error").html("Please Enter the Patient Id to View Test Results");
            return;
        } else {
            $('#layouthidden').css('visibility', 'visible');
        }
        if (selected) {
            window.location.href = 'enteringtestresult.html';
        } else {
            $('#error').html = "Please Set the Test Case";
        }
    };

    function myFunction() {
        document.getElementById("searchResult").style.visibility = "visible";
        text.forEach(function(i) {
            var table = document.getElementById("searchResult");
            console.log(i.testname);
            var newrow = table.insertRow(1);
            var cell = newrow.insertCell(0);
            // cell.innerHTML = text[i.testname];
            cell.innerHTML = i.testname;
            // cell.className="dynamic";
            console.log(text[i.testname]);
        });
    }
    $(document).ready(function() {
        var table = $('#searchResult');
        $("#searchResult tbody").delegate('tr', 'click', function(event) {
            var current = $(this).addClass('selected');
            $(this).parent("tbody").find("tr").removeClass('selected')
            current.parent("tbody").find("tr").removeClass('selected')
            $(this).addClass('selected');
            selected = true;
        });

        $("#reset").click(function() {
            $('#searchResult').css('visibility', 'hidden');
            $('buttonContainer').css('visibility', 'hidden');
            $('#patientID').val('')
            selected = false;
        });
        $('#patientID').click(function() {
            $('#error').html(" ");
        });

        $('#search').click(function(event) {
            var id = $('#PatientID').val();
            if (id == "") {
                event.preventDefault();
                $("#error").html("Please Enter the Patient Id to View Test Results");
                return;
            } else {
                $('#layouthidden').css('visibility', 'visible');
            }
        });
    });