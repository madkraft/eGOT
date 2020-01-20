import React, { Component } from 'react';
import RouteItem from './RouteItem';
import PropTypes from 'prop-types';


class Routes extends Component {

   

    render() {
        return this.props.routes.map((route) => (
            <RouteItem key={route.id} route={route} changeColor={this.props.changeColor}/>
        ));
    }
}

// Prop Types
Routes.propTypes = {
    routes: PropTypes.array.isRequired
}
export default Routes;