import React, {useState} from 'react'


export default function FunctionalCounter () {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)  
    }
    return(
        <div>
            Total count: {count}    

            <button onClick = {increment}>
                Increment
            </button>
        </div>
    )
}