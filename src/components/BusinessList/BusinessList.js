import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';


const BusinessList = ({ businesses }) => {
    return (
        <div className="BusinessList">
        
                {
                  businesses && !!businesses.length && businesses?.map(business => {
                        return <Business business={business} key={business.id} />
                     })
                 }
             </div>
    )
}

export default BusinessList;