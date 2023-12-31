import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock, } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const ChangePassword = () => {
    useTitle('Change password')
    const {user, updateUserPassword } = useAuth()
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const newPassword = watch("password");

    const handleUpdatePassword = (data ) => {
       
        updateUserPassword(data.password)
            .then(() => {
                toast.success('Successfully password updated.')
                reset()
            }).catch((error) => {
                // An error ocurred
                // ...
                console.log(error);
            });
    }
    return (
        <form onSubmit={handleSubmit(handleUpdatePassword)} className="space-y-4 px-12">

            <div>
                <div className="flex w-full  items-center border rounded-md p-2">
                    <span className="mr-2"><FaLock /></span>
                    <input type="password" {...register("password", { required: true })} placeholder='Password' className="w-full focus:outline-none" />
                </div>
                {errors.password?.type === "required" && (
                    <p className="text-red-400">Please enter a password.</p>
                )}
            </div>
            <div>
                <div className="flex w-full  items-center border rounded-md p-2">
                    <span className="mr-2"><FaLock /></span>
                    <input type="password" {...register("confirmPassword", { required: true, validate: (value) => value == newPassword || "Passwords do not match", })} placeholder='Confirm Password' className="w-full focus:outline-none" />
                </div>
                {errors.confrimPassword?.type === "required" && (
                    <p className="text-red-400">Please enter a password.</p>
                )}
                {errors.confirmPassword && (
                    <p className="text-red-400">{errors.confirmPassword.message
                    }</p>
                )}
            </div>
            <button type="submit" className="btn btn-sm btn-primary rounded-full px-8">Update</button>
        </form>
    );
};

export default ChangePassword;