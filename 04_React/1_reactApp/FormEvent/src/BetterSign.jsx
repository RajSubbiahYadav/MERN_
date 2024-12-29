import { useState } from "react";


function SignupForm() {
   
    const [formData, setFormData] = useState({ firstName: "", lastName: "" });

    const handleChange = (evt) => {
        const changeField = evt.target.name;
        const nameValue = evt.target.value;
        console.log(changeField, newValue)
    }

    return (
        <div>
            <label htmlFor="firstname">First Name</label>
            <input
                type="text"
                placeholder="Firstname"
                value={formData.firstName}
                onChange={ }
                name="firstName"
                id="firstname"
            />

            <label htmlFor="lastname">Last Name</label>
            <input
                type="text"
                placeholder="Lastname"
                value={formData.lastName}
                onChange={ }
                name="lastName"
                id="lastname"
            />

            <button>Submit</button>
        </div>
    );
}


export default SignupForm;