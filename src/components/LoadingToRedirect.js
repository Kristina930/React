import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';





const LoadingToRedirect = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate('');

    useEffect(() => {
        const interval = setInterval(() =>{
            setCount((currentCount) => --currentCount)
        })
        count === 0 && navigate('/home')
        return() => clearTimeout(interval)
    }, [count, navigate])



    return (
        <div>
            <p>Redirecting you in {count} seconds</p>

        </div>

    );
};

export default LoadingToRedirect;