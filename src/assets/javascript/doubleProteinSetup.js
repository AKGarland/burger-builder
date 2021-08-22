const doubleProteinSetup = () => {
  const checkbox = document.getElementById('double-protein-check');

  if(checkbox !== undefined) {
    checkbox.addEventListener('click', (event) => {
      const url = '/double-protein/';
      const body = {
        protein: checkbox.value,
        double: checkbox.checked
      }

      let request = new XMLHttpRequest();
      request.onreadystatechange = () => {
        if (request.readyState != 4 || request.status >= 400) return;
        window.location.reload();
      }

      request.open('post', url, true);
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(JSON.stringify(body));
      return request;
    });
  }
}

export default doubleProteinSetup;