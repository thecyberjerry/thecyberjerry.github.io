let fetchURL = 'https://github.com/thecyberjerry/Shttps://github.com/thecyberjerry/Subli/blob/main/shot.png';
  let image = name.map((picName) => {
    return picName
  })

  fetch(fetchURL + image)
  .then(response => response.json())
  .then(images => console.log(fetchURL + images));