import React from "react";

const AsyncExample = () => {
  async function generateNumber() {
    return 1;
  }

  async function generatePromiseNumber() {
    return Promise.resolve(2);
  }

  function obtainNumber() {
    generateNumber()
      .then((response) => {
        alert(`Response : ${response}`);
      })
      .catch((error) => alert(`Somethin wen wrong: ${error}`));
  }

  function obtainPromiseNumber() {
    generatePromiseNumber()
      .then((response) => {
        alert(`Response : ${response}`);
      })
      .catch((error) => alert(`Somethin wen wrong: ${error}`));
  }

  async function saveSessionStorage(key, value) {
    sessionStorage.setItem(key, value);

    return Promise.resolve(sessionStorage.getItem(key));
  }

  function showStorage() {
    saveSessionStorage("name", "Iham")
      .then((Response) => {
        let value = Response;
        alert(`Saved name: ${value}`);
      })
      .catch((error) => {
        alert(`Somethin went wrong: ${error}`);
      })
      .finally(() => {
        alert("Name saved and retreived success");
      });
  }

  async function obtainMessage() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Hello World"), 2000);
    });

    let message = await promise;

    await alert(`Message receive: ${message}`);
  }

  const returnError = async() => {
    await Promise.reject(new Error(' Oooooops'));

  }

  const consumeError = () => {
    returnError()
    .then((response)=> alert(`Everything is okay: ${response}`))
    .catch((error) => alert(`Somethin went wrong: ${error}`) )
    .finally(()=>alert('Finally executed'))
  }

  const urlNotFound = async () =>{
    try {
        let response = await fetch('https://invalidURL.com')
        alert(`Response: ${JSON.stringify(response)}`)
    } catch (error) {
        alert(`Somethin went wrong whit your URL: ${error} (Check your console)`)
    }
  } 

  const multiplePromise = async() =>{
    let results = await Promise.all([
        fetch('https://reqres.in/api/users'),
        fetch('https://reqres.in/api/users?page=2')
    ]).catch((error) => alert(`Somethin went wrong with your URLs: ${error} (check your console)`))
  }

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Async, Promises Examples</h1>
      <button onClick={obtainNumber}>Obtener numero</button>
      <button onClick={obtainPromiseNumber}>Obtener numero promesa</button>

      <button onClick={showStorage}>Save name and show</button>

      <button onClick={obtainMessage}>Receive message in 2 seconds</button>

      <button onClick={consumeError}>Obtain Error</button>

      <button onClick={urlNotFound}>Request to Unknow URL</button>

      
      <button onClick={multiplePromise}> Multiple Promises</button>
    </div>
  );
};

export default AsyncExample;
