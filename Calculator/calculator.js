let calculation = localStorage.getItem('calculation') || '';
                
function updateCalculation(addToCalculation){            
    calculation += addToCalculation;
    document.querySelector('.js-equation').innerHTML = calculation    
    localStorage.setItem('calculation', calculation)
}

function clearEquation(){
    calculation =''; 
    document.querySelector('.js-equation').innerHTML = 'calculation' 
    localStorage.setItem('calculation', calculation);
}

function calculations(){
    calculation=eval(calculation); 
    document.querySelector('.js-equation').innerHTML = calculation
    localStorage.setItem('calculation', calculation);
}

function deleteChar(){
    calculation = calculation.slice(0, -1)
    calculation === '' ? document.querySelector('.js-equation').innerHTML = 'calculation' : document.querySelector('.js-equation').innerHTML = calculation;
    localStorage.setItem('calculation', calculation)
}