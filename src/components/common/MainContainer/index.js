import React from 'react';

export default class extends React.Component {
    render() {
        return <div {...this.props} style={Object.assign({}, {maxWidth: 1140, margin: '0 auto'}, this.props.style)}/>;
    }
}
