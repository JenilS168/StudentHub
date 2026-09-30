console.log("StudentHub JavaScript Loaded Successfully");
console.log("Welcome to StudentHub");
console.log("Practical 4 - JavaScript");

// 1 Variables

let studentName = "Priyam";
let course = "Information Technology";
let semester = 5;
console.log(studentName);
console.log(course);
console.log(semester);

// 2 Data Types

let college = "CHARUSAT";      // String
let year = 2026;               // Number
let isStudent = true;          // Boolean
console.log(college);
console.log(year);
console.log(isStudent);
// Function Example
function welcomeMessage() {
    console.log("Welcome to StudentHub!");
}

welcomeMessage();
// Function with Parameter
function welcomeStudent(name) {
    console.log("Welcome " + name);
}

welcomeStudent("Priyam");
welcomeStudent("Rahul");
welcomeStudent("Amit");

//--------------------------------------------
// 3 DOM Manipulation
//--------------------------------------------

let heading = document.getElementById("welcomeHeading");
let button = document.getElementById("changeBtn");

if (button && heading) {

    button.onclick = function () {

        heading.innerHTML = "Welcome to StudentHub 🚀";

    };

}

//--------------------------------------------
//  4 Notification Banner
//--------------------------------------------

let notification = document.getElementById("notification");
let closeButton = document.getElementById("closeBtn");

if (notification && closeButton) {

    closeButton.onclick = function () {

        notification.style.display = "none";

    };

}

//--------------------------------------------
//  5 Theme Switcher
//--------------------------------------------

//--------------------------------------------
// 5 Theme Switcher with localStorage
//--------------------------------------------

let themeButton = document.getElementById("themeBtn");

// Check saved theme when the website opens
if (localStorage.getItem("theme") == "dark") {

    document.body.classList.add("dark-mode");

    if (themeButton) {
        themeButton.innerHTML = "Light Mode";
    }

}


// Change theme and save it
if (themeButton) {

    themeButton.onclick = function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            themeButton.innerHTML = "Light Mode";
            localStorage.setItem("theme", "dark");

        }
        else {

            themeButton.innerHTML = "Dark Mode";
            localStorage.setItem("theme", "light");

        }

    };

}

// ================================
// FAQ Accordion
// ================================



let faqBtn1 = document.getElementById("faqBtn1");
let faqBtn2 = document.getElementById("faqBtn2");
let faqBtn3 = document.getElementById("faqBtn3");

let faqAnswer1 = document.getElementById("faqAnswer1");
let faqAnswer2 = document.getElementById("faqAnswer2");
let faqAnswer3 = document.getElementById("faqAnswer3");

if (
    faqBtn1 && faqBtn2 && faqBtn3 &&
    faqAnswer1 && faqAnswer2 && faqAnswer3
) {

    function closeAllFaq() {

        faqAnswer1.style.display = "none";
        faqAnswer2.style.display = "none";
        faqAnswer3.style.display = "none";

    }


    faqBtn1.onclick = function () {

        let isOpen = faqAnswer1.style.display === "block";

        closeAllFaq();

        if (!isOpen) {
            faqAnswer1.style.display = "block";
        }

    };


    faqBtn2.onclick = function () {

        let isOpen = faqAnswer2.style.display === "block";

        closeAllFaq();

        if (!isOpen) {
            faqAnswer2.style.display = "block";
        }

    };


    faqBtn3.onclick = function () {

        let isOpen = faqAnswer3.style.display === "block";

        closeAllFaq();

        if (!isOpen) {
            faqAnswer3.style.display = "block";
        }

    };

}


//--------------------------------------------
// 7. Modal Popup
//--------------------------------------------

let openButton = document.getElementById("openModalBtn");
let modal = document.getElementById("announcementModal");
let modalCloseButton = document.getElementById("closeModal");

if (openButton && modal && modalCloseButton) {

    openButton.onclick = function () {

        modal.style.display = "block";

    };


    modalCloseButton.onclick = function () {

        modal.style.display = "none";

    };


    modal.onclick = function (event) {

        if (event.target == modal) {

            modal.style.display = "none";

        }

    };

}


//--------------------------------------------
// 8. Image Slider
//--------------------------------------------

let sliderImage = document.getElementById("sliderImage");

let previousButton = document.getElementById("previousBtn");

let nextButton = document.getElementById("nextBtn");


if (sliderImage && previousButton && nextButton) {

    let images = [

        "../images/campus.png",
        "../images/campus2.png",
        "../images/campus3.png"

    ];


    let currentImage = 0;


    nextButton.onclick = function () {

        currentImage++;

        if (currentImage > 2) {

            currentImage = 0;

        }

        sliderImage.src = images[currentImage];

    };


    previousButton.onclick = function () {

        currentImage--;

        if (currentImage < 0) {

            currentImage = 2;

        }

        sliderImage.src = images[currentImage];

    };

}

//--------------------------------------------
// 9. Hamburger Menu
//--------------------------------------------

let menuButton = document.getElementById("menuBtn");

let mainMenu = document.getElementById("mainMenu");


if (menuButton && mainMenu) {

    menuButton.onclick = function () {

        mainMenu.classList.toggle("active");

    };

}

// ========================================
// Practical 5 - Student Registration
// Complete Form Validation
// ========================================

let registrationForm = document.getElementById("registrationForm");

if (registrationForm) {

    registrationForm.addEventListener("submit", function (event) {

        // Prevent form from submitting/reloading the page
        event.preventDefault();


        // --------------------------------
        // Get form values
        // --------------------------------

        let name = document.getElementById("studentName").value.trim();

        let email = document.getElementById("email").value.trim();

        let mobile = document.getElementById("mobile").value.trim();

        let password = document.getElementById("password").value;

        let confirmPassword =
            document.getElementById("confirmPassword").value;

        let course = document.getElementById("course").value;

        let year = document.getElementById("year").value;

        let terms = document.getElementById("terms").checked;


        // --------------------------------
        // Get error message elements
        // --------------------------------

        let nameError =
            document.getElementById("nameError");

        let emailError =
            document.getElementById("emailError");

        let mobileError =
            document.getElementById("mobileError");

        let passwordError =
            document.getElementById("passwordError");

        let confirmPasswordError =
            document.getElementById("confirmPasswordError");

        let courseError =
            document.getElementById("courseError");

        let yearError =
            document.getElementById("yearError");

        let genderError =
            document.getElementById("genderError");

        let termsError =
            document.getElementById("termsError");


        // --------------------------------
        // Clear previous error messages
        // --------------------------------

        nameError.innerHTML = "";
        emailError.innerHTML = "";
        mobileError.innerHTML = "";
        passwordError.innerHTML = "";
        confirmPasswordError.innerHTML = "";
        courseError.innerHTML = "";
        yearError.innerHTML = "";
        genderError.innerHTML = "";
        termsError.innerHTML = "";


        // --------------------------------
        // Validation flag
        // --------------------------------

        let isValid = true;


        // ========================================
        // 1. NAME VALIDATION
        // ========================================

        let namePattern = /^[A-Za-z ]+$/;

        if (name === "") {

            nameError.innerHTML =
                "Please enter your full name.";

            isValid = false;

        }
        else if (!namePattern.test(name)) {

            nameError.innerHTML =
                "Name should contain letters and spaces only.";

            isValid = false;

        }


        // ========================================
        // 2. EMAIL VALIDATION
        // ========================================

        let emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {

            emailError.innerHTML =
                "Please enter your email address.";

            isValid = false;

        }
        else if (!emailPattern.test(email)) {

            emailError.innerHTML =
                "Please enter a valid email address.";

            isValid = false;

        }


        // ========================================
        // 3. MOBILE NUMBER VALIDATION
        // ========================================

        let mobilePattern =
            /^[6-9][0-9]{9}$/;

        if (mobile === "") {

            mobileError.innerHTML =
                "Please enter your mobile number.";

            isValid = false;

        }
        else if (!mobilePattern.test(mobile)) {

            mobileError.innerHTML =
                "Please enter a valid 10-digit mobile number.";

            isValid = false;

        }


        // ========================================
        // 4. PASSWORD VALIDATION
        // ========================================

        /*
            Password requirements:
            - Minimum 8 characters
            - At least one uppercase letter
            - At least one lowercase letter
            - At least one number
            - At least one special character
        */

        let passwordPattern =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

        if (password === "") {

            passwordError.innerHTML =
                "Please create a password.";

            isValid = false;

        }
        else if (!passwordPattern.test(password)) {

            passwordError.innerHTML =
                "Password must contain at least 8 characters, " +
                "one uppercase letter, one lowercase letter, " +
                "one number and one special character.";

            isValid = false;

        }


        // ========================================
        // 5. CONFIRM PASSWORD VALIDATION
        // ========================================

        if (confirmPassword === "") {

            confirmPasswordError.innerHTML =
                "Please confirm your password.";

            isValid = false;

        }
        else if (password !== confirmPassword) {

            confirmPasswordError.innerHTML =
                "Passwords do not match.";

            isValid = false;

        }


        // ========================================
        // 6. COURSE VALIDATION
        // ========================================

        if (course === "") {

            courseError.innerHTML =
                "Please select your course.";

            isValid = false;

        }


        // ========================================
        // 7. YEAR VALIDATION
        // ========================================

        if (year === "") {

            yearError.innerHTML =
                "Please select your year.";

            isValid = false;

        }


        // ========================================
        // 8. GENDER VALIDATION
        // ========================================

        let gender =
            document.querySelector(
                'input[name="gender"]:checked'
            );

        if (!gender) {

            genderError.innerHTML =
                "Please select your gender.";

            isValid = false;

        }


        // ========================================
        // 9. TERMS & CONDITIONS
        // ========================================

        if (!terms) {

            termsError.innerHTML =
                "Please accept the Terms and Conditions.";

            isValid = false;

        }


        // ========================================
        // FINAL RESULT
        // ========================================

        if (isValid) {

            alert(
                "Registration successful! Welcome to StudentHub."
            );

            // Clear the form
            registrationForm.reset();

        }

    });

}

// ========================================
// Practical 5 - Password Strength Indicator
// ========================================

let passwordInput = document.getElementById("password");
let passwordStrength = document.getElementById("passwordStrength");

if (passwordInput && passwordStrength) {

    passwordInput.addEventListener("input", function () {

        let password = passwordInput.value;

        // Empty password
        if (password === "") {

            passwordStrength.innerHTML = "";

            return;

        }


        let strength = 0;


        // Check length
        if (password.length >= 8) {

            strength++;

        }


        // Check lowercase
        if (/[a-z]/.test(password)) {

            strength++;

        }


        // Check uppercase
        if (/[A-Z]/.test(password)) {

            strength++;

        }


        // Check number
        if (/[0-9]/.test(password)) {

            strength++;

        }


        // Check special character
        if (/[@$!%*?&]/.test(password)) {

            strength++;

        }


        // Display strength
        if (strength <= 2) {

            passwordStrength.innerHTML =
                "Password Strength: Weak";

        }
        else if (strength <= 4) {

            passwordStrength.innerHTML =
                "Password Strength: Medium";

        }
        else {

            passwordStrength.innerHTML =
                "Password Strength: Strong";

        }

    });

}

// ========================================
// Practical 5 - Live Password Validation
// ========================================

let confirmPasswordInput =
    document.getElementById("confirmPassword");

let confirmPasswordError =
    document.getElementById("confirmPasswordError");

if (passwordInput && confirmPasswordInput && confirmPasswordError) {

    confirmPasswordInput.addEventListener("input", function () {

        let password = passwordInput.value;

        let confirmPassword =
            confirmPasswordInput.value;

        if (confirmPassword === "") {

            confirmPasswordError.innerHTML = "";

        }
        else if (password !== confirmPassword) {

            confirmPasswordError.innerHTML =
                "Passwords do not match.";

        }
        else {

            confirmPasswordError.innerHTML =
                "Passwords match.";

        }

    });

}

// ========================================
// Practical 5 - Live Field Validation
// Name, Email and Mobile
// ========================================

let nameInput = document.getElementById("studentName");
let emailInput = document.getElementById("email");
let mobileInput = document.getElementById("mobile");

let nameErrorLive = document.getElementById("nameError");
let emailErrorLive = document.getElementById("emailError");
let mobileErrorLive = document.getElementById("mobileError");


// ----------------------------------------
// Name validation while typing
// ----------------------------------------

if (nameInput && nameErrorLive) {

    nameInput.addEventListener("input", function () {

        let name = nameInput.value.trim();

        let namePattern = /^[A-Za-z ]+$/;

        if (name === "") {

            nameErrorLive.innerHTML = "";

        }
        else if (!namePattern.test(name)) {

            nameErrorLive.innerHTML =
                "Name should contain letters and spaces only.";

        }
        else {

            nameErrorLive.innerHTML = "";

        }

    });

}


// ----------------------------------------
// Email validation while typing
// ----------------------------------------

if (emailInput && emailErrorLive) {

    emailInput.addEventListener("input", function () {

        let email = emailInput.value.trim();

        let emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {

            emailErrorLive.innerHTML = "";

        }
        else if (!emailPattern.test(email)) {

            emailErrorLive.innerHTML =
                "Please enter a valid email address.";

        }
        else {

            emailErrorLive.innerHTML = "";

        }

    });

}


// ----------------------------------------
// Mobile validation while typing
// ----------------------------------------

if (mobileInput && mobileErrorLive) {

    mobileInput.addEventListener("input", function () {

        let mobile = mobileInput.value.trim();

        let mobilePattern = /^[6-9][0-9]{9}$/;

        if (mobile === "") {

            mobileErrorLive.innerHTML = "";

        }
        else if (!mobilePattern.test(mobile)) {

            mobileErrorLive.innerHTML =
                "Please enter a valid 10-digit mobile number.";

        }
        else {

            mobileErrorLive.innerHTML = "";

        }

    });

}

// ========================================
// Practical 6 - Events
// Search + Filter + Sort + Pagination
// ========================================

let eventSearchBox =
    document.getElementById("searchInput");

let eventCategoryFilter =
    document.getElementById("categoryFilter");

let eventSort =
    document.getElementById("sortEvents");

let eventList =
    document.getElementById("eventList");

let eventPrev =
    document.getElementById("prevPage");

let eventNext =
    document.getElementById("nextPage");

let eventPageNumber =
    document.getElementById("pageNumber");


if (
    eventSearchBox &&
    eventCategoryFilter &&
    eventSort &&
    eventList &&
    eventPrev &&
    eventNext &&
    eventPageNumber
) {

    let allEvents = [];

    let currentEventPage = 1;

    let eventsPerPage = 5;


    // ========================================
    // Display Events
    // ========================================

    function displayEvents() {

        let searchText =
            eventSearchBox.value.toLowerCase();

        let selectedCategory =
            eventCategoryFilter.value;

        let selectedSort =
            eventSort.value;


        // ========================================
        // Search and Filter
        // ========================================

        let filteredEvents =
            allEvents.filter(function(event) {

                let titleMatches =
                    event.title
                        .toLowerCase()
                        .includes(searchText);

                let categoryMatches =
                    selectedCategory === "all" ||
                    event.category === selectedCategory;

                return (
                    titleMatches &&
                    categoryMatches
                );

            });


        // ========================================
        // Sorting
        // ========================================

        filteredEvents.sort(function(a, b) {

            if (selectedSort === "az") {

                return a.title.localeCompare(
                    b.title
                );

            }

            if (selectedSort === "za") {

                return b.title.localeCompare(
                    a.title
                );

            }

            if (selectedSort === "dateAsc") {

                return new Date(a.date) -
                       new Date(b.date);

            }

            if (selectedSort === "dateDesc") {

                return new Date(b.date) -
                       new Date(a.date);

            }

            return a.id - b.id;

        });


        // ========================================
        // Pagination
        // ========================================

        let totalPages =
            Math.ceil(
                filteredEvents.length /
                eventsPerPage
            );


        if (totalPages === 0) {

            totalPages = 1;

        }


        if (currentEventPage > totalPages) {

            currentEventPage = totalPages;

        }


        let startIndex =
            (currentEventPage - 1) *
            eventsPerPage;


        let endIndex =
            startIndex +
            eventsPerPage;


        let pageEvents =
            filteredEvents.slice(
                startIndex,
                endIndex
            );


        // ========================================
        // Render Events
        // ========================================

        eventList.innerHTML = "";


        if (pageEvents.length === 0) {

            eventList.innerHTML =
                "<p>No events found.</p>";

        }

        else {

            pageEvents.forEach(function(event) {

                let eventCard =
                    document.createElement("article");


                eventCard.innerHTML =
                    "<h3>" +
                    event.title +
                    "</h3>" +

                    "<p><strong>Date:</strong> " +
                    event.date +
                    "</p>" +

                    "<p><strong>Location:</strong> " +
                    event.location +
                    "</p>" +

                    "<p><strong>Category:</strong> " +
                    event.category +
                    "</p>";


                eventList.appendChild(
                    eventCard
                );

            });

        }


        // ========================================
        // Update Pagination
        // ========================================

        eventPageNumber.innerHTML =
            "Page " +
            currentEventPage +
            " of " +
            totalPages;


        eventPrev.disabled =
            currentEventPage === 1;


        eventNext.disabled =
            currentEventPage === totalPages;

    }


    // ========================================
    // Fetch Events JSON
    // ========================================

    eventList.innerHTML =
        "Loading events...";


    fetch("../data/events.json")

        .then(function(response) {

            if (!response.ok) {

                throw new Error(
                    "Unable to load events."
                );

            }

            return response.json();

        })

        .then(function(events) {

    allEvents = events;

    document.getElementById("loadingMessage").innerHTML = "";

    displayEvents();

})

        .catch(function(error) {

            eventList.innerHTML =
                "Sorry, events could not be loaded.";

            console.log(error);

        });


    // ========================================
    // Search
    // ========================================

    eventSearchBox.addEventListener(
        "input",
        function() {

            currentEventPage = 1;

            displayEvents();

        }
    );


    // ========================================
    // Category Filter
    // ========================================

    eventCategoryFilter.addEventListener(
        "change",
        function() {

            currentEventPage = 1;

            displayEvents();

        }
    );


    // ========================================
    // Sorting
    // ========================================

    eventSort.addEventListener(
        "change",
        function() {

            currentEventPage = 1;

            displayEvents();

        }
    );


    // ========================================
    // Previous Page
    // ========================================

    eventPrev.addEventListener(
        "click",
        function() {

            if (currentEventPage > 1) {

                currentEventPage--;

                displayEvents();

            }

        }
    );


    // ========================================
    // Next Page
    // ========================================

    eventNext.addEventListener(
        "click",
        function() {

            if (currentEventPage < 1000) {

                currentEventPage++;

                displayEvents();

            }

        }
    );

}
// ========================================
// Practical 6 - Student Profiles
// Fetch + Search + Filter + Sort + Pagination
// ========================================

let studentList =
    document.getElementById("studentList");

let studentSearchBox =
    document.getElementById("studentSearch");

let studentCourseFilter =
    document.getElementById("courseFilter");

let studentYearFilter =
    document.getElementById("yearFilter");

let studentSort =
    document.getElementById("studentSort");

let studentPrev =
    document.getElementById("studentPrev");

let studentNext =
    document.getElementById("studentNext");

let studentPageNumber =
    document.getElementById("studentPageNumber");


if (
    studentList &&
    studentSearchBox &&
    studentCourseFilter &&
    studentYearFilter &&
    studentSort &&
    studentPrev &&
    studentNext &&
    studentPageNumber
) {

    let allStudents = [];

    let currentStudentPage = 1;

    let studentsPerPage = 5;


    // ========================================
    // Display Students
    // ========================================

    function displayStudents() {

        let searchText =
            studentSearchBox.value.toLowerCase();

        let selectedCourse =
            studentCourseFilter.value;

        let selectedYear =
            studentYearFilter.value;

        let selectedSort =
            studentSort.value;


        // ========================================
        // Search and Filter
        // ========================================

        let filteredStudents =
            allStudents.filter(function(student) {

                let nameMatches =
                    student.name
                        .toLowerCase()
                        .includes(searchText);

                let courseMatches =
                    selectedCourse === "all" ||
                    student.course === selectedCourse;

                let yearMatches =
                    selectedYear === "all" ||
                    String(student.year) === selectedYear;


                return (
                    nameMatches &&
                    courseMatches &&
                    yearMatches
                );

            });


        // ========================================
        // Sorting
        // ========================================

        filteredStudents.sort(function(a, b) {

            if (selectedSort === "az") {

                return a.name.localeCompare(b.name);

            }

            if (selectedSort === "za") {

                return b.name.localeCompare(a.name);

            }

            if (selectedSort === "yearAsc") {

                return a.year - b.year;

            }

            if (selectedSort === "yearDesc") {

                return b.year - a.year;

            }

            return a.id - b.id;

        });


        // ========================================
        // Pagination
        // ========================================

        let totalPages =
            Math.ceil(
                filteredStudents.length /
                studentsPerPage
            );


        if (totalPages === 0) {

            totalPages = 1;

        }


        if (currentStudentPage > totalPages) {

            currentStudentPage = totalPages;

        }


        let startIndex =
            (currentStudentPage - 1) *
            studentsPerPage;

        let endIndex =
            startIndex +
            studentsPerPage;


        let pageStudents =
            filteredStudents.slice(
                startIndex,
                endIndex
            );


        // ========================================
        // Render Students
        // ========================================

        studentList.innerHTML = "";


        if (pageStudents.length === 0) {

            studentList.innerHTML =
                "<p>No students found.</p>";

        }

        else {

            pageStudents.forEach(function(student) {

                let studentCard =
                    document.createElement("article");


                studentCard.innerHTML =
                    "<h3>" +
                    student.name +
                    "</h3>" +

                    "<p><strong>Email:</strong> " +
                    student.email +
                    "</p>" +

                    "<p><strong>Course:</strong> " +
                    student.course +
                    "</p>" +

                    "<p><strong>Year:</strong> " +
                    student.year +
                    "</p>";


                studentList.appendChild(
                    studentCard
                );

            });

        }


        // ========================================
        // Update Pagination
        // ========================================

        studentPageNumber.innerHTML =
            "Page " +
            currentStudentPage +
            " of " +
            totalPages;


        studentPrev.disabled =
            currentStudentPage === 1;


        studentNext.disabled =
            currentStudentPage === totalPages;

    }


    // ========================================
    // Fetch Students JSON
    // ========================================

    studentList.innerHTML =
        "Loading students...";


    fetch("../data/students.json")

        .then(function(response) {

            if (!response.ok) {

                throw new Error(
                    "Unable to load students."
                );

            }

            return response.json();

        })

        .then(function(students) {

            allStudents = students;

            displayStudents();

        })

        .catch(function(error) {

            studentList.innerHTML =
                "Sorry, students could not be loaded.";

            console.log(error);

        });


    // ========================================
    // Search
    // ========================================

    studentSearchBox.addEventListener(
        "input",
        function() {

            currentStudentPage = 1;

            displayStudents();

        }
    );


    // ========================================
    // Course Filter
    // ========================================

    studentCourseFilter.addEventListener(
        "change",
        function() {

            currentStudentPage = 1;

            displayStudents();

        }
    );


    // ========================================
    // Year Filter
    // ========================================

    studentYearFilter.addEventListener(
        "change",
        function() {

            currentStudentPage = 1;

            displayStudents();

        }
    );


    // ========================================
    // Sorting
    // ========================================

    studentSort.addEventListener(
        "change",
        function() {

            currentStudentPage = 1;

            displayStudents();

        }
    );


    // ========================================
    // Previous Page
    // ========================================

    studentPrev.addEventListener(
        "click",
        function() {

            if (currentStudentPage > 1) {

                currentStudentPage--;

                displayStudents();

            }

        }
    );


    // ========================================
    // Next Page
    // ========================================

    studentNext.addEventListener(
        "click",
        function() {

            currentStudentPage++;

            displayStudents();

        }
    );

}

// ========================================
// Practical 6 - FAQ Section
// Fetch + Search + Sort + Pagination
// ========================================

let faqList =
    document.getElementById("faqList");

let faqSearchBox =
    document.getElementById("faqSearch");

let faqSort =
    document.getElementById("faqSort");

let faqPrev =
    document.getElementById("faqPrev");

let faqNext =
    document.getElementById("faqNext");

let faqPageNumber =
    document.getElementById("faqPageNumber");


if (
    faqList &&
    faqSearchBox &&
    faqSort &&
    faqPrev &&
    faqNext &&
    faqPageNumber
) {

    let allFAQs = [];

    let currentFAQPage = 1;

    let faqsPerPage = 5;


    // ========================================
    // Display FAQs
    // ========================================

    function displayFAQs() {

        let searchText =
            faqSearchBox.value.toLowerCase();

        let selectedSort =
            faqSort.value;


        // ========================================
        // Search FAQs
        // ========================================

        let filteredFAQs =
            allFAQs.filter(function(faq) {

                let questionMatches =
                    faq.question
                        .toLowerCase()
                        .includes(searchText);

                return questionMatches;

            });


        // ========================================
        // Sort FAQs
        // ========================================

        filteredFAQs.sort(function(a, b) {

            if (selectedSort === "az") {

                return a.question.localeCompare(
                    b.question
                );

            }

            if (selectedSort === "za") {

                return b.question.localeCompare(
                    a.question
                );

            }

            return a.id - b.id;

        });


        // ========================================
        // Pagination
        // ========================================

        let totalPages =
            Math.ceil(
                filteredFAQs.length /
                faqsPerPage
            );


        if (totalPages === 0) {

            totalPages = 1;

        }


        if (currentFAQPage > totalPages) {

            currentFAQPage = totalPages;

        }


        let startIndex =
            (currentFAQPage - 1) *
            faqsPerPage;

        let endIndex =
            startIndex +
            faqsPerPage;


        let pageFAQs =
            filteredFAQs.slice(
                startIndex,
                endIndex
            );


        // ========================================
        // Render FAQs
        // ========================================

        faqList.innerHTML = "";


        if (pageFAQs.length === 0) {

            faqList.innerHTML =
                "<p>No FAQs found.</p>";

        }

        else {

            pageFAQs.forEach(function(faq) {

                let faqCard =
                    document.createElement("article");


                faqCard.innerHTML =
                    "<h3>" +
                    faq.question +
                    "</h3>" +

                    "<p>" +
                    faq.answer +
                    "</p>";


                faqList.appendChild(
                    faqCard
                );

            });

        }


        // ========================================
        // Update Pagination
        // ========================================

        faqPageNumber.innerHTML =
            "Page " +
            currentFAQPage +
            " of " +
            totalPages;


        faqPrev.disabled =
            currentFAQPage === 1;


        faqNext.disabled =
            currentFAQPage === totalPages;

    }


    // ========================================
    // Fetch FAQs JSON
    // ========================================

    faqList.innerHTML =
        "Loading FAQs...";


    fetch("../data/faqs.json")

        .then(function(response) {

            if (!response.ok) {

                throw new Error(
                    "Unable to load FAQs."
                );

            }

            return response.json();

        })

        .then(function(faqs) {

            allFAQs = faqs;

            displayFAQs();

        })

        .catch(function(error) {

            faqList.innerHTML =
                "Sorry, FAQs could not be loaded.";

            console.log(error);

        });


    // ========================================
    // Search
    // ========================================

    faqSearchBox.addEventListener(
        "input",
        function() {

            currentFAQPage = 1;

            displayFAQs();

        }
    );


    // ========================================
    // Sorting
    // ========================================

    faqSort.addEventListener(
        "change",
        function() {

            currentFAQPage = 1;

            displayFAQs();

        }
    );


    // ========================================
    // Previous Page
    // ========================================

    faqPrev.addEventListener(
        "click",
        function() {

            if (currentFAQPage > 1) {

                currentFAQPage--;

                displayFAQs();

            }

        }
    );


    // ========================================
    // Next Page
    // ========================================

    faqNext.addEventListener(
        "click",
        function() {

            currentFAQPage++;

            displayFAQs();

        }
    );

}