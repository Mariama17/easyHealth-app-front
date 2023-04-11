import { createContext, useState } from 'react';

const UserContext = createContext(null);

// ...
export const UserProvider = ({ children }) => {
    const [userEmail, setUserEmail] = useState(null);

    const updateUserEmail = (newEmail) => {
        setUserEmail(newEmail);
    };

    return (
        <UserContext.Provider value={{ userEmail, updateUserEmail }}>
            {children}
        </UserContext.Provider>
    );
};
export default UserContext;
