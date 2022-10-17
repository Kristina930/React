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
        <div style={{marginTop: "100px"}}>
            <table style={{}}>
                <thead>
                    <tr>
                        <th style={{trxtAlign: "center"}}>Nomer</th>
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
                                <td>{data[id].id}</td>
                                <td>{data[id].name}</td>
                                <td>{data[id].email}</td>
                                <td>{data[id].contact}</td>
                            </tr>
                    )}
                    
                    ) 
                }
                        
                
                </tbody>
            </table>
        </div>
    );
};

export default HomePage;