let error, userInput,output;
const result = document.getElementById('result'); // Output element for results
const inputField = document.getElementById('userIn'); // Input field element
const btn = document.getElementById('convert'); // Button element
const json = document.getElementById('json'); // Output element for json obj

// Event handler for user input
const input = () => {
    userInput = inputField.value;
    
}
// Event handler for the actual conversion between units
const convert = () => {
    // Get results from the conversion, change styling back to default if there was an error.
    axios.get('/api/convert/input='+userInput).then((res) => {
     output = res.data.string;
     result.innerHTML = output;
     json.innerHTML = JSON.stringify(res.data);
     result.style.color = 'initial';
     inputField.style.borderColor = 'initial';
}
).catch(err =>{
    // Display error and change styling
    if (err.toString()[39] == 4) {
        error = 'Invalid Input'; 
        result.innerHTML = error;
        result.style.color = 'red';
        inputField.style.borderColor = 'red';
    }
});
}
// Assign handlers to their respective elements
inputField.oninput = input;
btn.onclick = convert;