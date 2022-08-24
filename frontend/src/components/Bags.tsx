import React from 'react';

import { useBagsFetch } from '../hooks/useBagsGet';

const Bags: React.FC = () => {
    const {
        bags,
        setBags
    } = useBagsFetch();
    return (
        <React.Fragment>
            {bags.map(bag => (
                <div key={bag._id}>
                    <div>
                        {bag.bagName}
                    </div>
                    <div>
                        {bag.capacity}
                    </div>
                    <div>
                        {bag.style}
                    </div>
                    <div>
                        {bag.notes}
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
};

export default Bags