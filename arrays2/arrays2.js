// destructuring

{
  const numbers = [10, 22, 33, 44];

  const [num1, num2, , num4, num5 = 0, ...rest] = numbers;

  console.log(num2, num4, num5, rest);

  document.querySelector(".js-destructuring").innerText = `
    Show me num2: ${num2}, num4: ${num4}, num5: ${num5}, rest: ${rest} no rest!
  `;
}

// mergring arrays

{
  const numbers1 = [11, 22, 33];
  const numbers2 = [44, 55, 66];

  const allNumbers = [
    ...numbers1, // spread operator/syntax
    ...numbers2, // spread operator/syntax
    9898, // adding new element
  ];

  console.log(allNumbers);

    document.querySelector(".js-merging").innerText = `
        Show numbers from both arrays: ${allNumbers.join(", ")}
    `;
}

// cloning/copy arrays

{
  const numbers = [111, 222, 333];

  const numbersCopy = [...numbers]; // shaloow copy

  console.log(numbersCopy);
}

// passing array elements as a function argument

{
  const numbers = [55, 44, 33, 22, 11];

  const minimum = Math.min(...numbers);     // spread operator/syntax
  console.log(minimum);

  const maximum = Math.max(...numbers);     // spread operator/syntax
  console.log(maximum);
}
