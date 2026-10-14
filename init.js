/* =========================================================
   Brassquake - init.js
   Member and performance data, plus the code that renders it
   ========================================================= */

let cards = [
    {
        name: "Arvin Omidvar",
        img: "arvino.jpg",
        detailImg: "ArvinMemberDetail.JPG",
        instrument: "Trumpet",
        desc: "Our first trumpet player has an excellent variety of skills in many different brass instruments. He finds and chooses repertoire for the ensemble, generates different ideas, and adds a bright beautiful sound to the mix.",
        detailedDesc: `<p>An extremely reliant and skilled player, our first trumpet player has experience in all fields of brass. He can create a variety of sound, ranging from bright sound to rip through the quintet to beautiful dark tone! With a deep passion for music, Arvin makes sure to keep the quintet enthusiastic and is a great addition.</p>
                    <p>Arvin is involved in many music-related extracurriculars aside from Brassquake. He is a trumpet player in the Toronto Youth Wind Orchestra, plays in a handful of wind bands and jazz combos, and has a Persian ensemble called "Maze". Arvin also works out and goes to the gym, lifting weights and keeping fit.</p>
                    <p>Starting piano at age 7, Arvin was quickly pulled in by the world of music. He played piano for around 3 years, and then played the flute during grades 6 to 8. In the middle of grade 8, he explored a multitude of brass instruments such as the tuba, eventually settling on the trumpet.</p>
                    <p><strong>"To be the best, you must first believe you're the best"</strong></p>
                    <p><strong>Birthday: March 20th</strong></p>`
    },
    {
        name: "Alex Uchida",
        img: "AlexMemberCard.JPG",
        detailImg: "AlexMemberDetail.jpg",
        instrument: "Trumpet",
        desc: "Our second trumpet player is a skilled and highly reliant player, using her tonal sound to add beauty to the quintet. An extremely generous person as well, as Alex always lends a helping hand to the quintet.",
        detailedDesc: `<p>Playing trumpet for 4 years, our second player is an extremely talented and kind individual. She has a love for Tim Horton's and Animal Crossing as well. Alex has a deep passion for music and the trumpet, providing the quintet with a beautiful tonal sound through her playing. A highly-reliant player, Alex is sure to impress!</p>
                <p>Alex loves to draw and create fun animations in her free time. She also enjoys video games, playing Minecraft to pass the time. A great photographer and video editor as well, and on top of it all, Alex has a sharp mind, being an avid escape room enjoyer.</p>
                <p>In grade 6, Alex had a strong liking for percussion instruments, and really wanted to play percussion. However, she changed her choice and has been playing trumpet since grade 6. She did not explore any other instruments, as she had lots of love for the trumpet.</p>
                <p><strong>"✨Thousands of light houses stuck at the end of the sky✨" - River Wyles From To The Moon</strong></p>
                <p><strong>Birthday: August 16th</strong></p>`
    },
    {
        name: "Arwen Leong",
        img: "ArwenMemberCard.JPG",
        detailImg: "ArwenMemberDetail.jpg",
        instrument: "French Horn",
        desc: "Bridging the gap between the high and low voices, our french horn player has wonderful harmonies to show. Arwen brings lots of energy to the quintet with her vibrant and outgoing personality, always lightening the mood.",
        detailedDesc: `<p>Playing the most difficult brass instrument of them all, Arwen displays wonderful skill playing the French Horn. Even though she has limited experience with only one year of playing, Arwen quickly surpassed all of her peers through sheer determination and practice. She is a great addition to the ensemble and always nails her parts.</p>
                <p>Arwen loves sports! Outside of the quintet and her musical time, Arwen plays sports such as soft ball and football. She is extremely passionate about these sports and also extermely talented, winning many gold medals and MVP awards in her games.</p>
                <p>Starting her musical journey with the piano, Arwen played piano for 7 years before giving wind instruments a try. She then gave some time to both woodwind and brass instruments, spending time with the flute and the trumpet. She eventually found her love for the French Horn and has been playing it ever since.</p>
                <p><strong>"If you can't beat them, eat them"</strong></p>
                <p><strong>Birthday: August 31st</strong></p>`
    },
    {
        name: "Brian Weng",
        img: "BrianImage.JPG",
        detailImg: "BrianMemberDetail.JPG",
        instrument: "Trombone",
        desc: "Adding a unique sound and texture to the band, Brian always nails his parts, all while giving the band a great time through his high energy and funny personality. Always adds something interesting to the band!",
        detailedDesc: `<p>Known for being creative and special from his friends in a good and bad way. Brian generates many great ideas for repertoire, and helps arrange lots of it as well, as he has a great sense of pitch. Adding a very interesting personality to the band, everyone loves Brian!</p>
                <p> He is the second trombone in an ensemble called "Trombone Trombone Trombone Trombone", a trombone quartet from Dr. G.W. Williams Secondary School. Although he enjoys music a lot, our trombone player does have a life that isn't compleatly focused in music. He does taekwondo has a hobby and is also chronically online.</p>
                <p>Developing his musicality from a young age, Brian is a classically trained pianist, and has been playing piano for over 10 years. He entered the world of wind instruments with great backgroud experience, helping him excel at his instrument. Brian has now been playing trombone for about 3 years, and plans on continuing his playing.</p>
                <p><strong>"5th position is not real"</strong></p>
                <p><strong>Birthday: March 8th</strong></p>`
    },
    {
        name: "Nancy Qiu",
        img: "NancyImage.JPG",
        detailImg: "NancyMemberDetail.JPG",
        instrument: "Tuba",
        desc: "Providing a  big, tonal, and a great bass sound to Brassquake, Nancy never fails to impress the audience and the band! She consistently practices her parts, and creates a positive and welcoming environment for the band!",
        detailedDesc: `<p>Even though Nancy is quite small herself, she plays the biggest instrument - the tuba! And as a cherry on top, she is phenomenal at her instrument, always creating a nice stable bass for the rest of the ensemble to sit on top of. Also an extremely kind individual, Nancy always adds laughter and a great environment to the quintet!</p>
                <p>Nancy is a part of a jazz combo called The Downbeat Dinos, which also includes other Brassquake members such as Arvin. She is also in the Canadian Sea Cadets! Interestingly, Nancy also loves sailing, and she even has a sailing license! Nancy is a very interesting girl all around, full of different quirks!</p>
                <p>Nancy started her musical journey with brass instruments, playing the euphonium for a long time of around 2 years! Then, in the beginning of her grade 9 year, Nancy decided to swap over to the tuba, and has been playing tuba ever since, for around one and a half years!</p>
                <p><strong>"Why practice when you could not"</strong></p>
                <p><strong>Birthday: April 15th</strong></p>`
    }
];

let performances = [
    {
        date: "June 3rd, 2026",
        location: "Dr. G.W. Williams Secondary School",
        summary: "Spring Concert performance at Dr. G.W. Williams Secondary School, playing music from La La Land!",
        details: "For the spring concert at Dr. G.W. Williams Secondary School, Brassquake performed music from 'La La Land' for a live audience at school! the performance brought a fun movie-musical sound to the concert!",
        status: "past",
        photos: [
            {
                title: "[PLACEHOLDER]",
                file: "[PLACEHOLDER]",
            }
        ],
        videos: [
            {
                title: "La La Land - Justin Hurwitz",
                url: "https://www.youtube.com/embed/Rs1Ba60voE8?si=KaW5DYdMXyZRBkio"
            }
        ],
    },
    {
        date: "December 4th, 2025",
        location: "New Roads Theatre",
        summary: "Winter Concert performance at the New Roads Theatre in Newmarket, playing some festive music!",
        details: "Playing 'The 12 Days Of Christmas' arranged by Bill Holcombe, there was a great show at the New Roads Theatre! There were also many other ensembles performing, such as Maze, The Downbeat Dinos, and repertoire performances!",
        status: "past",
        photos: [
            {
                title: "Performance Done!",
                file: "images/standingwinterconcert.jpg",
            }
        ],
        videos: [
            {
                title: "The 12 Days Of Christmas - Bill Holcombe",
                url: "https://www.youtube.com/embed/hFeYe3W4uUc?si=oOt1lFef4X_j1RbW"
            }
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
        details: "Outdoor concert for a live audience. Playing over 30 minutes of repertoire, the people of Aurora greatly enjoyed the band and what we had to offer! We performed a variety of music from classical to modern compositions! Special thanks to Darya T. for filling in for Arwen on the French Horn at this performance!",
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
                title: "À La Claire Fontaine",
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

let collaborations = [
    {
        name: "The Downbeat Dinos",
        type: "Jazz Combo",
        description: "A jazz combo from Dr. G.W. Williams Secondary School featuring two of our members, Arvin and Nancy! We frequently share the stage at community events, school functions, and concerts."
    },
    {
        name: "Maze",
        type: "Persian Ensemble",
        description: "A  Persian music ensemble that was created by our trumpet player, Arvin! We have collaborated with this group on many occasions, performing after eachother at concerts and community events."
    },
    {
        name: "The Chords of Care",
        type: "Non-Profit Organization",
        description: "We have collaborated with this amazing non-profit organization, bringing live music to a local senior home in Aurora!"
    },
    {
        name: "Trombone Trombone Trombone Trombone",
        type: "Trombone Quartet",
        description: "An incredible trombone quartet from Dr. G.W. Williams Secondary School, being led by our trombone player, Brian!"
    }
];

/* ---------- Helpers ---------- */

function slugify(text) {
    return text.toLowerCase().replace(/\s+/g, '-');
}

function getPerformanceId(perf) {
    return `${perf.location}-${perf.date}`.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
}

function parsePerformanceDate(dateString) {
    return new Date(dateString.replace(/(\d+)(st|nd|rd|th)/, '\$1'));
}

function isRealMedia(value) {
    return Boolean(value) && !String(value).includes('[PLACEHOLDER]');
}

/* ---------- Home Carousel ---------- */

let carouselPhotos = [];
let currentSlide = 0;
let carouselInterval;

function initHomeCarousel() {
    const carouselContainer = document.querySelector('#home-carousel');
    if (!carouselContainer) return;
    
    let allPhotos = [];
    
    // Gather all valid photos
    performances.forEach(perf => {
        if (perf.photos && perf.photos.length > 0) {
            perf.photos.forEach(photo => {
                if (isRealMedia(photo.file)) {
                    allPhotos.push({
                        perfId: getPerformanceId(perf),
                        location: perf.location,
                        title: photo.title,
                        file: photo.file
                    });
                }
            });
        }
    });

    if (allPhotos.length === 0) {
        carouselContainer.style.display = 'none';
        return;
    }

    // Shuffle photos randomly
    for (let i = allPhotos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allPhotos[i], allPhotos[j]] = [allPhotos[j], allPhotos[i]];
    }

    // Now uses 5 photos
    carouselPhotos = allPhotos.slice(0, 5);
    
    // PRELOAD FIX: Force the browser to download all 5 images instantly so they don't lag when swapped
    carouselPhotos.forEach(photo => {
        const preloadImg = new Image();
        preloadImg.src = photo.file;
    });

    currentSlide = 0;

    renderSlide(currentSlide);

    // Arrow Click Listeners
    document.getElementById('carousel-prev').addEventListener('click', (e) => {
        e.stopPropagation();
        currentSlide = (currentSlide - 1 + carouselPhotos.length) % carouselPhotos.length;
        renderSlide(currentSlide);
        resetCarouselInterval();
    });

    document.getElementById('carousel-next').addEventListener('click', (e) => {
        e.stopPropagation();
        currentSlide = (currentSlide + 1) % carouselPhotos.length;
        renderSlide(currentSlide);
        resetCarouselInterval();
    });

    // Clicking photo navigates to performance
    document.getElementById('carousel-content').addEventListener('click', () => {
        const photo = carouselPhotos[currentSlide];
        changePage(`page=performance-detail-page&performance=${photo.perfId}`);
    });

    startCarouselInterval();
}

function renderSlide(index) {
    const photo = carouselPhotos[index];
    const imgEl = document.getElementById('carousel-image');
    const capEl = document.getElementById('carousel-caption');
    
    // Swap immediately (no fade effect, preloading makes this instant)
    imgEl.src = photo.file;
    imgEl.alt = photo.title;
    
    // Update caption dynamically
    capEl.innerHTML = `<strong>${photo.title}</strong> - ${photo.location} <br><span style="font-size: 0.85em; opacity: 0.7;">(Click photo to view performance)</span>`;
}

function startCarouselInterval() {
    carouselInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % carouselPhotos.length;
        renderSlide(currentSlide);
    }, 1500); // Automatically scrolls every 1.5 seconds
}

function resetCarouselInterval() {
    clearInterval(carouselInterval);
    startCarouselInterval();
}

/* ---------- Collaborations ---------- */

function initCollaborations() {
    const list = document.getElementById('collaborations-list');
    if (!list) return;

    collaborations.forEach(collab => {
        list.insertAdjacentHTML('beforeend', `
            <div class="collab-item">
                <div class="collab-header">
                    <h3 class="collab-name">${collab.name}</h3>
                    <span class="collab-type">${collab.type}</span>
                </div>
                <p class="collab-desc">${collab.description}</p>
            </div>
        `);
    });
}

/* ---------- Memory Lane ---------- */

function initMemoryLane() {
    const grid = document.getElementById('memory-lane-grid');
    if (!grid) return;

    // Check if the user already unlocked it this session
    if (sessionStorage.getItem('memoryLaneUnlocked') === 'true') {
        document.getElementById('password-gate').style.display = 'none';
        document.getElementById('memory-lane-gallery').style.display = 'block';
    }

    let consecutiveMisses = 0;
    const maxMisses = 10; // If it misses 10 numbers in a row, it assumes it reached the end of your folder.
    const extensions = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];

    function tryLoadImage(index, extIndex) {
        // Stop searching if we haven't found a photo in the last 10 numbers
        if (consecutiveMisses >= maxMisses) return; 

        // If we tried every extension for this specific number and failed
        if (extIndex >= extensions.length) {
            consecutiveMisses++; // Count this as a skipped/missing number
            tryLoadImage(index + 1, 0); // Move on to check the next number
            return;
        }

        const imgSrc = `images/MemoryLane/${index}${extensions[extIndex]}`;
        const img = new Image();

        img.onload = function() {
            consecutiveMisses = 0; // Reset the miss counter because we found a photo!
            
            // Inject it into the grid
            grid.insertAdjacentHTML('beforeend', `
                <div class="memory-item">
                    <div class="memory-img-wrapper">
                        <img src="${imgSrc}" alt="Brassquake Memory" loading="lazy" decoding="async">
                    </div>
                </div>
            `);
            
            // Immediately start looking for the next number
            tryLoadImage(index + 1, 0);
        };

        img.onerror = function() {
            // That extension didn't exist, try the next extension (e.g., if .jpg fails, try .png)
            tryLoadImage(index, extIndex + 1);
        };

        img.src = imgSrc;
    }

    // Start looking for image 1
    tryLoadImage(1, 0);
}

function checkMemoryLanePassword() {
    const input = document.getElementById('memory-lane-password');
    const error = document.getElementById('password-error');
    const gate = document.getElementById('password-gate');
    const gallery = document.getElementById('memory-lane-gallery');

    try {
        const typedPassword = input.value.trim().toLowerCase();
        input.value = ''; 
        
        // 'trenches' encoded in base64 is 'dHJlbmNoZXM='
        if (btoa(typedPassword) === 'dHJlbmNoZXM=') {
            gate.style.display = 'none';
            gallery.style.display = 'block';
            error.style.display = 'none';
            sessionStorage.setItem('memoryLaneUnlocked', 'true');
        } else {
            error.style.display = 'block';
        }
    } catch(e) {
        error.style.display = 'block';
        input.value = ''; 
    }
}

/* ---------- Members ---------- */

function makeCards() {
    const grid = document.querySelector('#members-grid');
    if (!grid) return;

    cards.forEach(card => {
        grid.insertAdjacentHTML('beforeend', `
            <div class="member-card" role="link" tabindex="0" onclick="changePage('page=member-detail-page&member=${slugify(card.name)}')">
                <div class="image-container">
                    <img class="member-image" src="images/${card.img}" alt="${card.name}" loading="lazy" decoding="async">
                </div>
                <div class="member-name">${card.name}</div>
                <div class="member-instrument">${card.instrument}</div>
                <div class="member-description">${card.desc}</div>
            </div>
        `);
    });
}

function memberDetails() {
    const container = document.querySelector('#member-detail-page');
    if (!container) return;

    cards.forEach(card => {
        container.insertAdjacentHTML('beforeend', `
            <section id="${slugify(card.name)}-detail" class="section hidden">
                <div class="member-detail">
                    <a href="#" class="back-button" onclick="changePage('page=members')">← Back to Members</a>
                    <h2>${card.name}</h2>
                    <div class="member-instrument">${card.instrument}</div>
                    <div class="member-detail-layout">
                        <div class="image-container member-detail-image">
                            <img class="member-image" src="images/${card.detailImg}" alt="${card.name}">
                        </div>
                        <div class="member-detailed-description member-detail-desc">
                            ${card.detailedDesc}
                        </div>
                    </div>
                </div>
            </section>
        `);
    });
}

/* ---------- Performances ---------- */

function makePerformances(filteredPerformances = performances, message = '') {
    const grid = document.querySelector('#performance-grid');
    if (!grid) return;
    grid.innerHTML = '';

    if (filteredPerformances.length === 0 && message) {
        grid.innerHTML = `<p class="no-results">${message}</p>`;
        return;
    }

    filteredPerformances.forEach(perf => {
        const perfId = getPerformanceId(perf);
        const imageName = perf.date.replace(/(\d+)(st|nd|rd|th)/, '\$1').toLowerCase().replace(/\s+/g, '-').replace(/,/g, '');

        grid.insertAdjacentHTML('beforeend', `
            <div class="member-card performance-card" role="link" tabindex="0" onclick="changePage('page=performance-detail-page&performance=${perfId}')">
                <div class="image-container">
                    ${perf.status === "upcoming" ? '<div class="status-tag">Upcoming</div>' : ''}
                    <img class="member-image performance-image" src="images/performance-${imageName}.jpg" alt="${perf.location}" loading="lazy" decoding="async" onload="alignPerformanceText()" onerror="this.remove(); alignPerformanceText()">
                </div>
                <div class="member-name">${perf.location}</div>
                <div class="member-instrument">${perf.date}</div>
                <div class="performance-summary">${perf.summary || 'Details coming soon!'}</div>
            </div>
        `);
    });
}

function performanceDetails() {
    const container = document.querySelector('#performance-detail-page');
    if (!container) return;

    performances.forEach(perf => {
        const videosHtml = (perf.videos || [])
            .filter(video => isRealMedia(video.url))
            .map(video => `
                <div class="media-item">
                    <h3>${video.title}</h3>
                    <iframe class="media-frame" src="${video.url}" title="${video.title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            `).join('');

        const photosHtml = (perf.photos || [])
            .filter(photo => isRealMedia(photo.file))
            .map(photo => `
                <div class="media-item">
                    <h3>${photo.title}</h3>
                    <img class="media-img" src="${photo.file}" alt="${photo.title}" loading="lazy" decoding="async">
                </div>
            `).join('');

        const mediaHtml = (videosHtml + photosHtml) || '<p><strong>Media:</strong> Coming soon!</p>';

        container.insertAdjacentHTML('beforeend', `
            <section id="${getPerformanceId(perf)}-detail" class="section hidden">
                <div class="member-detail">
                    <a href="#" class="back-button" onclick="changePage('page=performances')">← Back to Performances</a>
                    <h2>${perf.location}</h2>
                    <div class="member-instrument">${perf.date}</div>
                    <p class="performance-summary-text">${perf.details || 'Details coming soon!'}</p>
                </div>

                <div class="performance-media-wrap">
                    <div class="member-detailed-description performance-media-grid">
                        ${mediaHtml}
                    </div>
                    <div class="back-button-wrap">
                        <a href="#" class="back-button" onclick="changePage('page=performances')">← Back to Performances</a>
                    </div>
                </div>
            </section>
        `);
    });
}

/* ---------- Layout helpers ---------- */

function alignPerformanceText() {
    const cardEls = Array.from(document.querySelectorAll('#performance-grid > .member-card'));
    if (!cardEls.length) return;

    cardEls.forEach(card => Array.from(card.children).forEach(child => { child.style.height = ''; }));
    if (!cardEls[0].offsetParent) return;

    const rows = new Map();
    cardEls.forEach(card => {
        const top = Math.round(card.offsetTop);
        if (!rows.has(top)) rows.set(top, []);
        rows.get(top).push(card);
    });

    rows.forEach(rowCards => {
        const numChildren = rowCards[0].children.length;
        for (let i = 0; i < numChildren; i++) {
            let maxHeight = 0;
            rowCards.forEach(card => {
                const child = card.children[i];
                if (child && child.offsetHeight > maxHeight) maxHeight = child.offsetHeight;
            });
            rowCards.forEach(card => {
                const child = card.children[i];
                if (child) child.style.height = `${maxHeight}px`;
            });
        }
    });
}

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(alignPerformanceText, 100);
});

document.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.member-card[role="link"], .carousel-content[role="button"]')) {
        e.preventDefault();
        e.target.click();
    }
});

/* ---------- Start-up & Easter Egg ---------- */

initHomeCarousel(); 
initCollaborations();
initMemoryLane();
makeCards();
memberDetails();
makePerformances();
performanceDetails();

document.addEventListener('DOMContentLoaded', () => {
    updatePage();
    window.scrollTo(0, 0);

    // EASTER EGG: Click the Brassquake Logo image 5 times to reveal Memory Lane!
    let secretClickCount = 0;
    let secretClickTimer;
    
    const logoImage = document.querySelector('.logo-image'); 
    
    if (logoImage) {
        logoImage.addEventListener('click', (e) => {
            e.stopPropagation(); 
            secretClickCount++;
            clearTimeout(secretClickTimer);
            
            if (secretClickCount === 5) {
                changePage('page=memory-lane');
                secretClickCount = 0; 
            } else {
                secretClickTimer = setTimeout(() => secretClickCount = 0, 1000); 
            }
        });
    }
});