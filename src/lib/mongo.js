import { ATLAS_URI3 } from '$env/static/private';

import { MongoClient } from 'mongodb';

const options = {
	useUnifiedTopology: true,
	useNewUrlParseer: true
};

const client = new MongoClient(ATLAS_URI3);

client.connect();

export default client.db('tis');
