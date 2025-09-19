const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener(`submit`, (event) => {
    event.preventDefault();
    const input = document.querySelector(`input#searchByID`);
    console.log(input.value);
    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((response) => response.json())
      .then((data) => {
        const movieTitle = document.querySelector('section#movieDetails h4');
        const movieSummary = document.querySelector('section#movieDetails p');
        movieTitle.textContent = data.title;
        movieSummary.textContent = data.summary;
        console.log(data);
      })
      .catch((error) => console.error(error));

    });

  document.addEventListener('DOMContentLoaded', init);
  }