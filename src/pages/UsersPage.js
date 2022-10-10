
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/reducers/usersReducer";


function UsersPage() {

    const users = useSelector(state => state.users);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, []); //не выводит данные, ругаеться на пустой обьект


    const fetchUsers = () => {
        dispatch(getUsers())
    }



    if(loading) {
        return(
            <div>
                Идет загрузка......
            </div>
        )
    }

    if(error) {
        return(
            <div>
                Ошибка. <button onClick={fetchUsers}>Перезагрузите приложение</button>
            </div>
        )
    }

    return (
        <div>
            {users.map((user) => {  
                return(
                    <div key={user.id}>
                        {user.name}
                        {user.username}
                        {user.email}
                        {user.phone}
                    </div>
                )}
            )}
        </div>
    )
}

export default UsersPage;