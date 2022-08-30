
    const scriptURL = ''
    const form = document.forms["#submit"]
        // console.log("done")
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
        window.location = 'https://kovidafoundation.org/index.html';
    })
 