// utils.js
export default {
	authorize: () => {
		return 'token';
	},
	isAuthorized: secret => secret === 'wizard',
};