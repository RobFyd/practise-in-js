console.log("Loading 1:XMLH, 2:fetch, 3:alternative fetch, 4:catch");

// 1: XMLH - rather as a curiosity

{
  const request = new XMLHttpRequest();

  request.open("GET", "products.json");

  request.responseType = "json"; // can be also 'text' or 'blob' or 'arraybuffer'

  request.onload = () => {
    console.log(request.response, "1");
  };

  request.send();
}

// 2: fetch - replacement for XHR

{
  fetch("products.json").then((response) => {
    response.json().then((products) => {
      console.log(products, "2");
    });
  });

  // const promise = fetch("products.json");  // order of operation

  // promise
  //    .then((response) => {
  //        response.json()
  //            .then((products) => {
  //                console.log(products);
  //             });
  //      });
}

{
  //  3: alternative fetch

  fetch("products.json")
    .then((response) => response.json()) // first promise
    .then((products) => console.log(products, "3")); // second promise
}

{
  // 4: catch - when something goes wrong

  fetch("https://thisdoesntexist")  // this will fail
    .then((response) => response.json()) // first promise
    .then((products) => console.log(products, "4")) // second promise
    .catch((error) => {
      console.log("Something bad happened, 4");
      console.error(error);
      alert("Something bad happened, 4");
    });
}

// sending data, object to the server - POST

fetch("https://example/add-person", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        firstName: "John",
        lastName: "Doe"
    }),
});