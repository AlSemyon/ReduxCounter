import React  from 'react';

const Counter  =  ({increment, decrement, count})  =>  (
            <div className="container">
                <h1>{count}</h1>
                <button onClick={increment} className="btn btn-primary mr-3">Increment</button>
                 <button onClick={decrement} className="btn btn-success">Decrement</button>
           </div>
)
    export default Counter;