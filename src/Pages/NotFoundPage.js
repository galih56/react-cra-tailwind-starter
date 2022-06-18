
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
        <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10 text-center">
            <p className="text-3xl text-gray-800 font-bold mb-5"> 404 </p>
            <p className="text-2xl text-gray-700 font-bold mb-5"> Halaman tidak ditemukan </p>
        </div>
    )   
}
export default LoginPage;