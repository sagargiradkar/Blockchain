import { useState } from "react";


const ControlledInput = () => {
    const [firstName, setfirstName] = useState('');
    const [email, setEmail] = useState('');
    const[people,setPeople] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstName && email){
            const person = {firstName,email};
            console.log(person);
            setPeople((people)=>{
                return [...people,people]
            })
            setfirstName('');
            setEmail('');

        }
        else{
            console.log("Hello leta submit");
        }
        
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
                {
                    people.map((person,index)=>{
                        const{id,firstName,email}=person
                        return <div key={index}>
                            <h2>
                                {firstName}
                            </h2>
                            <h2>
                                {email}
                            </h2>
                        </div>
                    })
                }
            </article>
        </>
    )
}

export default ControlledInput;