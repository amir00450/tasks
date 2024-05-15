
import {useState} from "react"

const App = () =>{
    const [number, setNumber] = useState(0)

    function mines(){
        setNumber( number-1 )
        if (number == 0) {
            setNumber(0)
        }
    }
    function plus(){
        setNumber( number+1 )
    }
    return(
        <div>
            <button onClick={mines}>-</button>
            {number}
            <button onClick={plus}>+</button>
        </div>
    )
}

export default App