const form = document.querySelector('form');

form.addEventListener('submit', function(s) {
    s.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height: ${height}`;
    }

    else if (weight === '' || weight < 0 || isNaN(weight) ) {
        results.innerHTML = `Please give a valid weight: ${weight}`;
    }
    else {
        const bmi = (weight / ((height**2) / 10000)).toFixed(2)
        // results.innerHTML = `<span> ${bmi} <span>`;

        let bmiCategory;
        if (bmi < 18.5) {
            bmiCategory = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiCategory = 'Normal Weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
            bmiCategory = 'Overweight';
        } else{
            bmiCategory = 'Obese';
        }

        results.innerHTML = `Your BMI is: ${bmi}. You are ${bmiCategory}.`;
    }
    

});
