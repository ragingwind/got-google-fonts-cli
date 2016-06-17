// import fs from 'fs';
import test from 'ava';
import execa from 'execa';
import tmpdir from 'os-random-tmpdir';
import dargs from 'dargs';

const tmp = tmpdir('got-google-fonts-cli');
const opts = {
	subset: 'greek',
	variant: 'italic'
};

test('title', t => {
	return execa('./cli.js', ['Roboto', tmp].concat(dargs(opts)))
		.then(res => {
			t.true(res.stdout.indexOf('Download has completed') >= 0);
		})
		.catch(e => {
			console.error(e);
			t.fail();
		});
});
