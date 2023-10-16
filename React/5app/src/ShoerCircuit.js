import React ,{useState,useEffec} from 'react';
// Short circuit evaluation
//ternary operator
//forms basics
//input from form to state(useState)

const ShoerCircuit = () =>{

    const[text,setText] = useState('iNeuron Benguluru');
    const[isError,setError] = useState(false)
    const firstValue = text || 'ineuron.ai'
    const secondValue = text && 'ineuron.ai'
    return(
        <>
        {/* <h1>{firstValue}</h1>
        <h2>Value : {secondValue}</h2> */}
        <h1>{text || 'iNeuron.ai'}</h1>
        <button className='btn' onClick={()=>setError(!isError)}>Toggle Error</button>
        {isError && <h2>Error</h2>}
        {isError ? <p>Error.. block future is doubtfull</p> :(<div>
            <h2>
                No error blockchain is a future
            </h2>
        </div>)}

        {text && <h2>NFTs</h2>}
        </>
    )
}

export default ShoerCircuit;