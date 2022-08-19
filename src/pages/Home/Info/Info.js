import React, { useEffect, useState } from 'react';
import User from './User';

const Info = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
       fetch('http://localhost:5000/users')
       .then(res=>res.json())
       .then(data=>setUsers(data))
    },[])
    return (
        <div class="overflow-x-auto p-4 bg-slate-400">
        <table class="table w-full">
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Company</th>
            </tr>
            </thead>
            <tbody>
                {
                   users.map((user,index)=> 
                   <tr key={user._id}>
                   <th>{index+1}</th>
                   <td>{user.name}</td>
                   <td>{user.email}</td>
                   <td>{user.address.city}</td>
                   <td>{user.phone}</td>
                   <td>{user.company.name}</td>
                   </tr>)
                }

            </tbody>
        </table>
        </div>
    );
};

export default Info;