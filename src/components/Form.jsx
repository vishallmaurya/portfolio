import { useForm } from "react-hook-form";

export const Form = () => {
    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="e.g. youremail@gmail.com"
                    autoComplete="off"
                    {...register("email",{required:true})}
                />
                <input
                    placeholder="e.g. Vishal Maurya"
                    autoComplete="off"
                    {...register("name", {required:true})}
                />
                <textarea
                    placeholder="Write your message"
                    rows={15}
                    autoComplete="off"
                    {...register("message", {required:true})}
                />
                <button
                    type="submit"
                    name="btn"
                >
                    Send <img src="sent.png" alt="" />
                </button>
            </form>
        </div>
    )
}