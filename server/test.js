const axios = require('axios');


describe('Server Tests', async () => {

	test('it should make a successful GET request and work on a string', async () => {
		const { data } = await axios.get('http://localhost:3000/api/1a2b3c');

		expect(data.result).toEqual('cba321');
	});

});


