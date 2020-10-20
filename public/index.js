 async function validateForm() {
      var text = document.forms['qrText']['Text'].value;
      URL = window.location.href + `stringtoCode?text=${text}`
      let response = await fetch(URL, {
      	method: 'GET',
      	headers: {
      		'Content-Type': 'application/json',
      	}

      });
      console.log(response);
    }