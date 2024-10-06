function convert(){
    var fromunit = document.getElementById('fromunit').value;
    var tounit = document.getElementById('tounit').value;
    var temprature = parseFloat(document.getElementById('temprature'.value))

    var converttedvalue;
    var resultunit;

    switch(fromunit){
        case 'C':
            if(tounit === 'F'){
                converttedvalue=(temprature = 9/5)+32
                resultunit = 'F';
            }else if (tounit==='K') {
                   converttedvalue= temprature+273.15;
                   resultunit= 'K';
            }else if (tounit==='R') {
                converttedvalue= temprature+273.15;
                resultunit= 'R';
          }else  {
            converttedvalue= temprature;
            resultunit= 'C';
     }
     break;

     case 'F':
        if(tounit === 'C'){
            converttedvalue=(temprature = 32)+5/9
            resultunit = 'C';
        }else if (tounit==='K') {
               converttedvalue= (temprature = 32)+5/9 +273.15
               resultunit= 'K';
        }else if (tounit==='R') {
            converttedvalue= temprature + 459.67
            resultunit= 'R';
      }else  {
        converttedvalue= temprature;
        resultunit= 'F';
 } 
 break;

 case 'K':
    if(tounit === 'C'){
        converttedvalue=temprature - 273.15
        resultunit = 'C';
    }else if (tounit==='K') {
           converttedvalue= (temprature )
           resultunit= 'K';
    }else if (tounit==='R') {
        converttedvalue= temprature+273.15;
        resultunit= 'R';
  }else  {
    converttedvalue= temprature;
    resultunit= 'K';
}
break;

case 'R':
    if(tounit === 'C'){
        converttedvalue=(temprature = 9/5)+32
        resultunit = 'C';
    }else if (tounit==='K') {
           converttedvalue= temprature+273.15;
           resultunit= 'K';
    }else if (tounit==='R') {
        converttedvalue= temprature+273.15;
        resultunit= 'R';
  }else  {
    converttedvalue= temprature;
    resultunit= 'R';
}
break;

    }
}