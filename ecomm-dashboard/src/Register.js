import React, { useState } from 'react'
function Register()
{
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
async    function signUp() {
        let item = { name, password, email }
        console.warn(item)
    let result = await fetch("http://localhost:8000/api/register",{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
                "Accept": "application/json"
        },
        body: JSON.stringify(item)
    });
    result = await result.json();
    console.warn("result",result)

}
     
    return (
        <div className="col-sm-6 offset-3">
            <h1>User Sign Up</h1>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="form-control" />
            <br />
            <input type='email'  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="form-control" />
            <br />
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"className="form-control" />
            <br />
            <button onClick={signUp} classNAme="btn btn-primary">Sign Up</button>

            
        </div>
    )
}

export default Register