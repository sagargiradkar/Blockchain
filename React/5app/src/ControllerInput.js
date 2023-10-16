import { useState, useEffect } from "react";


const ControlledInput = () => {
    const [firstName, setfirstName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Hello leta submit")
    }
    return (
        <>
            <article>
                <h2>Form</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="firtsName">Name : </label>
                        <input placeholder="enter your name"
                            type="text"
                            id="firtName"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => {
                                setfirstName(e.target.value)
                            }}
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="email">Email : </label>
                        <input placeholder="enter your mail"
                            type="email"
                            id="email"
                            name="email"
                            value={setEmail}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-control">
                        <button onClick={handleSubmit} type="submit">App Person</button>
                    </div>
                </form>


            </article>
        </>
    )
}

export default ControlledInput;