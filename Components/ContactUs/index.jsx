/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import Input from "../Input";
import styles from "./.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import AppContext from "../../store/app-context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const form = useRef();
  const ctx = useContext(AppContext);
  const contactSection = useRef(null);
  useEffect(() => {
    ctx.setContactOffset(contactSection.current.offsetTop);
  }, [ctx]);
  const [data, setData] = useState({
    service: "Admin/Virtual Assistance",
    message__body: "",
    message__title: "",
  });
  const [inputBlur, setInputBlur] = useState(false);
  const enteredValueIsValid = data?.message__body?.length > 0;
  const errorInput = !enteredValueIsValid && inputBlur;

  const resources = [
    {
      id: "name",
      placeholder: "Name",
      type: "text",
      checkTheValue: (value) => value?.length > 0,
      error: "This filed can't be empty!",
      required: true,
    },
    {
      id: "email",
      placeholder: "Email",
      type: "email",
      checkTheValue: (value) => value?.includes("@"),
      error: "Email must includes '@'!",
      required: true,
    },
  ];
  const services = [
    {
      id: "service",
      placeholder: "Service",
      type: "select__box",
      options: [
        "Admin/Virtual Assistance",
        "Social Media Moderation",
        "LinkedIn Organic growth",
        "Customer Service",
        "Data Entry/Internet research",
        "Graphic Design",
        "Video Editing",
        "Media Buying",
        "Other",
      ],
      required: true,
    },
    {
      id: "other__services",
      placeholder: "Other",
      type: "text",
      required: false,
      checkTheValue: (value) => value?.length > 0,
      error: "This filed can't be empty!",
    },
  ];

  let formValidation = false;
  if (
    data?.name !== "" &&
    data?.email?.includes("@") &&
    data.message__body !== "" &&
    data.message__title !== ""
  ) {
    formValidation = true;
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n952gc8",
        "template_pnpg606",
        form.current,
        "FkTRV49FMJUkGpazk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast.success(`received`, {
      position: toast.POSITION.TOP_RIGHT,
    });
    e.target.reset();
    setData({
      service: "Admin/Virtual Assistance",
      message__body: "",
      message__title: "",
    });
  };

  return (
    <section
      id="contact__us"
      ref={contactSection}
      className="section__spaces container"
    >
      <h2 className="section__title">
        <span>Contact Us</span>
      </h2>
      <div className={`${styles.contact__us__content} d-flex`}>
        <div className={styles.left__col}>
          <div className={styles.image__container}>
            <img src="/assets/pexels-marc-mueller-380769.jpg" alt="image" />
          </div>
        </div>
        <div className={styles.contact__form__container}>
          <form ref={form} onSubmit={sendEmail} className={styles.form}>
            <div className={styles.label}>Your Info:</div>
            <div className={styles.inputs__group}>
              {resources.map((input) => (
                <Input
                  key={input.id}
                  id={input.id}
                  placeholder={input.placeholder}
                  required={input.required}
                  type={input.type}
                  setData={setData}
                  data={data}
                  checkTheValue={input.checkTheValue}
                  error={input.error}
                  // options={input.options}
                />
              ))}
            </div>
            <motion.div className={styles.services}>
              <Input
                id={services[0].id}
                placeholder={services[0].placeholder}
                required={services[0].required}
                type={services[0].type}
                setData={setData}
                data={data}
                options={services[0].options}
              />
              <AnimatePresence>
                {data.service === "Other" && (
                  <div className={styles.select__box__container}>
                    <motion.input
                      animate={{ height: "50px" }}
                      exit={{ height: "0px" }}
                      initial={{ height: "0px" }}
                      transition={{ type: "linear" }}
                      id={services[1].id}
                      name={services[1].id}
                      placeholder={services[1].placeholder}
                      required={services[1].required}
                      type={services[1].type}
                      value={data.other || ""}
                      onChange={(e) =>
                        setData({
                          ...data,
                          other: e.target.value,
                        })
                      }
                      // ========
                      className={styles.input}
                    />
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
            <div className={styles.label}>Your Message:</div>
            <div className={styles.message}>
              <Input
                id="message__title"
                placeholder="Message Title"
                required={true}
                type="text"
                setData={setData}
                data={data}
                checkTheValue={(value) => value?.length > 0}
                error={"This filed can't be empty!"}
              />
              <div className={styles.select__box__container}>
                <textarea
                  name="message__body"
                  className={styles.textarea}
                  id="message__body"
                  placeholder="Message Body"
                  onChange={(e) =>
                    setData({
                      ...data,
                      message__body: e.target.value,
                    })
                  }
                  onBlur={() => {
                    setInputBlur(true);
                  }}
                />
                {errorInput && (
                  <p className={styles.error__message}>
                    {"This filed can't be empty!"}
                  </p>
                )}
              </div>
            </div>
            <button
              type="submit"
              disabled={!formValidation}
              className={styles.submit__btn}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
