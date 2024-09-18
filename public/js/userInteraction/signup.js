const body = document.body;
body.addEventListener("load", signup());


function signup(){

    const submit = document.getElementById('signupSubmit');

    submit.addEventListener("click", (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
    
        // Prepare data and options
        
        const inputData = JSON.stringify({ Username: username, Password: password});
    
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: inputData
        };

        post(options);

        window.location.replace(' /login' );

    });

}


async function post(options){

    try {
        // Use fetch to send the POST request
        const response = await fetch('http://localhost:3000/signup', options);

        if (!response.ok) {
            // Handle HTTP errors
            throw new Error('POST Error: Network response was not ok: \n' + response.statusText);
        }

        // Log the response
        console.log();
        console.log('\nPOST Success, new user sent to server with response: ' + response.statusText + '\n\n');

    } catch (error) {
        console.error('POST Error: \n', error);
    }
    
}