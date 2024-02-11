import './App.css';
import AddUser from './pages/AddUser';
import DeleteUser from './pages/DeleteUser';
import ListUsers from './pages/ListUsers';
import UpdateUser from './pages/UpdateUser';

function App() {
  return (
    <div>
      <h1>Redux CRUD Application</h1>
      <AddUser />
      <UpdateUser />
      <DeleteUser />
      <ListUsers />
    </div>
  );
}

export default App;
