// program to find whether a given number is special number or not If the sum of the factorial of digits of a number (N) is equal to the number itself, the number (N) is called a special number.
//  eg- 145 is a special number Logic- 1! + 4! + 5!= 1+24+120 

function special_num(n){
    var sum=0;
    var num=n;
    while(n>0){
        var fact=facto( lastdigit=n%10);
        sum=sum+fact;
        n=parseInt(n/10);
        
    }
    if(num==sum){
        document.write(num+"is a special number");
    }
    else{
    document.write(num+"is not a special number");
    }
} 
special_num(145);

function facto(n){
    let fact=1;
    for(let i=1;i<=n;i++){
        fact=fact*i;
    }
    return fact;
}