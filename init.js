
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        alignPerformanceText();
    }, 100);
});

let cards = [
    {
        name: "Arvin Omidvar",
        img: "arvino.jpg",
        detailImg: "ArvinMemberDetail.JPG",
        instrument: "Trumpet",
        desc: "Our first trumpet player has an excellent variety of skills in many different brass instruments. He finds and chooses repertoire for the ensemble, generates different ideas, and adds a bright beautiful sound to the mix.",
        detailedDesc: `<p>An extremely reliant and skilled player, our first trumpet player has experience in all fields of brass. He can create a variety of sound, ranging from bright sound to rip through the quintet to beautiful dark tone! With a deep passion for music, Arvin makes sure to keep the quintet enthusiastic and is a great addition.</p>
                    <br>
                    <p>Arvin is involved in many music-related extracurriculars aside from Brassquake. He is a trumpet player in the Toronto Youth Wind Orchestra, plays in a handful of wind bands and jazz combos, and has a Persian ensemble called "Maze". Arvin also works out and goes to the gym, lifting weights and keeping fit.</p>
                    <br>
                    <p>Starting piano at age 7, Arvin was quickly pulled in by the world of music. He played piano for around 3 years, and then played the flute during grades 6 to 8. In the middle of grade 8, he explored a multitude of brass instruments such as the tuba, eventually settling on the trumpet.</p>
                    <br>
                    <p><strong>"To be the best, you must first believe you're the best"</strong></p>
                    <br>
                    <p><strong>Birthday: March 20th</strong></p>`
    },
    {
        name: "Alex Uchida",
        img: "AlexMemberCard.JPG",
        detailImg: "AlexMemberDetail.jpg",
        instrument: "Trumpet",
        desc: "Our second trumpet player is a skilled and highly reliant player, using her tonal sound to add beauty to the quintet. An extremely generous person as well, as Alex always lends a helping hand to the quintet.",
        detailedDesc: `<p>Playing trumpet for 4 years, our second player is an extremely talented and kind individual. She has a love for Tim Horton's and Animal Crossing as well. Alex has a deep passion for music and the trumpet, providing the quintet with a beautiful tonal sound through her playing. A highly-reliant player, Alex is sure to impress!</p>
                <br>
                <p>Alex loves to draw and create fun animations in her free time. She also enjoys video games, playing Minecraft to pass the time. A great photographer and video editor as well, and on top of it all, Alex has a sharp mind, being an avid escape room enjoyer.</p>
                <br>
                <p>In grade 6, Alex had a strong liking for percussion instruments, and really wanted to play percussion. However, she changed her choice and has been playing trumpet since grade 6. She did not explore any other instruments, as she had lots of love for the trumpet.</p>
                <br>
                <p><strong>"✨Thousands of light houses stuck at the end of the sky✨" - River Wyles From To The Moon</strong></p>
                <br>
                <p><strong>Birthday: August 16th</strong></p>`
    },
    {
        name: "Arwen Leong",
        img: "ArwenMemberCard.JPG",
        detailImg: "ArwenMemberDetail.jpg",
        instrument: "French Horn",
        desc: "Bridging the gap between the high and low voices, our french horn player has wonderful harmonies to show. Arwen brings lots of energy to the quintet with her vibrant and outgoing personality, always lightening the mood.",
        detailedDesc: `<p>Playing the most difficult brass instrument of them all, Arwen displays wonderful skill playing the French Horn. Even though she has limited experience with only one year of playing, Arwen quickly surpassed all of her peers through sheer determination and practice. She is a great addition to the ensemble and always nails her parts.</p>
                <br>
                <p>Arwen loves sports! Outside of the quintet and her musical time, Arwen plays sports such as soft ball and football. She is extremely passionate about these sports and also extermely talented, winning many gold medals and MVP awards in her games.</p>
                <br>
                <p>Starting her musical journey with the piano, Arwen played piano for 7 years before giving wind instruments a try. She then gave some time to both woodwind and brass instruments, spending time with the flute and the trumpet. She eventually found her love for the French Horn and has been playing it ever since.</p>
                <br>
                <p><strong>"If you can't beat them, eat them"</strong></p>
                <br>
                <p><strong>Birthday: August 31st</strong></p>`
    },
    {
        name: "Brian Weng",
        img: "BrianImage.JPG",
        detailImg: "BrianMemberDetail.JPG",
        instrument: "Trombone",
        desc: "Adding a unique sound and texture to the band, Brian always nails his parts, all while giving the band a great time through his high energy and funny personality. Always adds something interesting to the band!",
        detailedDesc: `<p>Known for being creative and special from his friends in a good and bad way. Brian generates many great ideas for repertoire, and helps arrange lots of it as well, as he has a great sense of pitch. Adding a very interesting personality to the band, everyone loves Brian!</p>
                <br>
                <p> He is the second trombone in an ensemble called "Trombone Trombone Trombone Trombone", a trombone quartet from Dr. G.W. Williams Secondary School. Although he enjoys music a lot, our trombone player does have a life that isn't compleatly focused in music. He does taekwondo has a hobby and is also chronically online.</p> 
                <br>
                <p>Developing his musicality from a young age, Brian is a classically trained pianist, and has been playing piano for over 10 years. He entered the world of wind instruments with great backgroud experience, helping him excel at his instrument. Brian has now been playing trombone for about 3 years, and plans on continuing his playing.</p>
                <br>
                <p><strong>"5th position is not real"</strong></p>
                <br>
                <p><strong>Birthday: March 8th</strong></p>`
        
    },
    {
        name: "Nancy Qiu",
        img: "NancyImage.JPG",
        detailImg: "NancyMemberDetail.JPG",
        instrument: "Tuba",
        desc: "Providing a  big, tonal, and a great bass sound to Brassquake, Nancy never fails to impress the audience and the band! She consistently practices her parts, and creates a positive and welcoming environment for the band!",
        detailedDesc: `<p>Even though Nancy is quite small herself, she plays the biggest instrument - the tuba! And as a cherry on top, she is phenomenal at her instrument, always creating a nice stable bass for the rest of the ensemble to sit on top of. Also an extremely kind individual, Nancy always adds laughter and a great environment to the quintet!</p>
                <br>
                <p>Nancy is a part of a jazz combo called The Downbeat Dinos, which also includes other Brassquake members such as Arvin. She is also in the Canadian Sea Cadets! Interestingly, Nancy also loves sailing, and she even has a sailing license! Nancy is a very interesting girl all around, full of different quirks!</p>
                <br>
                <p>Nancy started her musical journey with brass instruments, playing the euphonium for a long time of around 2 years! Then, in the beginning of her grade 9 year, Nancy decided to swap over to the tuba, and has been playing tuba ever since, for around one and a half years!</p>
                <br>
                <p><strong>"Why practice when you could not"</strong></p>
                <br>
                <p><strong>Birthday: April 15th</strong></p>`
    }
]; 

let performances = [
    {
        date: "December 4th, 2025",
        location: "New Roads Theatre",
        summary: "Winter Concert performance at the New Roads Theatre in Newmarket, playing some festive music!",
        details: "Playing 'The 12 Days Of Christmas' arranged by Bill Holcombe, there was a great show at the New Roads Theatre! There were also many other ensembles performing, such as Maze, The Downbeat Dinos, and repertoire performances!",
        status: "past",
        photos: [

        ],
        videos: [

        ],
    },
    {
        date: "October 24th, 2025",
        location: "The Residences on Yonge",
        summary: "One-hour performance at a retirement home along with many other amazing bands!",
        details: "Backed by the non-profit organization 'The Chords of Care', Brassquake performed at a retirement home, giving a great experience to everyone who attended! With new and intriguing repertoire, everyone had a great time!",
        status: "past",
        photos: [
            {
                title: "On The Way!",
                file: "images/BrassquakeCar.jpg"
            },
            {
                title: "The Whole Team!",
                file: "images/BrassquakeSeniorHome.jpg"
            },
            {
                title: "Arvin!",
                file: "images/ArvinSeniorHome.jpg"
            },
            {
                title: "Alex!",
                file: "images/AlexSeniorHome.jpg"
            },
            {
                title: "Brian!",
                file: "images/BrianSeniorHome.jpg"
            },
            {
                title: "Arwen!",
                file: "images/ArwenSeniorHome.jpg"
            },
            {
                title: "Nancy!",
                file: "images/NancySeniorHome.jpg"
            },
            {
                title: "So Mysterious!",
                file: "images/BrianAura.jpg"
            },
        ],
    },
    {
        date: "October 17th, 2025",
        location: "Dr. G.W. Williams Secondary School",
        summary: "Open mic performance! The first perfomance of the 2025-26 school year!",
        details: "Hosted by Dr. G.W. Williams, this open mic was free for all audiences! With many other great bands performing, the open mic was the perfect place to start our year! Free snacks included, our audience greatly enjoyed it!",
        status: "past",
        photos: [
            {
                title: "He's A Banana!",
                file: "images/ArvinBanana.JPG"
            },
            {
                title: "Lots Of Fun!",
                file: "images/NancyLaugh.JPG"
            },
            {
                title: "Locked IN!",
                file: "images/NancyLockedIn.JPG"
            },
        ],
        videos: [
            {
                title: "The Veggietales Theme!",
                url: "https://www.youtube.com/embed/zbb5xbJCJg4?si=Mn0Ai864qhsxSvts"
            },
        ],
    },  
    {
        date: "July 26th, 2025",
        location: "Aurora Town Square",
        summary: "Outdoor live concert for the people of Aurora at the Aurora Town Square!",
        details: "Outdoor concert for a live audience. Playing over 30 minutes of repertoire, the people of Aurora greatly enjoyed the band and what we had to offer! We performed a variety of music from classical to modern compositions!",
        status: "past",
        videos: [
            {
                title: "Bolero - David Marlatt",
                url: "https://www.youtube.com/embed/Cti8e4lQblw?si=9MUQeYpkCuFJcqni"
            },
            {
                title: "Ode To Joy - Beethoven",
                url: "https://www.youtube.com/embed/QxC14nz3Hdw?si=rxjHenRCYsYDX1_N"
            },
            {
                title: "A Kelligrews Soirée",
                url: "https://www.youtube.com/embed/qZQXvDZAWew?si=eDJY13zmQoeCPPIM"
            },
            {
                tite: "À La Claire Fontaine",
                url: "https://www.youtube.com/embed/JSGW0wKNEVk?si=izXXbrHactFATnSj"
            },
            {
                title: "Pride and Valour - Ryan Meeboer",
                url: "https://www.youtube.com/embed/ve_6N2liHjY?si=PD5k9QgLS-TZobs6"
            },
        ]
    },
   
    {
        date: "May 30th, 2025",
        location: "Dr. G.W. Williams Secondary School",
        summary: "End-of-year alumni performance before our school moves locations!",
        details: "Performance for many past G.W. attendees. Over an hour of repertoire, the alumni had a great time. Brassquake was also able to enjoy many stories from the past, told to us by the countless alumni that attended!",
        status: "past",
        photos: [
            {
                title: "The Brassquake Team Taking A Break!",
                file: "images/1NEW-IMG_0090.JPG"
            },
            {
                title: "In The Frame: Alex & Arwen!",
                file: "images/AlumniPerformance1.jpg"
            },
            {
                title: "In The Frame: Arwen, Nancy & Brian!",
                file: "images/AlumniPerformance2.jpg"
            },
            {
                title: "In The Frame: Alex!",
                file: "images/IMG_9986.JPG"
            },
        ]
    },
];

function makeCards() {
    for (let i = 0; i < cards.length; i++) {
        document.querySelector('#members-grid').insertAdjacentHTML('beforeend', `
            <div class="member-card" onclick="changePage('page=member-detail-page&member=${cards[i].name.toLowerCase().replace(/\s+/g, '-')}')">
                <div class="image-container">
                    <img class="member-image" src="images/${cards[i].img}" alt="${cards[i].name}">
                </div>
                <div class="member-name">${cards[i].name}</div>
                <div class="member-instrument">${cards[i].instrument}</div>
                <div class="member-description">${cards[i].desc}</div>
            </div>
        `);
    }
}

function memberDetails() {
    for (let i = 0; i < cards.length; i++) {
        document.querySelector('#member-detail-page').insertAdjacentHTML('beforeend', `
            <section id="${cards[i].name.toLowerCase().replace(/\s+/g, '-')}-detail" class="section hidden">
                <div class="member-detail">
                    <a href="#" class="back-button" onclick="changePage('page=members')">← Back to Members</a>
                    <h2>${cards[i].name}</h2>
                    <div class="member-instrument">${cards[i].instrument}</div>
                    <br>
                    <div class="member-detail-layout">
                        <div class="image-container member-detail-image">
                            <img class="member-image" src="images/${cards[i].detailImg}" alt="${cards[i].name}">
                        </div>
                        <div class="member-detailed-description member-detail-desc">
                            <p>${cards[i].detailedDesc}</p>
                        </div>
                    </div>
                </div>
            </section>
        `);
    }
}

function makePerformances(filteredPerformances = performances, message = '') {
    const grid = document.querySelector('#performance-grid');
    grid.innerHTML = ''; // Clear existing cards

    if (filteredPerformances.length === 0 && message) {
        grid.innerHTML = `<p style="text-align: center; font-size: 1.5em; font-weight: bold; color: #ffd700;">${message}</p>`;
        return;
    }

    for (let i = 0; i < filteredPerformances.length; i++) {
        const perf = filteredPerformances[i];
        const perfId = `${perf.location}-${perf.date}`.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
        const imageName = perf.date.replace(/(\d+)(st|nd|rd|th)/, '$1').toLowerCase().replace(/\s+/g, '-').replace(/,/g, '');

        grid.insertAdjacentHTML('beforeend', `
            <div class="member-card performance-card" onclick="changePage('page=performance-detail-page&performance=${perfId}')">
                <div class="image-container">
                ${perf.status === "upcoming" ? '<div class="status-tag">Upcoming</div>' : ''}
                    <img class="member-image performance-image" src="images/performance-${imageName}.jpg" alt="${perf.location}">
                </div>
                <div class="member-name">${perf.location}</div>
                <div class="member-instrument">${perf.date}</div>
                <div style="display: flex; justify-content: flex-start; align-items: flex-start;">${perf.summary || 'Details coming soon!'}</div>
            </div>
        `);
    }
}

// Function to set object-fit to cover for all images to fill the container
function checkImageAspect(img) {
    img.style.objectFit = 'cover';
}

function performanceDetails() {
    for (let i = 0; i < performances.length; i++) {
        const perf = performances[i];
        const perfId = `${perf.location}-${perf.date}`.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');

        document.querySelector('#performance-detail-page').insertAdjacentHTML('beforeend', `
            <section id="${perfId}-detail" class="section hidden">
                <div class="member-detail">
                    <a href="#" class="back-button" onclick="changePage('page=performances')">← Back to Performances</a>
                    <h2>${perf.location}</h2>
                    <div class="member-instrument">${perf.date}</div>
                    <br>
                    <p style="margin-bottom: 2rem;">${perf.details || 'Details coming soon!'}</p>
                </div>

                <!-- Move media outside of .member-detail -->
                <div class="performance-media-wrap">
                    <div class="member-detailed-description performance-media-grid">
                        ${(perf.videos && perf.videos.length > 0
                            ? perf.videos.map(video => `
                                <div class="media-item">
                                    <h3 style="color: #ffd700; margin-bottom: 0.5rem; text-align: center;">${video.title}</h3>
                                    <iframe class="media-frame" src="${video.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                            `).join('')
                            : '') +

                            (perf.photos && perf.photos.length > 0
                            ? perf.photos.map(photo => `
                                <div class="media-item">
                                    <h3 style="color: #ffd700; margin-bottom: 0.5rem; text-align: center;">${photo.title}</h3>
                                    <img class="media-img" src="${photo.file}" alt="${photo.title}" onload="checkImageAspect(this)">
                                </div>
                            `).join('')
                            : '') ||

                            '<p><strong>Media:</strong> Coming soon!</p>'
                        }
                    </div>
                    <!-- Bottom back button -->
                    <div style="text-align: center; margin-top: 2rem;">
                        <a href="#" class="back-button" onclick="changePage('page=performances')">← Back to Performances</a>
                    </div>
                </div>
            </section>
        `);
    }
}

makeCards();
memberDetails();
makePerformances();
performanceDetails();
// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
    });
});



// Add some interactive effects
document.querySelectorAll('.member-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

function alignPerformanceText() {
    const cards = document.querySelectorAll("#performance-grid>.member-card");
    if (!cards.length) return;

    const numChildren = cards[0].children.length; // assume all cards have same number of children

    for (let i = 0; i < numChildren; i++) {
        // Step 1: find max offsetHeight for this child index
        let maxHeight = 0;

        cards.forEach(card => {
            const child = card.children[i];
            if (child.offsetHeight > maxHeight) {
                maxHeight = child.offsetHeight;
            }
        });

        // Step 2: apply marginTop to align this child across all cards
        cards.forEach(card => {
            const child = card.children[i];
            child.style.height = `${maxHeight}px`;
        });
    }
}


// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    updatePage();
    window.scrollTo(0, 0);

    requestAnimationFrame(() => {
        alignPerformanceText();
    });
});
