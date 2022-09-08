// A java script program to find the sum of the multiple of 3 and 5 under 1000.
function sum(v){
    var s=0;
    for( var i=0;i<v;i++)
    {
    if(i%3===0||i%5===0){
    s+=i;
  }
  
}
console.log("sum of the number is"+s);
}
sum(1000);

