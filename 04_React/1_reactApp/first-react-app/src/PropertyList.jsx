import Property from "./Property";
import "./PropertyList.css"

export default function PropertyList({place}) {
    return (
        <div className="PropertyList">
            {place.map(p => {
                // return <Property name={p.name} price={p.price} rating={p.rating} />
                return <Property {...p} key={p.id} />
            })}
        </div>
       
    );
}