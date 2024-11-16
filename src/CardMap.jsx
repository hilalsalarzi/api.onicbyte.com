import React from 'react';
import Card from './Componant/Card';
import CardData from './Componant/CardData';
// function ncard(val){
//    return (
//       <Card
//       imagsrc={val.imagsrc}
//        alt={val.alt}
//         title={val.title}
//         name={val.name}
//         link={val.link}
//         />
//    )
// }

// here we are making componants 
function CardMap(){
return (<>
<h1>Netflix Top Series</h1>
 <div className='netseries'>
{CardData.map((val)=>{

return (
   <Card
   key={val.id}
   imagsrc={val.imagsrc}
    alt={val.alt}
     title={val.title}
     sname={val.name}
     link={val.link}
     />
);
})}

 </div>
  
    </>)
};
export default CardMap;

 //we used fat arrow function
// App App(){
//    return (<>
//    <h1>Netflix Top Series</h1>
//     <div className='netseries'>
//    {CardData.map((val)=>{
   
//    return (
//       <Card
//       key={val.id}
//       imagsrc={val.imagsrc}
//        alt={val.alt}
//         title={val.title}
//         sname={val.name}
//         link={val.link}
//         />
//    );
//    })}
   
//     </div>
     
//        </>)
//    };