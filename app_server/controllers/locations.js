module.exports.homelist = function (req, res) {
    res.render('locations-list', {
        title: 'foodie - Hey food enthusiasts!',
        pageHeader: {
            title: 'foodie',
            strapline: 'Hey food enthusiasts!!'
        },
        sidebar: "Looking for food reviews? foodie helps you select which food tastes the best. Let foodie help you find the food you're looking for.",
        locations: [{
            name: 'koi and co',
            address: 'sainikpuri,hyderabad',
            rating: 5,
            facilities: ['food', 'mocktails and cocktails', 'live band'],
            distance: '100m'
        }, {
            name: 'the coffee cup',
            address: 'banjarahills,hyderabad',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'live band'],
            distance: '200m'
        }, {
            name: 'nouba',
            address: 'suchitra,hyderabad',
            rating: 2,
            facilities: ['Food', 'mocktails'],
            distance: '250m'
        }]
    });
};
module.exports.locationInfo = function (req, res) {
    res.render('locations-info', { title: 'LocationInfo' });
};
module.exports.locationInfo1 = function (req, res) {
    res.render('locations-info1', { title: 'LocationInfo1' });
};
module.exports.locationInfo2 = function (req, res) {
    res.render('locations-info2', { title: 'LocationInfo2' });
};
module.exports.addReview = function (req, res) {
    res.render('locations-review-form', { title: 'ADD REVIEW' });
};