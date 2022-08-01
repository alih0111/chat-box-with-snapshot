import React, { Component } from "react";
import Chat from "./Chat";

export default class Body extends Component {
  chatListWrapper = React.createRef();

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps.chatList.length !== this.props.chatList.length) {
      return this.chatListWrapper.current.scrollHeight;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (null !== snapshot) {
      const wrapper = this.chatListWrapper.current;
      wrapper.scrollTop = wrapper.scrollHeight - snapshot;
    }
  }

  componentDidMount(){
    this.chatListWrapper.current.scrollTop=1000
    console.log(this.chatListWrapper);
  }

  render() {
    const chats = this.props.chatList.map((chat, index) => {
      const isleft = "recived" === chat.type;
      return (
        <Chat
          isleft={isleft}
          gravatar={
            isleft ? this.props.gravatar.user2 : this.props.gravatar.user1
          }
          message={chat.message}
          time={chat.time}
          key={chat.id}
        />
      );
    });

    return (
      <div
        ref={this.chatListWrapper}
        onScroll={this.props.handelScroll}
        className="panel-body chats"
      >
        {chats}
      </div>
    );
  }
}
