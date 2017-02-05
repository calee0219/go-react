import React, { Component } from 'react';

export let channels = [
    {name: 'Hardware Support'},
    {name: 'Software Support'},
    {name: 'ToolMan Support'}
];

class Channel extends Component {
    onClick() {
        console.log("clicked", this.props.name);
    }
    render() {
        return (
            <li onClick={this.onClick.bind(this)}>{this.props.name}</li>
        )
    }
}

export class ChannelList extends Component {
    render() {
        return (
            <ul>
                {this.props.channels.map( channel => {
                        return (
                            <Channel name={channel.name} />
                        )
                    }
                )}
            </ul>
        )
    }
}

export class ChannelForm extends Component {
    constructor(props) {
        super(props);
        this.state = {channelName: ''};
    }
    onChange(e) {
        this.setState({
            channelName: e.target.value
        });
        //console.log(e.target.value);
    }
    onSubmit(e) {
        let {channelName} = this.state;
        console.log(channelName);
        channels.push({
            name: channelName
        });
        this.props.addChannel(channelName);
        console.log(channels);
        this.setState({
            channelName: ''
        });
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type="text" 
                onChange={this.onChange.bind(this)}
                value={this.state.channelName}
                />
            </form>
        )
    }
}