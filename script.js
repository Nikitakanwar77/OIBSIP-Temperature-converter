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
    }
}