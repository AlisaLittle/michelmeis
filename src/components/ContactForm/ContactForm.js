import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import styles from "./ContactForm.module.css";
import "react-toastify/dist/ReactToastify.min.css";
import { init } from "emailjs-com";
init("user_ngbkW6jO4keASIpIbaRbl");

const ContactForm = (props) => {
  const { register, errors, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    // Send form email

    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
    } catch (e) {}
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Row 1 of form */}
      <div className={styles.row}>
        <input
          className={`${styles.inputName} ${
            props.buttonDark ? styles.inputQuartet : null
          }`}
          type="text"
          name="name"
          ref={register({
            required: {
              value: true,
              message: "Please enter your name",
            },
            maxLength: {
              value: 30,
              message: "Please use 30 characters or less",
            },
          })}
          placeholder="Name"
        ></input>
        {errors.name && (
          <span className="errorMessage">{errors.name.message}</span>
        )}

        <input
          className={`${props.buttonDark ? styles.inputQuartet : null}`}
          type="email"
          name="email"
          ref={register({
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          })}
          placeholder="Email address"
        ></input>
        {errors.email && (
          <span className="errorMessage">
            Please enter a valid email address
          </span>
        )}
      </div>
      {/* Row 2 of form */}
      <div className="row">
        <input
          className={`${props.buttonDark ? styles.inputQuartet : null}`}
          type="text"
          name="subject"
          ref={register({
            required: {
              value: true,
              message: "Please enter a subject",
            },
            maxLength: {
              value: 75,
              message: "Subject cannot exceed 75 characters",
            },
          })}
          placeholder="Subject"
        ></input>
        {errors.subject && (
          <span className="errorMessage">{errors.subject.message}</span>
        )}
      </div>
      {/* Row 3 of form */}
      <div className="row">
        <textarea
          className={`${styles.textArea} ${
            props.buttonDark ? styles.inputQuartet : null
          }`}
          rows={5}
          name="message"
          ref={register({
            required: true,
          })}
          placeholder="Message"
        ></textarea>
        {errors.message && (
          <span className="errorMessage">Please enter a message</span>
        )}
      </div>
      <button
        type="submit"
        className={props.buttonDark ? "buttonDark" : "button"}
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
