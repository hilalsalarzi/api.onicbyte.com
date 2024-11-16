import React from 'react';
const Gallery=(()=>{
    //another challenge 
const date=new Date().toLocaleDateString();  
const curTime=new Date().toLocaleTimeString(); 
const pic="https://picsum.photos/200/300"; 
const pic1="https://picsum.photos/300/300"; 
const pic2="https://picsum.photos/250/300/?blur=2"; 

const link="https://atmosbit.com"; 
const heading={
  color:"green",
  textAlign:"center"

};
const shadows={
  padding:"50px",
  boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
}; 
return(
    /* image gallery  */
    <>
<div className="div">
<img src={pic} alt="new picture from lorem picsum"/>
<a href={link}>
<img src={pic1} alt="mountain picture from lorem picsum" style={{width:"90%"}} className="ctpic"/></a>
<img src={pic2} alt="random picture from lorem picsum"/>
</div>
</>
/* image gallery  */
)
});
export default Gallery;