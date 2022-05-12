import React from "react";
import style from "./dialogs.module.css";
import Dialogitem from "./Dialogitem/Dialogitem";
import Massage from "./Dialogmassage/Dialogmassage";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { submit } from "redux-form";
const Dialogs = (props) => {
  debugger
  let state = props.massagePage;

  let dialogsElement = state.dialogs.map((dialog) => {
    return <Dialogitem name={dialog.name} id={dialog.id} key={dialog.id} />;
  });
  let massagesElements = state.massages.map((massage) => {
    return <Massage massage={massage.massage} key={massage.id} />;
  });
  let newMassageBody = state.newMassageTextBody;
  let onSendMassageClick = () => {
    props.SendMassage();
  };
  let onNewMassageChange = (e) => {
    let body = e.target.value;
    props.updateNewMassageBody(body);
  };

  return (
    <div className={style.wrapper_dialogs}>
      <div className={style.dialogs_menuName}>
        <h2 className={style.menuName_h2}>Dialogs</h2>
        <div>{dialogsElement}</div>
      </div>
      <div className={style.dialogs_massage}>
        {massagesElements}
        <div>
          <DialogsForm updateMassageForm={props.updateNewMassageBody} onSendMassageClick={props.SendMassage}/>
          <div>
            <textarea
              value={newMassageBody}
              placeholder="enter your massage"
              onChange={onNewMassageChange}
            ></textarea>
          </div>
          <button onClick={onSendMassageClick} type={"submit"}>
            <span>Отправить</span>
          </button>
        </div>
      </div>
      ;
    </div>
  );
};
const DialogsForm = (props) => {
  const addNewMessage = (values) => {
    props.updateMassageForm(values)
  }

  return (
    <div>
      <Formik
        initialValues={{
          newMessageBody: "",
        }}
        onSubmit={(values, { setSubmitting ,resetForm}) => {
          setTimeout(() => {
            //  alert ( JSON.stringify ( values , null , 2 ) ) ;

            // props.change(JSON.stringify(values, null, 2));
            addNewMessage(values.newMessageBody)
            props.onSendMassageClick()
            resetForm(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {() => (
          <Form>
            <Field
              name={"newMessageBody"}
              as={"textarea"}
              placeholder={"Введите текст "}
              // handleChange={props.change}
            />
            <button type={"submit"} ha>
              Отправить
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Dialogs;
