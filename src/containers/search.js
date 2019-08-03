import React, { Component } from 'react';
import './search.css';
import { connect } from 'react-redux';
class Search extends Component {
    render() {
        return (<div>
            <input className="search" type="text" onChange={this.props.search}/> 
        </div>);
    }
}
const mapDispatchToProps = dispatch => {
    return {
        search: (e) => dispatch({
            type: "search", v:e.target.value    })
     }
 }
export default connect(null,mapDispatchToProps)(Search);