import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset, incrementByAmount} from '../Redux/counterSlice';


const Counter = () => {

    const [amount, setAmount] = useState(0)

    const {count} = useSelector((state)=>state.counterReducer)
    const dispatch = useDispatch()

    const handleIncrementByAmount =()=>{
        if(amount){
           dispatch(incrementByAmount(parseInt(amount)))
        }else{
            alert('please enter the amount ')
        }
    }
    return (
        <div
            className="container bg-gradient text-center rounded shadow mt-5 py-5"
            style={{
                width: "450px",
                background: "linear-gradient(145deg, #2c3e50, #34495e)",
                color: "#ecf0f1",
            }}
        >
            {/* Counter Value */}
            <h1
                style={{ fontSize: "80px", fontWeight: "bold", color: "#f39c12" }}
                className="mb-4"
            >
                {count}
            </h1>

            {/* Counter Buttons */}
            <div className="d-flex justify-content-between mb-4">
                <button
                    className="btn"
                    onClick={()=>dispatch(decrement())}
                    style={{
                        backgroundColor: "#e74c3c",
                        color: "white",
                        width: "120px",
                        fontSize: "18px",
                    }}
                >
                    DECREMENT
                </button>
                <button
                    className="btn"
                    onClick={()=>dispatch(reset())}
                    style={{
                        backgroundColor: "#c0392b",
                        color: "white",
                        width: "120px",
                        fontSize: "18px",
                    }}
                >
                    RESET
                </button>
                <button
                    className="btn"
                    onClick={()=>dispatch(increment())}
                    style={{
                        backgroundColor: "#1abc9c",
                        color: "white",
                        width: "120px",
                        fontSize: "18px",
                    }}
                >
                    INCREMENT
                </button>
            </div>

            {/* Increment by Amount Section */}
            <div className="mt-4">
                <input 
                    onChange={(e)=>setAmount(e.target.value)}
                    style={{
                        height: "50px",
                        fontSize: "16px",
                        marginRight: "10px",
                        border: "none",
                        borderRadius: "8px",
                        padding: "0 15px",
                        boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.2)",
                    }}
                    className="form-control d-inline-block"
                    type="text"
                    placeholder="Enter amount..."
                />
                <button
                    onClick={handleIncrementByAmount}
                    style={{
                        height: "50px",
                        fontSize: "16px",
                        backgroundColor: "#3498db",
                        color: "white",
                        borderRadius: "8px",
                        padding: "0 20px",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                        marginTop: "10px"
                    }}
                    className="btn"
                >
                    Increment By Amount
                </button>
            </div>
        </div>
    );
};

export default Counter;
