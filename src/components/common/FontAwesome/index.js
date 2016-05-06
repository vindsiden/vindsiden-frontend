import React from 'react';
import classnames from 'classnames';

class FontAwesome extends React.Component {
    render() {
        return <i className={classnames(`fa fa-${this.props.name}`, this.props.className)}/>;
    }
}

FontAwesome.propTypes = {
    name: React.PropTypes.string.isRequired,
};

export default FontAwesome;
