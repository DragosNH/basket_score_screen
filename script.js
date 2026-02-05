// --------- Declare variables ---------

// ------ Buttons ------

// --- Home buttons ---
const home1p = document.querySelector(".home1p");
const home2p = document.querySelector(".home2p");
const home3p = document.querySelector(".home3p");

// --- Visitors buttons ---
const visitors1p = document.querySelector(".visitors1p");
const visitors2p = document.querySelector(".visitors2p");
const visitors3p = document.querySelector(".visitors3p");

// ------ Scores ------

// --- Home score ---
const home_score = document.querySelector(".home_score");
home_score.textContent = 0;


// --- Visitors score ---
const visitors_score = document.querySelector(".visitors_score");
visitors_score.textContent = 0;


// --------- Event listener ---------
// ------ One point ------

// --- Home ---
home1p.addEventListener("click", () => {
    home_score.textContent++;
});

// --- Visitors ---
visitors1p.addEventListener("click", ()=>{
    visitors_score.textContent++;
})

// ----- Two points ------

// --- Home ---
home2p.addEventListener("click", () => {
    home_score.textContent++;
    home_score.textContent++;
});

// --- Vistors ---
visitors2p.addEventListener("click", () => {
    visitors_score.textContent++;
    visitors_score.textContent++;
});

// ------ Three points ------

// --- Home ---
home3p.addEventListener("click", () => {
    home_score.textContent++;
    home_score.textContent++;
    home_score.textContent++;
});

// --- Vistors ---
visitors3p.addEventListener("click", () => {
    visitors_score.textContent++;
    visitors_score.textContent++;
    visitors_score.textContent++;
});
