function showTeamInfo(teamName) {
  const teamContent = document.getElementById("mainContent");
  const body = document.body;
  const revealOptions = {
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
  };

  switch (teamName) {
    case "CSK":
      teamContent.innerHTML = `
                    <div class="textBox">
                        
                        <div class="content-1">
                            <h2>Chennai Super Kings</h2>
                            <p>Description of Chennai Super Kings...</p>
                            <p>CSK is known for its consistent performances under the leadership of MS Dhoni</p>
                            <a href="https://www.chennaisuperkings.com/" class="cta-btn">MORE</a>
                        </div>
                    </div>
                    <div class="imgBox">
                            <img src="csk3.png" alt="CSK Logo" class="sports-image">
                        </div>
                    <div class="wrapper">
                        
                        <h2>POPULAR TEAM MEMBERS</h2>
                        <hr>
                        <div class="members">
                            <div class="team-mem-1">
                                <img src="csk-cap.jpeg">
                                <h4>Ruturaj Dasharath Gaikwad</h4>
                                <p>Team Captain</p>
                            </div>
                            <div class="team-mem-1">
                                <img src="wic.jpeg">
                                <h4>MS DHONI</h4>
                                <p>WICKET KEEPER</p>
                            </div>
                            <div class="team-mem-2">
                                <img src="jaddu.jpeg">
                                <h4>JADEJA</h4>
                                <p>SPIN BOWLER</p>
                            </div>
                            <div class="team-mem-3">
                                <img src="ali.jpeg">
                                <h4>MOEEN ALI</h4>
                                <p>Spin Bowler</p>
                            </div>
                            <div class="team-mem-4">
                                <img src="chahar.jpeg">
                                <h4>DEEPAK CHAHAR</h4>
                                <p>Bowler</p>
                            </div>
                            <div class="team-mem-5">
                                <img src="dube.jpeg">
                                <h4>SHIVAM DUBE</h4>
                                <p>All Rounder</p>
                            </div>
                       
                    </div>`;
      body.style.backgroundColor = "#FFD700"; // Set background color to gold
      ScrollReveal().reveal('.textBox', { revealOptions, origin: 'left' });
      ScrollReveal().reveal('.imgBox', { revealOptions, origin: 'right' });
      ScrollReveal().reveal('.wrapper,.team-mem-1,.team-mem-2,.team-mem-3,.team-mem-4,.team-mem-5', { revealOptions, origin: 'bottom' });
      break;

    case "KKR":
      teamContent.innerHTML = `
                    <div class="textBox">
                        <h2>Kolkata Knight Riders</h2>
                        <p>Description of Kolkata Knight Riders...</p>
                        <p>KKR is known for its strong performances and star players like Andre Russell...</p>
                        <p>The team's purple and gold jersey is iconic, and they have a passionate fan base known as the "Knight Riders Army".</p>
                        
                        <a href="https://www.kkr.in/" class="cta-btn">MORE</a>
                    </div>
                    <div class="imgBox">
                        <img src="kkrlogo.png" alt="KKR Logo" class="sports-image">
                    </div>
                    <div class="wrapper">
                        <h2>POPULAR TEAM MEMBERS</h2>
                        <hr>
                        <div class="members">
                            <div class="team-mem">
                                <img src="kkr1.jpg">
                                <h4> Shreyas Iyer</h4>
                                <p> Team Captain</p>
                                
                            </div>
                            <div class="team-mem">
                                <img src="kkr2.jpg">
                                <h4> Rinku Singh </h4>
                                <p>Batsman</p>
                              
                            </div>
                            <div class="team-mem">
                                <img src="kkr3.jpg">
                                <h4> Manish Pandey</h4>
                               
                            </div>
                            <div class="team-mem">
                                <img src="kkr4.jpg">
                                <h4> Sunil Narine</h4>
                                <p>All Rounder</p>

                               
                            </div>
                            <div class="team-mem">
                                <img src="kkr5.jpg">
                                <h4>Mitchell Starc</h4>
                                <p>Bowler</p>
                            </div>
                            <div class="team-mem">
                                <img src="kkr6.jpg">
                                <h4> Nitish Rana</h4>
                                <p> Batsman</p>
                               
                            </div>
                            <div class="team-mem">
                                <img src="kkr7.jpg">
                                <h4> Andre Russel</h4>
                                <p> All Rounder</p>
                               
                            </div>
                        </div>
                    </div>`;
      body.style.backgroundColor = "#3B0A47"; // Set background color to dark purple
      ScrollReveal().reveal('.textBox', { revealOptions, origin: 'left' });
      ScrollReveal().reveal('.imgBox', { revealOptions, origin: 'right' });
      break;
    case "rr":
      teamContent.innerHTML = `
                    <div class="textBox">
                        
                        <div class="content-1">
                            <h2>Rajasthan Royals</h2>
                            <p>Rajasthan Royals, a legendary franchise in the esteemed Indian Premier League (IPL), represents the royal state of Rajasthan. Known for our innovative approach and commitment to nurturing talent, we bring the spirit of determination and flair to the cricketing arena.</p>
                            <a href="https://www.rajasthanroyals.com/" class="cta-btn">MORE</a>
                        </div>
                    </div>
                    <div class="imgBox">
                            <img src="rrlogo.png" alt="CSK Logo" class="sports-image">
                        </div>
                    <div class="wrapper">
                        
                        <h2>POPULAR TEAM MEMBERS</h2>
                        <hr>
                        <div class="members">
                            <div class="team-mem">
                                <img src="rr4.png">
                                <h4>Sanju Samson</h4>
                                <p>Team Captain</p>
                            </div>
                            <div class="team-mem">
                                <img src="rr1.png">
                                <h4>Ravichandran Ashwin</h4>
                                <p>Spin bowler</p>
                            </div>
                            <div class="team-mem">
                                <img src="rr3.png">
                                <h4>Chahal</h4>
                                <p>SPIN BOWLER</p>
                            </div>
                            <div class="team-mem">
                                <img src="rr2.png">
                                <h4>Jos Butler</h4>
                                <p>Wicket keeper</p>
                            </div>
                            <div class="team-mem">
                                <img src="rr5.png">
                                <h4>Navdeep Saini</h4>
                                <p>Bowler</p>
                            </div>
                            <div class="team-mem">
                                <img src="rr6.png">
                                <h4>Joe Root</h4>
                                <p>Batsman</p>
                            </div>
                       
                    </div>`;
      body.style.backgroundColor = "#FF00EE"; // Set background color to gold
      ScrollReveal().reveal('.textBox', { revealOptions, origin: 'left' });
      ScrollReveal().reveal('.imgBox', { revealOptions, origin: 'right' });
      break;
    case "dd":
      teamContent.innerHTML = `
                    <div class="textBox">
                        
                        <div class="content-1">
                            <h2>Delhi Capitals</h2>
                            <p>Delhi Capitals, a dynamic and ambitious franchise in the prestigious Indian Premier League (IPL). Formerly known as Delhi Daredevils, our team represents the bustling city of Delhi and epitomizes the spirit of resilience, passion, and sportsmanship.</p>
                            <a href="https://www.delhicapitals.in/" class="cta-btn">MORE</a>
                        </div>
                    </div>
                    <div class="imgBox">
                            <img src="ddlogo.png" alt="CSK Logo" class="sports-image">
                        </div>
                    <div class="wrapper">
                        
                        <h2>POPULAR TEAM MEMBERS</h2>
                        <hr>
                        <div class="members">
                            <div class="team-mem">
                                <img src="DD2.png">
                                <h4>Rishab Pant</h4>
                                <p>Team Captain</p>
                            </div>
                            <div class="team-mem">
                                <img src="dd3.png">
                                <h4>David Warner</h4>
                                <p>Batsman</p>
                            </div>
                            <div class="team-mem">
                                <img src="DD4.png">
                                <h4>Prithivi Shaw</h4>
                                <p>Batsman</p>
                            </div>
                            <div class="team-mem">
                                <img src="dd5.png">
                                <h4>Khaleel Ahmed</h4>
                                <p>Fast bowler</p>
                            </div>
                            <div class="team-mem">
                                <img src="dd6.jpg">
                                <h4>Axar Patel</h4>
                                <p>Spin Bowler</p>
                            </div>
                            
                       
                    </div>`;
      body.style.backgroundColor = "#11B4FF"; // Set background color to gold
      ScrollReveal().reveal('.textBox', { revealOptions, origin: 'left' });
      ScrollReveal().reveal('.imgBox', { revealOptions, origin: 'right' });
      break;
    case "MI":
      teamContent.innerHTML = `
                    <div class="textBox">
                        <h2>Mumbai Indians</h2>
                        <p>Description of Mumbai Indians...</p>
                        <p>MI is one of the most successful franchises in the IPL, with a strong roster of players like Rohit Sharma, Jasprit Bumrah, and Hardik Pandya.</p>
                        <p>Key players in MI for 2024:</p>
                        <ul>
                            <li>Rohit Sharma - Batsman</li>
                            <li>Jasprit Bumrah - Bowler</li>
                            <li>Hardik Pandya - All-rounder</li>
                            <li>Suryakumar Yadav - Batsman</li>
                        </ul>
                        <a href="https://www.mumbaiindians.com/" class="cta-btn">MORE</a>
                    </div>
                    <div class="imgBox">
                        <img src="milogo.png" alt="MI Logo" class="sports-image">
                    </div>
                    <div class="wrapper">
                        <h2>POPULAR TEAM MEMBERS</h2>
                        <hr>
                        <div class="members">
                            <div class="team-mem">
                                <img src="m1.jpg">
                                <h4> Hardik pandya</h4>
                                <p> All Rounder </p>
                                
                            </div>
                            <div class="team-mem">
                                <img src="m2.jpg">
                                <h4> Rohit Sharma</h4>
                                <p> Batsman</p>

                              
                            </div>
                            <div class="team-mem">
                                <img src="m3.jpg">
                                <h4> suryakumar yadav</h4>
                                <p> batsman</p>
                               
                            </div>
                            <div class="team-mem">
                                <img src="m4.jpg">
                                <h4>Ishan Kishan</h4>
                                <p> Wicket Keeper</p>

                                
                            </div>
                            <div class="team-mem">
                                <img src="m5.jpg">
                                <h4>Jaspirit bumrah</h4>
                                <p> Bowler</p>
                                
                            </div>
                            <div class="team-mem">
                                <img src="m6.jpg">
                                <h4>Shreyas Gopal</h4>
                                <p> Bowler</p>
                            </div>
                           
                        </div>`;
      body.style.backgroundColor = "#004BA0"; // Set background color to blue
      ScrollReveal().reveal('.textBox', { revealOptions, origin: 'left' });
      ScrollReveal().reveal('.imgBox', { revealOptions, origin: 'right' });
      break;

    case "RCB":
      teamContent.innerHTML = `
                    <div class="textBox">
                        <h2>Royal Challengers Bangalore</h2>
                        <p>Description of Royal Challengers Bangalore...</p>
                        <p>RCB is known for its passionate fan base and star players like Virat Kohli, Glenn Maxwell, and AB de Villiers.</p>
                        <p>Key players in RCB for 2024:</p>
                        <ul>
                            <li>Virat Kohli - Batsman</li>
                            <li>Glenn Maxwell - All-rounder</li>
                            <li>AB de Villiers - Batsman</li>
                            <li>Yuzvendra Chahal - Bowler</li>
                        </ul>
                        <a href="https://www.royalchallengers.com/" class="cta-btn">MORE</a>
                    </div>
                    <div class="imgBox">
                        <img src="csblogo.png" alt="RCB Logo" class="sports-image">
                    </div>
                    <div class="wrapper">
                        <h2>POPULAR TEAM MEMBERS</h2>
                        <hr>
                        <div class="members">
                            <div class="team-mem">
                                <img src="rc1.jpg">
                                <h4>Mohamad Siraj</h4>
                                <p> Bowler </p>
                            </div>
                            <div class="team-mem">
                                <img src="rc2.jpg">
                                <h4>Faf DuPlesis</h4>
                                <p> Team Captain</p>
                            </div>
                            <div class="team-mem">
                                <img src="rc3.jpg">
                                <h4>MahiPal Lomror</h4>
                                <p> All rounder</p>
                            </div>
                            <div class="team-mem">
                                <img src="rc4.jpg">
                                <h4>Virat Kholi</h4>
                                <p> Batsman</p>
                            </div>
                            <div class="team-mem">
                                <img src="rc5.jpg">
                                <h4>Glen Maxwell</h4>
                                <p> All Rounder</p>
                            </div>
                            <div class="team-mem">
                                <img src="rc6.jpg">
                                <h4>Dhinesh Karthick</h4>
                            </div>
                            
                        </div>`;
      body.style.backgroundColor = "#E31F30";
      ScrollReveal().reveal('.textBox', { revealOptions, origin: 'left' });
      ScrollReveal().reveal('.imgBox', { revealOptions, origin: 'right' });
      break;

    case "SRH":
      teamContent.innerHTML = `
                    <div class="textBox">
                        <h2>Sunrisers Hyderabad</h2>
                        <p>Description of Sunrisers Hyderabad...</p>
                        <p>SRH has been known for its strong bowling lineup and top-order batsmen like David Warner and Kane Williamson.</p>
                        <p>Key players in SRH for 2024:</p>
                        <ul>
                            <li>Kane Williamson - Batsman</li>
                            <li>Rashid Khan - Bowler</li>
                            <li>David Warner - Batsman</li>
                            <li>Wriddhiman Saha - Wicket Keeper</li>
                        </ul>
                        <a href="https://www.sunrisershyderabad.in/" class="cta-btn">MORE</a>
                    </div>
                    <div class="imgBox">
                        <img src="srhlogo.png" alt="SRH Logo" class="sports-image">
                    </div>
                    <div class="wrapper">
                        <h2>POPULAR TEAM MEMBERS</h2>
                        <hr>
                        <div class="members">
                            <div class="team-mem">
                                <img src="s3.png">
                                <h4>Pat cummins</h4>
                                <p>Team Captain</p>
                            </div>
                            <div class="team-mem">
                                <img src="s2.png">
                                <h4>Rahul Tripathi</h4>
                                <p>Batsman</p>
                            </div>
                            <div class="team-mem">
                                <img src="s1.png">
                                <h4>Aiden markaram</h4>
                                <p>Batsman</p>
                            </div>
                            <div class="team-mem">
                                <img src="s4.png">
                                <h4>Abishek Sharma</h4>
                                <p>Batsman</p>
                            </div>
                            <div class="team-mem">
                                <img src="s5.png">
                                <h4>Henrich Klaasen</h4>
                                <p>Wicket Keeper</p>
                            </div>
                            <div class="team-mem">
                                <img src="s6.png">
                                <h4>Travis Head</h4>
                                <p>Batsman</p>
                            </div>
                            
                        </div>`;
      body.style.backgroundColor = "#FF822A"; // Set background color to orange
      ScrollReveal().reveal('.textBox', { revealOptions, origin: 'left' });
      ScrollReveal().reveal('.imgBox', { revealOptions, origin: 'right' });
      break;

    case "LSG":
      teamContent.innerHTML = `
                    <div class="textBox">
                        <h2>Lucknow Super Giants</h2>
                        <p>Description of Lucknow Super Giants...</p>
                        <p>LSG is one of the new franchises in the IPL, with promising players like KL Rahul, Shreyas Iyer, and Marcus Stoinis.</p>
                        <p>Key players in LSG for 2024:</p>
                        <ul>
                            <li>KL Rahul - Batsman</li>
                            <li>Shreyas Iyer - Batsman</li>
                            <li>Marcus Stoinis - All-rounder</li>
                            <li>Jason Holder - All-rounder</li>
                        </ul>
                        <a href="https://www.lucknowsupergiants.in/" class="cta-btn">MORE</a>
                    </div>
                    <div class="imgBox">
                        <img src="lsg.png" alt="LSG Logo" class="sports-image">

                    </div>
                    <div class="wrapper">
                        <h2>POPULAR TEAM MEMBERS</h2>
                        <hr>
                        <div class="members">
                            <div class="team-mem">
                                <img src="l1.jpg">
                                <h4>K.L. Ragul</h4>
                                <p>Team Captain</p>
                            </div>
                            <div class="team-mem">
                                <img src="l2.jpg">
                                <h4>Kyle mayers</h4>
                                <p>All Rounder</p>
                            </div>
                            <div class="team-mem">
                                <img src="l3.jpg">
                                <h4>Quinton de cock</h4>
                                <p>wicket Keeper</p>
                            </div>
                            <div class="team-mem">
                                <img src="l4.jpg">
                                <h4>Marcus Stoinis</h4>
                                <p>All rounder</p>
                            </div>
                            <div class="team-mem">
                                <img src="l5.jpg">
                                <h4>Amit Mishra</h4>
                                <p> Spin Bowler</p>
                            </div>
                            <div class="team-mem">
                                <img src="l6.jpg">
                                <h4>Mayank Yadav</h4>
                                <p>bowler</p>
                            </div>
                           </div>`;
      body.style.backgroundColor = "#446BEB"; // Set background color to purple
      ScrollReveal().reveal('.textBox', { revealOptions, origin: 'left' });
      ScrollReveal().reveal('.imgBox', { revealOptions, origin: 'right' });
      break;

    case "GT":
      teamContent.innerHTML = `
                    <div class="textBox">
                        <h2>Gujarat Titans</h2>
                        <p>Description of Gujarat Titans...</p>
                        <p>GT is another new franchise in the IPL, led by Hardik Pandya and featuring players like Rashid Khan and Shubman Gill.</p>
                        <p>Key players in GT for 2024:</p>
                        <ul>
                            <li>Hardik Pandya - All-rounder</li>
                            <li>Rashid Khan - Bowler</li>
                            <li>Shubman Gill - Batsman</li>
                            <li>Moeen Ali - All-rounder</li>
                        </ul>
                        <a href="https://www.gujarattitansipl.com/" class="cta-btn">MORE</a>
                    </div>
                    <div class="imgBox">
                        <img src="gt.png" alt="GT Logo" class="sports-image">
                    </div>
                    <div class="wrapper">
                        <h2>POPULAR TEAM MEMBERS</h2>
                        <hr>
                        <div class="members">
                            <div class="team-mem">
                                <img src="gt6.jpg">
                                <h4>Shubman Gill</h4>
                                <p>Team Captain</p>
                            </div>
                            <div class="team-mem">
                                <img src="gt2.jpg">
                                <h4>virudhiman saha</h4>
                                <p>WICKET KEEPER</p>
                            </div>
                            <div class="team-mem">
                                <img src="gt3.jpg">
                                <h4>umesh yadav</h4>
                                <p>Bowler</p>
                            </div>
                            <div class="team-mem">
                                <img src="gt4.jpg">
                                <h4>jos butler</h4>
                                <p>wicket keeper</p>
                            </div>
                            <div class="team-mem">
                                <img src="gt5.jpg">
                                <h4>vijay shankar</h4>
                                <p>Bowler</p>
                            </div>
                            <div class="team-mem">
                                <img src="gt1.jpg">
                                <h4>Kane williamson</h4>
                                <p>batsman</p>
                            </div>
                            <div class="team-mem">
                                <img src="gt7.jpg">
                                <h4>Sai sudharshan</h4>
                                <p>batsman</p>
                            </div>
                        </div>`;
      body.style.backgroundColor = "#005998"; // Set background color to orange
      ScrollReveal().reveal('.textBox', { revealOptions, origin: 'left' });
      ScrollReveal().reveal('.imgBox', { revealOptions, origin: 'right' });
      break;
    case "pk":
      teamContent.innerHTML = `
                    <div class="textBox">
                        <h2>Punjab Kings</h2>
                        <p>Welcome to the official website of Punjab Kings, a dynamic and spirited franchise in the world-renowned Indian Premier League (IPL). Formerly known as Kings XI Punjab, our team represents the vibrant state of Punjab and embodies the spirit of determination, passion, and excellence.</p>
                        <p>Established in 2008 as one of the founding members of the IPL, Punjab Kings has captured the hearts of cricket enthusiasts with its exhilarating performances on the field. Our journey in the IPL has been marked by thrilling encounters, stellar innings, and unforgettable moments that have left a lasting impression on fans across the globe.</p>
                        
                        <a href="https://www.punjabkingsipl.in/" class="cta-btn">MORE</a>
                    </div>
                    <div class="imgBox">
                        <img src="pklogo.png" alt="pk Logo" class="sports-image">
                    </div>
                    <div class="wrapper">
                        <h2>POPULAR TEAM MEMBERS</h2>
                        <hr>
                        <div class="members">
                            <div class="team-mem">
                                <img src="p1.png">
                                <h4>Shikkar Dhawan</h4>
                                <p>Team Captain</p>
                            </div>
                            <div class="team-mem">
                                <img src="p2.png">
                                <h4>Chris Woaks</h4>
                                <p>batsman</p>
                            </div>
                            <div class="team-mem">
                                <img src="p3.png">
                                <h4>Sam Curran</h4>
                                <p>All  Rounder</p>
                            </div>
                            <div class="team-mem">
                                <img src="p4.png">
                                <h4>Kagiso Rabda</h4>
                                <p>Bowler</p>
                            </div>
                            <div class="team-mem">
                                <img src="p5.png">
                                <h4>vijay shankar</h4>
                                <p>Bowler</p>
                            </div>
                            <div class="team-mem">
                                <img src="p6.jpg">
                                <h4>Jhonny baristow</h4>
                                <p>wicket keeper</p>
                            </div>
                          
                        </div>`;
      body.style.backgroundColor = "#E92424"; // Set background color to orange
      ScrollReveal().reveal('.textBox', { revealOptions, origin: 'left' });
      ScrollReveal().reveal('.imgBox', { revealOptions, origin: 'right' });
      break;

    default:
      teamContent.innerHTML = `<p>Team information not available.</p>`;
      body.style.backgroundColor = "#FFFFFF"; // Reset background color to white for unknown team
      break;
  }
  ScrollReveal().reveal('#mainContent', revealOptions);
}
