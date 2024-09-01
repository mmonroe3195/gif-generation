function getImage() {
  let text = document.querySelector('#gifText');
  if(text.value == "") {
    alert("please enter some valid text before submitting");
  }
  else {
    const img = document.querySelector('img');
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=iwDojf87COWt8FYV2BwDI9VSOIa05ZNj&s=${text.value}`, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      if (response.meta.status != 200) {
      if(!img) {
        let img = document.createElement('img');
        img.alt = "user-generated-image";
        body.insertBefore(img, body.firstChild);
      }}
      img.src = response.data.images.original.url;
    
    })
    .catch((error) => {console.log(error);
      document.querySelector("#message").textContent = "Error Displaying Image";
      if(img) {
        img.remove();
      }
    });
  }
}

document.querySelector("#getgif").addEventListener("click", getImage)

