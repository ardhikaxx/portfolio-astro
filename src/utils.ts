import { loadEnv } from 'vite';

const { GITHUB_PERSONAL_ACCESS_TOKEN } = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), '');

export const slugify = (input: string) => {
	if (!input) return '';

	var slug = input.toLowerCase().trim();

	slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

	slug = slug.replace(/[^a-z0-9\s-]/g, ' ').trim();

	slug = slug.replace(/[\s-]+/g, '-');

	return slug;
};

export const unslugify = (slug: string) =>
	slug.replace(/\-/g, ' ').replace(/\w\S*/g, (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());

export const kFormatter = (num: number) => {
	return Math.abs(num) > 999 ? (Math.sign(num) * (Math.abs(num) / 1000)).toFixed(1) + 'k' : Math.sign(num) * Math.abs(num);
};

export const getRepositoryDetails = async (repositoryFullname: string) => {
	const repoDetails = await fetch('https://api.github.com/repos/' + repositoryFullname, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${GITHUB_PERSONAL_ACCESS_TOKEN}`,
			'X-GitHub-Api-Version': '2022-11-28'
		}
	});
	const response = await repoDetails.json();
	return response;
};
