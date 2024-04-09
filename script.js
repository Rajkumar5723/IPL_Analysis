const API_KEY = "f3110c3107a44e9cb98aa98e36d6ffb9";
const baseUrl = "https://newsapi.org/v2/everything";

window.addEventListener("load", () => fetchCricketNews());

async function fetchCricketNews() {
    const query = "ipl";
    const url = `${baseUrl}?q=${query}&apiKey=${API_KEY}`; // Corrected URL construction

    try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.status === "ok") {
            bindData(data.articles);
        } else {
            console.error("Failed to fetch news:", data.message);
        }
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";

    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
    });

    // Properly interpolate values in the newsSource innerHTML
    newsSource.innerHTML = `${article.source.name} · ${date}`;

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}
