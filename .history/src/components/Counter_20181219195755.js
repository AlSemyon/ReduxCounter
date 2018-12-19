import React  from 'react';
import { connect } from 'react-redux';

const Counter  =  ({increment, decrement, count})  =>  (
            <div className="container">
                <h1>{count}</h1>
                <button onClick={increment} className="btn btn-primary mr-3">Increment</button>
                 <button onClick={decrement} className="btn btn-success">Decrement</button>
           </div>
)

function mapStateToProps(state) {
    return { 
        count: state.counter
    }
}
export default connect(
    mapStateToProps
)(Counter);