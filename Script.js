function displayCharacters(characters) {
    const characterTableBody = document.getElementById('characterTableBody');
    characterTableBody.innerHTML = '';
  
    characters.forEach(character => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${character.name}</td>
        <td>${character.status}</td>
        <td>${character.species}</td>
        <td>${character.type}</td>
        <td>${character.gender}</td>
      `;
      characterTableBody.appendChild(row);
    });
  }
  
  function displayError(error) {
    const characterTableBody = document.getElementById('characterTableBody');
    characterTableBody.innerHTML = '';
  
    const errorRow = document.createElement('tr');
    errorRow.innerHTML = `<td colspan="5">Error: ${error.message}</td>`;
    characterTableBody.appendChild(errorRow);
  }
  
  function getCharacters() {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => displayCharacters(data.results))
      .catch(error => displayError(error));
  }
  
  function getFilteredCharacters() {
    const name = document.getElementById('nameInput').value;
    const status = document.getElementById('statusInput').value;
    const species = document.getElementById('speciesInput').value;
    const type = document.getElementById('typeInput').value;
    const gender = document.getElementById('genderInput').value;
  
    const apiUrl = `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${species}&type=${type}&gender=${gender}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => displayCharacters(data.results))
      .catch(error => displayError(error));
  }
  
  document.getElementById('getAllCharacters').addEventListener('click', getCharacters);
  document.getElementById('filterCharacters').addEventListener('click', getFilteredCharacters);
  