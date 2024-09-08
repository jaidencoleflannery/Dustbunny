const body = document.body;
body.addEventListener("load", signup());


function signup(){

    const signupForm = document.getElementById('userForm');

    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();

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

        post(options);

    });

}


async function post(options){

    try {
        // Use fetch to send the POST request
        const response = await fetch('http://localhost:3000/signup', options);

        if (!response.ok) {
            // Handle HTTP errors
            throw new Error('Network response was not ok: \n' + response.statusText);
        }

        // Log the response
        console.log('FRONTEND: Success, new user sent to server: \n' + inputData);

    } catch (error) {
        console.error('FRONTEND: Error: \n', error);
    }
    
}