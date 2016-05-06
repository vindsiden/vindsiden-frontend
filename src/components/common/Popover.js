import React from 'react';

export default function (Component) {
    class Popover extends React.Component {
        componentDidMount() {
            this.popoverId = this.context.addPopover(this.refs.component.onOuterClick);
        }

        componentWillUnmount() {
            this.context.removePopover(this.popoverId);
        }

        render() {
            return <Component ref="component" {...this.props}/>;
        }
    }

    Popover.contextTypes = {
        addPopover: React.PropTypes.func,
        removePopover: React.PropTypes.func
    };

    return Popover;
}