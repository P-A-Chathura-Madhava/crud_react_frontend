import { getUsers } from '../feature/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function ListUsers() {
    
  const dispatch = useDispatch();
  const userState = useSelector(state => state.user.users);
  console.log(userState);

  return (
    <>
          <h2>List of Users</h2>
          <button onClick={()=>{dispatch(getUsers())}} >Get all users</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {
            userState?.map((row)=>{
              return(<tr key={row._id}>
                <td>{row?._id}</td>
                <td>{row?.name}</td>
                <td>{row?.address}</td>
              </tr>)
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default ListUsers