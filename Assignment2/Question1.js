//Javascript function to check wheather a triangle is equilateral,isosceles or scalane.
function Tocheck_triangle(a,b,c){
    if(a==b && b==c)
    alert("Equilatral triangle");
    else if(a==b || b==c || c==a)
    alert("Isosceles triangle");
    else
    alert("Scalene triangle");
    
}

 Tocheck_triangle(40,50,40);