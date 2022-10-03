// Add Server functions
import db from '$lib/mongo';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	let tasks = await db.collection('cards').find({}).toArray();
	let cards = JSON.parse(JSON.stringify(tasks));
	return {
		cards
	};
}

/**@type {import('./$types').Actions} */
export const actions = {
	add: async ({ request }) => {
		const data = await request.formData();
		const title = data.get('title');
		const source = data.get('source');
		const link = data.get('link');
		const blurb = data.get('blurb');
		const sType = data.get('sType');

		db.collection('cards').insertOne({
			title: title,
			source: source,
			link: link,
			blurb: blurb,
			sType: sType
		});
	}
};
