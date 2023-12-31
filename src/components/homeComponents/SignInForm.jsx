import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock, } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";


const SignInForm = () => {
    useTitle('Sign in')
    const {register,handleSubmit,reset,formState: { errors }} = useForm();
    const {user,signIn}=useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const currentLocation = location?.state?.from?.pathname || '/'
   
    const handleSignIn = ({email,password}) => {
        signIn(email,password)
        .then((result) => {
            reset()
             navigate(currentLocation,{replace:true})
          })
          .catch((error) => {
            console.log(error);
          });
    }
    return (
        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4 px-12">
            <div >
            <div className=" flex w-full  items-center border rounded-md p-2">
                <span className="mr-2"><FaEnvelope /></span>
                <input type="text" {...register("email", { required: true })} placeholder='Enter your email' className="w-full  focus:outline-none" />
            </div>
            {errors.email?.type === "required" && (
                    <p className="text-red-400">Email field is required</p>
                )}
            </div>
            <div>
            <div className="flex w-full  items-center border rounded-md p-2">
                <span className="mr-2"><FaLock /></span>
                <input type="password" {...register("password", {required: true })} placeholder='Password' className="w-full focus:outline-none" />
            </div>
            {errors.password?.type === "required" && (
                    <p className="text-red-400">Please enter a password.</p>
                )}
            </div>
            <button type="submit" className="btn btn-sm btn-primary rounded-full px-8">Sign In</button>
        </form>

    );
};

export default SignInForm;