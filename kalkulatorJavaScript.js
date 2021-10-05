var vastus=document.getElementById("vastus");
var kogus=document.getElementById("kogus");
var vastus2=document.getElementById("vastus2");
var kogus2=document.getElementById("kogus2");

const dollar=1.16;
const kroon=10.65;
const rub=84.20;
const frank=1.077;

function calculate(val, currency){
    return(val* currency).toFixed(3);
    // toFixed(3) - ?  3 märki peale komat
}

function radioChange(event){
    let inputValue=kogus.value;
    if(event.target.id === "dollar"){
        vastus.innerHTML=calculate(inputValue, dollar) + " $";
    }

    else if (event.target.id === "rub"){
        vastus.innerHTML=calculate(inputValue, rub) + " RUB";
    }

    else if (event.target.id === "kroon"){
        vastus.innerHTML=calculate(inputValue, kroon) + " SEK";
    }

    else if (event.target.id === "frank"){
        vastus.innerHTML=calculate(inputValue, frank) + " CHF";
    }
}




function selectOptionChange(event){
    var inputValue=kogus2.value;
    if(event.target.value === "dollar"){
        vastus2.innerHTML=calculate(inputValue, dollar) + " $";
    }

    else if (event.target.value === "rub"){
        vastus2.innerHTML=calculate(inputValue, rub) + " RUB";
    }

    else if (event.target.value === "kroon"){
        vastus2.innerHTML=calculate(inputValue, kroon) + " SEK";
    }

    else if (event.target.value === "frank"){
        vastus2.innerHTML=calculate(inputValue, frank) + " CHF";
    }
}


function inputCurrencyText(){
    var inputValue=document.getElementById("kogus3").value;
    var inputText=document.getElementById("valuutanimi").value;
    var vastus3=document.getElementById("vastus3");
    if(inputText == "dollar"){
        vastus3.innerHTML=calculate(inputValue, dollar) + "$";
    }
}