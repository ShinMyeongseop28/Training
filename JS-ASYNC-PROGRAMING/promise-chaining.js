fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
  .then((Response) => {
    return Response.json();
  })
  .then((data) => {
    console.log('data: ', data);
    return data.filter((obj) => obj.id > 3);
  })
  .then((result) => {
    console.log('result: ', result);
  })
  .catch((err) => {
    console.log('err: ', err);
  })
  .finally(() => {
    console.log('### finally ###');
  });
