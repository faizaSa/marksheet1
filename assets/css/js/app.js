function generateresult() {
    // Get value from input fields
    var name = document.getElementById("name").value;
    var rollnumber = document.getElementById("rollnumber").value;
    var english = parseFloat(document.getElementById("english").value);
    var urdu = parseFloat(document.getElementById("urdu").value);
    var science = parseFloat(document.getElementById("science").value);
    var sst = parseFloat(document.getElementById("sst").value);
    var islamiat = parseFloat(document.getElementById("islamiat").value);
    var maths = parseFloat(document.getElementById("maths").value);
    var computer = parseFloat(document.getElementById("computer").value);
    var sindhi = parseFloat(document.getElementById("sindhi").value);
    
    // Check if any field is empty or invalid
    if (isNaN(english) || isNaN(urdu) || isNaN(science) || isNaN(sst) || 
        isNaN(islamiat) || isNaN(maths) || isNaN(computer) || isNaN(sindhi)) {
        alert("Please enter valid numbers for all subjects.");
        return; // Exit function if any value is invalid
    }

    // Calculate total and percentage
    var total = english + urdu + science + sst + islamiat + maths + computer + sindhi;
    var percentage = (total / 800) * 100;

    // Determine grade and status
    var grade;
    var status;

    if (percentage >= 90) {
        grade = "A+";
        status = "Excellent";
    } else if (percentage >= 80) {
        grade = "A";
        status = "Outstanding";
    } else if (percentage >= 70) {
        grade = "B";
        status = "Keep it up!";
    } else if (percentage >= 60) {
        grade = "C";
        status = "Pass";
    } else if (percentage >= 50) {
        grade = "D";
        status = "Pass";
    } else {
        grade = "F";
        status = "Fail";
    }
    

    // Display result
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML =
        "<p> Student Name: " + name + " </p>" +
        "<p> Total Marks: " + total + " /800</p>" +
        "<p> Percentage: " + percentage.toFixed(2) + " % </p>" +
        "<p> Grade: " + grade + " </p>" +
        "<p class='" + (status === "Pass" ? "pass" : "fail") + "'> Status: " + status + " </p>";
}
