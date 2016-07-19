"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
;
;
var MessageSender = (function (_super) {
    __extends(MessageSender, _super);
    function MessageSender(props) {
        _super.call(this, props);
        this.state = {
            text: ''
        };
    }
    MessageSender.prototype.onTextChange = function (event) {
        this.setState({ text: event.target.value });
    };
    MessageSender.prototype.onSendClick = function () {
        this.props.onSend(this.state.text);
    };
    MessageSender.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("input", {type: "text", onChange: this.onTextChange.bind(this)}), React.createElement("button", {type: "button", value: this.state.text, onClick: this.onSendClick.bind(this)}, "Send")));
    };
    return MessageSender;
}(React.Component));
exports.MessageSender = MessageSender;
//# sourceMappingURL=messageSender.js.map