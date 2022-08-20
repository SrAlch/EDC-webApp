import React from 'react';


// Hooks modules
// import { useTestFetch } from '../hooks/test';
import { useDataFetch } from '../hooks/useDataFetch';

const Home: React.FC = () => {
    const {
        user,
        setUser
    } = useDataFetch();
    return (
        <div>{user._id} {user.name} {user.email} {user.userId}</div>
    );
};

export default Home