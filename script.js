/*
=========================================
TO MY FOREVER, SOWNDARYA ❤️
Premium Romantic Website
=========================================
*/


/* ==========================
   LIVE OUR JOURNEY COUNTER
========================== */

const startDate = new Date("2026-02-22T19:00:00");

function updateJourney() {

    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();

    let months = now.getMonth() - startDate.getMonth();

    let days = now.getDate() - startDate.getDate();

    if (days < 0) {

        months--;

        const previousMonth = new Date(
            now.getFullYear(),
            now.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }

    if (months < 0) {

        years--;

        months += 12;
    }

    const hours = now.getHours();

    const minutes = now.getMinutes();

    const seconds = now.getSeconds();

    document.getElementById("daysCounter").innerHTML = `
        ${years} Year${years !== 1 ? "s" : ""} ❤️ •
        ${months} Month${months !== 1 ? "s" : ""} 💕 • <br>
        ${days} Day${days !== 1 ? "s" : ""} 💖
        <br>
        ${hours} Hour${hours !== 1 ? "s" : ""} ✨ •
        ${minutes} Minute${minutes !== 1 ? "s" : ""} 🌷 • <br>
        ${seconds} Second${seconds !== 1 ? "s" : ""} ⏳
    `;
}

updateJourney();

setInterval(updateJourney, 1000);

/* ==========================
   LIVE WEDDING COUNTDOWN
========================== */

/*
Change the time below if your
muhurtham is at a specific time.

Example:
2027-01-20T07:30:00
*/

const weddingDate = new Date("2027-01-20T09:30:00");

function updateWeddingCountdown() {

    const now = new Date();

    const difference = weddingDate - now;

    const weddingCounter =
        document.getElementById("weddingCounter");

    if (difference <= 0) {

        weddingCounter.innerHTML =
            "We're Married! ❤️";

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) /
        1000
    );

    weddingCounter.innerHTML = `
        ${days} Days ❤️<br>
        ${hours} Hours 💕<br>
        ${minutes} Minutes 💖<br>
        ${seconds} Seconds 💍
    `;
}

updateWeddingCountdown();

setInterval(updateWeddingCountdown, 1000);


/* ==========================
   SECRET MESSAGE
========================== */

function showSecret() {

    const secret =
        document.getElementById("secret");

    secret.innerText =
        "You are the best thing that has ever happened to me. I love you endlessly, Sowndarya ❤️";

    secret.style.animation =
        "heartbeat 1s 2";
}


/* ==========================
   TAP TO ENTER MUSIC
   (SMARTPHONE FRIENDLY)
========================== */

const overlay =
    document.getElementById("musicOverlay");

const bgMusic =
    document.getElementById("bgMusic");

let musicStarted = false;

function startExperience() {

    if (musicStarted) return;

    musicStarted = true;

    bgMusic.play()
        .then(() => {

            overlay.classList.add("hidden");

        })
        .catch(error => {

            console.log(
                "Music playback prevented:",
                error
            );

            overlay.classList.add("hidden");
        });
}


/*
Works on:
✔ Android
✔ iPhone
✔ Tablets
✔ Desktop
*/

overlay.addEventListener(
    "click",
    startExperience
);

overlay.addEventListener(
    "touchstart",
    startExperience
);


/* ==========================
   FLOATING HEARTS
========================== */

setInterval(() => {

    const heart =
        document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💖";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 30) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 6) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}, 600);


/* ==========================
   CURSOR SPARKLES
========================== */

/*
Cursor sparkles don't exist on
touch devices, so disable them
for smartphones.
*/

if (!("ontouchstart" in window)) {

    document.addEventListener(
        "mousemove",
        e => {

            const sparkle =
                document.createElement("div");

            sparkle.className =
                "sparkle";

            sparkle.innerHTML = "✨";

            sparkle.style.left =
                e.clientX + "px";

            sparkle.style.top =
                e.clientY + "px";

            document.body.appendChild(
                sparkle
            );

            setTimeout(() => {

                sparkle.remove();

            }, 800);
        }
    );
}


/* ==========================
   SCROLL REVEAL ANIMATIONS
========================== */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "active"
                    );
                }

            });

        },
        {
            threshold: 0.15
        }
    );

document
    .querySelectorAll(".reveal")
    .forEach(card => {

        observer.observe(card);

    });


/* ==========================
   OPTIONAL:
   RESUME MUSIC WHEN TAB
   BECOMES ACTIVE AGAIN
========================== */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            !document.hidden &&
            musicStarted &&
            bgMusic.paused
        ) {

            bgMusic.play().catch(() => {});
        }

    }
);
