// Togle elements
const toggleButton = document.querySelector('#toggle');
const title = document.querySelector('#title');
const css = document.querySelector('#css');
const prompt = document.querySelector('#prompt');
const id = document.querySelector('#logo');
const page = document.querySelector('#page');
const text = document.querySelector('#text');
// re-assigning elements values when changing
const renderToggle = () => {
  if(title.innerHTML === 'wordNext'){
    title.innerHTML = "wordDescribe";
    css.href = "wordDescribe.css";
    page.innerHTML = "WordDescribe";
    text.innerHTML = "Type a word, recieve similar phonetic words!";
    prompt.innerHTML = "Find Word Doppelgänger";
    toggle.innerHTML = "Switch to WordNext";
  } else {
    title.innerHTML = "wordNext";
    css.href = "wordNext.css";
    page.innerHTML = "WordNext";
    text.innerHTML = "Type a word, recieve other to continue!";
    prompt.innerHTML = "Find Word Match";
    toggle.innerHTML = "Switch to WordDescribe";
  }
  // clearing previous input 
  inputField.value = ""
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  };
}

// Event handler to `toggleButton`
toggleButton.addEventListener("click", renderToggle);