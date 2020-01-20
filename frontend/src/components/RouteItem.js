import React, { Component } from 'react';
import PropTypes from 'prop-types';


class RouteItem extends Component {

    getStyle = () => {
        if(this.props.route.points > 10){
            return {
                backgroundColor: 'red',
                padding: '10px',
                borderBottom: '1px, #ccc, dotted'
            }
        } else{
            return {
                backgroundColor: 'green',
                padding: '10px',
                borderBottom: '1px, #ccc, dotted'
            }
        }
    }

   



    render() {
        return(
            <div style ={this.getStyle()}>
                <input type="checkbox" onChange={this.props.changeColor} /> {' '}
                {this.props.route.name}
            </div>
        )
    }
}

// Prop Types
RouteItem.propTypes = {
    route: PropTypes.object.isRequired
}
export default RouteItem;