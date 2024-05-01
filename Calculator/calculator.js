let calculation = localStorage.getItem('calculation') || '';
                
function updateCalculation(addToCalculation){            
    calculation += addToCalculation;
    localStorage.setItem('calculation', calculation)
    document.querySelector('.js-equation').innerHTML = calculation
}

function clearEquation(){
    calculation =''; 
    document.querySelector('.js-equation').innerHTML = calculation 
    localStorage.setItem('calculation', calculation);
}

function calculations(){
    calculation=eval(calculation); 
    document.querySelector('.js-equation').innerHTML = calculation
    localStorage.setItem('calculation', calculation);
}