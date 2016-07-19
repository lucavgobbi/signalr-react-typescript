"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var message_1 = require("./message");
var messageSender_1 = require("./messageSender");
;
;
var ChatWindow = (function (_super) {
    __extends(ChatWindow, _super);
    function ChatWindow(props) {
        _super.call(this, props);
        this.state = {
            messages: []
        };
    }
    ChatWindow.prototype.sendMessage = function (text) {
        var chat = $.connection.chatHub;
        $.connection.hub.start().done(function () {
            chat.client.Send('Luca', text);
        });
    };
    ChatWindow.prototype.componentDidMount = function () {
        var chat = $.connection.chatHub;
        chat.client.addMessage = function (sender, text) {
            var messages = this.state.messages;
            messages.push({ sender: sender, text: text });
            this.setState({ messages: messages });
        }.bind(this);
        $.connection.hub.start();
    };
    ChatWindow.prototype.render = function () {
        var messages = this.state.messages.map(function (i) { return React.createElement(message_1.Message, {sender: i.sender, text: i.text}); });
        return (React.createElement("div", null, messages, React.createElement(messageSender_1.MessageSender, {onSend: this.sendMessage})));
    };
    return ChatWindow;
}(React.Component));
exports.ChatWindow = ChatWindow;
//# sourceMappingURL=chatWindow.js.map