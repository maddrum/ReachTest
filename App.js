import {useState} from 'react';
import AddUser from "./components/Users/Adduser";
import UserData from "./components/Users/userData";

function App() {
    const [users, setUsers] = useState('');
    const AddUserHandler = user => {
        setUsers(prevUsers => {
            return [user, ...prevUsers]
        })

    }
    return (
        <div>
            <AddUser onAddUsernameData={AddUserHandler}/>
            <UserData items={users}/>
        </div>
    );
}

export default App;
