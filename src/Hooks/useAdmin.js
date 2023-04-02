import React, { useEffect, useState } from 'react';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;

        if (email) {
            fetch(`http://localhost:3000/admin/${email}`)
                .then((res) => res.json())
                .then((data) => {
                    setAdmin(data.admin);
                    console.log(admin)
                    setAdminLoading(false);
                });
        }
    }, [user]);
    return [admin, adminLoading];
};

export default useAdmin;