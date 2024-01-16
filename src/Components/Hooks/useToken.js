import { useEffect, useState } from 'react';

const useToken = () => {
    const [token, setToken] = useState('');
    useEffect(() => {

        fetch(`https://artificial-pets-server.vercel.app/jwt?email`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken)
                    setToken(data.accessToken)
                }
            })

    }, []);
    return [token];
    // useEffect(() => {
    //     if (email) {
    //         fetch(`https://artificial-pets-server.vercel.app/jwt?email=${email}`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.accessToken) {
    //                     localStorage.setItem('accessToken', data.accessToken)
    //                     setToken(data.accessToken)
    //                 }
    //             })
    //     }
    // }, [email]);
    // return [token];
};

export default useToken;