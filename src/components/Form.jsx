import { useForm } from "react-hook-form";
import styles from "./css/form.module.css";
import emailjs from "emailjs-com";

export const Form = () => {
  const { register, handleSubmit, reset } = useForm(); // Added reset to clear the form

  const onSubmit = (data) => {
    console.log(data);

    emailjs
      .send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, data, import.meta.env.VITE_USER_ID) 
      .then(
        (response) => {
          console.log("Message sent successfully:", response);  
          console.log("Message sent successfully!");
          reset(); 
        },
        (error) => {
          console.error("Error sending message:", error);
          console.log("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles["form-container"]}>
      <input
        placeholder="e.g. youremail@gmail.com"
        autoComplete="off"
        {...register("email", { required: true })}
        className={styles["form-input"]}
      />
      <input
        placeholder="e.g. Vishal Maurya"
        autoComplete="off"
        {...register("name", { required: true })}
        className={styles["form-input"]}
      />
      <textarea
        placeholder="Write your message"
        rows={5}
        autoComplete="off"
        {...register("message", { required: true })}
        className={styles["form-textarea"]}
      />
      <button type="submit" className={styles["form-button"]}>
        Send <img src="sent.png" alt="" />
      </button>
    </form>
  );
};
