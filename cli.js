#!/usr/bin/env node

'use strict';

const meow = require('meow');
const gotFonts = require('got-google-fonts');

const cli = meow([`
  Usage,
    $ got-google-fonts [families] <destination> <options>

  Families
    Checkout all of font familes on https://www.google.com/fonts

  Destination
    Path for font downloading. default is current running path

  Options
    You can find out all of options on Google web fonts developers APIs

    --variant: regular or italic, 700, 700italic
    --subset: greek, greek-ext, cyrillic-ext, latin-ext, latin, cyrillic
    --version: v3 or else version
    --last-modified: 2012-07-25 or other date

  Examples
    $ got-google-fonts Roboto
    $ got-google-fonts Roboto ./dest --variant=italic --subset=greek
`]);

if (!cli.input[0]) {
	throw new Error('Family name should be provided');
}

gotFonts(cli.input[1] || process.cwd(), cli.input[0], Object.assign({
	variant: 'regular'
}, cli.flags)).then(files => {
	console.log(`Download has completed:\n ${files.join('\t\n')}`);
}).catch(e => {
	throw e;
});
