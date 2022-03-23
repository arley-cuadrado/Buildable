const inputFocus = document.getElementById('inputFocus');
const btn = document.getElementById('btn')
const results = document.getElementById('results')
const triangle = document.getElementById('triangle-up')
const resultsItem = document.getElementById('resultsItem')
const list = document.getElementById('list')
const empty = document.getElementById('empty')

const url = 'https://api.buildable.dev/trigger/v2/test-0d6d4ffa-777e-44c9-bb69-b9b8dd5da59f?search='

fetch(url)
    .then(Response => Response.json())
    .then(data => {
        function testFunction() {
            //var moviesItem = data.rows[i]
            for (var i = 0; i < data.rows.length; i++) {
                //console.log(data.rows[i].title)
                results.innerHTML += `
                    <div class="results-input">
                        <div>
                            <!--<a href='index.html?=${data.rows[i].title}'>${data.rows[i].title}</a>-->
                            <a id="myLink" href="index.html?idMovie=${data.rows[i].id}&tiMovie=${data.rows[i].title}&raMovie=${data.rows[i].rank}" onclick="selectItem();">${data.rows[i].title}</a>
                        </div>
                    </div>
                `
                if (inputFocus.value === data.rows[i].title) {
                    console.log('El nombre es igual')
                }
                if (inputFocus.value != data.rows[i].title) {
                    console.log('El nombre no existe')
                }
            }
        }
        testFunction()
        selectItem(data)
    })
    .catch(err => console.log(err))

function selectItem(data) {

    for (var i = 0; i < data.rows.length; i++) {
        console.log(data.rows[i].title)
    }

    var items = window.location.search;
    var urlParams = new URLSearchParams(items);
    var idParam = urlParams.get('idMovie');
    var tiParam = urlParams.get('tiMovie');
    var raParam = urlParams.get('raMovie');
    window.location.search;
    /*
    console.log(idParam);
    console.log(tiParam);
    console.log(tiParam);
    */
    console.log(urlParams.has('idParam'));
    console.log(urlParams.has('tiParam'));
    console.log(urlParams.has('raParam'));

    const
        keys = urlParams.keys(),
        values = urlParams.values(),
        entries = urlParams.entries();

    for (const value of values) console.log(value);

    if (idParam == null) {
        empty.innerHTML = `
            <img src="https://arley-cuadrado.github.io/Buildable-test/images/empty.svg" alt="Empty">
            <strong>No results yet...</strong>
        `
    } else {
        resultsItem.innerHTML = `
            <div class="flex-style">
                <strong>ID: ${idParam}</strong>
                <p>${raParam} <img src="https://arley-cuadrado.github.io/Buildable-test/images/star.svg" alt="Star" /></p>
            </div>
            <div class="movie-title">
                <h2>${tiParam}</h2>
            </div>
        `
    }
}

function looking() {
    if (inputFocus.value == '') {
        results.classList.remove('result-active')
        results.style.display = "block"
        triangle.classList.remove('triangle-up')
        list.style.display = "none";
    } else if (inputFocus.value != '') {
        results.classList.add('result-active')
        triangle.classList.add('triangle-up')
        list.style.display = "block"
    }
}