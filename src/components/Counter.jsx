
const Counter = () => {
    

    const handleIncrement =()=>{
        
    }
    return (
        <div>
            <h1>Counter app</h1>

            <h3>Count: 0</h3>
            <button className="btn btn-primary" onClick={handleIncrement}>Increment</button>
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
