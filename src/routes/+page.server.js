import db from '$lib/mongo';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	let tasks = await db.collection('cards').find({}).toArray();
	let cards = JSON.parse(JSON.stringify(tasks));
	return {
		cards
	};
}