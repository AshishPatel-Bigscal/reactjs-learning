import React from 'react'
import "./login.css"
import { } from "react-icons/md";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
// YUP validation schema
const validationSchema = yup.object({
    // phoneNo: yup.string()
    //     .required()
    //     .matches(/^[0-9]/, "Must be only digits")
    //     .min(10, 'Phone Num Must Be 10 Digit Long')
    //     .max(10, 'Phone Num Must Be 10 digit Long'),
    username: yup.string().email().required(),
    password: yup.string().min(6).max(20).required(),
})



const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });


    const onSubmit = (data) => {

    }

    return (
        <div className='loginContainer'>
            <div className='bg-dark inputContainer'>
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex-column align-content-center justify-content-center' >

                    <p className="text-primary text-center font-monospace" >Login</p>
                    <input className='m-1 p-1' type="text" placeholder='Username'
                        {...register("username", { required: true, maxLength: 20 })}
                    />
                    <p className='m-0 p-0 text-white'>{errors.username?.message}</p>

                    <input className='m-1 p-1' type="text" placeholder='password'
                        {...register("password", { required: true, min: 6, max: 20 })}
                    />
                    <p className='text-white'>{errors.password?.message}</p>
                    <button className='w-100 m-1 p-1' type="submit">Submit</button>
                    <p className=' text-center text-warning'>Not Registered?</p>

                </form>
                <button className='w-100 m-1 p-1'>Register</button>
            </div>
        </div>
    )
}

export default Login