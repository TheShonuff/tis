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
		const category = data.get('category');
		const blurb = data.get('blurb');
		const facts = data.get('facts');
		const truth = data.get('truth');
		const factLink1 = data.get('flink1');
		const factLink2 = data.get('flink2');
		const TrueVotes = 0;
		const FalseVotes = 0;

		db.collection('cards').insertOne({
			title: title,
			source: source,
			link: link,
			category: category,
			blurb: blurb,
			facts: facts,
			truth: truth,
			TrueVotes: TrueVotes,
			FalaseVotes: FalseVotes,
			factLink1: factLink1,
			factlink2: factLink2
		});
	}
};
