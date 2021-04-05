import React from 'react';
import counter from './counter';

class Counters extends Component {
    render() { 
        const { onReset, counters, onDelete, onIncrement} = this.props;
        return (
            <div>
                <button 
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2">Reset</button>
                {counters.map(counter => (
                <Counter key={counter.id} 
                    onDelete={onDelete} 
                    onIncrement={onincrement} 
                    counter={counter}  />
                ))}
            </div>
        );
    }
}
 
export default Counters;