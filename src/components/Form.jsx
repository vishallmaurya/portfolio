import { useForm } from "react-hook-form";
import styles from "./css/form.module.css";

export const Form = () => {
    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles["form-container"]}>
            <input
                placeholder="e.g. youremail@gmail.com"
                autoComplete="off"
                {...register("email", { required: true })}
            />
            <input
                placeholder="e.g. Vishal Maurya"
                autoComplete="off"
                {...register("name", { required: true })}
            />
            <textarea
                placeholder="Write your message"
                rows={5}
                autoComplete="off"
                {...register("message", { required: true })}
            />
            <button
                type="submit"
            >
                Send <img src="sent.png" alt="" />
            </button>
        </form>
    )
}