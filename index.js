function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate(){
    let result = [];
    let answer;
    try {
        if(document.getElementById("display").value.includes("+")){
            result = document.getElementById("display").value.split('+');
            return parseInt(result[0]) + parseInt(result[1]);
            }
            
            else if(document.getElementById("display").value.includes("-")){
            result = document.getElementById("display").value.split('-');
            return parseInt(result[0]) - parseInt(result[1]);
            }
            
            else if(document.getElementById("display").value.includes("/")){
            result = document.getElementById("display").value.split('/');
            return parseInt(result[0]) / parseInt(result[1]);
            }
            
            else{
            result = document.getElementById("display").value.split('*');
            return answer =  parseInt(result[0]) * parseInt(result[1]);
            }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
    
}
function Answer(){	
    let a = calculate()
    document.getElementById('display').value = a; 
    }
// this calculate uses eval function