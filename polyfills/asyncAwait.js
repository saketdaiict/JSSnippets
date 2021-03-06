import fetch from 'node-fetch';

/**
 * This emulates ES7 Async/Await control flow
 */

function* gAsyncFetch(url) {
	const response = yield fetch(url);
	const data = yield response.json();
	return data;
}

export default function asyncFetch(url, cb) {
	const iterator = gAsyncFetch(url, cb);
	const p1 = iterator.next().value;
	
	p1.then(res => iterator.next(res).value)
		.then(res => iterator.next(res).value)
		.then(res => cb(res));
}

asyncFetch('https://jsonplaceholder.typicode.com/users', data => { console.log('Todos: ', data); });