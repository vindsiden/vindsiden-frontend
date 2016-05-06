import React from 'react';
import {uniqueId} from 'lodash';

export default function (Component) {
    class PopoverContainer extends React.Component {
        constructor(props) {
            super(props);
            this.popovers = [];
            this.bodyClick = this.bodyClick.bind(this);
        }

        getChildContext() {
            return {
                addPopover: onOuterClick => {
                    const id = uniqueId();
                    this.popovers.push({id, onOuterClick});
                },
                removePopover: id => {
                    this.popovers = this.popovers.filter(popover => popover.id !== id);
                }
            }
        }

        bodyClick() {
            this.popovers.forEach((popover) => popover.onOuterClick())
        }

        componentDidMount() {
            window.addEventListener('click', this.bodyClick);
        }

        componentWillUnmount() {
            window.removeEventListener('click', this.bodyClick);
        }

        render() {
            return <Component {...this.props}/>;
        }
    }

    PopoverContainer.childContextTypes = {
        addPopover: React.PropTypes.func,
        removePopover: React.PropTypes.func
    };

    return PopoverContainer;
}