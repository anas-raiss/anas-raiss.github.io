var ARTICLES = [
    { 'title': 'Sustainable growth', 'date': 'July 10, 2024', 'headline': 'At the intersection of economics and sustainability', 'link': './article.html' }
];
function addArticles() {
    let articlesNode = document.getElementById("body");
    ARTICLES.map((article) => {
        let articleDiv = document.createElement('a');
        articleDiv.href = article.link;
        articleDiv.classList = "mt-10 transition ease-in-out hover:scale-105 hover:translate-x-1 duration-300";
        let titleDiv = document.createElement('h2');
        titleDiv.classList = "text-2xl font-semibold text-violet-400";
        titleDiv.textContent = article.title;
        articleDiv.appendChild(titleDiv);

        let dateDiv = document.createElement('p');
        dateDiv.classList = "text-sm text-violet-100";
        dateDiv.textContent = article.date;
        articleDiv.appendChild(dateDiv);

        let headlineDiv = document.createElement('p');
        headlineDiv.classList = "text-base text-violet-200";
        headlineDiv.textContent = article.headline;
        articleDiv.appendChild(headlineDiv);

        articlesNode.appendChild(articleDiv);
    })
}

window.addEventListener('load', addArticles)