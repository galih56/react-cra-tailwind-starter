import React, {useState, useEffect} from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

const UserList=()=>{
    const [users,setUsers]=useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const getUsers=()=>{
            axios.get(`${process.env.REACT_APP_API_URL}users`)
            .then(({data})=>{
                setUsers(data.data);
            }).catch(({response})=>{
                switch (response.status) {
                    case 401 || 400:
                        alert('Autentikasi gagal');
                        break;
                    case 404:
                        alert('Data tidak ditemukan');
                        break;
                    case 422:
                        alert('Data tidak valid');                  
                        break;
                    default:
                        alert('Terjadi kesalahan');
                        break;
                }
            })
        }
        getUsers()
    },[])

    const goToDetail=(id)=>{
        navigate(`/users/${id}`)
    }

    const ListItem=({item})=>{
        return(
            <>
                <tr className="focus:outline-none h-16 border border-gray-100 rounded">
                    <td>
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src={item.avatar} className="mx-auto object-cover rounded-full h-10 w-10"/>
                            </a>
                        </div>
                    </td>
                    <td className="">
                        <div className="pl-5">
                            <p className="text-base font-medium text-gray-700 mr-2">{item.email}</p>
                            <p className="text-base font-small text-gray-700 mr-2">{item.first_name} {item.last_name}</p>                                   
                        </div>
                    </td>
                    <td className="pl-4">
                        <button className="btn-info" onClick={()=>goToDetail(item.id)}>View</button>
                    </td>
                </tr>
                <tr className="h-3"></tr>
            </>
        )
    }

    return(
        <div className="sm:px-6 w-full">
            <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10 rounded">
                <div className="mt-7 overflow-x-auto">
                    <table className="w-full whitespace-nowrap">
                        <tbody>
                            {users.map((item,index)=><ListItem key={item.id} item={item}/>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>       
    )
}

export default UserList;