import React, { Component } from 'react';

class Channel extends Component {
    onClicked(e) {
        e.preventDefault();
        const {selectChannel, channel} = this.props;
        selectChannel(channel);
    }
    render() {
        const {channel} = this.props;
        return (
            <li>
                <a onClick={this.onClicked.bind(this)}>
                    {channel.name}
                </a>
            </li>
        )
    }
}

Channel.propTypes = {
    channel: React.propTypes.object.isRequired,
    setChannel: React.propTypes.func.isRequired
}

export default Channel;