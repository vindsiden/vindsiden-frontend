const Faker = require('Faker');
const _ = require('lodash');

const N = process.argv[2] || 100;
function createSpot() {
    return {
        id: _.uniqueId(),
        image: `/img/spot${_.random(1, 4)}.jpg`,
        name: Faker.Address.streetName(),
        address: Faker.Address.streetAddress(),
        area: Faker.Address.city(),
        latitude: 59.920455,
        longitude: 10.752007,
        status: ['open', 'closed'][`${_.random(0,1)}`],
        windrange: [ 'NV', 'NNV', 'N' ],
        type: ['grass', 'beach', 'rocks'][_.random(0,2)],
        skill: ['advanced', 'intermediate', 'beginner'][_.random(0,2)]
    };
}

const spots = _.range(N).map(createSpot);
const db = {spots};

module.exports = db;