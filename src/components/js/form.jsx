import { useState, useEffect } from "react";
import Footer from "./footer";

export default function Form() {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    telephone: "",
  });

  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    telephone: "",
  });

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(false);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    if (event.target.value === "") {
      setErrors({ ...errors, [event.target.name]: false });
    } else {
      setErrors({ ...errors, [event.target.name]: true });
    }

    if (event.target.name == "email") {
      const str = event.target.value;
      const correct = str.length >= 6 && str.includes("@") && str.includes(".");
      setErrors({ ...errors, [event.target.name]: correct });
    }
  };

  const usernameFilter = (event) => {
    if ("1234567890-+=/?!@#$%^&*()_.,".indexOf(event.key) != -1)
      event.preventDefault();
  };

  const telephoneFilter = (event) => {
    if (
      "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNMйцукенгшщзхъфывапролджэячсмитьбюЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ=/?!@#$%^&*_.,".indexOf(
        event.key
      ) != -1
    )
      event.preventDefault();
  };

  const showMessage = () => {
    setMessage(true);
  };

  useEffect(() => {
    if (errors["userName"] && errors["email"] && errors["telephone"]) {
      setOpen(true);
    } else {
      setOpen(false);
      setMessage(false);
    }
  }, [errors]);

  return (
    <div className="form-block">
      <div className="content">
        <div className="form">
          <a name="form"></a>
          <h2>
            Оставьте заявку, <br />и мы свяжемся с вами
          </h2>
          <div className="inputs">
            <div>
              <input
                type="text"
                name="userName"
                onChange={changeHandler}
                onKeyPress={usernameFilter}
                placeholder="Фамилия, Имя и Отчество"
              />
              {errors.userName || errors.userName === "" ? null : (
                <span>Пожалуйста, заполните поле корректно</span>
              )}
            </div>

            <div>
              <input
                type="text"
                name="email"
                onChange={changeHandler}
                placeholder="E-mail"
              />
              {errors.email || errors.email === "" ? null : (
                <span>Пожалуйста, заполните поле корректно</span>
              )}
            </div>

            <div>
              <input
                type="text"
                name="telephone"
                onChange={changeHandler}
                onKeyPress={telephoneFilter}
                placeholder="Номер телефона"
              />
              {errors.telephone || errors.telephone === "" ? null : (
                <span>Пожалуйста, заполните поле корректно</span>
              )}
            </div>
            {open ? (
              message ? (
                <p className="message">Спасибо! Мы свяжемся с вами</p>
              ) : (
                <button className="active" onClick={showMessage}>
                  Отправить заявку
                </button>
              )
            ) : (
              <button disabled>Отправить заявку</button>
            )}

            <p>Я согласен с условиями обработки перональных данных</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
