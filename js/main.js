
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

function invisibleSpinner(){
    return $visible.setAttribute("class", "invisible");
}

function visibleSpinner() {
    return $visible.setAttribute("class", "visible");
}

const path1 = 'https://swapi.dev/api/people/?page=1';
const path2 = 'https://swapi.dev/api/people/?page=2';
const path3 = 'https://swapi.dev/api/people/?page=3';

function loadingPage(path) {
    visibleSpinner();
    axios.get(path)
        .then((res) => {
            res.data.results.forEach(person => {
                addPersonItem(person);
            });
        }).then(invisibleSpinner);
}



