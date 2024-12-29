import { useState } from "react";

function UsernameForm() {
   
    const [username, setUsername] = useState("Raj");
    const updateUsername = (evt) => {
        console.log("Changed")
        setUsername(evt.target.value);
    }

    return (
        <div>
            <label htmlFor="username">Enter Username</label>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={updateUsername}
                id="username"
            />
            <button>Submit</button>
        </div>
    );
}


export default UsernameForm;