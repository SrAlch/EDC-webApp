import React from 'react';

import { useItemsFetch } from '../hooks/useItemsGet';

const Items: React.FC = () => {
    const {
        items,
        setItems
    } = useItemsFetch();
    return (
        <React.Fragment>
            {items.map(item => (
                <div key={item._id}>
                    <div>
                        {item.itemName}
                    </div>
                    <div>
                        {item.itemAmount}
                    </div>
                    <div>
                        {item.category}
                    </div>
                    <div>
                        {item.notes}
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
};

export default Items