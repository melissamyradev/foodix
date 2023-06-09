const apiKey = 'KKTQw2cAn1ZLUIQPu8lw45821jtZCG8PbyY16lREZDPUet_EYfpV1ggqgSyf5WelPxesFKVGlUrSvbliw5dXHmuezCE6WWT9vUuaHHl65MMk0oMm0ZJB5tUIpNQ3ZHYx';
const Yelp = {

    // https://cors-anywhere.herokuapp.com/
   search (term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,  { 
            headers: {
                Authorization: `Bearer ${apiKey}` 
            }
        }).then(response => response.json())
        .then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    console.log(business);
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.zipcode,
                        category: business.category,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                });
            }
        })
             
    }
};

export default Yelp;