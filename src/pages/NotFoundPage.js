import React from "react";
import { Link } from "react-router-dom";


const NotFoundPage = () => {
    return (
        <div>
            Not Found Page. Please go to <Link tp={'/'}>Chat</Link>
        </div>

    );
};

export default NotFoundPage;