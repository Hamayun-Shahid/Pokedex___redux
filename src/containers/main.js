import React, { Component } from 'react';
import Search from './search';
import { connect } from 'react-redux';
import  './main.css';
import Row from './row';
class Main extends Component {
    state = {  }
    render() { 
        return (<div>
            <h1 className="mb-4">Pokedex In Redux</h1>
            <Search className="mb-4" />
            <table className="table">
           <thead>
                <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Stage</th>
                <th>Species</th>
                <th>Caught ?</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.props.data.map((d,i) => <Row key={i} data={d} />)
                    }
                </tbody>
                            
            </table>
            
        </div>  );
    }
}
const mapStateToProps = state =>
{
    return{
        data: state.data
     }
 }
export default connect(mapStateToProps)(Main);