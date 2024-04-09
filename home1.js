function showHome() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="textBox">
            <h2>Player Analysis <br><span>Prediction</span></h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Quod voluptatem rem, corporis magni adipisci sapiente cum 
                amet autem officiis voluptatibus nihil vitae consequatur 
                minus nesciunt tempore laudantium alias aliquam ducimus!
            </p>
            <a href="#" class="cta-btn" onclick="showProduct()">View All Products</a>
        </div>
        <div class="imgBox">
            <img src="ipl logo.jpg" alt="Sports Logo" class="sports">
        </div>
    `;
}

function showProduct() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="textBox">
            <h2>Our Analysis</h2>
            <p>
                Explore our range of sports products for player analysis and prediction.
            </p>
            <a href="#" class="cta-btn" onclick="showHome()">Back to Home</a>
        </div>
        <div class="imgBox">
            <img src="products.jpg" alt="Products" class="sports">
        </div>
    `;
}

