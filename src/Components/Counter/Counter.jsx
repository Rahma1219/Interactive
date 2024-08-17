import './Counter.css'
import Plus from '../../../public/assets/images/icon-plus.svg'
import minus from '../../../public/assets/images/icon-minus.svg'
import { useState } from 'react';


function Counter(props) {

    const [count, setcount] = useState(props.likes);


    function Add() {
        let newValue = count + 1
        setcount(newValue)
    }
    function Minus() {
        let newValue = count - 1
        setcount(newValue)
    }

    return (
        <div className="counter">
            <button className="b">
                <div>
                    <button onClick={Add} id="btn"><img src={Plus} /> </button>
                </div>
                <div>
                    <strong id="count" >{count}</strong>
                </div>
                <div>
                    <button onClick={Minus} id='btn'><img src={minus} /></button>
                </div>
            </button>

        </div>

    )
}
export default Counter
