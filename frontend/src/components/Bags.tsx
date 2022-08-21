import React from 'react';

import { useBagsFetch } from '../hooks/useBagsFetch';

const Home: React.FC = () => {
    const {
        bag,
        setBag
    } = useBagsFetch();
    return (
        <div>{bag.results}{bag._id} {bag.name} {bag.email} {bag.userId}</div>
    );
};

export default Home