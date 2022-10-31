import React from "react";
import { Link } from "react-router-dom";


const NotFoundPage = () => {
    return (
        <div>
           Вы успешно прошли регистрацию.
           Теперь Вы можете пройти на страницу <Link to={'/chat'}>Chat</Link>
        </div>

    );
};

export default NotFoundPage;