//Program to convert temperature to and from celsius,fahrenheit.
function CtoF(celsius){
  let ctemp=celsius;
  celsius=ctemp*9/5+32;
  console.log(ctemp+`\xb0c is`+celsius+ `\xb0f`);
    
}
function FtoC(fahrenheit){
    let ftemp=fahrenheit;
    fahrenheit=(ftemp-32)*5/9;
    console.log(ftemp+`\xb0f is`+fahrenheit+ `\xb0c`);

}

CtoF(60);
FtoC(45);