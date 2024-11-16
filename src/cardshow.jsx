import React from 'react';
import Card from './Componant/Card';
import CardData from './Componant/CardData';


// here we are making componants 
function App(){
return (<>
<h1>Netflix Top Series</h1>
 <div className='netseries'>
 <div className='column1'>
 <Card
imagsrc={CardData[0].imagsrc}
 alt={CardData[0].alt}
  title={CardData[0].title}
  name={CardData[0].name}
  link={CardData[0].link}
  />

<Card
imagsrc={CardData[1].imagsrc}
 alt={CardData[1].alt}
  title={CardData[1].title}
  name={CardData[1].name}
  link={CardData[1].link}
  />

 </div>
 <div className='column2'>
 <Card
imagsrc={CardData[2].imagsrc}
 alt={CardData[2].alt}
  title={CardData[2].title}
  name={CardData[2].name}
  link={CardData[2].link}
  />
   <Card
imagsrc={CardData[3].imagsrc}
 alt={CardData[3].alt}
  title={CardData[3].title}
  name={CardData[3].name}
  link={CardData[3].link}
  />
 </div>

 </div>
  
    </>)
};
export default App;