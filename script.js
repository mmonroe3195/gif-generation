function showErrorMsg() {
  document.querySelector("#message").textContent = "Error Displaying Image";
  let img = document.querySelector('img');
    if(img) {
      img.remove();
    }
}
async function getImage() {
  let text = document.querySelector('#gifText');
  if(text.value == "") {
    alert("please enter some valid text before submitting");
  }
  else {
    let img = document.querySelector('img');

    try {
    let response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=iwDojf87COWt8FYV2BwDI9VSOIa05ZNj&s=${text.value}`, {mode: 'cors'})
    let json = await response.json();
      if (json.meta.status == 200) {
      if(!img) {
        img = document.createElement('img');
        img.alt = "user-generated-image";
        document.querySelector("body").appendChild(img);
      }
      img.src = json.data.images.original.url;
    }    
    else {
      showErrorMsg();
    }
  }
  catch(error){
      console.log(error);
      showErrorMsg();
    }
  }
}

document.querySelector("#getgif").addEventListener("click", getImage);

