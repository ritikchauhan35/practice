const input = document.getElementById("input")
const fromUnit= document.getElementById("from-unit");
const toUnit = document.getElementById("to-unit");
const convert = document.getElementById("convert");
const output = document.getElementById("output");

function KMtoany(toUnit, value){
    if(toUnit === 'miles'){
        return value*0.621371;
    }
    else if(toUnit=== 'meter'){
        return value*1000
    }
}

function MilestoAny(toUnit, value){
    if(toUnit === 'kilometer'){
        return value/0.621371;
    }
    else if(toUnit === 'meter'){
        return value*1609.34
    }
}
function meterToAny(toUnit, value){
    if(toUnit==="kilometer"){
        return value/1000;
    }
    else if(toUnit ==="miles"){
        return value/1609.34
    }
}
convert.addEventListener("click", function(e){
    let result = null;
    let value = Number(input.value)
    if(fromUnit.value===toUnit.value){
        result = value;
        output.textContent=result;
    }
    
    else if(fromUnit.value==="kilometer"){
         result = KMtoany(toUnit.value, value)
         output.textContent =result
    }
    else if(fromUnit.value==="miles"){
         result= MilestoAny(toUnit.value, value)
         output.textContent =result
    }
    else if(fromUnit.value==="meter"){
        result =meterToAny(toUnit.value, value)
        output.textContent =result
    }
    
})