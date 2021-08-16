import html2canvas from 'html2canvas';

const saveImageSetup = () => {
  const saveImgBtn = document.getElementById('save-img-btn');

  saveImgBtn.addEventListener('click', (event) => {
    const imgTarget = document.getElementById('burger-img-container');

    html2canvas(imgTarget).then((canvas) => {
      const base64img = canvas.toDataURL('image/png');
      let link = document.createElement('a');
      link.href = base64img;
      link.download = 'my-burger.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });
}


export default saveImageSetup;