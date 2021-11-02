import {useState} from 'react';


const AddUser = props => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [checkData, setCheckData] = useState(true);

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);


    }
    const ageChangeHandler = (event) => {
        setAge(event.target.value);
        if (event.target.value < 18) {
            setCheckData(false);
        } else {
            setCheckData(true);
        }
    }
    const sumbitHandler = (event) => {
        event.preventDefault();
        const userInfo = {
            username: username,
            age: age,
        }
        props.onAddUsernameData(userInfo);
        setAge('');
        setUsername('');

    }


    return <form onSubmit={sumbitHandler}>
        <label>Username</label>
        <input type='text' onChange={usernameChangeHandler} value={username}/>
        <label>Age</label>
        <input type='number' onChange={ageChangeHandler} value={age} style={{color: checkData ? 'black' : 'red'}}/>
        <button type='submit'>Add user</button>
    </form>
}

export default AddUser