function proccess() {
    var nOne = parseInt(document.getElementById("numOne").value);
    var nTwo = parseInt(document.getElementById("numTwo").value);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "Control?numOne=" + nOne + "&numTwo=" + nTwo, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var nums = JSON.parse(xhr.responseText);
            document.getElementById("result").innerHTML = nums;
        }
    };
    xhr.send(null);

}

