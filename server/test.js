const axios = require('axios');


describe('Server Tests', async () => {
	test('it should make a successful GET request', async () => {
		const { status } = await axios.get('http://localhost:3000/api/1a2b3  c');
		expect(status).toEqual(200);
	})

	test('it should work on a string', async () => {
    const { data } = await axios.get('http://localhost:3000/api/1a2b3  c');
		expect(data.result).toEqual('cba321  ');
	});

	test('Input and output are same length (they do not look like it at all with spaces)', async () => {
		const { data } = await axios.get('http://localhost:3000/api/1a2b3  c');
		expect(data.string.length).toEqual(data.result.length);
	})

});


