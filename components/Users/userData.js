import UserDataItem from "./userDataItem";

const UserData = props => {
    let rawItems = [...props.items]
    const generateDataItems = () => {
        return rawItems.map(user => (
                <UserDataItem key={user.id} user={user.username} age={user.age}/>
            )
        )
    }

    return <div>{generateDataItems()}</div>
}

export default UserData