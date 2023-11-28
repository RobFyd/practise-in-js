// destructuring

{
  const numbers = [10, 22, 33, 44];

  const [num1, num2, , num4, num5 = 0, ...rest] = numbers;

  console.log(num2, num4, num5, rest);
}

// mergring arrays

{
    const numbers1 = [11, 22, 33];
    const numbers2 = [44, 55, 66];
    
    const allNumbers = [...numbers1, ...numbers2];
    
    console.log(allNumbers);
}
