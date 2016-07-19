import * as React from "react";
import { Message } from "./message";
import { MessageSender } from "./messageSender";

export interface IMessageItem {
    sender: string;
    text: string;
};

export interface IChatWindowState {
    messages: Array<IMessageItem>;
};

export class ChatWindow extends React.Component<{}, IChatWindowState> {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
    }
    sendMessage(text) {
        var chat = $.connection.chatHub;
        chat.server.send('Luca', text);
    }
    componentDidMount() {
        var chat = $.connection.chatHub;
        chat.client.addMessage = function (sender, text) {
            const messages = this.state.messages;
            messages.push({ sender: sender, text: text });
            this.setState({ messages: messages });
        }.bind(this);
        $.connection.hub.start();   
    }
    render() {
        var messages = this.state.messages.map((i) => <Message sender={i.sender} text={i.text}/>);
        return (
            <div>
                {messages}
                <MessageSender onSend={this.sendMessage}/>
            </div>
        );
    }
}