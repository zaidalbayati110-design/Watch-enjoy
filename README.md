<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Watch Enjoy 🎬</title>

<style>

*{
box-sizing:border-box;
}

body{
margin:0;
background:
radial-gradient(
circle at top,
#292929 0%,
#101010 35%,
#050505 100%
);
color:white;
font-family:
-apple-system,
BlinkMacSystemFont,
"Segoe UI",
Arial,
sans-serif;
}

header{
position:sticky;
top:0;
z-index:30;
padding:14px 15px;
background:rgba(7,7,7,.94);
backdrop-filter:blur(16px);
border-bottom:1px solid #222;
}

.top{
height:45px;
display:flex;
align-items:center;
justify-content:center;
position:relative;
}

.logo{
font-size:27px;
font-weight:800;
}

.menu-button,
.search-button{
position:absolute;
top:0;
width:43px;
height:43px;
border:1px solid #333;
border-radius:12px;
background:#181818;
color:white;
font-size:21px;
}

.menu-button{
right:0;
font-size:23px;
}

.search-button{
left:0;
}

.search-box{
display:none;
margin-top:12px;
}

.search-box.show{
display:block;
}

.search{
width:100%;
padding:13px;
border-radius:12px;
border:1px solid #333;
background:#151515;
color:white;
font-size:16px;
outline:none;
}

.overlay{
display:none;
position:fixed;
inset:0;
background:rgba(0,0,0,.65);
z-index:90;
}

.overlay.show{
display:block;
}

.side-menu{
position:fixed;
top:0;
right:-290px;
width:275px;
height:100vh;
background:#111;
z-index:100;
padding:25px 17px;
box-shadow:-10px 0 35px rgba(0,0,0,.6);
transition:.3s;
}

.side-menu.open{
right:0;
}

.menu-title{
font-size:22px;
font-weight:bold;
margin-bottom:25px;
}

.close-menu{
position:absolute;
left:15px;
top:17px;
width:38px;
height:38px;
border:0;
border-radius:9px;
background:#242424;
color:white;
font-size:22px;
}

.menu-item{
width:100%;
padding:15px;
margin-bottom:9px;
border:0;
border-radius:12px;
background:#1b1b1b;
color:white;
text-align:right;
font-size:16px;
}

main{
max-width:1300px;
margin:auto;
padding:15px 15px 50px;
}

.page{
display:none;
}

.hero-title{
font-size:21px;
font-weight:bold;
margin:15px 0;
}

.hero{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:9px;
overflow:hidden;
}

.hero-card{
position:relative;
height:300px;
border-radius:16px;
overflow:hidden;
background:
linear-gradient(
135deg,
#333,
#111
);
transition:.5s;
}

.hero-poster{
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
font-size:55px;
background:#111;
}

.hero-poster img{
width:100%;
height:100%;
object-fit:cover;
}

.hero-info{
position:absolute;
bottom:0;
right:0;
left:0;
padding:14px;
background:
linear-gradient(
transparent,
rgba(0,0,0,.95)
);
}

.hero-name{
font-size:15px;
font-weight:bold;
}

.section{
margin-top:30px;
}

.section-header{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:13px;
}

.section-header h2{
margin:0;
font-size:20px;
}

.section-header span{
font-size:12px;
color:#777;
}

.horizontal{
display:flex;
gap:12px;
overflow-x:auto;
padding-bottom:7px;
scrollbar-width:none;
}

.horizontal::-webkit-scrollbar{
display:none;
}

.card{
flex:0 0 135px;
background:#151515;
border:1px solid #242424;
border-radius:13px;
overflow:hidden;
}

.poster{
height:190px;
display:flex;
align-items:center;
justify-content:center;
font-size:48px;
background:
linear-gradient(
135deg,
#353535,
#101010
);
}

.poster img{
width:100%;
height:100%;
object-fit:cover;
}

.info{
padding:10px;
}

.title{
font-size:14px;
font-weight:bold;
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
}

.meta{
font-size:11px;
color:#888;
margin-top:5px;
}

.actions{
display:flex;
gap:5px;
margin-top:9px;
}

.watch{
flex:1;
border:0;
border-radius:8px;
padding:8px 4px;
background:white;
color:black;
font-size:12px;
font-weight:bold;
}

.favorite{
width:35px;
border:1px solid #333;
border-radius:8px;
background:#222;
color:white;
font-size:17px;
}

.player{
display:none;
background:#111;
border:1px solid #292929;
border-radius:15px;
padding:12px;
margin-bottom:20px;
}

.player video{
width:100%;
border-radius:11px;
background:#000;
}

.player-title{
font-size:18px;
font-weight:bold;
margin:10px 0;
}

.close-player{
border:0;
background:#292929;
color:white;
padding:9px 14px;
border-radius:9px;
}

.empty{
display:none;
text-align:center;
color:#777;
padding:50px 10px;
}

.loading{
text-align:center;
color:#888;
padding:30px;
}

@media(min-width:700px){

.hero{
grid-template-columns:repeat(3,1fr);
}

.hero-card{
height:430px;
}

.card{
flex-basis:180px;
}

.poster{
height:250px;
}

}

</style>

</head>

<body>

<div
class="overlay"
id="overlay"
onclick="closeMenu()">
</div>

<div
class="side-menu"
id="sideMenu">

<button
class="close-menu"
onclick="closeMenu()">
×
</button>

<div class="menu-title">
☰ Watch Enjoy
</div>

<button
class="menu-item"
onclick="showPage('home')">
🏠 الرئيسية
</button>

<button
class="menu-item"
onclick="showPage('movies')">
🎬 الأفلام
</button>

<button
class="menu-item"
onclick="showPage('series')">
📺 المسلسلات
</button>

<button
class="menu-item"
onclick="showPage('anime')">
🍥 الأنمي
</button>

<button
class="menu-item"
onclick="showPage('favorites')">
⭐ المفضلة
</button>

<button
class="menu-item"
onclick="showPage('history')">
🕘 آخر ما شاهدت
</button>

</div>

<header>

<div class="top">

<button
class="menu-button"
onclick="openMenu()">
☰
</button>

<div class="logo">
🎬 Watch Enjoy
</div>

<button
class="search-button"
onclick="toggleSearch()">
🔍
</button>

</div>

<div
class="search-box"
id="searchBox">

<input
class="search"
id="search"
type="search"
placeholder="🔎 ابحث عن فيلم أو مسلسل..."
oninput="searchContent()">

</div>

</header>

<main>

<div
class="player"
id="player">

<div
class="player-title"
id="playerTitle">
🎬 المشاهدة
</div>

<video
id="video"
controls
playsinline>

<source
id="videoSource"
src=""
type="video/mp4">

</video>

<br><br>

<button
class="close-player"
onclick="closePlayer()">
✕ إغلاق
</button>

</div>

<section
class="page"
id="homePage"
style="display:block">

<div class="hero-title">
🔥 الأكثر شعبية
</div>

<div
class="hero"
id="hero">

<div class="loading">
جاري تحميل الأفلام...
</div>

</div>

<div class="section">

<div class="section-header">

<h2>
🎬 الأفلام
</h2>

<span>
سحب للمزيد ←
</span>

</div>

<div
class="horizontal"
id="homeMovies">

<div class="loading">
جاري التحميل...
</div>

</div>

</div>

<div class="section">

<div class="section-header">

<h2>
📺 المسلسلات
</h2>

<span>
سحب للمزيد ←
</span>

</div>

<div
class="horizontal"
id="homeSeries">

<div class="loading">
جاري التحميل...
</div>

</div>

</div>

<div class="section">

<div class="section-header">

<h2>
🍥 الأنمي
</h2>

<span>
سحب للمزيد ←
</span>

</div>

<div
class="horizontal"
id="homeAnime">

<div class="loading">
جاري التحميل...
</div>

</div>

</div>

</section>

<section
class="page"
id="moviesPage">

<div class="section-header">

<h2>
🎬 الأفلام
</h2>

</div>

<div
class="horizontal"
id="allMovies">
</div>

</section>

<section
class="page"
id="seriesPage">

<div class="section-header">

<h2>
📺 المسلسلات
</h2>

</div>

<div
class="horizontal"
id="allSeries">
</div>

</section>

<section
class="page"
id="animePage">

<div class="section-header">

<h2>
🍥 الأنمي
</h2>

</div>

<div
class="horizontal"
id="allAnime">
</div>

</section>

<section
class="page"
id="favoritesPage">

<div class="section-header">

<h2>
⭐ المفضلة
</h2>

</div>

<div
class="horizontal"
id="favoriteGrid">
</div>

<div
class="empty"
id="favoriteEmpty">

⭐ لا توجد عناصر في المفضلة.

</div>

</section>

<section
class="page"
id="historyPage">

<div class="section-header">

<h2>
🕘 آخر ما شاهدت
</h2>

</div>

<div
class="horizontal"
id="historyGrid">
</div>

<div
class="empty"
id="historyEmpty">

🕘 لا يوجد سجل مشاهدة.

</div>

</section>

</main>

<script>

let content = [];

let favorites =
JSON.parse(
localStorage.getItem(
"watchEnjoyFavorites"
) || "[]"
);

let history =
JSON.parse(
localStorage.getItem(
"watchEnjoyHistory"
) || "[]"
);


/* =========================
   TMDB
========================= */

async function loadTMDB(endpoint, type, extraParams = {}) {

try {

const params =
new URLSearchParams(extraParams);

const query =
params.toString()
? `&${params.toString()}`
: "";

const response =
await fetch(
`/api?endpoint=${encodeURIComponent(endpoint)}${query}`
);

if(!response.ok){

throw new Error(
"TMDB request failed"
);

}

const data =
await response.json();

return (data.results || []).map(item => ({

id:item.id,

title:
item.title ||
item.name ||
"بدون عنوان",

type:type,

year:(
item.release_date ||
item.first_air_date ||
""
).slice(0,4),

icon:
type === "movie"
? "🎬"
: type === "series"
? "📺"
: "🍥",

description:
item.overview ||
"لا يوجد وصف.",

poster:
item.poster_path
? `https://image.tmdb.org/t/p/w500${item.poster_path}`
: "",

backdrop:
item.backdrop_path
? `https://image.tmdb.org/t/p/w1280${item.backdrop_path}`
: "",

video:""

}));

}

catch(error){

console.error(
"TMDB Error:",
error
);

return [];

}

}


/* =========================
   تحميل المحتوى
========================= */

async function loadContent(){

document.getElementById(
"homeMovies"
).innerHTML =
`<div class="loading">جاري تحميل الأفلام...</div>`;

document.getElementById(
"homeSeries"
).innerHTML =
`<div class="loading">جاري تحميل المسلسلات...</div>`;

document.getElementById(
"homeAnime"
).innerHTML =
`<div class="loading">جاري تحميل الأنمي...</div>`;


const movies =
await loadTMDB(
"movie/popular",
"movie"
);


const series =
await loadTMDB(
"tv/popular",
"series"
);


const anime =
await loadTMDB(
"discover/tv",
"anime",
{
with_genres:"16",
with_original_language:"ja",
sort_by:"popularity.desc"
}
);


content = [
...movies,
...series,
...anime
];


render();

}


/* =========================
   إنشاء البطاقة
========================= */

function createCard(item){

let fav =
favorites.includes(item.id);

return `

<div
class="card"
data-id="${item.id}"
data-type="${item.type}">

<div class="poster">

${
item.poster
?
`<img
src="${item.poster}"
alt="${item.title}"
loading="lazy">`
:
item.icon
}

</div>

<div class="info">

<div class="title">
${item.title}
</div>

<div class="meta">

${
item.type === "movie"
? "فيلم"
: item.type === "series"
? "مسلسل"
: "أنمي"
}

${item.year ? " • " + item.year : ""}

</div>

<div class="actions">

<button
class="watch"
onclick="playMovie(${item.id})">

▶ مشاهدة

</button>

<button
class="favorite"
onclick="toggleFavorite(${item.id})">

${fav ? "★" : "☆"}

</button>

</div>

</div>

</div>

`;

}


/* =========================
   البوسترات الكبيرة
========================= */

function renderHero(){

let hero =
document.getElementById(
"hero"
);

let latest =
content
.filter(x => x.backdrop || x.poster)
.slice(0,3);


hero.innerHTML =
latest.map(item => `

<div class="hero-card">

<div class="hero-poster">

${
item.backdrop || item.poster
?
`<img
src="${item.backdrop || item.poster}"
alt="${item.title}">`
:
item.icon
}

</div>

<div class="hero-info">

<div class="hero-name">

${item.title}

</div>

</div>

</div>

`).join("");

}


/* =========================
   العرض
========================= */

function render(){

renderHero();


document.getElementById(
"homeMovies"
).innerHTML =
content
.filter(x => x.type === "movie")
.map(createCard)
.join("");


document.getElementById(
"homeSeries"
).innerHTML =
content
.filter(x => x.type === "series")
.map(createCard)
.join("");


document.getElementById(
"homeAnime"
).innerHTML =
content
.filter(x => x.type === "anime")
.map(createCard)
.join("");


document.getElementById(
"allMovies"
).innerHTML =
content
.filter(x => x.type === "movie")
.map(createCard)
.join("");


document.getElementById(
"allSeries"
).innerHTML =
content
.filter(x => x.type === "series")
.map(createCard)
.join("");


document.getElementById(
"allAnime"
).innerHTML =
content
.filter(x => x.type === "anime")
.map(createCard)
.join("");


renderFavorites();

renderHistory();

}


/* =========================
   المشاهدة
========================= */

function playMovie(id){

let item =
content.find(
x => x.id === id
);

if(!item)return;

let player =
document.getElementById(
"player"
);

let video =
document.getElementById(
"video"
);

let source =
document.getElementById(
"videoSource"
);


document.getElementById(
"playerTitle"
).innerText =
"🎬 " + item.title;


if(item.video){

source.src =
item.video;

video.load();

player.style.display =
"block";

video.play().catch(
()=>{}
);

}else{

alert(
"🎬 هذا العنوان تمت إضافته من TMDB، لكن رابط المشاهدة غير مضاف له بعد."
);

return;

}


addHistory(id);

window.scrollTo({
top:0,
behavior:"smooth"
});

}


/* =========================
   إغلاق المشغل
========================= */

function closePlayer(){

let video =
document.getElementById(
"video"
);

video.pause();

document.getElementById(
"player"
).style.display =
"none";

}


/* =========================
   المفضلة
========================= */

function toggleFavorite(id){

if(
favorites.includes(id)
){

favorites =
favorites.filter(
x => x !== id
);

}else{

favorites.push(id);

}

localStorage.setItem(
"watchEnjoyFavorites",
JSON.stringify(favorites)
);

render();

}


/* =========================
   آخر ما شاهدت
========================= */

function addHistory(id){

history =
history.filter(
x => x !== id
);

history.unshift(id);

history =
history.slice(0,20);

localStorage.setItem(
"watchEnjoyHistory",
JSON.stringify(history)
);

renderHistory();

}


function renderHistory(){

let items =
history
.map(
id =>
content.find(
x => x.id === id
)
)
.filter(Boolean);


document.getElementById(
"historyGrid"
).innerHTML =
items
.map(createCard)
.join("");


document.getElementById(
"historyEmpty"
).style.display =
items.length
? "none"
: "block";

}


/* =========================
   المفضلة
========================= */

function renderFavorites(){

let items =
favorites
.map(
id =>
content.find(
x => x.id === id
)
)
.filter(Boolean);


document.getElementById(
"favoriteGrid"
).innerHTML =
items
.map(createCard)
.join("");


document.getElementById(
"favoriteEmpty"
).style.display =
items.length
? "none"
: "block";

}


/* =========================
   القائمة
========================= */

function openMenu(){

document
.getElementById("sideMenu")
.classList
.add("open");

document
.getElementById("overlay")
.classList
.add("show");

}


function closeMenu(){

document
.getElementById("sideMenu")
.classList
.remove("open");

document
.getElementById("overlay")
.classList
.remove("show");

}


/* =========================
   الصفحات
========================= */

function showPage(page){

closeMenu();

document
.querySelectorAll(".page")
.forEach(
x => x.style.display = "none"
);


if(page === "home"){

document.getElementById(
"homePage"
).style.display = "block";

}

if(page === "movies"){

document.getElementById(
"moviesPage"
).style.display = "block";

}

if(page === "series"){

document.getElementById(
"seriesPage"
).style.display = "block";

}

if(page === "anime"){

document.getElementById(
"animePage"
).style.display = "block";

}

if(page === "favorites"){

document.getElementById(
"favoritesPage"
).style.display = "block";

renderFavorites();

}

if(page === "history"){

document.getElementById(
"historyPage"
).style.display = "block";

renderHistory();

}

window.scrollTo({
top:0,
behavior:"smooth"
});

}


/* =========================
   البحث عبر TMDB
========================= */

let searchTimer = null;

async function searchContent(){

let text =
document
.getElementById("search")
.value
.toLowerCase()
.trim();


if(!text){

render();

return;

}


clearTimeout(searchTimer);


searchTimer =
setTimeout(
async () => {

const movies =
await loadTMDB(
"search/movie",
"movie",
{
query:text,
language:"ar-SA"
}
);


const series =
await loadTMDB(
"search/tv",
"series",
{
query:text,
language:"ar-SA"
}
);


const results = [
...movies,
...series
];


document.getElementById(
"homeMovies"
).innerHTML = "";

document.getElementById(
"homeSeries"
).innerHTML = "";

document.getElementById(
"homeAnime"
).innerHTML = "";

document.getElementById(
"hero"
).innerHTML = "";

document.getElementById(
"allMovies"
).innerHTML =
results
.filter(x => x.type === "movie")
.map(createCard)
.join("");


document.getElementById(
"allSeries"
).innerHTML =
results
.filter(x => x.type === "series")
.map(createCard)
.join("");


document.getElementById(
"allAnime"
).innerHTML = "";


if(!results.length){

document.getElementById(
"allMovies"
).innerHTML =
`<div class="loading">لم يتم العثور على نتائج.</div>`;

}

showPage("movies");

},
400
);

}


/* =========================
   فتح البحث
========================= */

function toggleSearch(){

document
.getElementById("searchBox")
.classList
.toggle("show");

if(
document
.getElementById("searchBox")
.classList
.contains("show")
){

document
.getElementById("search")
.focus();

}

}


/* =========================
   التشغيل الأول
========================= */

loadContent();

</script>

</body>

</html>
