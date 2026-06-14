const startDate = new Date("2026-02-22");

/*
Wedding Date
20 January 2027
Change the time if needed.
*/
const weddingDate = new Date("2027-01-20T09:30:00");

// Days Since Relationship Started

function updateJourney(){

    const today = new Date();

    const diffDays = Math.floor(
        (today - startDate) / (1000 * 60 * 60 * 24)
    );

    document.getElementById("daysCounter").innerText =
        diffDays + " days";
}

updateJourney();


// LIVE Wedding Countdown

function updateWeddingCountdown(){

    const now = new Date();

    const difference = weddingDate - now;

    const weddingCounter =
        document.getElementById("weddingCounter");

    if(difference <= 0){

        weddingCounter.innerHTML =
            "We're Married! ❤️";

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60))
        / 1000
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


// Secret Message

function showSecret(){

    const secret =
        document.getElementById("secret");

    secret.innerText =
        "You are the best thing that has ever happened to me. I love you endlessly, Sowndarya ❤️";

    secret.style.animation =
        "heartbeat 1s 2";
}


// Floating Hearts

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


// Cursor Sparkles

document.addEventListener("mousemove", e => {

    const sparkle =
        document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.innerHTML = "✨";

    sparkle.style.left =
        e.clientX + "px";

    sparkle.style.top =
        e.clientY + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 800);

});


// Scroll Reveal

const observer =
    new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");
        }

    });

});

document.querySelectorAll(".reveal")
.forEach(card => {

    observer.observe(card);

});
