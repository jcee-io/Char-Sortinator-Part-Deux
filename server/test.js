const axios = require('axios');


describe('test1', async () => {


	test('hello', async () => {
		const data = await axios.get('http://localhost:3000/1a2b3c');
		console.log(data);
		expect(data).toEqual('cba321');
	});

});


