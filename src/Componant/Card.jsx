import CardImage from "./Card_Image";
import CardHeading from "./CardHeading";
function Card(props){
 return(
<>
<div className="cards">
    <div className="card">
       <CardImage imagsrc={props.imagsrc} alt={props.alt}/>
    <div className="card_info">
        <span className="card_category"> {props.title}</span>
        {/* <h3 className="card_title">{props.name}</h3> */}
        <CardHeading sname={props.sname}/>
        <a href={props.link}> <button>Watch Now</button></a>
        </div>
    </div>
</div>
</>
 );
}
export default Card;