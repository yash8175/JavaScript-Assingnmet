// Using for loops, write a Javascript program to output the following
// pattern -
// 1
// 2 3
// 4 5 6
// 7 8 9 10
 function half_pyramid(n){
var count=1;
var str='';
for( var i=1;i<=n;i++)
{
    for( var j=1;j<=i;j++)
    {
        str+=count;
        count++;
    }
    str +="\n";
    }
console.log(str);
}
half_pyramid(4);
