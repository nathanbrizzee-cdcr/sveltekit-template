import prismaClient from '$lib/db.server';

export async function load({ locals }) {
	if (locals.session?.user) {
		// add database code here
	}
	return {
		lists: [],
		account: await prismaClient.account.findFirst({
			where: {
				userId: locals.session?.user?.id,
			},
		}),
	};
}
