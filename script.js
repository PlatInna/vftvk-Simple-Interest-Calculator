function SetRate() {
    rate = document.getElementById("rate").value;
    document.getElementById("rate_set").innerHTML = rate + '%';
}

function compute() {
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    interest = principal * years * rate / 100;
    date_year = years * 1 + 2021;

    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else {
        document.getElementById('res1').innerHTML =
            'If you deposit ' + "<mark>" + principal + "</mark>" + ',';
        document.getElementById('res2').innerHTML =
            'at an interest rate of ' + "<mark>" + rate + '%' + "</mark>" + '.';
        document.getElementById('res3').innerHTML =
            'You will receive an amount of ' + "<mark>" + interest + "<mark>" + ',';
        document.getElementById('res4').innerHTML =
            'in the year ' + "<mark>" + date_year + "<mark>";
    }
}