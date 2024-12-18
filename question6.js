// 6. Todos (5p)

// Skapa en lista med TODOs som hämtas från: https://jsonplaceholder.typicode.com/todos
// Listan ska placeras i div-elementet med id todos på index.html

// Visa de första 10 TODOs i listan.
// För varje TODO ska följande visas:
// Titeln på TODO:n
// Om den är klar eller inte "completed" eller "not completed"
// Markera TODOs som är klara genom att visa dem med en grön textfärg.

async function todos() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const posts = await response.json();
  
      const divID = document.getElementById("todos");
  
      posts.slice(0, 10).forEach((post) => {
        const todoElement = document.createElement("div");
        todoElement.classList.add("todosDivs");
  
        todoElement.innerHTML = `
        <h2 class="post-title">${post.title}</h2>
        <h3 class="post-completed">${post.completed}</h3>`;
  
        divID.appendChild(todoElement);
      });
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }
  
  todos();


