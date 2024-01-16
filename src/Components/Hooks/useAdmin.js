import { useEffect, useState } from 'react';

const useAdmin = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    // useEffect(() => {

    //     if (email) {
    //         fetch(`https://artificial-pets-server.vercel.app/users/admin/${email}`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 setIsAdmin(data.isAdmin)
    //                 setIsAdminLoading(false);
    //             })
    //     }
    // }, [email]);
    useEffect(() => {
        fetch("http://localhost:4000/db")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsAdmin(data.isAdmin)
                setIsAdminLoading(false);
            })

    }, [])
    return [isAdmin, isAdminLoading];

};

export default useAdmin;