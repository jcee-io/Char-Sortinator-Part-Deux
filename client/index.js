
const clickHandler = async function() {
	const input = document.getElementById('input');
	const result = document.getElementById('result');
	const { data } = await axios.get(`/api/${input.value}`);
	
	result.innerHTML = data;
};