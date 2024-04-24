  const scriptURL = 'https://script.google.com/macros/s/AKfycbzsCl-D7WdYlZ9mzrdh5S7FEPO4diUxHN3saOTH5brrWifmY3p5rnsSn5UV5Nhl4x_xaA/exec'

  const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML="Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset();
    })
      .catch(error => console.error('Error!', error.message))
  })
