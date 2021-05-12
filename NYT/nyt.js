const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'RRIgbTtUQd5wr4XgTqWp5Denkg9epU16'; // please include your own key
let url;

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = 'none';

//THE DEFULT PAGE NUMBER
let pageNumber = 0;

let displayNav = false;
// console.log('PageNumber:', pageNumber);
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

function submitSerch(e){
    pageNumber = 0;
    fetchResults(e);
}

function fetchResults(e) {
    // console.log(e);
    e.preventDefault();
    url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`;
    // console.log('URL:', url);
    if (startDate.value !== '') {
        //console.log(startDate.value)
        url += '&begin_date=' + startDate.value;
        //console.log('URL:', url);
    }
    if (endDate.value !== '') {
        //console.log(endDate.value)
        url += '&end_date=' + endDate.value;
        //console.log('URL:', url);
    };
//END HERE
    fetch(url).then(function (result) {
            //console.log(result)
            return result.json();
        })
        .then(function (json) {
            //console.log(json);
            displayResults(json);
        })
}

function displayResults(json) {
    //console.log('Display Results', json);
    // console.log(json.response.docs);
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    // Getting rid of last set of results when clicking next 10

    let articles = json.response.docs;
    // console.log(articles);

    if(articles.length === 10) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }

    if (articles.length === 0) {
        const para = document.createElement('p');
        para.textContent = 'No results returned.'
        //console.log('No results');
        section.appendChild(para);
    } else {
        for (let i = 0; i < articles.length; i++) {
            // console.log(i);
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');

            let current = articles[i];
            console.log('Current:', current);
        
        
            link.href = current.web_url;

            link.textContent = current.headline.main;
            para.textContent = current.headline.main;
            para.textContent = 'Keywords: ';
            for (let j = 0; j < current.keywords.length; j++) {
                let span = document.createElement('span');
                span.textContent += current.keywords[j].value + ' ';
                para.appendChild(span);
            }
            if (current.multimedia.length > 0) {
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;
            }

            clearfix.setAttribute('class', 'clearfix');

            heading.appendChild(link);
            article.appendChild(heading);
            article.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
    }
};
function nextPage(e) {
    // console.log('Next button clicked');
    pageNumber++;
    fetchResults(e);
    //console.log('Page Number:', pageNumber);
};
function previousPage(e) {
    // console.log('Previous button clicked');
    if (pageNumber > 0) {
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e);
    //console.log('Page:', pageNumber);
};