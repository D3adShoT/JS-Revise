let URL="https://cat-fact.herokuapp.com/facts";
console.log('hi JS');
(async () =>{
    let response = await fetch(URL); //fetch always returns a promise
    //leter we need to resolve the response which is in json format. we have json() method which returns a promise as well.
    console.log(response);
    let data = await response.json();
    console.log(data);
})();
