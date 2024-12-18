// 2. Medelvärdet (3p)
// Skriv en funktion average som returnerar medelvärdet av en array med siffror.
// Medelvärdet räknas ut genom att först räkna ut summan av siffrorna och sen
// dela det med antalet siffror. medelvärdet = summan / antal.


  //Din kod här
  function average(numbers) {
    let sum = 0;
  
    numbers.forEach((numberrr) => {
      sum += numberrr;
    });
  
    const value = sum / numbers.length;
    return value;
  }
  
  console.log(average([1, 2, 3, 4, 5])); // Ska logga 3
  console.log(average([1, 2, 3, 4])); // Ska logga 2.5


