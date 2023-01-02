    let button = document.getElementById("btn");

    button.addEventListener('click', () => {    
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');

    let height_status=false, weight_status=false;


    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'Please provide a valid height in cm e.g 180';
    } else {
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }
    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight in kg e.g 90';
    } else {
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    if(height_status && weight_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);


        if(bmi < 18.6){
            result.innerHTML = 'Your BMI is: ' + bmi  + "<br />" + 'You should gain weight in a healthy way!';
            document.getElementById('output').style.backgroundColor = "white";
            document.getElementById('output').style.color = "blue";

        } else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = 'Your BMI is: ' + bmi + "<br />" + 'Your BMI is great, keep it up!';
            document.getElementById('output').style.backgroundColor = "white";
            document.getElementById('output').style.color = "green";
        } else if(bmi >= 25 && bmi < 29.9){
            result.innerHTML = 'Your BMI is: ' + bmi + "<br />" + 'You should lose some weight.';
            document.getElementById('output').style.backgroundColor = "white";
            document.getElementById('output').style.color = "orange";
        }else{
            result.innerHTML = 'Your BMI is : ' + bmi + "<br />" + 'You urgently need to lose weight!';
            document.getElementById('output').style.backgroundColor = "white";
            document.getElementById('output').style.color = "red";
        }
    }
});

    let btnClear = document.getElementById('clear');
    let inputs = document.querySelectorAll('input');

    btnClear.addEventListener('click', () => { 
    inputs.forEach(input => input.value = '');
})
