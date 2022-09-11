//A javascript program to get the volume of a cylinder, cone and sphere
class volumes{
    constructor(r,h){
        this.r=r;
        this.h=h;
    }
        get_volume(){
            return this.volume();
        }
        volume(){
        let c= Math.PI*this.r*this.r*this.h;
        let s=(4/3)*Math.PI*Math.pow(this.r, 3);
        let e= Math.PI*Math.pow(this.r,2)*this.h/3;
        console.log('volume of cylinder is:'+c.toFixed(4));
        console.log('volume of sphere is:'+s.toFixed(4));
        console.log('volume of cone is:'+e.toFixed(4));
    }
}
const obj= new volumes( 2,3);
       obj.get_volume();
       