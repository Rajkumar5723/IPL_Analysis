function showTeamInfo(teamName) {
    const teamContent = document.getElementById('mainContent');
    const body = document.body;

    switch (teamName) {
        case 'CSK':
            teamContent.innerHTML = `
            <div class="textBox">
            <div class="background-image">
                <img src="csk3.png" alt="CSK Logo" class="sports-image">
            </div>

        <div class="content-1">
        <!-- Content to be displayed on top of the blurred image -->
        <h2>Chennai Super Kings</h2>
        <p>Description of Chennai Super Kings...</p>
        <p>CSK is known for its consistent performances under the leadership of MS Dhoni</p>
        <a href="sample.html" class="cta-btn">Back to Home</a>
        </div>
                </div>
                <div class="wrapper">
                <h2>TEAM MEMBERS</h2>
                <hr>
                <div class="members">
                    <div class="team-mem">
                        <img src="csk-cap.jpeg">
                        <h4>Ruturaj Dasharath Gaikwad</h4>
                        <p>Team Captain</p>
                    </div>
                    <div class="team-mem">
                        <img src="wic.jpeg">
                        <h4>MS DHONI</h4>
                        <p>WICKET KEEPER</p>
                    </div>
                    <div class="team-mem">
                        <img src="jaddu.jpeg">
                        <h4>JADEJA</h4>
                        <p>SPIN BOWLER</p>
                    </div>
                    <div class="team-mem">
                        <img src="ali.jpeg">
                        <h4>MOEEN ALI</h4>
                        <p>Spin Bowler</p>
                    </div>
                    <div class="team-mem">
                        <img src="chahar.jpeg">
                        <h4>DEEPAK CHAHAR</h4>
                        <p>Bowler</p>
                    </div>
                    <div class="team-mem">
                        <img src="dube.jpeg">
                        <h4>SHIVAM DUBE</h4>
                        <p>All Rounder</p>
                    </div>
                </div>
            </div> 
        
               
            `;
            body.style.backgroundColor = '#FFD700'; // Set background color to gold
            break;

        case 'KKR':
            teamContent.innerHTML = `
                <div class="textBox">
                    <h2>Kolkata Knight Riders</h2>
                    <p>Description of Kolkata Knight Riders...</p>
                    <p>KKR is known for its strong performances and star players like Andre Russell...</p>
                    <p>The team's purple and gold jersey is iconic, and they have a passionate fan base known as the "Knight Riders Army".</p>
                    <p>Key players in KKR for 2024:</p>
                    <ul>
                        <li>Andre Russell - All-rounder</li>
                        <li>Shubman Gill - Batsman</li>
                        <li>Varun Chakravarthy - Bowler</li>
                        <li>Eoin Morgan - Batsman</li>
                    </ul>
                    <a href="sample.html" class="cta-btn">Back to Home</a>
                </div>
                <div class="imgBox">
                    <img src="kkrlogo.png" alt="KKR Logo" class="sports-image">
                </div>
                <div class="content-2">
        <h2>Chennai Super Kings</h2>
        <p>Description of Chennai Super Kings...</p>
        <p>CSK is known for its consistent performances under the leadership of MS Dhoni</p>
                    </div>
                </div>
                <div class="wrapper-1">
                <h2>TEAM MEMBERS</h2>
                <hr>
                <div class="members">
                    <div class="team-mem">
                        <img src="Hardik panidya.jpg">
                        <h4>Hardik panidya</h4>
                        <p>Team Captain</p>
                    </div>
                    <div class="team-mem">
                        <img src="ishan.jpg">
                        <h4>Ishan Kishan</h4>
                        <p>WICKET KEEPER</p>
                    </div>
                    <div class="team-mem">
                        <img src="rohit.jpg">
                        <h4>Rohit Sharma</h4>
                        <p>Batsman</p>
                    </div>
                    <div class="team-mem">
                        <img src="ali.jpeg">
                        <h4>MOEEN ALI</h4>
                        <p>Spin Bowler</p>
                    </div>
                    <div class="team-mem">
                        <img src="chahar.jpeg">
                        <h4>DEEPAK CHAHAR</h4>
                        <p>Bowler</p>
                    </div>
                    <div class="team-mem">
                        <img src="dube.jpeg">
                        <h4>SHIVAM DUBE</h4>
                        <p>All Rounder</p>
                    </div>
                </div>
            </div> 

            `;
            body.style.backgroundColor = '#3B0A47'; // Set background color to dark purple
            break;

        case 'MI':
            teamContent.innerHTML = `
                <div class="textBox">
                    <h2>Mumbai Indians</h2>
                    <p>Description of Mumbai Indians...</p>
                    <p>MI is known for its strong batting lineup and solid bowling attack...</p>
                    <p>Key players in MI for 2024:</p>
                    <ul>
                        <li>Rohit Sharma - Batsman</li>
                        <li>Jasprit Bumrah - Bowler</li>
                        <li>Hardik Pandya - All-rounder</li>
                        <li>Kieron Pollard - All-rounder</li>
                        <!-- Add more current players as needed -->
                    </ul>
                    <a href="sample.html" class="cta-btn">Back to Home</a>
                </div>
                <div class="imgBox">
                    <img src="milogo.png" alt="MI Logo" class="sports-image">
                </div>
                <div class="content-3" style: colour:white,background-color:rgba(255, 215, 0, 0.8);>
        <!-- Content to be displayed on top of the blurred image -->
        <h2>Chennai Super Kings</h2>
        <p>Description of Chennai Super Kings...</p>
        <p>CSK is known for its consistent performances under the leadership of MS Dhoni</p>
        </div>
                </div>
                <div class="wrapper">
                <h2>TEAM MEMBERS</h2>
                <hr>
                <div class="members">
                    <div class="team-mem">
                        <img src="Hardik panidya.jpg">
                        <h4>Hardik panidya</h4>
                        <p>Team Captain</p>
                    </div>
                    <div class="team-mem">
                        <img src="ishan.jpg">
                        <h4>Ishan Kishan</h4>
                        <p>WICKET KEEPER</p>
                    </div>
                    <div class="team-mem">
                        <img src="rohit.jpg">
                        <h4>Rohit Sharma</h4>
                        <p>Batsman</p>
                    </div>
                    <div class="team-mem">
                        <img src="ali.jpeg">
                        <h4>MOEEN ALI</h4>
                        <p>Spin Bowler</p>
                    </div>
                    <div class="team-mem">
                        <img src="chahar.jpeg">
                        <h4>DEEPAK CHAHAR</h4>
                        <p>Bowler</p>
                    </div>
                    <div class="team-mem">
                        <img src="dube.jpeg">
                        <h4>SHIVAM DUBE</h4>
                        <p>All Rounder</p>
                    </div>
                </div>
            </div> 
            `;
            body.style.backgroundColor = '#004BA0'; // Set background color to dark blue
            break;

        case 'SRH':
            teamContent.innerHTML = `
                <div class="textBox">
                    <h2>Sunrisers Hyderabad</h2>
                    <p>Description of Sunrisers Hyderabad...</p>
                    <p>SRH is known for its strong bowling attack and star players like David Warner...</p>
                    <p>The team's orange and black jersey is recognizable, and they have a loyal fan base known as the "Orange Army".</p>
                    <p>Key players in SRH for 2024:</p>
                    <ul>
                        <li>David Warner - Batsman</li>
                        <li>Rashid Khan - Bowler</li>
                        <li>Bhuvneshwar Kumar - Bowler</li>
                        <li>Kane Williamson - Batsman</li>
                        <!-- Add more current players as needed -->
                    </ul>
                    <a href="sample.html" class="cta-btn">Back to Home</a>
                </div>
                <div class="imgBox">
                    <img src="srhlogo.png" alt="SRH Logo" class="sports-image">
                </div>
                <div class="content-1">
        <!-- Content to be displayed on top of the blurred image -->
        <h2>Chennai Super Kings</h2>
        <p>Description of Chennai Super Kings...</p>
        <p>CSK is known for its consistent performances under the leadership of MS Dhoni</p>
        <a href="sample.html" class="cta-btn">Back to Home</a>
        </div>
                </div>
                <div class="wrapper">
                <h2>TEAM MEMBERS</h2>
                <hr>
                <div class="members">
                    <div class="team-mem">
                        <img src="csk-cap.jpeg">
                        <h4>Ruturaj Dasharath Gaikwad</h4>
                        <p>Team Captain</p>
                    </div>
                    <div class="team-mem">
                        <img src="wic.jpeg">
                        <h4>MS DHONI</h4>
                        <p>WICKET KEEPER</p>
                    </div>
                    <div class="team-mem">
                        <img src="jaddu.jpeg">
                        <h4>JADEJA</h4>
                        <p>SPIN BOWLER</p>
                    </div>
                    <div class="team-mem">
                        <img src="ali.jpeg">
                        <h4>MOEEN ALI</h4>
                        <p>Spin Bowler</p>
                    </div>
                    <div class="team-mem">
                        <img src="chahar.jpeg">
                        <h4>DEEPAK CHAHAR</h4>
                        <p>Bowler</p>
                    </div>
                    <div class="team-mem">
                        <img src="dube.jpeg">
                        <h4>SHIVAM DUBE</h4>
                        <p>All Rounder</p>
                    </div>
                </div>
            </div> 
            `;
            body.style.backgroundColor = '#FF5722'; // Set background color to orange
            break;

        case 'RCB':
            teamContent.innerHTML = `
                <div class="textBox">
                    <h2>Royal Challengers Bangalore</h2>
                    <p>Description of Royal Challengers Bangalore...</p>
                    <p>RCB is known for its star-studded line-up including Virat Kohli...</p>
                    <p>The team's red and black jersey is iconic, and they are often referred to as the "Men in Red".</p>
                    <p>Key players in RCB for 2024:</p>
                    <ul>
                        <li>Virat Kohli - Batsman</li>
                        <li>AB de Villiers - Batsman</li>
                        <li>Glenn Maxwell - All-rounder</li>
                        <li>Yuzvendra Chahal - Bowler</li>
                        <!-- Add more current players as needed -->
                    </ul>
                    <a href="sample.html" class="cta-btn">Back to Home</a>
                </div>
                <div class="imgBox">
                    <img src="csblogo.png" alt="RCB Logo" class="sports-image">
                </div>
                <div class="content-1">
        <!-- Content to be displayed on top of the blurred image -->
        <h2>Chennai Super Kings</h2>
        <p>Description of Chennai Super Kings...</p>
        <p>CSK is known for its consistent performances under the leadership of MS Dhoni</p>
        <a href="sample.html" class="cta-btn">Back to Home</a>
        </div>
                </div>
                <div class="wrapper">
                <h2>TEAM MEMBERS</h2>
                <hr>
                <div class="members">
                    <div class="team-mem">
                        <img src="csk-cap.jpeg">
                        <h4>Ruturaj Dasharath Gaikwad</h4>
                        <p>Team Captain</p>
                    </div>
                    <div class="team-mem">
                        <img src="wic.jpeg">
                        <h4>MS DHONI</h4>
                        <p>WICKET KEEPER</p>
                    </div>
                    <div class="team-mem">
                        <img src="jaddu.jpeg">
                        <h4>JADEJA</h4>
                        <p>SPIN BOWLER</p>
                    </div>
                    <div class="team-mem">
                        <img src="ali.jpeg">
                        <h4>MOEEN ALI</h4>
                        <p>Spin Bowler</p>
                    </div>
                    <div class="team-mem">
                        <img src="chahar.jpeg">
                        <h4>DEEPAK CHAHAR</h4>
                        <p>Bowler</p>
                    </div>
                    <div class="team-mem">
                        <img src="dube.jpeg">
                        <h4>SHIVAM DUBE</h4>
                        <p>All Rounder</p>
                    </div>
                </div>
            </div> 
            `;
            body.style.backgroundColor = '#B40000'; // Set background color to red
            break;

        case 'LSG':
            teamContent.innerHTML = `
                <div class="textBox">
                    <h2>Lucknow Super Giants</h2>
                    <p>Description of Lucknow Super Giants...</p>
                    <p>LSG is backed by the Sanjeev Goenka-owned RPSG Group...</p>
                    <p>The team's purple and gold jersey is distinctive...</p>
                    <p>Key players in LSG for 2024:</p>
                    <ul>
                        <li>Shreyas Iyer - Batsman</li>
                        <li>Jonny Bairstow - Wicketkeeper-Batsman</li>
                        <li>Prithvi Shaw - Batsman</li>
                        <li>Rashid Khan - Bowler</li>
                        <!-- Add more current players as needed -->
                    </ul>
                    <a href="sample.html" class="cta-btn">Back to Home</a>
                </div>
                <div class="imgBox">
                    <img src="lsglogo.png" alt="LSG Logo" class="sports-image">
                </div>
                <div class="content-1">
        <!-- Content to be displayed on top of the blurred image -->
        <h2>Chennai Super Kings</h2>
        <p>Description of Chennai Super Kings...</p>
        <p>CSK is known for its consistent performances under the leadership of MS Dhoni</p>
        <a href="sample.html" class="cta-btn">Back to Home</a>
        </div>
                </div>
                <div class="wrapper">
                <h2>TEAM MEMBERS</h2>
                <hr>
                <div class="members">
                    <div class="team-mem">
                        <img src="csk-cap.jpeg">
                        <h4>Ruturaj Dasharath Gaikwad</h4>
                        <p>Team Captain</p>
                    </div>
                    <div class="team-mem">
                        <img src="wic.jpeg">
                        <h4>MS DHONI</h4>
                        <p>WICKET KEEPER</p>
                    </div>
                    <div class="team-mem">
                        <img src="jaddu.jpeg">
                        <h4>JADEJA</h4>
                        <p>SPIN BOWLER</p>
                    </div>
                    <div class="team-mem">
                        <img src="ali.jpeg">
                        <h4>MOEEN ALI</h4>
                        <p>Spin Bowler</p>
                    </div>
                    <div class="team-mem">
                        <img src="chahar.jpeg">
                        <h4>DEEPAK CHAHAR</h4>
                        <p>Bowler</p>
                    </div>
                    <div class="team-mem">
                        <img src="dube.jpeg">
                        <h4>SHIVAM DUBE</h4>
                        <p>All Rounder</p>
                    </div>
                </div>
            </div> 
            `;
            body.style.backgroundColor = '#800080'; // Set background color to purple
            break;

        case 'GT':
            teamContent.innerHTML = `
                <div class="textBox">
                    <h2>Gujarat Titans</h2>
                    <p>Description of Gujarat Titans...</p>
                    <p>GT is one of the two new franchises in the IPL...</p>
                    <p>The team's blue and gold jersey reflects the spirit of Gujarat...</p>
                    <p>Key players in GT for 2024:</p>
                    <ul>
                        <li>Hardik Pandya - All-rounder</li>
                        <li>KL Rahul - Batsman</li>
                        <li>Jos Buttler - Wicketkeeper-Batsman</li>
                        <li>Shakib Al Hasan - All-rounder</li>
                        <!-- Add more current players as needed -->
                    </ul>
                    <a href="sample.html" class="cta-btn">Back to Home</a>
                </div>
                <div class="imgBox">
                    <img src="gtlogo.png" alt="GT Logo" class="sports-image">
                </div>
                <div class="content-1">
        <!-- Content to be displayed on top of the blurred image -->
        <h2>Chennai Super Kings</h2>
        <p>Description of Chennai Super Kings...</p>
        <p>CSK is known for its consistent performances under the leadership of MS Dhoni</p>
        <a href="sample.html" class="cta-btn">Back to Home</a>
        </div>
                </div>
                <div class="wrapper">
                <h2>TEAM MEMBERS</h2>
                <hr>
                <div class="members">
                    <div class="team-mem">
                        <img src="csk-cap.jpeg">
                        <h4>Ruturaj Dasharath Gaikwad</h4>
                        <p>Team Captain</p>
                    </div>
                    <div class="team-mem">
                        <img src="wic.jpeg">
                        <h4>MS DHONI</h4>
                        <p>WICKET KEEPER</p>
                    </div>
                    <div class="team-mem">
                        <img src="jaddu.jpeg">
                        <h4>JADEJA</h4>
                        <p>SPIN BOWLER</p>
                    </div>
                    <div class="team-mem">
                        <img src="ali.jpeg">
                        <h4>MOEEN ALI</h4>
                        <p>Spin Bowler</p>
                    </div>
                    <div class="team-mem">
                        <img src="chahar.jpeg">
                        <h4>DEEPAK CHAHAR</h4>
                        <p>Bowler</p>
                    </div>
                    <div class="team-mem">
                        <img src="dube.jpeg">
                        <h4>SHIVAM DUBE</h4>
                        <p>All Rounder</p>
                    </div>
                </div>
            </div> 
            `;
            body.style.backgroundColor = '#0000FF'; // Set background color to blue
            break;

        case 'RR':
            teamContent.innerHTML = `
                <div class="textBox">
                    <h2>Rajasthan Royals</h2>
                    <p>Description of Rajasthan Royals...</p>
                    <p>RR is known for its emphasis on nurturing young talent...</p>
                    <p>The team's pink jersey stands out...</p>
                    <p>Key players in RR for 2024:</p>
                    <ul>
                        <li>Sanju Samson - Batsman</li>
                        <li>Chris Morris - All-rounder</li>
                        <li>Yashasvi Jaiswal - Batsman</li>
                        <li>Kartik Tyagi - Bowler</li>
                        <!-- Add more current players as needed -->
                    </ul>
                    <a href="sample.html" class="cta-btn">Back to Home</a>
                </div>
                <div class="imgBox">
                    <img src="rrlogo.png" alt="RR Logo" class="sports-image">
                </div>
                <div class="content-1">
        <!-- Content to be displayed on top of the blurred image -->
        <h2>Chennai Super Kings</h2>
        <p>Description of Chennai Super Kings...</p>
        <p>CSK is known for its consistent performances under the leadership of MS Dhoni</p>
        <a href="sample.html" class="cta-btn">Back to Home</a>
        </div>
                </div>
                <div class="wrapper">
                <h2>TEAM MEMBERS</h2>
                <hr>
                <div class="members">
                    <div class="team-mem">
                        <img src="csk-cap.jpeg">
                        <h4>Ruturaj Dasharath Gaikwad</h4>
                        <p>Team Captain</p>
                    </div>
                    <div class="team-mem">
                        <img src="wic.jpeg">
                        <h4>MS DHONI</h4>
                        <p>WICKET KEEPER</p>
                    </div>
                    <div class="team-mem">
                        <img src="jaddu.jpeg">
                        <h4>JADEJA</h4>
                        <p>SPIN BOWLER</p>
                    </div>
                    <div class="team-mem">
                        <img src="ali.jpeg">
                        <h4>MOEEN ALI</h4>
                        <p>Spin Bowler</p>
                    </div>
                    <div class="team-mem">
                        <img src="chahar.jpeg">
                        <h4>DEEPAK CHAHAR</h4>
                        <p>Bowler</p>
                    </div>
                    <div class="team-mem">
                        <img src="dube.jpeg">
                        <h4>SHIVAM DUBE</h4>
                        <p>All Rounder</p>
                    </div>
                </div>
            </div> 
            `;
            body.style.backgroundColor = '#FF007F'; // Set background color to pink
            break;

        case 'DD':
            teamContent.innerHTML = `
                <div class="textBox">
                    <h2>Delhi Capitals</h2>
                    <p>Description of Delhi Capitals...</p>
                    <p>DC has had star players like Shreyas Iyer, Rishabh Pant...</p>
                    <p>The team's blue jersey is distinctive...</p>
                    <p>Key players in DC for 2024:</p>
                    <ul>
                        <li>Shreyas Iyer - Batsman</li>
                        <li>Rishabh Pant - Wicketkeeper-Batsman</li>
                        <li>Anrich Nortje - Bowler</li>
                        <li>Axar Patel - All-rounder</li>
                        <!-- Add more current players as needed -->
                    </ul>
                    <a href="sample.html" class="cta-btn">Back to Home</a>
                </div>
                <div class="imgBox">
                    <img src="ddlogo.png" alt="DD Logo" class="sports-image">
                </div>
                <div class="content-1">
        <!-- Content to be displayed on top of the blurred image -->
        <h2>Chennai Super Kings</h2>
        <p>Description of Chennai Super Kings...</p>
        <p>CSK is known for its consistent performances under the leadership of MS Dhoni</p>
        <a href="sample.html" class="cta-btn">Back to Home</a>
        </div>
                </div>
                <div class="wrapper">
                <h2>TEAM MEMBERS</h2>
                <hr>
                <div class="members">
                    <div class="team-mem">
                        <img src="csk-cap.jpeg">
                        <h4>Ruturaj Dasharath Gaikwad</h4>
                        <p>Team Captain</p>
                    </div>
                    <div class="team-mem">
                        <img src="wic.jpeg">
                        <h4>MS DHONI</h4>
                        <p>WICKET KEEPER</p>
                    </div>
                    <div class="team-mem">
                        <img src="jaddu.jpeg">
                        <h4>JADEJA</h4>
                        <p>SPIN BOWLER</p>
                    </div>
                    <div class="team-mem">
                        <img src="ali.jpeg">
                        <h4>MOEEN ALI</h4>
                        <p>Spin Bowler</p>
                    </div>
                    <div class="team-mem">
                        <img src="chahar.jpeg">
                        <h4>DEEPAK CHAHAR</h4>
                        <p>Bowler</p>
                    </div>
                    <div class="team-mem">
                        <img src="dube.jpeg">
                        <h4>SHIVAM DUBE</h4>
                        <p>All Rounder</p>
                    </div>
                </div>
            </div> 
            `;
            body.style.backgroundColor = '#000080'; // Set background color to dark blue
            break;

        case 'KXIP':
            teamContent.innerHTML = `
                <div class="textBox">
                    <h2>Kings XI Punjab</h2>
                    <p>Description of Kings XI Punjab...</p>
                    <p>KXIP, now known as Punjab Kings (PBKS), has a strong fan base and has been known for its explosive batting...</p>
                    <p>The team's red and silver jersey is distinctive...</p>
                    <p>Key players in PBKS for 2024:</p>
                    <ul>
                        <li>Mayank Agarwal - Batsman</li>
                        <li>Nicholas Pooran - Wicketkeeper-Batsman</li>
                        <li>Jhye Richardson - Bowler</li>
                        <li>Shikhar Dhawan - Batsman</li>
                        <!-- Add more current players as needed -->
                    </ul>
                    <a href="sample.html" class="cta-btn">Back to Home</a>
                </div>
                <div class="imgBox">
                    <img src="kxiplogo.png" alt="KXIP Logo" class="sports-image">
                </div>
                <div class="content-1">
        <!-- Content to be displayed on top of the blurred image -->
        <h2>Chennai Super Kings</h2>
        <p>Description of Chennai Super Kings...</p>
        <p>CSK is known for its consistent performances under the leadership of MS Dhoni</p>
        <a href="sample.html" class="cta-btn">Back to Home</a>
        </div>
                </div>
                <div class="wrapper">
                <h2>TEAM MEMBERS</h2>
                <hr>
                <div class="members">
                    <div class="team-mem">
                        <img src="csk-cap.jpeg">
                        <h4>Ruturaj Dasharath Gaikwad</h4>
                        <p>Team Captain</p>
                    </div>
                    <div class="team-mem">
                        <img src="wic.jpeg">
                        <h4>MS DHONI</h4>
                        <p>WICKET KEEPER</p>
                    </div>
                    <div class="team-mem">
                        <img src="jaddu.jpeg">
                        <h4>JADEJA</h4>
                        <p>SPIN BOWLER</p>
                    </div>
                    <div class="team-mem">
                        <img src="ali.jpeg">
                        <h4>MOEEN ALI</h4>
                        <p>Spin Bowler</p>
                    </div>
                    <div class="team-mem">
                        <img src="chahar.jpeg">
                        <h4>DEEPAK CHAHAR</h4>
                        <p>Bowler</p>
                    </div>
                    <div class="team-mem">
                        <img src="dube.jpeg">
                        <h4>SHIVAM DUBE</h4>
                        <p>All Rounder</p>
                    </div>
                </div>
            </div> 
            `;
            body.style.backgroundColor = '#E41A1C'; // Set background color to red
            break;

        default:
            teamContent.innerHTML = `<p>Team information not available.</p>`;
            body.style.backgroundColor = '#FFFFFF'; // Reset background color to white for unknown team
            break;
    }
}
