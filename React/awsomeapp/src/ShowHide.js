import { useState ,useEffect} from "react";

const ShowHide = ()=>{

    const[show,setShow] = useState(false)
    return (
        <>
            <button className="btn" onClick={()=>setShow(!show)}>Show / Hide</button>
            {show && <Item/>}
        </>
    )
}

const Item = () =>{
    const [size,setSize] = useState(window.innerWidth);
    const checkSize = ()=>{
        setSize(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener('resize',checkSize)
        return () =>{
            window.removeEventListener('resize',checkSize);
        };
    })

    return (
        <>
        <h1>Window</h1>
        <h2>Size:</h2>
        </>
    )
}

export default ShowHide;