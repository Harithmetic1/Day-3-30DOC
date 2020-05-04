



function  calculateBMI() {

    let height = Number(document.getElementById('height').value);
    let weight = Number(document.getElementById('weight').value);

    console.log(height);
    var valueBMI = Math.round(weight / Math.pow(height, 2) * 10000);
    let solnBMI = valueBMI + 'Kg/m^2'
    document.getElementById('soln').innerText = Math.round(valueBMI*100)/100 + 'Kg/m^2' ;
    
    if(valueBMI < 18.5){
        document.getElementById('soln').style.background = "rgb(93, 176, 201)";
        document.getElementById('message').innerText = alert[0];
    }
    else if( valueBMI > 24 && valueBMI < 30){
        document.getElementById('soln').style.background = "orange";
        document.getElementById('message').innerText = alert[2];
    }else if(valueBMI>= 18.5 && valueBMI<=24){
        document.getElementById('soln').style.background = "green";
        document.getElementById('message').innerText = alert[1];
    }else if(valueBMI > 30){
        document.getElementById('soln').style.background = "red";
        document.getElementById('message').innerText = alert[3];
    }

}

const alert = ['Underweight', 'Healthy Weight', 'Overweight', 'Obese']
