import react from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

import DialogItem from "./Dial;ogItem/DialogItem.jsx";
import Message from "./Messaage/Message.jsx";

const Dialogs = (props) => {
  let dialogElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.messages.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>{messagesElements} </div>
    </div>
  );
};

export default Dialogs;
