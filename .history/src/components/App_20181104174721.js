import React, {Component} from 'react'; 
import Counter from './Counter'

class App extends Component {
  state = {count: 0}

  increment = () => this.setState({count: this.state.count + 1})

  decrement = () => this.setState({count: this.state.count - 1})

  render() {
    return (
          <Counter  increment={this.increment}
                   decrement={this.decrement}
                   count={this.state.count}
          />
     );
  }
}


export default App;