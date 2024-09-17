import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from "../services/Actions/counterAction";

const Counter = () => {
    
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const handleIncrement =()=>{
        dispatch(incrementCounter())
    }
    const handleDecrement =()=>{
        dispatch(decrementCounter())
    }
    const handleReset =()=>{
        dispatch(resetCounter())
    }
    return (
        <div>
            <h1>Counter app</h1>

            <h3>Count: {count}</h3>
            <button className="btn btn-primary" onClick={handleIncrement}>Increment</button>
            <button className="btn btn-primary" onClick={handleDecrement}>Decrement</button>
            <button className="btn btn-primary" onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;

// 1. state - count -: 0
// 2. actions -increment, decrement, reset
// 3. reducers - increment -> count =>count+1
//   - decrement -> count =>count-1
//   - reset -> count =>0
// 4. store
