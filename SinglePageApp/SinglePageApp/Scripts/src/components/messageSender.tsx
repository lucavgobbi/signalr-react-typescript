import * as React from "react";

export interface IMessageSenderProps {
    onSend: any;
};

export interface IMessageSenderState {
    text: string;
};

export class MessageSender extends React.Component<IMessageSenderProps, IMessageSenderState> {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    onTextChange(event) {
        this.setState({ text: event.target.value });
    }
    onSendClick() {
        this.props.onSend(this.state.text);
    } 
    render() {
        return (
            <div>
                <input type="text" onChange={this.onTextChange.bind(this)}/>
                <button type="button" value={this.state.text} onClick={this.onSendClick.bind(this)}>Send</button>
            </div>
        );
    }
}