<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Watch Enjoy</title>

<style>
*{
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
}

body{
  margin:0;
  background:
    radial-gradient(circle at top,#252525 0%,#101010 35%,#050505 100%);
  color:#fff;
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;
}

button,input{
  font-family:inherit;
}

button{
  cursor:pointer;
}

header{
  position:sticky;
  top:0;
  z-index:50;
  padding:12px 15px;
  background:rgba(5,5,5,.94);
  backdrop-filter:blur(18px);
  border-bottom:1px solid #252525;
}

.top{
  height:52px;
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;
}

/* ===== الشعار ===== */

.logo{
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  min-height:50px;
  padding:0 18px;
}

.logo-text{
  position:relative;
  z-index:3;
  font-size:25px;
  font-weight:900;
  letter-spacing:-1px;
  text-shadow:0 3px 15px rgba(255,255,255,.15);
}

.logo-text span{
  color:#aaa;
}

.logo-film{
  position:absolute;
  width:125px;
  height:13px;
  border:3px solid #777;
  border-radius:8px;
  transform:rotate(-8deg);
  top:8px;
  right:0;
  opacity:.7;
  z-index:1;
}

.logo-film::before,
.logo-film::after{
  content:"";
  position:absolute;
  top:1px;
  width:7px;
  height:5px;
  background:#777;
  border-radius:2px;
  box-shadow:
    15px 0 #777,
    30px 0 #777,
    45px 0 #777,
    60px 0 #777,
    75px 0 #777,
    90px 0 #777;
}

.logo-film::before{
  right:3px;
}

.logo-film::after{
  right:3px;
  top:6px;
}

.logo-character{
  position:absolute;
  right:12px;
  top:-12px;
  z-index:4;
  font-size:27px;
  filter:drop-shadow(0 3px 5px #000);
}

.menu-button,
.search-button{
  position:absolute;
  top:4px;
  width:44px;
  height:44px;
  border:1px solid #333;
  border-radius:13px;
  background:#181818;
  color:white;
  font-size:21px;
}

.menu-button{
  right:0;
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
  padding:14px;
  border-radius:13px;
  border:1px solid #333;
  background:#151515;
  color:#fff;
  font-size:16px;
  outline:none;
}

main{
  max-width:1350px;
  margin:auto;
  padding:15px 15px 70px;
}

.page{
  display:none;
}

.section{
  margin-top:30px;
}

.section-header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:13px;
}

.section-header h2{
  margin:0;
  font-size:20px;
}

.section-header span{
  color:#777;
  font-size:12px;
}

/* ===== التصنيفات ===== */

.category-bar{
  display:flex;
  gap:8px;
  overflow-x:auto;
  scrollbar-width:none;
  padding:5px 0 12px;
}

.category-bar::-webkit-scrollbar{
  display:none;
}

.category-btn{
  flex:0 0 auto;
  border:1px solid #333;
  background:#181818;
  color:#ddd;
  border-radius:20px;
  padding:9px 15px;
  font-size:13px;
}

.category-btn.active{
  background:#fff;
  color:#000;
}

/* ===== Hero ===== */

.hero{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:10px;
}

.hero-card{
  position:relative;
  height:330px;
  overflow:hidden;
  border-radius:17px;
  background:#151515;
  border:1px solid #292929;
  cursor:pointer;
}

.hero-card img{
  width:100%;
  height:100%;
  object-fit:cover;
}

.hero-card::after{
  content:"";
  position:absolute;
  inset:0;
  background:linear-gradient(
    transparent 35%,
    rgba(0,0,0,.9) 100%
  );
}

.hero-info{
  position:absolute;
  bottom:0;
  right:0;
  left:0;
  padding:16px;
  z-index:2;
}

.hero-name{
  font-size:16px;
  font-weight:bold;
}

/* ===== Cards ===== */

.horizontal{
  display:flex;
  gap:12px;
  overflow-x:auto;
  padding-bottom:8px;
  scrollbar-width:none;
}

.horizontal::-webkit-scrollbar{
  display:none;
}

.grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:12px;
}

.card{
  background:#151515;
  border:1px solid #262626;
  border-radius:14px;
  overflow:hidden;
  min-width:145px;
}

.grid .card{
  min-width:0;
}

.poster{
  height:205px;
  background:linear-gradient(135deg,#333,#111);
}

.poster img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
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
  margin-top:5px;
  color:#888;
  font-size:11px;
}

.actions{
  display:flex;
  gap:6px;
  margin-top:9px;
}

.watch{
  flex:1;
  border:0;
  border-radius:9px;
  padding:9px 5px;
  background:#fff;
  color:#000;
  font-size:12px;
  font-weight:bold;
}

.favorite{
  width:38px;
  border:1px solid #333;
  border-radius:9px;
  background:#222;
  color:#fff;
  font-size:18px;
}

/* ===== التفاصيل ===== */

.details{
  display:none;
  margin-bottom:25px;
}

.details.open{
  display:block;
}

.details-backdrop{
  position:relative;
  height:330px;
  border-radius:18px;
  overflow:hidden;
  background:#151515;
}

.details-backdrop img{
  width:100%;
  height:100%;
  object-fit:cover;
}

.details-backdrop::after{
  content:"";
  position:absolute;
  inset:0;
  background:
    linear-gradient(
      transparent 15%,
      rgba(0,0,0,.35) 45%,
      rgba(5,5,5,1) 100%
    );
}

.details-content{
  position:relative;
  margin-top:-100px;
  z-index:3;
  padding:0 15px 20px;
}

.details-box{
  background:rgba(20,20,20,.95);
  border:1px solid #303030;
  border-radius:18px;
  padding:18px;
  box-shadow:0 15px 50px rgba(0,0,0,.5);
}

.details-top{
  display:flex;
  gap:15px;
}

.details-poster{
  width:125px;
  height:180px;
  flex-shrink:0;
  border-radius:12px;
  overflow:hidden;
  background:#111;
}

.details-poster img{
  width:100%;
  height:100%;
  object-fit:cover;
}

.details-name{
  font-size:23px;
  font-weight:900;
  margin-bottom:8px;
}

.details-meta{
  color:#aaa;
  font-size:13px;
  line-height:1.8;
}

.rating{
  display:inline-block;
  margin-top:8px;
  padding:5px 9px;
  border-radius:8px;
  background:#242424;
  color:#ddd;
}

.description{
  margin-top:18px;
  color:#ccc;
  line-height:1.9;
  font-size:14px;
}

.details-buttons{
  display:flex;
  gap:8px;
  margin-top:16px;
}

.primary-btn{
  flex:1;
  border:0;
  border-radius:10px;
  padding:13px;
  background:#fff;
  color:#000;
  font-weight:bold;
}

.secondary-btn{
  border:1px solid #333;
  border-radius:10px;
  padding:13px 18px;
  background:#222;
  color:#fff;
}

/* ===== المواسم والحلقات ===== */

.seasons{
  margin-top:20px;
}

.season-buttons{
  display:flex;
  gap:8px;
  overflow-x:auto;
  scrollbar-width:none;
  padding-bottom:8px;
}

.season-buttons::-webkit-scrollbar{
  display:none;
}

.season-btn{
  flex:0 0 auto;
  padding:10px 15px;
  border-radius:10px;
  border:1px solid #333;
  background:#191919;
  color:#fff;
}

.season-btn.active{
  background:#fff;
  color:#000;
}

.episodes{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:10px;
  margin-top:12px;
}

.episode{
  background:#191919;
  border:1px solid #2b2b2b;
  border-radius:12px;
  padding:12px;
}

.episode-name{
  font-size:13px;
  font-weight:bold;
  margin-bottom:9px;
}

.episode button{
  width:100%;
  border:0;
  border-radius:8px;
  padding:9px;
  background:#fff;
  color:#000;
  font-weight:bold;
}

/* ===== المشغل ===== */

.player{
  display:none;
  margin-bottom:20px;
  padding:12px;
  border:1px solid #292929;
  background:#111;
  border-radius:16px;
}

.player.show{
  display:block;
}

.player-title{
  font-size:18px;
  font-weight:bold;
  margin:5px 0 12px;
}

.video-wrap{
  background:#000;
  border-radius:12px;
  overflow:hidden;
}

.player video{
  display:block;
  width:100%;
  max-height:70vh;
  background:#000;
}

.player-message{
  padding:35px 15px;
  text-align:center;
  color:#aaa;
  line-height:1.8;
}

.close-player{
  margin-top:12px;
  border:0;
  background:#292929;
  color:#fff;
  padding:9px 14px;
  border-radius:9px;
}

/* ===== القائمة ===== */

.overlay{
  display:none;
  position:fixed;
  inset:0;
  background:rgba(0,0,0,.7);
  z-index:80;
}

.overlay.show{
  display:block;
}

.side-menu{
  position:fixed;
  top:0;
  right:-300px;
  width:285px;
  height:100vh;
  background:#111;
  z-index:100;
  padding:25px 17px;
  box-shadow:-15px 0 40px rgba(0,0,0,.7);
  transition:.3s;
}

.side-menu.open{
  right:0;
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
  color:#fff;
  font-size:22px;
}

.menu-title{
  font-size:22px;
  font-weight:bold;
  margin-bottom:25px;
}

.menu-item{
  width:100%;
  padding:15px;
  margin-bottom:9px;
  border:0;
  border-radius:12px;
  background:#1b1b1b;
  color:#fff;
  text-align:right;
  font-size:16px;
}

.empty,
.loading{
  text-align:center;
  color:#777;
  padding:40px 10px;
}

/* ===== Desktop ===== */

@media(min-width:700px){

  .grid{
    grid-template-columns:repeat(5,1fr);
  }

  .card{
    min-width:180px;
  }

  .poster{
    height:255px;
  }

  .hero-card{
    height:450px;
  }

  .details-backdrop{
    height:450px;
  }

  .episodes{
    grid-template-columns:repeat(4,1fr);
  }
}

@media(max-width:600px){

  .hero{
    grid-template-columns:1fr;
  }

  .hero-card{
    height:390px;
  }

  .details-top{
    align-items:flex-start;
  }

  .details-poster{
    width:105px;
    height:155px;
  }

  .details-name{
    font-size:19px;
  }
}
</style>
</head>

<body>

<!-- القائمة الجانبية -->

<div class="overlay" id="overlay" onclick="closeMenu()"></div>

<div class="side-menu" id="sideMenu">

  <button class="close-menu" onclick="closeMenu()">×</button>

  <div class="menu-title">
    🎬 Watch Enjoy
  </div>

  <button class="menu-item" onclick="showPage('home')">
    🏠 الرئيسية
  </button>

  <button class="menu-item" onclick="showPage('movies')">
    🎬 الأفلام
  </button>

  <button class="menu-item" onclick="showPage('series')">
    📺 المسلسلات
  </button>

  <button class="menu-item" onclick="showPage('anime')">
    🍥 الأنمي
  </button>

  <button class="menu-item" onclick="showPage('cartoon')">
    🎨 الكرتون والرسوم
  </button>

  <button class="menu-item" onclick="showPage('favorites')">
    ⭐ المفضلة
  </button>

  <button class="menu-item" onclick="showPage('history')">
    🕘 آخر ما شاهدت
  </button>

</div>

<!-- الرأس -->

<header>

  <div class="top">

    <button class="menu-button" onclick="openMenu()">
      ☰
    </button>

    <div class="logo">

      <div class="logo-film"></div>

      <div class="logo-character">
        👤
      </div>

      <div class="logo-text">
        Watch <span>Enjoy</span>
      </div>

    </div>

    <button class="search-button" onclick="toggleSearch()">
      🔍
    </button>

  </div>

  <div class="search-box" id="searchBox">

    <input
      class="search"
      id="search"
      type="search"
      placeholder="🔎 ابحث عن فيلم أو مسلسل أو أنمي..."
      oninput="searchContent()"
    >

  </div>

</header>

<main>

<!-- مشغل الفيديو -->

<div class="player" id="player">

  <div class="player-title" id="playerTitle">
    🎬 المشاهدة
  </div>

  <div class="video-wrap" id="videoWrap">

    <video
      id="video"
      controls
      playsinline
      preload="metadata">
    </video>

  </div>

  <div
    class="player-message"
    id="playerMessage"
    style="display:none">
  </div>

  <button class="close-player" onclick="closePlayer()">
    ✕ إغلاق المشغل
  </button>

</div>

<!-- تفاصيل المحتوى -->

<div class="details" id="details">

  <div class="details-backdrop">

    <img
      id="detailsBackdrop"
      src=""
      alt="">

  </div>

  <div class="details-content">

    <div class="details-box">

      <div class="details-top">

        <div class="details-poster">

          <img
            id="detailsPoster"
            src=""
            alt="">

        </div>

        <div>

          <div
            class="details-name"
            id="detailsName">
          </div>

          <div
            class="details-meta"
            id="detailsMeta">
          </div>

          <div
            class="rating"
            id="detailsRating">
          </div>

        </div>

      </div>

      <div
        class="description"
        id="detailsDescription">
      </div>

      <div class="details-buttons">

        <button
          class="primary-btn"
          id="detailsWatchButton">
          ▶ مشاهدة
        </button>

        <button
          class="secondary-btn"
          id="detailsFavoriteButton">
          ☆
        </button>

        <button
          class="secondary-btn"
          onclick="closeDetails()">
          ✕
        </button>

      </div>

      <div
        class="seasons"
        id="seasonsBox"
        style="display:none">

        <h3>📺 المواسم</h3>

        <div
          class="season-buttons"
          id="seasonButtons">
        </div>

        <div
          class="episodes"
          id="episodes">
        </div>

      </div>

    </div>

  </div>

</div>

<!-- الصفحة الرئيسية -->

<section class="page" id="homePage" style="display:block">

  <div class="section">

    <div class="section-header">

      <h2>🔥 الأكثر شعبية</h2>

      <span>اختيارات TMDB</span>

    </div>

    <div class="hero" id="hero">

      <div class="loading">
        جاري التحميل...
      </div>

    </div>

  </div>

  <div class="section">

    <div class="section-header">
      <h2>🎬 أفلام</h2>
    </div>

    <div
      class="horizontal"
      id="homeMovies">
    </div>

  </div>

  <div class="section">

    <div class="section-header">
      <h2>📺 مسلسلات</h2>
    </div>

    <div
      class="horizontal"
      id="homeSeries">
    </div>

  </div>

  <div class="section">

    <div class="section-header">
      <h2>🍥 أنمي</h2>
    </div>

    <div
      class="horizontal"
      id="homeAnime">
    </div>

  </div>

  <div class="section">

    <div class="section-header">
      <h2>🎨 كرتون ورسوم متحركة</h2>
    </div>

    <div
      class="horizontal"
      id="homeCartoon">
    </div>

  </div>

</section>

<!-- الأفلام -->

<section class="page" id="moviesPage">

  <div class="section-header">
    <h2>🎬 الأفلام</h2>
  </div>

  <div class="category-bar">

    <button
      class="category-btn active"
      onclick="loadMovieCategory('latest',this)">
      🔥 الأحدث
    </button>

    <button
      class="category-btn"
      onclick="loadMovieCategory('foreign',this)">
      🌍 أجنبي
    </button>

    <button
      class="category-btn"
      onclick="loadMovieCategory('chinese',this)">
      🇨🇳 صيني
    </button>

    <button
      class="category-btn"
      onclick="loadMovieCategory('korean',this)">
      🇰🇷 K-Drama
    </button>

    <button
      class="category-btn"
      onclick="loadMovieCategory('arabic',this)">
      🌙 عربي
    </button>

    <button
      class="category-btn"
      onclick="loadMovieCategory('top',this)">
      ⭐ الأعلى تقييماً
    </button>

  </div>

  <div
    class="grid"
    id="allMovies">
  </div>

</section>

<!-- المسلسلات -->

<section class="page" id="seriesPage">

  <div class="section-header">
    <h2>📺 المسلسلات</h2>
  </div>

  <div class="category-bar">

    <button
      class="category-btn active"
      onclick="loadSeriesCategory('latest',this)">
      🔥 الأحدث
    </button>

    <button
      class="category-btn"
      onclick="loadSeriesCategory('foreign',this)">
      🌍 أجنبي
    </button>

    <button
      class="category-btn"
      onclick="loadSeriesCategory('chinese',this)">
      🇨🇳 صيني
    </button>

    <button
      class="category-btn"
      onclick="loadSeriesCategory('korean',this)">
      🇰🇷 K-Drama
    </button>

    <button
      class="category-btn"
      onclick="loadSeriesCategory('arabic',this)">
      🌙 عربي
    </button>

    <button
      class="category-btn"
      onclick="loadSeriesCategory('top',this)">
      ⭐ الأعلى تقييماً
    </button>

  </div>

  <div
    class="grid"
    id="allSeries">
  </div>

</section>

<!-- الأنمي -->

<section class="page" id="animePage">

  <div class="section-header">
    <h2>🍥 الأنمي</h2>
  </div>

  <div
    class="grid"
    id="allAnime">
  </div>

</section>

<!-- الكرتون -->

<section class="page" id="cartoonPage">

  <div class="section-header">
    <h2>🎨 الكرتون والرسوم المتحركة</h2>
  </div>

  <div
    class="grid"
    id="allCartoon">
  </div>

</section>

<!-- المفضلة -->

<section class="page" id="favoritesPage">

  <div class="section-header">
    <h2>⭐ المفضلة</h2>
  </div>

  <div
    class="grid"
    id="favoriteGrid">
  </div>

  <div
    class="empty"
    id="favoriteEmpty">
    ⭐ لا توجد عناصر في المفضلة.
  </div>

</section>

<!-- التاريخ -->

<section class="page" id="historyPage">

  <div class="section-header">
    <h2>🕘 آخر ما شاهدت</h2>
  </div>

  <div
    class="grid"
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

/* =====================================
   البيانات المحلية
===================================== */

let content = [];

let favorites =
  JSON.parse(
    localStorage.getItem("watchEnjoyFavorites") || "[]"
  );

let history =
  JSON.parse(
    localStorage.getItem("watchEnjoyHistory") || "[]"
  );

let currentItem = null;


/* =====================================
   TMDB API
===================================== */

async function loadTMDB(
  endpoint,
  type,
  extraParams = {}
){

  try{

    const params =
      new URLSearchParams(extraParams);

    const query =
      params.toString()
      ? "&" + params.toString()
      : "";

    const response =
      await fetch(
        `/api?endpoint=${encodeURIComponent(endpoint)}${query}`
      );

    if(!response.ok){
      throw new Error("TMDB request failed");
    }

    const data =
      await response.json();

    return (data.results || []).map(item => {

      const normalized = {

        id:item.id,

        title:
          item.title ||
          item.name ||
          "بدون عنوان",

        type:type,

        year:
          (
            item.release_date ||
            item.first_air_date ||
            ""
          ).slice(0,4),

        icon:
          type === "movie"
          ? "🎬"
          : type === "series"
          ? "📺"
          : type === "anime"
          ? "🍥"
          : "🎨",

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

        rating:
          Number(item.vote_average || 0).toFixed(1),

        seasons:
          item.number_of_seasons || 0,

        episodes:
          item.number_of_episodes || 0,

        originalLanguage:
          item.original_language || "",

        video:""

      };

      return normalized;

    });

  }catch(error){

    console.error(error);

    return [];

  }

}


/* =====================================
   تحميل البداية
===================================== */

async function loadContent(){

  const [
    movies,
    series,
    anime,
    cartoon
  ] = await Promise.all([

    loadTMDB(
      "movie/popular",
      "movie"
    ),

    loadTMDB(
      "tv/popular",
      "series"
    ),

    loadTMDB(
      "discover/tv",
      "anime",
      {
        with_genres:"16",
        with_original_language:"ja",
        sort_by:"popularity.desc"
      }
    ),

    loadTMDB(
      "discover/movie",
      "cartoon",
      {
        with_genres:"16",
        sort_by:"popularity.desc"
      }
    )

  ]);

  content = [
    ...movies,
    ...series,
    ...anime,
    ...cartoon
  ];

  renderHome();

  renderFavorites();

  renderHistory();

}


/* =====================================
   البطاقة
===================================== */

function createCard(item){

  const fav =
    favorites.includes(item.id);

  return `

    <div class="card">

      <div
        class="poster"
        onclick="openDetails(${item.id},'${item.type}')"
        style="cursor:pointer">

        ${
          item.poster
          ?
          `<img
             src="${item.poster}"
             alt="${escapeHTML(item.title)}"
             loading="lazy">`
          :
          item.icon
        }

      </div>

      <div class="info">

        <div class="title">
          ${escapeHTML(item.title)}
        </div>

        <div class="meta">

          ${
            item.type === "movie"
            ? "🎬 فيلم"
            : item.type === "series"
            ? "📺 مسلسل"
            : item.type === "anime"
            ? "🍥 أنمي"
            : "🎨 كرتون"
          }

          ${item.year ? " • " + item.year : ""}

        </div>

        <div class="actions">

          <button
            class="watch"
            onclick="openDetails(${item.id},'${item.type}')">
            ▶ التفاصيل
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


/* =====================================
   الرئيسية
===================================== */

function renderHome(){

  const movies =
    content.filter(x => x.type === "movie");

  const series =
    content.filter(x => x.type === "series");

  const anime =
    content.filter(x => x.type === "anime");

  const cartoon =
    content.filter(x => x.type === "cartoon");

  document.getElementById("homeMovies").innerHTML =
    movies.slice(0,12).map(createCard).join("");

  document.getElementById("homeSeries").innerHTML =
    series.slice(0,12).map(createCard).join("");

  document.getElementById("homeAnime").innerHTML =
    anime.slice(0,12).map(createCard).join("");

  document.getElementById("homeCartoon").innerHTML =
    cartoon.slice(0,12).map(createCard).join("");

  renderHero();

}


function renderHero(){

  const hero =
    document.getElementById("hero");

  const items =
    content
      .filter(x => x.backdrop || x.poster)
      .slice(0,3);

  hero.innerHTML =
    items.map(item => `

      <div
        class="hero-card"
        onclick="openDetails(${item.id},'${item.type}')">

        <img
          src="${item.backdrop || item.poster}"
          alt="${escapeHTML(item.title)}">

        <div class="hero-info">

          <div class="hero-name">
            ${escapeHTML(item.title)}
          </div>

        </div>

      </div>

    `).join("");

}


/* =====================================
   التفاصيل
===================================== */

async function openDetails(id,type){

  let item =
    content.find(
      x => x.id === id && x.type === type
    );

  if(!item){
    return;
  }

  currentItem = item;

  document.getElementById("details").classList.add("open");

  document.getElementById("detailsName").textContent =
    item.title;

  document.getElementById("detailsDescription").textContent =
    item.description;

  document.getElementById("detailsPoster").src =
    item.poster || "";

  document.getElementById("detailsBackdrop").src =
    item.backdrop ||
    item.poster ||
    "";

  document.getElementById("detailsMeta").innerHTML = `

    ${
      type === "movie"
      ? "🎬 فيلم"
      : type === "series"
      ? "📺 مسلسل"
      : type === "anime"
      ? "🍥 أنمي"
      : "🎨 كرتون"
    }

    ${item.year ? " • " + item.year : ""}

    ${
      item.originalLanguage
      ? " • " + item.originalLanguage.toUpperCase()
      : ""
    }

    ${
      type === "series" && item.seasons
      ? `<br>📚 ${item.seasons} موسم`
      : ""
    }

  `;

  document.getElementById("detailsRating").textContent =
    "⭐ " + (item.rating || "0");

  updateFavoriteButton();

  const seasonsBox =
    document.getElementById("seasonsBox");

  const seasonButtons =
    document.getElementById("seasonButtons");

  const episodes =
    document.getElementById("episodes");

  if(type === "series" || type === "anime"){

    seasonsBox.style.display = "block";

    await loadSeasons(item);

  }else{

    seasonsBox.style.display = "none";

  }

  document.getElementById("detailsWatchButton").onclick =
    function(){

      playLicensedVideo(item);

    };

  document.getElementById("details").scrollIntoView({
    behavior:"smooth",
    block:"start"
  });

}


async function loadSeasons(item){

  const seasonButtons =
    document.getElementById("seasonButtons");

  const episodes =
    document.getElementById("episodes");

  seasonButtons.innerHTML =
    `<div class="loading">جاري تحميل المواسم...</div>`;

  episodes.innerHTML = "";

  try{

    const response =
      await fetch(
        `/api?endpoint=tv/${item.id}`
      );

    if(!response.ok){
      throw new Error("Could not load show");
    }

    const data =
      await response.json();

    const seasons =
      (data.seasons || [])
      .filter(s => s.season_number >= 0);

    if(!seasons.length){

      seasonButtons.innerHTML =
        `<div class="empty">لا توجد مواسم.</div>`;

      return;

    }

    seasonButtons.innerHTML =
      seasons.map((season,index) => `

        <button
          class="season-btn ${index === 0 ? "active" : ""}"
          onclick="loadEpisodes(
            ${item.id},
            ${season.season_number},
            this
          )">

          الموسم ${season.season_number}

        </button>

      `).join("");

    await loadEpisodes(
      item.id,
      seasons[0].season_number,
      seasonButtons.querySelector(".season-btn")
    );

  }catch(error){

    console.error(error);

    seasonButtons.innerHTML =
      `<div class="empty">
        تعذر تحميل المواسم حالياً.
      </div>`;

  }

}


async function loadEpisodes(
  showId,
  seasonNumber,
  button
){

  document
    .querySelectorAll(".season-btn")
    .forEach(
      x => x.classList.remove("active")
    );

  if(button){
    button.classList.add("active");
  }

  const episodes =
    document.getElementById("episodes");

  episodes.innerHTML =
    `<div class="loading">
      جاري تحميل الحلقات...
    </div>`;

  try{

    const response =
      await fetch(
        `/api?endpoint=tv/${showId}/season/${seasonNumber}`
      );

    if(!response.ok){
      throw new Error("Episode request failed");
    }

    const data =
      await response.json();

    const list =
      data.episodes || [];

    episodes.innerHTML =
      list.map(ep => `

        <div class="episode">

          <div class="episode-name">

            الحلقة ${ep.episode_number}

            ${
              ep.name
              ? " - " + escapeHTML(ep.name)
              : ""
            }

          </div>

          <button
            onclick="playEpisode(
              ${showId},
              ${seasonNumber},
              ${ep.episode_number},
              '${escapeJS(ep.name || "الحلقة " + ep.episode_number)}'
            )">

            ▶ مشاهدة

          </button>

        </div>

      `).join("");

  }catch(error){

    console.error(error);

    episodes.innerHTML =
      `<div class="empty">
        تعذر تحميل الحلقات.
      </div>`;

  }

}


/* =====================================
   تشغيل فيديو قانوني داخل الموقع
===================================== */

/*
  ضع روابط الفيديو القانونية التي تملك حق استخدامها
  داخل هذا المكان.

  مثال:

  const LICENSED_VIDEOS = {
    "movie-123": "https://your-domain.com/movie.mp4"
  };

  لا تضع روابط أفلام مقرصنة هنا.
*/

const LICENSED_VIDEOS = {};


function playLicensedVideo(item){

  const key =
    `${item.type}-${item.id}`;

  const videoURL =
    LICENSED_VIDEOS[key] ||
    item.video ||
    "";

  const player =
    document.getElementById("player");

  const video =
    document.getElementById("video");

  const videoWrap =
    document.getElementById("videoWrap");

  const message =
    document.getElementById("playerMessage");

  document.getElementById("playerTitle").textContent =
    "🎬 " + item.title;

  player.classList.add("show");

  if(videoURL){

    message.style.display = "none";
    videoWrap.style.display = "block";

    video.src = videoURL;

    video.load();

    video.play().catch(
      () => {}
    );

    addHistory(item.id);

  }else{

    video.pause();
    video.removeAttribute("src");
    video.load();

    videoWrap.style.display = "none";

    message.style.display = "block";

    message.innerHTML = `
      هذا العنوان لا يحتوي حالياً على
      مصدر مشاهدة قانوني مضاف إلى الموقع.
      <br><br>
      يمكنك إضافة رابط فيديو تملكه أو لديك
      ترخيص لاستخدامه داخل الموقع.
    `;

  }

  player.scrollIntoView({
    behavior:"smooth",
    block:"start"
  });

}


function playEpisode(
  showId,
  seasonNumber,
  episodeNumber,
  episodeName
){

  const key =
    `episode-${showId}-${seasonNumber}-${episodeNumber}`;

  const videoURL =
    LICENSED_VIDEOS[key] || "";

  const player =
    document.getElementById("player");

  const video =
    document.getElementById("video");

  const videoWrap =
    document.getElementById("videoWrap");

  const message =
    document.getElementById("playerMessage");

  document.getElementById("playerTitle").textContent =
    `📺 ${episodeName}`;

  player.classList.add("show");

  if(videoURL){

    message.style.display = "none";
    videoWrap.style.display = "block";

    video.src = videoURL;

    video.load();

    video.play().catch(
      () => {}
    );

  }else{

    video.pause();
    video.removeAttribute("src");
    video.load();

    videoWrap.style.display = "none";

    message.style.display = "block";

    message.innerHTML = `
      هذه الحلقة لا تحتوي حالياً على
      مصدر مشاهدة قانوني مضاف إلى الموقع.
    `;

  }

  player.scrollIntoView({
    behavior:"smooth",
    block:"start"
  });

}


/* =====================================
   إغلاق المشغل والتفاصيل
===================================== */

function closePlayer(){

  const video =
    document.getElementById("video");

  video.pause();

  video.removeAttribute("src");

  video.load();

  document
    .getElementById("player")
    .classList
    .remove("show");

}


function closeDetails(){

  document
    .getElementById("details")
    .classList
    .remove("open");

  currentItem = null;

}


/* =====================================
   المفضلة
===================================== */

function toggleFavorite(id){

  if(favorites.includes(id)){

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

  renderHome();

  renderFavorites();

  if(currentItem){
    updateFavoriteButton();
  }

}


function updateFavoriteButton(){

  if(!currentItem)return;

  const button =
    document.getElementById(
      "detailsFavoriteButton"
    );

  button.textContent =
    favorites.includes(currentItem.id)
    ? "★"
    : "☆";

  button.onclick =
    () => toggleFavorite(currentItem.id);

}


function renderFavorites(){

  const grid =
    document.getElementById("favoriteGrid");

  const empty =
    document.getElementById("favoriteEmpty");

  const items =
    favorites
      .map(
        id =>
          content.find(
            x => x.id === id
          )
      )
      .filter(Boolean);

  grid.innerHTML =
    items.map(createCard).join("");

  empty.style.display =
    items.length
    ? "none"
    : "block";

}


/* =====================================
   التاريخ
===================================== */

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

  const grid =
    document.getElementById("historyGrid");

  const empty =
    document.getElementById("historyEmpty");

  const items =
    history
      .map(
        id =>
          content.find(
            x => x.id === id
          )
      )
      .filter(Boolean);

  grid.innerHTML =
    items.map(createCard).join("");

  empty.style.display =
    items.length
    ? "none"
    : "block";

}


/* =====================================
   صفحات الموقع
===================================== */

function showPage(page){

  closeMenu();

  document
    .querySelectorAll(".page")
    .forEach(
      x => x.style.display = "none"
    );

  closeDetails();

  if(page === "home"){

    document.getElementById(
      "homePage"
    ).style.display = "block";

  }

  if(page === "movies"){

    document.getElementById(
      "moviesPage"
    ).style.display = "block";

    loadMovieCategory("latest");

  }

  if(page === "series"){

    document.getElementById(
      "seriesPage"
    ).style.display = "block";

    loadSeriesCategory("latest");

  }

  if(page === "anime"){

    document.getElementById(
      "animePage"
    ).style.display = "block";

    renderAnimePage();

  }

  if(page === "cartoon"){

    document.getElementById(
      "cartoonPage"
    ).style.display = "block";

    renderCartoonPage();

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


/* =====================================
   تصنيفات الأفلام
===================================== */

async function loadMovieCategory(
  category,
  button
){

  if(button){

    document
      .querySelectorAll(
        "#moviesPage .category-btn"
      )
      .forEach(
        x => x.classList.remove("active")
      );

    button.classList.add("active");

  }

  const grid =
    document.getElementById("allMovies");

  grid.innerHTML =
    `<div class="loading">
      جاري تحميل الأفلام...
    </div>`;

  let params = {};

  let endpoint =
    "movie/popular";

  if(category === "latest"){

    endpoint = "movie/now_playing";

  }

  if(category === "top"){

    endpoint = "movie/top_rated";

  }

  if(category === "foreign"){

    endpoint = "discover/movie";

    params = {
      with_original_language:"en",
      sort_by:"popularity.desc"
    };

  }

  if(category === "chinese"){

    endpoint = "discover/movie";

    params = {
      with_original_language:"zh",
      sort_by:"popularity.desc"
    };

  }

  if(category === "korean"){

    endpoint = "discover/movie";

    params = {
      with_original_language:"ko",
      sort_by:"popularity.desc"
    };

  }

  if(category === "arabic"){

    endpoint = "discover/movie";

    params = {
      with_original_language:"ar",
      sort_by:"popularity.desc"
    };

  }

  const results =
    await loadTMDB(
      endpoint,
      "movie",
      params
    );

  grid.innerHTML =
    results.map(createCard).join("");

}


/* =====================================
   تصنيفات المسلسلات
===================================== */

async function loadSeriesCategory(
  category,
  button
){

  if(button){

    document
      .querySelectorAll(
        "#seriesPage .category-btn"
      )
      .forEach(
        x => x.classList.remove("active")
      );

    button.classList.add("active");

  }

  const grid =
    document.getElementById("allSeries");

  grid.innerHTML =
    `<div class="loading">
      جاري تحميل المسلسلات...
    </div>`;

  let endpoint =
    "tv/popular";

  let params = {};

  if(category === "latest"){

    endpoint = "tv/popular";

  }

  if(category === "top"){

    endpoint = "tv/top_rated";

  }

  if(category === "foreign"){

    endpoint = "discover/tv";

    params = {
      with_original_language:"en",
      sort_by:"popularity.desc"
    };

  }

  if(category === "chinese"){

    endpoint = "discover/tv";

    params = {
      with_original_language:"zh",
      sort_by:"popularity.desc"
    };

  }

  if(category === "korean"){

    endpoint = "discover/tv";

    params = {
      with_original_language:"ko",
      sort_by:"popularity.desc"
    };

  }

  if(category === "arabic"){

    endpoint = "discover/tv";

    params = {
      with_original_language:"ar",
      sort_by:"popularity.desc"
    };

  }

  const results =
    await loadTMDB(
      endpoint,
      "series",
      params
    );

  grid.innerHTML =
    results.map(createCard).join("");

}


/* =====================================
   الأنمي والكرتون
===================================== */

function renderAnimePage(){

  document.getElementById(
    "allAnime"
  ).innerHTML =
    content
      .filter(x => x.type === "anime")
      .map(createCard)
      .join("");

}


function renderCartoonPage(){

  document.getElementById(
    "allCartoon"
  ).innerHTML =
    content
      .filter(x => x.type === "cartoon")
      .map(createCard)
      .join("");

}


/* =====================================
   البحث
===================================== */

let searchTimer = null;

async function searchContent(){

  const text =
    document
      .getElementById("search")
      .value
      .trim();

  if(!text){

    showPage("home");

    return;

  }

  clearTimeout(searchTimer);

  searchTimer =
    setTimeout(
      async () => {

        const [
          movies,
          series
        ] = await Promise.all([

          loadTMDB(
            "search/movie",
            "movie",
            {
              query:text,
              language:"ar-SA"
            }
          ),

          loadTMDB(
            "search/tv",
            "series",
            {
              query:text,
              language:"ar-SA"
            }
          )

        ]);

        const results = [
          ...movies,
          ...series
        ];

        document
          .querySelectorAll(".page")
          .forEach(
            x => x.style.display = "none"
          );

        document.getElementById(
          "moviesPage"
        ).style.display = "block";

        document.getElementById(
          "allMovies"
        ).innerHTML = results
          .filter(
            x => x.type === "movie"
          )
          .map(createCard)
          .join("");

        document.getElementById(
          "allSeries"
        ).innerHTML = results
          .filter(
            x => x.type === "series"
          )
          .map(createCard)
          .join("");

        if(!results.length){

          document.getElementById(
            "allMovies"
          ).innerHTML =
            `<div class="empty">
              لم يتم العثور على نتائج.
            </div>`;

        }

      },
      450
    );

}


/* =====================================
   القائمة والبحث
===================================== */

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


function toggleSearch(){

  document
    .getElementById("searchBox")
    .classList
    .toggle("show");

  const input =
    document.getElementById("search");

  if(
    document
      .getElementById("searchBox")
      .classList
      .contains("show")
  ){

    input.focus();

  }

}


/* =====================================
   حماية بسيطة للنصوص
===================================== */

function escapeHTML(text){

  return String(text || "")
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");

}


function escapeJS(text){

  return String(text || "")
    .replace(/\\/g,"\\\\")
    .replace(/'/g,"\\'")
    .replace(/\n/g," ");

}


/* =====================================
   تشغيل الموقع
===================================== */

loadContent();

</script>

</body>
</html>
