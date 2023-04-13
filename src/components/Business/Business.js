import './Business.css';

function Business({business}) {
    const handleClick = (event) => {
        const name = event.target.textContent;
        console.log(name)
        const searchUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(`${name} ${business.city}`);
        window.open(searchUrl, '_blank');
        }

    return (
        <div className="Business">
            <div className="image-container">
                <img src={business.imageSrc} alt=''/>
            </div>
            <h2 onClick={handleClick}>{business.name}</h2>
            <div className="Business-information">
                <div className="Business-address">
                <p>{business.address}</p>
                <p>{business.city}</p>
                <p>{business.state} {business.zipCode}</p>
                </div>
                <div className="Business-reviews">
                <h3>{business.category}</h3>
                <h3 className="rating">{business.rating}</h3>
                <p>{business.reviewCount} reviews</p>
                </div>
            </div>
        </div>
    )
}

export default Business;