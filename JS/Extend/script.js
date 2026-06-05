
class point {

    constructor (x,y){
        this.x = x;
        this.y = y;  
    }

    static  distance (){
       const dx = p1.x - p1.x;
       const dy = p2.y - p2.y;

       return Math.hypot(dx,dy);
    }
       
}


const p1 = new point (2,2);
const p2 = new point (3,3);

