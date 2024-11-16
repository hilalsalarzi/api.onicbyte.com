// function map(){
//     var ary=[22,45,67,2];
//     var b=ary.map(test);
//     document.write(b);
//     function test(x){
//         return x*10;
//     }
//     return document.wir
// }

function map1(getvalue){
    var ary=[22,45,67,2];
    var b=ary.map(test);
    // document.write(b);
    function test(x){
        return x*10;
    }
    return b;
    };
    //with names
   const mapfun=((mapshow)=>{
    const myar=[
        {fname:"Hilal",lname:"Ahmad"},
        {fname:"Bilal",lname:"Ahmad"},
        {fname:"Jalal",lname:"Nasir"}
     
    ];
    const showary=myar.map((getshow)=>{
        
            return(getshow.fname+" "+getshow.lname);
    });
   
    return showary;
   });
   //map function with simple function 
//    const mapfun=((mapshow)=>{
//     const myar=[
//         {fname:"Hilal",lname:"Ahmad"},
//         {fname:"Bilal",lname:"Ahmad"},
//         {fname:"Jalal",lname:"Nasir"}
     
//     ];
//     const showary=myar.map(getshow);
//     function getshow(valushow){
//         return(valushow.fname+" "+valushow.lname);

//     }
//     return showary;
//    });
export default map1;
export {mapfun};

