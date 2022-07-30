
const $ul = document.querySelector('#people_list');
const $visible = document.querySelector('div.visible');

const addPersonItem = (person) => {

    const secondFilm = _.get(person, '["films"][1]', 'Unknown');
    const $li = document.createElement('li');
    $li.className = 'list-group-item';
    $li.innerText = `
        ${person['name']}
        (birth year: ${person['birth_year']})
        - second film: ${secondFilm}
    `;
    $ul.appendChild($li);
};
// функция удаления блока спинера
function interrupt() {
    return $visible.parentNode.removeChild($visible);
}

const path = 'https://swapi.dev/api/people/?page=1'
function loadingPage() {
    axios.get(path)
        .then((res) => {
            res.data.results.forEach(person => {
                addPersonItem(person);
            });
        });
}
// Для наглядности задержка времени
setTimeout(loadingPage, 300);
setTimeout(interrupt, 1000);

