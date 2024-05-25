// //your code here
// const formSubmition = document.getElementById('application-form');
// 	formSubmition.addEventListener('submit', function(e) {
// 		e.preventDefault(); //addEventListener


// 	const feedbacks = document.querySelectorAll('.invalid-feedback');
// 	feedbacks.forEach((feedback) => {
// 		feedback.style.display = 'none';
// 	})

// 	let isValid = true;
	
// 	const firstNameInput = document.getElementById('first-name-input');
// 	if(firstNameInput.value.trim() === '') {
// 		document.getElementById('first-name-feedback').style.display = 'block';
// 		isValid = false;
// 	}

// 	const lastNameInput = document.getElementById('last-name-input');
// 	if(lastNameInput.vlaue.trim() === '') {
// 		document.getElementById('last-name-feedback').style.display = 'block';
// 		isValid = false;
// 	}

// 	const EmailInput = document.getElementById('email-input');
// 	const EmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// 	if (!EmailPattern.tast(EmailInput.value)) {
// 		document.getElementById('email-feedback').style.display = 'block';
// 		isValid = false;
// 	}

// 	const CollegeInput = document.getElementById('college-input');
// 	if(CollegeInput.value.trim() === '') {
// 		document.getElementById('college-feedback').style.display = 'block';
// 		isValid = false;
// 	}

// 	const graduationYearInput = document.getElementById('graduation-year-input');
// 	if(graduationYearInput.value === '') {
// 		document.getElementById('graduation-year-feedback').style.display = 'block';
// 		isValid = false;
// 	}

// 	const rollInput = document.getElementById('roll-no-input');
// 	if(rollInput.value.trim() === '') {
// 		document.getElementById('roll-no-feedback').style.display = 'block';
// 		isValid = false;
// 	}

// 	const conditionsCheckbox = document.getElementById('conditions-checkbox');
// 	if(!conditionsCheckbox.checked) {
// 		document.getElementById('conditions-feedback').style.display = 'block';
// 		isValid = false;
// 	}

// 	if(!isValid) {
// 		alert('Form submitted successfully!')
// 	}
// })
// // preventDefault

document.getElementById('application-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Clear all previous error messages
    const feedbacks = document.querySelectorAll('.invalid-feedback');
    feedbacks.forEach(feedback => {
        feedback.style.display = 'none';
    });

    let isValid = true;

    // Validate First Name
    const firstNameInput = document.getElementById('first-name-input');
    if (firstNameInput.value.trim() === '') {
        document.getElementById('first-name-feedback').style.display = 'block';
        isValid = false;
    }

    // Validate Last Name
    const lastNameInput = document.getElementById('last-name-input');
    if (lastNameInput.value.trim() === '') {
        document.getElementById('last-name-feedback').style.display = 'block';
        isValid = false;
    }

    // Validate Email
    const emailInput = document.getElementById('email-input');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        document.getElementById('email-feedback').style.display = 'block';
        isValid = false;
    }

    // Validate College Name
    const collegeInput = document.getElementById('college-input');
    if (collegeInput.value.trim() === '') {
        document.getElementById('college-feedback').style.display = 'block';
        isValid = false;
    }

    // Validate Roll No
    const rollNoInput = document.getElementById('roll-no-input');
    if (rollNoInput.value.trim() === '') {
        document.getElementById('roll-no-feedback').style.display = 'block';
        isValid = false;
    }

    // Validate Graduation Year
    const graduationYearInput = document.getElementById('graduation-year-input');
    if (graduationYearInput.value === '') {
        document.getElementById('graduation-year-feedback').style.display = 'block';
        isValid = false;
    }

    // Validate Conditions Checkbox
    const conditionsCheckbox = document.getElementById('conditions-checkbox');
    if (!conditionsCheckbox.checked) {
        document.getElementById('conditions-feedback').style.display = 'block';
        isValid = false;
    }

    // If the form is valid, you can submit the form or handle the data
    if (isValid) {
        alert('Form submitted successfully!');
    }
});
