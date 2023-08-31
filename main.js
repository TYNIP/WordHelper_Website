/* BUTTON Settings*/
//Ensure that only when button click info will be displayed
$(document).on("keydown", "form", function(event) { 
  return event.key != "Enter";
});
/* WORD-NEXT */
// Information to reach API
const dataMuseUrl = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jja=';
// Elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// Asynchronous function
const getNext = async () => {
  const wordQuery = inputField.value;
  const endpoint = `${dataMuseUrl}${queryParams}${wordQuery}`;
  try {
    const response = await fetch(endpoint, {cache: 'no-cache'});
    if(response.ok){
      const jsonResponse = await response.json();
      renderWordResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
}

// Clear previous results and display results to webpage
const displayNext = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getNext();
}

submit.addEventListener('click', displayNext);


/* WORD-DESCRIBE */
// Information to reach API
const url = 'https://api.datamuse.com/words?sl=';
//Element
const shortenButton = document.querySelector('#shorten');
// Asynchronous function
// Asynchronous function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${wordQuery}`;
  
  fetch(endpoint, {cache: 'no-cache'}).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  }).then(jsonResponse=>{
    //renderRawResponse(jsonResponse)
    renderResponse(jsonResponse);
  })
}

// Clears previous results and display results to webpage
const displaySug = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

shortenButton.addEventListener('click', displaySug);