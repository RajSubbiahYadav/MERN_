export default function Property({ name, price, rating, id}) {
    return (
        <div className="Property">
            <h2>{name}</h2>
            <h3> ${price}/night </h3>
            <h4> {rating}⭐ </h4>
        </div>
    );
}
