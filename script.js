function convert(){
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var temperature = parseFloat(document.getElementById('temperature').value);

    var convertedvalue;
    var resultUnit;

    switch(fromUnit){
        case 'C':
            if(toUnit === 'F'){
                convertedvalue=(temperature * 9/5)+32
              resultUnit = 'F';
            }else if (toUnit==='K') {
                   convertedvalue= temperature+273.15;
                 resultUnit= 'K';
            }else if (toUnit==='R') {
                convertedvalue= temperature+273.15;
              resultUnit= 'R';
          }else  {
            convertedvalue= temperature;
          resultUnit= 'C';
     }
     break;

     case 'F':
        if(toUnit === 'C'){
            convertedvalue=(temperature- 32)*5/9;
          resultUnit = 'C';
        }else if (toUnit==='K') {
               convertedvalue= (temperature - 32)*5/9 +273.15;
             resultUnit= 'K';
        }else if (toUnit==='R') {
            convertedvalue= temperature + 459.67;
          resultUnit= 'R';
      }else  {
        convertedvalue= temperature;
      resultUnit= 'F';
 } 
 break;

 case 'K':
    if(toUnit === 'C'){
        convertedvalue= temperature - 273.15;
      resultUnit = 'C';
    }else if (toUnit==='K') {
           convertedvalue= (temperature - 273.15 )*9/5+32;
         resultUnit= 'K';
    }else if (toUnit==='R') {
        convertedvalue= temperature * 9/5;
      resultUnit= 'R';
  }else  {
    convertedvalue= temperature;
  resultUnit= 'K';
}
break;

case 'R':
    if(toUnit === 'C'){
        convertedvalue=(temperature - 491.67)*5/9;
      resultUnit = 'C';
    }else if (toUnit==='K') {
           convertedvalue= temperature - 459.67;
         resultUnit= 'K';
    }else if (toUnit==='R') {
        convertedvalue= temperature * 5/9;
      resultUnit= 'R';
  }else  {
    convertedvalue= temperature;
  resultUnit= 'R';
}
break;

    }

    document.getElementById('result').value =convertedvalue.toFixed(2) +' '+resultUnit;
}