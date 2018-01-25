const handler = async (event) => {
	const { value } = document.getElementById('input');

	if(value.length === 0 || (event && event.code !== "Enter")) {
		return;
	}
	
	const result = document.getElementById('result');
	const { data } = await axios.get(`/api/${value}`);

	result.innerHTML += `<h3>${data.string} | ${data.result}</h3>`;
};