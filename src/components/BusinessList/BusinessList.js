import './BusinessList.css';
import Business from '../Business/Business';
import Yelp from '../../util/Yelp';

function BusinessList({businesses}) {
    return (
        <div className="BusinessList">
            {businesses.map(business => <Business key={business.id} business={business}/>)}
        </div>
    );
}

export default BusinessList;