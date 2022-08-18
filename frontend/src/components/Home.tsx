import React from 'react';


// Hooks modules
import { useTestFetch } from '../hooks/test';

const Home: React.FC = () => {
    const {
        test,
        setTest
    } = useTestFetch();
    return (
        <div>{test.name}{test.address}</div>
    );
};

export default Home