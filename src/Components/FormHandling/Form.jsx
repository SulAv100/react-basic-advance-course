import React from 'react'
import './Form.css'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
function Form() {



    const userScheme = z.object({
        username : z.string().min(5,'Cant be less than 5 words'),
        email: z.string().email("Email must be valid"),
        password : z.string().min(5,'At least 5 word password please')
    })

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver : zodResolver(userScheme),
    })

    const handleSubmission = (formData)=>{
        event.preventDefault();
        console.log("Submitted data are:"+formData);
    }

  return (
    <>
        <div className="login-form-container">
            <form onSubmit={handleSubmit(handleSubmission)} className="login-form">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        {...register("username")}
                        
                    />
                    {errors.username && <span>{errors.username.message}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        {...register("email")}
                        
                    />
                                        {errors.email && <span>{errors.email.message}</span>}

                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                       {...register("password")}
                        
                    />
                                        {errors.password && <span>{errors.password.message}</span>}

                </div>
                <button type="submit" className="submit-button">Login</button>
            </form>
        </div>
    </>
)
}

export default Form