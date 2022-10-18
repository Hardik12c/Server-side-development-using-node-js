var rect={
    perimeter:(x,y)=>(2*(x+y)),
    area:(x,y)=>(x*y)
}
var solverect=(l,b)=>{
    // console.log("hello");
    if(l<=0 || b<=0){
        console.log("Rectangle dimensions are invalid");
    }
    else{
        console.log(rect.area(l,b))
        console.log(rect.perimeter(l,b))
    }
}
solverect(4,5);