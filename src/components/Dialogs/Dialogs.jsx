import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

import DialogItem from "./Dial;ogItem/DialogItem.jsx";
import Message from "./Messaage/Message.jsx";

const Dialogs = (props) => {
  let dialogElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();
  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>{messagesElements} </div>
      <div>
        <div>
          New Message
          <textarea ref={newMessageElement}></textarea>
        </div>
        <div>
          <button onClick={addMessage}>Add message</button>
          <button>Remove</button>
        </div>
      </div>{" "}
    </div>
  );
};

export default Dialogs;
