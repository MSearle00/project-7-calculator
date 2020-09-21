import React, {Component} from 'react';

class Memory extends Component{

    render() {
        let {memory} = this.props;
        return (
            <div className="memory">
                <p class="memoryTitle"> Calculator Memory </p>
                <p>{memory}</p>
            </div>
        )
    }
}

export default Memory;