/*
 * ====================Summary=================================
 * This handler incorporates both a button click and key presses
 * the function will only run iff either Enter is pressed or submit button is clicked on the form
 * otherwise we will just exit out of the function
 *
 * ====================Details=================================
 * We declare an async function that referenes the #input and #result elements, after which
 * we await a fulfilled promise in the form of an http request using axios
 * after we receive our data we append the result element with an h3 element
 */

const handler = async (event) => {
	const { value } = document.getElementById('input');

	if(value.length === 0 || (event && event.code !== "Enter")) {
		return;
	}
	
	const result = document.getElementById('result');
	const { data } = await axios.get(`/api/${value}`);

	result.innerHTML += `<h3>${data.string} | ${data.result}</h3>`;
};