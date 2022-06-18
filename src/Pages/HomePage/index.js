import React, {useState,useEffect} from 'react';
import  {Modal,Alert } from './../../Components';
import { useAuth } from './../../Context/authContext';
import UserList from './UserTable';
import { Link } from 'react-router-dom';
import useModalState from '../../Hooks/useModalState';

const HomePage = () => {
    let { auth, authDispatch }=useAuth();
    const {open,toggleModal}=useModalState();
    
    const logout=()=>{
        authDispatch({type:'flush'});
        toggleModal()
    }

    return(

        <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
            <div className='flex space-x-2'>
                <div className="flex-1">
                    <p className="text-2xl text-gray-700 font-bold mb-5"> Daftar akun </p>
                </div>
                {auth.access_token&&(
                    <div className="flex-1 text-right">
                    <button onClick={toggleModal}>Logout</button>
                    </div>
                )}
            </div>

            {auth.access_token?(<UserList/>):(
                <>
                    <p className="text-gray-700">Anda perlu login sebelum melihat data ini.</p>
                    <Link to="/login">Login</Link>
                </>
            )} 


            <Modal title={'Apakah anda yakin?'} show={open} onClose={toggleModal}>
                <div className='flex space-x-2 p-4'>
                    <div className="flex-1 text-center">
                        <button onClick={toggleModal}>Tidak</button>
                    </div>
                    <div className="flex-1 text-center">
                        <button onClick={logout}>Iya</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default HomePage;