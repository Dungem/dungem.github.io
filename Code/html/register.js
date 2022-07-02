function saveData() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var phonenumber = document.getElementById("phonenumber").value;

    sessionStorage.firstname = firstname;
    sessionStorage.lastname = lastname; // or sessionStorage.setItem("lastname", lastname);
    sessionStorage.age = age;
    sessionStorage.phonenumber = phonenumber;
    sessionStorage.email = email;

    /* var student = document.getElementById("student").checked;
    var teacher = document.getElementById("teacher").checked;
    var other = document.getElementById("other").checked;
    if (student == true) {
        // sessionStorage.occupation = "student";
        sessionStorage.occupation = document.getElementById("student").value
    }

    if (teacher == true) {
        //sessionStorage.occupation = "teacher";
        sessionStorage.occupation = document.getElementById("teacher").value

    }

    if (other == true) {
        //sessionStorage.occupation = "other";
        sessionStorage.occupation = document.getElementById("other").value

    } */
    var occupationArray = document.getElementById("radio_occupation").getElementsByTagName("input");
    var i = 0;
    while (i < occupationArray.length) {
        if (occupationArray[i].checked == true)
            sessionStorage.occupation = occupationArray[i].value;
        i += 1;
    }

    // for (var i = 0; i < occupationArray.length;i++)
    //     if (occupationArray[i].checked == true)
    //         sessionStorage.occupation = occupationArray[i].value;



    var vehicle1 = document.getElementById("vehicle1").checked;
    var vehicle2 = document.getElementById("vehicle2").checked;
    var vehicle3 = document.getElementById("vehicle3").checked;

    sessionStorage.vehicle1 = vehicle1;
    sessionStorage.vehicle2 = vehicle2;
    sessionStorage.vehicle3 = vehicle3;


    var cars = document.getElementById("cars").value;
    sessionStorage.cars = cars;
}

function prefillData() {
    if (sessionStorage.firstname != null) {
        document.getElementById("firstname").value = sessionStorage.firstname;
        document.getElementById("lastname").value = sessionStorage.lastname;
        document.getElementById("email").value = sessionStorage.email;
        document.getElementById("age").value = sessionStorage.age;
        document.getElementById("phonenumber").value = sessionStorage.phonenumber;

        // if (sessionStorage.occupation == "student") {
        //     document.getElementById("student").checked = true;
        // }
        // if (sessionStorage.occupation == "teacher") {
        //     document.getElementById("teacher").checked = true;
        // }
        // if (sessionStorage.occupation == "other") {
        //     document.getElementById("other").checked = true;
        // }

        switch (sessionStorage.occupation) {
            case "student":
                document.getElementById("student").checked = true;
                break;
            case "teacher":
                document.getElementById("teacher").checked = true;
                break;
            case "other":
                document.getElementById("other").checked = true;
                break;
        }


        if (sessionStorage.vehicle1 == "true")
            document.getElementById("vehicle1").checked = true;
        if (sessionStorage.vehicle2 == "true")
            document.getElementById("vehicle2").checked = true;
        if (sessionStorage.vehicle3 == "true")
            document.getElementById("vehicle3").checked = true;


        document.getElementById("cars").value = sessionStorage.cars;
    }
}

function init() {
    var regForm = document.getElementById("registerForm");
    regForm.onsubmit = saveData;
    prefillData();
}

window.onload = init;