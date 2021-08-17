const doubleProteinSetup = () => {
  const checkbox = document.getElementById('double-protein-check');

  console.log(checkbox)
  checkbox.addEventListener('click', (event) => {
    if (checkbox.checked) {
      const url = '/double-protein/';
      const body = {
        protein: checkbox.value
      }

      let request = new XMLHttpRequest();
      request.onreadystatechange = () => {
        if (request.readyState != 4 || request.status >= 400) {
          checkbox.checked = false;
          return;
        }
        console.log(`status: ${request.status}`)
      }

      request.open('post', url, true);
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(JSON.stringify(body));
      return request;
    } else {
      // undo double
    }
  })
}

export default doubleProteinSetup;