import React, { useEffect, useState } from 'react';
import { db } from '../service/firebase';


const HomePage = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        db.child('contacts').on('value', (snap) => {
            if(snap.val() !== null) {
                setData({...snap.val()})
            } else {
                setData({})

            }


        })
        return () => {
            setData ({})
        }

    }, [])




    return (
        <div style={{textAlign:'center'}}>
        <div class="home_p">
            <p>Добро пожаловать в приложение на React!</p>
        </div>
        <div>
            <table style={{}}>
                <thead>
                    <tr>
                        <th style={{trxtAlign: "center"}}>Name</th>
                        <th style={{trxtAlign: "center"}}>Email</th>
                        <th style={{trxtAlign: "center"}}>Contact</th>
                        <th style={{trxtAlign: "center"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((id) => {  
                        return (
                            <tr>
                                
                                <td>{data[id].name}</td>
                                <td>{data[id].email}</td>
                                <td>{data[id].contact}</td>
                                <td>{data[id].action}</td>
                            </tr>
                    )}  
                    ) 
                }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default HomePage;