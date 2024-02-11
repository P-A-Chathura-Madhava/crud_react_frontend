import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createAUser } from '../feature/userSlice';

function AddUser() {

    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const dispatch = useDispatch();
    const userState = useSelector(state=>state.user.users);
    console.log(userState);

    const handleSubmit = () => {
        dispatch(createAUser({name, address}));
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <h2>Add a User</h2>
            <input type="text" placeholder='name' onChange={(e)=>{setName(e.target.value)}} />
            <input type="text" placeholder='address' onChange={(e)=>{setAddress(e.target.value)}} />
            <button>Submit</button>
        </form>
    </>
  )
}

export default AddUser