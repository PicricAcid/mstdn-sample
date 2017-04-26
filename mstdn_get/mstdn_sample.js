window.onload = () => {
  const url = 'https://mstdn-workers.com/api/v1/timelines/public?local=1'
  let text = [];
  let i;
  let j;
  const textList = document.getElementById('textList');

  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send(null);
  text = JSON.parse(request.response);

  if (text) {
    for (i=0; i<=19; i++) {
      console.log(i);
      console.log(text[i]);
    }
  }
}
