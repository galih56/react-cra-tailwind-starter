
import React from 'react';
import axios from 'axios';
import { Input } from '../Components';
import { useAuth } from '../Context/authContext';
import { useForm } from 'react-hook-form';
import {useNavigate}from'react-router-dom';

const LoginPage=()=>{
    let { handleSubmit, register, formState : { errors } }=useForm();
    let { auth, authDispatch }=useAuth();
    let navigate=useNavigate();
        
    const signIn=(body)=>{
        axios.post(`${process.env.REACT_APP_API_URL}login`,body,{
            headers:{'Content-Type':'application/json'}
        }).then(({data}) => {
            authDispatch({type:'store',payload: { ...auth, access_token : data.token }});
            navigate('/')
        }).catch(({response}) => {
            switch (response.status) {
            case 401 || 400:
                
                break;
            case 404:
                
                break;
            
            case 422:
            
                break;
            default:
                break;
            }
        })
    }

    return(
        <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <form onSubmit={handleSubmit(signIn)}>
            <div className="relative p-6 flex-auto">
                <Input label="Email" placeholder="Fill your email here..."
                    inputType="email"
                    {...register('email',{ 
                        required: {value:true,message:'Email is required'}, 
                        pattern: {  
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,  
                            message: "invalid email address"
                        } 
                    })} 
                    errorText={errors.email && errors.email.message}/>
                    
                <Input label="Password" placeholder="Fill your password here..." 
                    inputType="password"
                    {...register("password", { min: 8, max: 99 })}
                    errorText={errors.password && errors.password.message} />

                <button className="btn-primary py-2 px-4 my-4" type="submit">
                    Sign In
                </button>
            </div>
        </form>
        </div>
    )   
}
export default LoginPage;