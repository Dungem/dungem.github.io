function loadDataAndCalculatePrice() {
    totalPrice = 0;
    var firstname = document.getElementById("confirm_name");
    var age = document.getElementById("confirm_age");
    var email = document.getElementById("confirm_email");
    var phone = document.getElementById("confirm_phone");
    var occupation = document.getElementById("confirm_occupation");
    var courses = document.getElementById("confirm_courses");
    var cars = document.getElementById("confirm_cars");
    var total = document.getElementById("confirm_total");
    firstname.textContent = sessionStorage.firstname + " " + sessionStorage.lastname; // or lastname = sessionStorage.getItem("lastname");
    age.textContent = sessionStorage.age;
    email.textContent = sessionStorage.email;
    phone.textContent = sessionStorage.phonenumber;
    occupation.textContent = sessionStorage.occupation;

    var yourCourses = "";
    if (sessionStorage.vehicle1 == "true") {
        totalPrice += 499;
        yourCourses += "bike, ";
    }
    if (sessionStorage.vehicle2 == "true") {
        totalPrice += 399;
        yourCourses += "bicycle, ";
    }
    if (sessionStorage.vehicle3 == "true") {
        totalPrice += 999;
        yourCourses += "car, ";
    }
    yourCourses = yourCourses.substring(0, yourCourses.length - 2);
    courses.textContent = yourCourses;

    cars.textContent = sessionStorage.cars;
    total.textContent = totalPrice + " k";
}

function cancelButton() {
    window.location = "index.html"
}



function init() {
    loadDataAndCalculatePrice();
    var cancel = document.getElementById("cancelButton");
    cancel.onclick = cancelButton;
}

window.onload = init;