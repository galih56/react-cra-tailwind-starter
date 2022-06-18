import React, {useState} from 'react';
import axios from 'axios';

const DetailUserPage = ({match}) => {
    const {id} = match.params;
    const [user,setUser]=useState({});

    useEffect(()=>{
        const getUser=()=>{
            axios.get(`${process.env.REACT_APP_API_URL}users/${id}`)
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
        getUser()
    },[])
    return (
        <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
            <div className="flex justify-center py-20">
                <div className="p-3 bg-white rounded-xl max-w-lg hover:shadow">
                    <div className="flex justify-between w-full">
                        <img src={user.avatar} width="150" className="rounded-lg"/>
                        <div className="ml-2">
                            <div className="p-3">
                                <h3 className="text-2xl">{user.first_name} {user.last_name}</h3>
                            </div>
                        </div>
                    </div>
                </div>         
            </div>
        </div>
    )
}

export default DetailUserPage;