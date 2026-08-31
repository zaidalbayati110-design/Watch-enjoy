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
    radial-gradient(circle at top,#242424 0,#0b0b0b 35%,#050505 100%);
  color:#fff;
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;
}

/* الرأس */

header{
  padding:25px 15px 15px;
  background:rgba(8,8,8,.94);
  position:sticky;
  top:0;
  z-index:20;
  backdrop-filter:blur(14px);
  border-bottom:1px solid #222;
}

.logo{
  text-align:center;
  font-size:29px;
  font-weight:800;
  margin-bottom:18px;
}

.nav{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:7px;
  overflow-x:auto;
}

.nav button{
  border:0;
  border-radius:11px;
  padding:10px 5px;
  background:#191919;
  color:#aaa;
  font-size:12px;
  white-space:nowrap;
}

.nav button.active{
  background:#fff;
  color:#000;
  font-weight:bold;
}

.search{
  width:100%;
  margin-top:13px;
  padding:14px;
  border-radius:13px;
  border:1px solid #333;
  background:#151515;
  color:#fff;
  font-size:16px;
  outline:none;
}

/* التصنيفات */

.categories{
  display:flex;
  gap:8px;
  overflow-x:auto;
  padding:15px 0 4px;
}

.categories button{
  border:1px solid #292929;
  background:#141414;
  color:#aaa;
  border-radius:20px;
  padding:8px 14px;
  white-space:nowrap;
}

.categories button.active{
  background:#fff;
  color:#000;
}

/* المحتوى */

main{
  padding:10px 15px 40px;
}

.section{
  margin-top:25px;
}

.section-title{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:13px;
}

.section-title h2{
  margin:0;
  font-size:20px;
}

.section-title span{
  color:#777;
  font-size:12px;
}

.grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:12px;
}

.card{
  background:#141414;
  border:1px solid #242424;
  border-radius:15px;
  overflow:hidden;
  transition:.2s;
}

.card:hover{
  transform:translateY(-2px);
}

.poster{
  height:210px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:52px;
  background:
    linear-gradient(135deg,#333,#111);
}

.info{
  padding:12px;
}

.title{
  font-size:16px;
  font-weight:700;
}

.meta{
  color:#888;
  font-size:12px;
  margin-top:5px;
}

.description{
  color:#999;
  font-size:12px;
  line-height:1.5;
  margin-top:7px;
}

.actions{
  display:flex;
  gap:7px;
  margin-top:11px;
}

.watch{
  flex:1;
  border:0;
  border-radius:9px;
  padding:10px;
  background:#fff;
  color:#000;
  font-weight:bold;
}

.favorite{
  width:42px;
  border:1px solid #333;
  border-radius:9px;
  background:#202020;
  color:white;
  font-size:18px;
}

/* المشغل */

.player{
  display:none;
  margin:10px 0 25px;
  background:#111;
  border:1px solid #292929;
  border-radius:16px;
  padding:12px;
}

.player video{
  width:100%;
  max-height:70vh;
  border-radius:12px;
  background:#000;
}

.player-title{
  font-size:19px;
  font-weight:bold;
  margin:12px 0;
}

.close{
  border:0;
  background:#292929;
  color:white;
  border-radius:9px;
  padding:10px 15px;
}

/* رسالة فارغة */

.empty{
  display:none;
  text-align:center;
  padding:50px 10px;
  color:#777;
}

/* الكمبيوتر */

@media(min-width:700px){

  .grid{
    grid-template-columns:repeat(5,1fr);
  }

  main{
    max-width:1250px;
    margin:auto;
  }
}
</style>
</head>

<body>

<header>

<div class="logo">
🎬 Watch Enjoy
</div>

<!-- القائمة العلوية -->

<div class="nav">

<button class="active" onclick="showPage('home',this)">
🏠 الرئيسية
</button>

<button onclick="showPage('movies',this)">
🎬 أفلام
</button>

<button onclick="showPage('series',this)">
📺 مسلسلات
</button>

<button onclick="showPage('favorites',this)">
⭐ المفضلة
</button>

<button onclick="showPage('history',this)">
🕘 آخر ما شاهدت
</button>

</div>

<input
class="search"
id="search"
type="search"
placeholder="🔎 ابحث عن فيلم أو مسلسل..."
oninput="searchContent()">

<!-- التصنيفات -->

<div class="categories">

<button class="active"
onclick="filterCategory('all',this)">
الكل
</button>

<button onclick="filterCategory('action',this)">
أكشن
</button>

<button onclick="filterCategory('comedy',this)">
كوميدي
</button>

<button onclick="filterCategory('drama',this)">
دراما
</button>

<button onclick="filterCategory('scifi',this)">
خيال علمي
</button>

<button onclick="filterCategory('classic',this)">
كلاسيك
</button>

</div>

</header>


<main>

<!-- المشغل -->

<div class="player" id="player">

<div class="player-title" id="playerTitle">
🎬 المشاهدة
</div>

<video id="video" controls playsinline>
<source id="videoSource" src="" type="video/mp4">
</video>

<button class="close" onclick="closePlayer()">
✕ إغلاق
</button>

</div>


<!-- الرئيسية -->

<section id="homePage">

<div class="section">

<div class="section-title">
<h2>🔥 الأفضل</h2>
<span>اختيارات Watch Enjoy</span>
</div>

<div class="grid" id="bestGrid"></div>

</div>


<div class="section">

<div class="section-title">
<h2>🎬 أفضل الأفلام</h2>
<span>أفلام</span>
</div>

<div class="grid" id="movieGrid"></div>

</div>


<div class="section">

<div class="section-title">
<h2>📺 أفضل المسلسلات</h2>
<span>مسلسلات</span>
</div>

<div class="grid" id="seriesGrid"></div>

</div>


<div class="section">

<div class="section-title">
<h2>🆕 المضاف حديثًا</h2>
<span>جديد</span>
</div>

<div class="grid" id="newGrid"></div>

</div>

</section>


<!-- صفحة الأفلام -->

<section id="moviesPage" style="display:none">

<div class="section-title">
<h2>🎬 الأفلام</h2>
</div>

<div class="grid" id="allMovies"></div>

</section>


<!-- صفحة المسلسلات -->

<section id="seriesPage" style="display:none">

<div class="section-title">
<h2>📺 المسلسلات</h2>
</div>

<div class="grid" id="allSeries"></div>

</section>


<!-- المفضلة -->

<section id="favoritesPage" style="display:none">

<div class="section-title">
<h2>⭐ المفضلة</h2>
</div>

<div class="grid" id="favoriteGrid"></div>

<div class="empty" id="favoriteEmpty">
⭐ ما عندك أفلام أو مسلسلات بالمفضلة حاليًا.
</div>

</section>


<!-- آخر ما شاهدت -->

<section id="historyPage" style="display:none">

<div class="section-title">
<h2>🕘 آخر ما شاهدت</h2>
</div>

<div class="grid" id="historyGrid"></div>

<div class="empty" id="historyEmpty">
🕘 ما عندك سجل مشاهدة حاليًا.
</div>

</section>

</main>


<script>

/* =====================================
   بيانات الموقع
===================================== */

const content = [

{
id:1,
title:"The General",
type:"movie",
category:"classic",
year:"1926",
icon:"🎬",
description:"فيلم كلاسيكي صامت من بطولة Buster Keaton.",
video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
},

{
id:2,
title:"فيلم تجريبي",
type:"movie",
category:"comedy",
year:"2026",
icon:"🍿",
description:"محتوى تجريبي لاختبار واجهة الموقع.",
video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
},

{
id:3,
title:"فيلم أكشن تجريبي",
type:"movie",
category:"action",
year:"2026",
icon:"💥",
description:"بطاقة تجريبية لقسم الأكشن.",
video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
},

{
id:4,
title:"فيلم خيال علمي",
type:"movie",
category:"scifi",
year:"2026",
icon:"🚀",
description:"بطاقة تجريبية لقسم الخيال العلمي.",
video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
},

{
id:5,
title:"مسلسل تجريبي",
type:"series",
category:"drama",
year:"2026",
icon:"📺",
description:"بطاقة تجريبية لقسم المسلسلات.",
video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
},

{
id:6,
title:"مسلسل كوميدي",
type:"series",
category:"comedy",
year:"2026",
icon:"😂",
description:"بطاقة تجريبية لمسلسل كوميدي.",
video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
}

];


/* =====================================
   المفضلة والسجل
===================================== */

let favorites =
JSON.parse(localStorage.getItem("watchEnjoyFavorites") || "[]");

let history =
JSON.parse(localStorage.getItem("watchEnjoyHistory") || "[]");


/* =====================================
   إنشاء البطاقة
===================================== */

function createCard(item){

let isFavorite =
favorites.includes(item.id);

return `

<div class="card"
data-id="${item.id}"
data-type="${item.type}"
data-category="${item.category}">

<div class="poster">
${item.icon}
</div>

<div class="info">

<div class="title">
${item.title}
</div>

<div class="meta">
${item.type==="movie" ? "فيلم" : "مسلسل"} • ${item.year}
</div>

<div class="description">
${item.description}
</div>

<div class="actions">

<button
class="watch"
onclick="playMovie(${item.id})">

▶ مشاهدة

</button>

<button
class="favorite"
onclick="toggleFavorite(${item.id})"
id="fav-${item.id}">

${isFavorite ? "★" : "☆"}

</button>

</div>

</div>

</div>

`;

}


/* =====================================
   عرض المحتوى
===================================== */

function render(){

document.getElementById("bestGrid").innerHTML =
content.slice(0,4).map(createCard).join("");

document.getElementById("movieGrid").innerHTML =
content.filter(x=>x.type==="movie").map(createCard).join("");

document.getElementById("seriesGrid").innerHTML =
content.filter(x=>x.type==="series").map(createCard).join("");

document.getElementById("newGrid").innerHTML =
content.slice(-4).map(createCard).join("");

document.getElementById("allMovies").innerHTML =
content.filter(x=>x.type==="movie").map(createCard).join("");

document.getElementById("allSeries").innerHTML =
content.filter(x=>x.type==="series").map(createCard).join("");

renderFavorites();

renderHistory();

}


/* =====================================
   تشغيل الفيلم
===================================== */

function playMovie(id){

let item =
content.find(x=>x.id===id);

if(!item) return;

let player =
document.getElementById("player");

let video =
document.getElementById("video");

let source =
document.getElementById("videoSource");

document.getElementById("playerTitle").innerText =
"🎬 " + item.title;

source.src = item.video;

video.load();

player.style.display = "block";

addHistory(id);

window.scrollTo({
top:0,
behavior:"smooth"
});

video.play().catch(()=>{});

}


/* =====================================
   إغلاق المشغل
===================================== */

function closePlayer(){

let video =
document.getElementById("video");

video.pause();

document.getElementById("player").style.display =
"none";

}


/* =====================================
   المفضلة
===================================== */

function toggleFavorite(id){

if(favorites.includes(id)){

favorites =
favorites.filter(x=>x!==id);

}else{

favorites.push(id);

}

localStorage.setItem(
"watchEnjoyFavorites",
JSON.stringify(favorites)
);

render();

}


/* =====================================
   آخر ما شاهدت
===================================== */

function addHistory(id){

history =
history.filter(x=>x!==id);

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
.map(id=>content.find(x=>x.id===id))
.filter(Boolean);

let grid =
document.getElementById("historyGrid");

grid.innerHTML =
items.map(createCard).join("");

document.getElementById("historyEmpty").style.display =
items.length ? "none" : "block";

}


/* =====================================
   عرض المفضلة
===================================== */

function renderFavorites(){

let items =
favorites
.map(id=>content.find(x=>x.id===id))
.filter(Boolean);

document.getElementById("favoriteGrid").innerHTML =
items.map(createCard).join("");

document.getElementById("favoriteEmpty").style.display =
items.length ? "none" : "block";

}


/* =====================================
   البحث
===================================== */

function searchContent(){

let text =
document.getElementById("search")
.value
.toLowerCase()
.trim();

document.querySelectorAll(".card").forEach(card=>{

let title =
card.querySelector(".title")
.innerText
.toLowerCase();

card.style.display =
title.includes(text)
? "block"
: "none";

});

}


/* =====================================
   التصنيفات
===================================== */

function filterCategory(category,button){

document.querySelectorAll(".categories button")
.forEach(x=>x.classList.remove("active"));

button.classList.add("active");

document.querySelectorAll(".card").forEach(card=>{

if(category==="all"){

card.style.display="block";

}else{

card.style.display =
card.dataset.category===category
? "block"
: "none";

}

});

}


/* =====================================
   صفحات القائمة العلوية
===================================== */

function showPage(page,button){

document.querySelectorAll(".nav button")
.forEach(x=>x.classList.remove("active"));

button.classList.add("active");


document.getElementById("homePage").style.display =
"none";

document.getElementById("moviesPage").style.display =
"none";

document.getElementById("seriesPage").style.display =
"none";

document.getElementById("favoritesPage").style.display =
"none";

document.getElementById("historyPage").style.display =
"none";


if(page==="home"){

document.getElementById("homePage").style.display =
"block";

}

if(page==="movies"){

document.getElementById("moviesPage").style.display =
"block";

}

if(page==="series"){

document.getElementById("seriesPage").style.display =
"block";

}

if(page==="favorites"){

document.getElementById("favoritesPage").style.display =
"block";

renderFavorites();

}

if(page==="history"){

document.getElementById("historyPage").style.display =
"block";

renderHistory();

}

window.scrollTo({
top:0,
behavior:"smooth"
});

}


/* تشغيل الموقع */

render();

</script>

</body>
</html>
