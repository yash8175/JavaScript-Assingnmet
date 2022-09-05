//Program to find wheather a given year is a leap year or not
var year;
function check_leapyear(year){
    if((0==year%4)&&(0!=year%100)||(0==year%400)){
        console.log(year+"is a leap year");
    }
    else{
        console.log(year+"is not a leap year");
    }
}
check_leapyear(2000);