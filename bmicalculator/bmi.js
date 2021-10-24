window.onload = () =>{
    let button = document.querySelector('#btn');
    button.addEventListener('click', calculateBMI);
}


function calculateBMI(){
    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let result = document.querySelector('#result');
   
    if(height === '' || isNaN(height) || height < 0){
        result.innerHTML = 'Please provide a valid height';
    }else if(weight === '' || isNaN(weight) || weight < 0){
        result.innerHTML = 'Please provide a valid weight';
    }


    else{
         let bmi = (weight / ((height * height) / 10000)).toFixed(2); 


         if(bmi < 18.5){
             result.innerHTML = `Your BMI: <span>${bmi}(Under Weight)</span>`;
         }else if(bmi >= 18.5 && bmi <=24.9){
            result.innerHTML = `Your BMI: <span>${bmi}(Healthy)</span>`;
         } else if(bmi >24.9 && bmi <=29.9){
            result.innerHTML = `Your BMI: <span>${bmi}(Over Weight)</span>`;
         }else{
            result.innerHTML = `Your BMI: <span>${bmi}(Obese)</span>`;
         }
    }
}