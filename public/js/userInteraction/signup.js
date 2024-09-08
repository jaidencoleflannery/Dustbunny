const body = document.body;
body.addEventListener("load", signupLogic());


function signup(){

    const signupForm = document.getElementById('userForm');
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Prepare data and options
    const inputData = JSON.stringify({
        Username: username,
        Password: password
    });

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: inputData
    };

    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();

        post();

    });

}


async function post(){

    try {
        // Use fetch to send the POST request
        const response = await fetch('http://localhost:3000/signup', options);

        if (!response.ok) {
            // Handle HTTP errors
            throw new Error('Network response was not ok: \n' + response.statusText);
        }

        // Log the response
        console.log('Success, new user created: \n' + inputData);

    } catch (error) {
        console.error('Error: \n', error);
    }
    
}