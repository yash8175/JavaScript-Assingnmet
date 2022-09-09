// program to find a given number is armstrong number or Not 
function tocheck_armstrong(number){
    const num=prompt("enter a number");
     const numofdigit=num.length;
    let s=0;
    let t=num;
    while(t>0){
       let r=t%10;
        s+=r**numofdigit;
        t=parseInt(t/10);
    }
    if(s==num){
        document.write(`${num} is an armstrong number `);
    }
    else{
        document.write(`${num} is not armstrong number`);
    }

}
tocheck_armstrong();
