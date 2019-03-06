import { findRepos, getChangedFilesForRoots } from 'jest-changed-files';

test('Get changed files for roots', () => {
	return getChangedFilesForRoots(['./'], {
		lastCommit: true,
	}).then(result => {
		console.log('Changed files');
		console.log(result.changedFiles);
	});
})

test('Find repository', () => {
	return findRepos(['./'])
	.then(repos => {
		console.log(repos);
	});
})

test('Compare difference', () => {
	const diff = require('jest-diff');

	const a = {a: {b: {c: 5}}};
	const b = {a: {b: {c: 6}}};

	const result = diff(a, b);

	// print diff
	console.log(result);
})

test('Document block', () => {
	const {parseWithComments} = require('jest-docblock');

	const code = `
	/**
	 * This is a sample
	 *
	 * @flow
	 */
	 
	 console.log('Hello World!');
	`;

	const parsed = parseWithComments(code);

	// prints an object with two attributes: comments and pragmas.
	console.log(parsed);	
})

test('Get variable type', () => {
	const getType = require('jest-get-type');
	
	const a = 1;
	const b = 2.0;
	const c = 'hello';
	const d = true;
	const e = [];
	const f = {};
	const g = null;
	const h = undefined;
	
	console.log('type of a is ' + getType(a));
	console.log('type of b is ' + getType(b));
	console.log('type of c is ' + getType(c));
	console.log('type of d is ' + getType(d));
	console.log('type of e is ' + getType(e));
	console.log('type of f is ' + getType(f));
	console.log('type of g is ' + getType(g));
	console.log('type of h is ' + getType(h));
})

test('Pretty format', () => {
	const prettyFormat = require('pretty-format');

	const val = {object: {}};
	val.circularReference = val;
	val[Symbol('foo')] = 'foo';
	val.map = new Map([['prop', 'value']]);
	val.array = [-0, Infinity, NaN];

	console.log(prettyFormat(val));	
})

