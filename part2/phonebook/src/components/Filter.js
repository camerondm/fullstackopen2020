import React from 'react'

const Filter = ({filterVal, handleFilterChange}) => {
    return (
        <div>
            Filter: <input value={filterVal} onChange={handleFilterChange} />
        </div>
    );
};

export default Filter