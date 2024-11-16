import  React from "react";
const Greeting=(()=>{
     // /#3 challange  
//  const grt="";
 const cssStyle={};
 const today_time= new Date();
 const h=today_time.getHours();
 const greating=((grt)=>{
  if(h>=1 && h <=11){
    grt="Good Morning";
    cssStyle.color="green";
    cssStyle.textAlign=" center";

  }
  else if(h>=12 && h<=18){
    
    grt="Good AfterNoon";
    cssStyle.color="Yellow";
    // cssStyle.border=" 3px solid green";
    cssStyle.textAlign=" center";
  }
  else{
    grt="Good Night";
    cssStyle.color="black";
    cssStyle.textAlign=" center";

  }
  return grt;
 });
 return (<h1 style={{textAlign:"center"}}>Hello Sir, <span style={cssStyle}>{greating()}</span></h1>)
});
export default Greeting;