const { myFunction } = require('./create_file');

test('hello world!', () => {
	expect(myFunction()).toBe('expected output');
});