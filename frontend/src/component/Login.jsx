import React from 'react'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        // Close the modal programmatically after form submission
        document.getElementById("my_modal_3").close();
    }
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method='dialog'>
                        {/* if there is a button in form, it will close the modal */}
                        <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>✕</button>
                        <h3 className="font-bold text-lg">Login</h3>
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input type='email' placeholder='enter your email' {...register("email", { required: true })} className='w-80 px-3 border rounded-md' />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>Password</span>
                            <br />
                            <input type='password' placeholder='enter your password' {...register("password", { required: true })} className='w-80 px-3 border rounded-md' />
                            {errors.password && <span>This field is required</span>}
                        </div>
                        <div className='flex justify-around mt-4'>
                            <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700'>Login</button>
                            <p>Not registered?{" "}<Link to='/signup'><span className='underline text-blue-500 cursor-pointer'>Signup</span></Link></p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login
