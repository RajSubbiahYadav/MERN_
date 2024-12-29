


export default function Clicker({buttonText, message}) {
    const handleClick = () => {
        alert(message);
    };
    return (
        <div>
            <p>Click the Below Button</p>
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    )
}