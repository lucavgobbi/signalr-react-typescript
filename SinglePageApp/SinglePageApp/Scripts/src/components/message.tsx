import * as React from "react";

export interface IMessageProps {
    sender: string,
    text: string
};

export class Message extends React.Component<IMessageProps, {}> {
    render() {
        return <p>{this.props.sender}: {this.props.text}</p>
    }
};