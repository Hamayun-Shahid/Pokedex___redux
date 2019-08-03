import React, { Component } from 'react';
class Row extends Component {
    state = {
        isClick:false
    }
    onClick = () => {
        
        this.setState({isClick:true})
    }
    render() { 
        return (<tr>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.type}</td>
            <td>{this.props.data.stage}</td>
            <td>{this.props.data.species}</td>
            {this.state.isClick ? <td><p className="ml-3 "><mark>Caught!</mark></p></td>:
            <td><button className="btn btn-primary" onClick={this.onClick}>Catch</button></td>    
        }
            </tr>  );
    }
}
export default Row;