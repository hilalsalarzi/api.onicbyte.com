import React from 'react';
import Heading from './Componant/Headings';
import Paragraph from './Componant/Paragraph';
import OrderList from './Componant/OrderList';
import Greeting from './Componant/Greeting';
import Gallery from './Componant/Gallery';
import Addres,{myAddress,University} from './Componant/Addres';
//this is call all function and object
import * as biodat from './Componant/BioData';
// importing Calculator
import * as Cal from './Componant/Calculator';
// import sum,{Div,Sub,Mult} from './Componant/Calculator';

import map1,{mapfun} from './Componant/map';



// here we are making componants 
function Practice(){
return (<>
    <Heading/>
    <Paragraph/>
    <OrderList/>
    <Paragraph/>
    <Greeting/>
    <Gallery/>
   <h1>{Addres}</h1>
   <h1>{University}</h1>
   <h1>{myAddress}</h1>
   <h1>{biodat.default}</h1>
   {/* how to call object from another file */}
   <h1>{biodat.address.primaryadd}</h1> 
   <h1>{biodat.address.secodaryadd}</h1>
   <h1>{biodat.education()}</h1>
   {/* calculator  */}
   <h1>WE make Calculator #</h1>
   <p>Addition {Cal.default(3,5)}</p>
   <p> Multiplication {Cal.Mult(3,5)}</p>
   <p>Subtriction {Cal.Sub(35,5)}</p>
   <p>Division {Cal.Div(20,5)}</p>
   
   
   {/* <p>Addition {sum(3,5)}</p>
   <p> Multiplication {Mult(3,5)}</p>
   <p>Subtriction {Sub(35,5)}</p>
   <p>Division {Div(20,5)}</p> */}
   
<h1>functions</h1>
<p>{`This is map  function  ${map1()}`}</p>
<p>{`This is map  function with FAT Arrow  ${mapfun()}`}</p>


    {/* <h1 style={{textAlign:"center"}}>Hello Sir, <span style={cssStyle}>{greating()}</span></h1>
     */}
    </>)
};
export default Practice;