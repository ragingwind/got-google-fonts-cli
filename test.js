// import fs from 'fs';
import test from 'ava';
import execa from 'execa';
import tmpdir from 'os-random-tmpdir';

const tmp = tmpdir('got-google-fonts-cli');
const argify = (input, params) => input.concat(Object.keys(params).map(m => `--${m}=${params[m]}`));
const opts = {
	subset: 'greek',
	variant: 'italic'
};

test('title', t => {
	return execa('./cli.js', argify(['Roboto', tmp], opts))
		.then(res => {
			t.true(res.stdout.indexOf('Download has completed') >= 0);
		})
		.catch(e => {
			console.error(e);
			t.fail();
		});
});
