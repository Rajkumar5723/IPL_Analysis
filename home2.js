function showHome() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="textBox">
            <h2>Player Analysis <br><span>Prediction</span></h2>
            <p>
                Are you ready to take your cricket insights to the next level?
                IPL Player Prediction leverages cutting-edge machine learning algorithms to revolutionize how you anticipate player performances in the Indian Premier League (IPL). 
                Whether you're a seasoned cricket enthusiast or a data-driven sports fan, our platform empowers you to make informed predictions and gain a competitive edge.
            </p>
            <a href="#" class="cta-btn" onclick="showProduct()">Explore</a>
        </div>
        <div class="imgBox">
            <img src="ipl_logo.jpg" alt="Sports Logo" class="sports">
        </div>
    `;
    document.body.style.backgroundColor = '#FFFFFF';
}

function showTeam() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    const teamLink = document.querySelector('.nav-links a[href="#"]');
    teamLink.classList.add('active');
}

function showProduct() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="textBox">
            <h2>Our Products</h2>
            <p>
                Explore our range of sports products for player analysis and prediction.
            </p>
            <a href="#" class="cta-btn" onclick="showHome()">Back to Home</a>
        </div>
        <div class="imgBox">
            <img src="products.jpg" alt="Products" class="sports">
        </div>
    `;
    document.body.style.backgroundColor = '#FFFFFF';
}

function showCSK() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="textBox">
            <h2>Chennai Super Kings</h2>
            <p>Description of Chennai Super Kings...</p>
            <a href="#" class="cta-btn" onclick="showHome()">Back to Home</a>
        </div>
        <div class="imgBox">
            <img src="csk3.png" alt="CSK Logo" class="sports">
        </div>
    `;
    document.body.style.backgroundColor = '#FFFB00';
}

function showKKR() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="textBox">
            <h2>Kolkata Knight Riders</h2>
            <p>Description of Kolkata Knight Riders...</p>
            <a href="#" class="cta-btn" onclick="showHome()">Back to Home</a>
        </div>
        <div class="imgBox">
            <img src="kkrlogo.png" alt="KKR Logo" class="sports">
        </div>
    `;
    document.body.style.backgroundColor = '#3F0097';
}
function showMI() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="textBox">
            <h2>Mumbai Indians</h2>
            <p>Description of Mumbai Indians...</p>
            <a href="#" class="cta-btn" onclick="showHome()">Back to Home</a>
        </div>
        <div class="imgBox">
            <img src="milogo.png" alt="MI Logo" class="sports">
        </div>
    `;
    document.body.style.backgroundColor = '#1548A6'; 

}

function showrr() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="textBox">
            <h2>Rajasthan Royals</h2>
            <p>Description of Rajasthan Royals...</p>
            <a href="#" class="cta-btn" onclick="showHome()">Back to Home</a>
        </div>
        <div class="imgBox">
            <img src="rrlogo.png" alt="CSK Logo" class="sports">
        </div>
    `;
    document.body.style.backgroundColor = '#E821E4'; 

}
function showDD() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="textBox">
            <h2>Delhi Daredevils / Delhi Capitals</h2>
            <p>Description of Delhi Daredevils / Delhi Capitals...</p>
            <a href="#" class="cta-btn" onclick="showHome()">Back to Home</a>
        </div>
        <div class="imgBox">
            <img src="ddlogo.png" alt="DD Logo" class="sports">
        </div>
    `;
    document.body.style.backgroundColor = '#1548A6'; 
}

function showKP() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="textBox">
            <h2>Kings XI Punjab / Punjab Kings</h2>
            <p>Description of Kings XI Punjab / Punjab Kings...</p>
            <a href="#" class="cta-btn" onclick="showHome()">Back to Home</a>
        </div>
        <div class="imgBox">
            <img src="kplogo.png" alt="KP Logo" class="sports">
        </div>
    `;
    document.body.style.backgroundColor = '#E31937'; 
}

function showSRH() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="textBox">
            <h2>Sunrisers Hyderabad</h2>
            <p>Description of Sunrisers Hyderabad...</p>
            <a href="#" class="cta-btn" onclick="showHome()">Back to Home</a>
        </div>
        <div class="imgBox">
            <img src="srhlogo.png" alt="SRH Logo" class="sports">
        </div>
    `;
    document.body.style.backgroundColor = '#FFB300'; 
}

function showRCB() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="textBox">
            <h2>Royal Challengers Bangalore</h2>
            <p>Description of Royal Challengers Bangalore.</p>
            <a href="#" class="cta-btn" onclick="showHome()">Back to Home</a>
        </div>
        <div class="imgBox">
            <img src="csblogo.png" alt="CSB Logo" class="sports">
        </div>
    `;
    document.body.style.backgroundColor = '#B40000'; 
}

function showLSG() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="textBox">
            <h2>Lucknow Super Giants</h2>
            <p>Description of Lucknow Super Giants...</p>
            <a href="#" class="cta-btn" onclick="showHome()">Back to Home</a>
        </div>
        <div class="imgBox">
            <img src="lsg.png" alt="LSG Logo" class="sports">
        </div>
    `;
    document.body.style.backgroundColor = '#634EEC'; 
}

function showGT() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="textBox">
            <h2>Gujarat Titans</h2>
            <p>Description of Gujarat Titans...</p>
            <a href="#" class="cta-btn" onclick="showHome()">Back to Home</a>
        </div>
        <div class="imgBox">
            <img src="gt.png" alt="GT Logo" class="sports">
        </div>
    `;
    document.body.style.backgroundColor = '#004A86'; 
}

// Initial function call to display the home content when the page loads
showHome();