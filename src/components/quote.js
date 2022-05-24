 export const Fetch = () => {

  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'healthruwords.p.rapidapi.com',
		'X-RapidAPI-Key': '035a2b44c4msh753988870b4a387p1fc448jsn01c8c79f1a04'
	}
  };

  fetch('https://healthruwords.p.rapidapi.com/v1/quotes/?t=Wisdom&maxR=1&size=medium&id=731', options)
	  .then(response => response.json())
	  .then(response => console.log(response))
	  .catch(err => console.error(err));

 }

