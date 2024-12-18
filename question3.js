// 3. Filtrera frukt (3p)
// Skriv en funktion removeApples som tar bort alla "apple" ur arrayen
// och returner den nya arrayen.

function removeApples(fruits) {
  const newFruits = fruits.slice(1, -1);
  
  return newFruites;
}

console.log(removeApples(["apple", "banana", "orange", "apple"])); // ska logga ["banana", "orange"]
