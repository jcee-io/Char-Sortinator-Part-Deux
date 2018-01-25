const axios = require('axios');


describe('Server Tests', async () => {

	test('it should work on a simple string', async () => {
		const { data } = await axios.get('http://localhost:3000/api/1a2b3c');

		expect(data).toEqual('cba321');
	});

});


