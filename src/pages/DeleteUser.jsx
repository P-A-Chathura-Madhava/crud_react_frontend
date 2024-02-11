import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAUser } from '../feature/userSlice';

function DeleteUser() {

    const [id, setId] = useState();
    const dispatch = useDispatch();
    const userState = useSelector(state=>state.user.users);
    console.log(userState);

    const handleSubmit = () => {
        dispatch(deleteAUser(id));
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <h2>Delete a User</h2>
            <input type="text" placeholder='id' onChange={(e)=>{setId(e.target.value)}} />
            <button>Submit</button>
        </form>
    </>
  )
}

export default DeleteUser