const featuredDesserts = [
  {file:'IMG_8929.jpg',title:'Strawberry Chocolate Fantasy',category:'cakes'},
  {file:'IMG_8899.jpg',title:'Chocolate Drip Celebration',category:'cakes'},
  {file:'IMG_8930.jpg',title:'Berry & Chocolate Delight',category:'cakes'},
  {file:'IMG_8920.jpg',title:'The Blush Bow',category:'cakes'},
  {file:'IMG_8911.jpg',title:'Berry Garden Cake',category:'cakes'},
  {file:'IMG_8897.jpg',title:'Blush & Ivory Elegance',category:'cakes'},
  {file:'IMG_8934.jpg',title:'Pink Rosette Dream',category:'cakes'},
  {file:'IMG_8922.jpg',title:'Golden Truffle Cake',category:'cakes'},
  {file:'IMG_8936.jpg',title:'Berry Bouquet Cake',category:'cakes'},
  {file:'IMG_8947.jpg',title:'Pearl White Celebration',category:'cakes'},
  {file:'IMG_8904.jpg',title:'Red Velvet Cookie',category:'cakes'},
  {file:'IMG_8940.jpg',title:'Chocolate Cloud',category:'cakes'},
  {file:'IMG_8893.jpg',title:'Safari Cake',category:'cakes'},
  {file:'IMG_8928.jpg',title:'Prom Suit Cake',category:'cakes'},
  {file:'IMG_8915.jpg',title:'A Character of Its Own',category:'cakes'},
  {file:'IMG_8924.jpg',title:'A Table Full of Smiles',category:'cakes'},
  {file:'IMG_8900.jpg',title:'Color Pop Chocolate',category:'cakes'},
  {file:'IMG_8939.jpg',title:'Mint Chocolate Swirl',category:'cakes'},
  {file:'IMG_8916.jpg',title:'Black & White Charm',category:'cakes'},
  {file:'IMG_8890.jpg',title:'Blue Birthday Wishes',category:'cakes'},
  {file:'IMG_8932.jpg',title:'A Sweet Little Spread',category:'cakes'},
  {file:'IMG_8907.jpg',title:'Chocolate Lace',category:'cakes'},
  {file:'IMG_8892.jpg',title:'Golden Hour Cake',category:'cakes'},
  {file:'IMG_8918.jpg',title:'Petal-Soft Treats',category:'treats'},
  {file:'IMG_8925.jpg',title:'Little Hero Cake',category:'cakes'},
  {file:'IMG_8910.jpg',title:'Mermaid',category:'cakes'},
  {file:'IMG_8885.jpg',title:'Playful Party Layers',category:'cakes'},
  {file:'IMG_8909.jpg',title:'Tae Kwan Do',category:'cakes'},
  {file:'IMG_8919.jpg',title:'Strawberry Shortcake',category:'cakes'},
  {file:'IMG_8902.jpg',title:'Dipped Treats',category:'treats'},
  {file:'Chocolate_Cream_Dessert_Cup.jpeg',title:'Chocolate Cream Dessert Cup',category:'treats'},
  {file:'Chocolate_Brownies.jpeg',title:'Chocolate Brownies',category:'treats'},
];

const additionalDesserts = [
  {file:'IMG_8913.jpg',title:'Jack Skellington Cake',category:'cakes'},
  {file:'IMG_8896.jpg',title:'A Bite-Sized Sweet Selection',category:'treats'},
  {file:'IMG_8906.jpg',title:'Blue & Pink Rosette Cake',category:'cakes'},
  {file:'IMG_8889.jpg',title:'Cake Pops',category:'treats'},
  {file:'IMG_8880.jpg',title:'Colorful Party Cupcakes',category:'treats'},
  {file:'IMG_8950.jpg',title:'Black Bow Celebration Cake',category:'cakes'},
  {file:'IMG_8912.jpg',title:'Chocolate Heart Cake',category:'cakes'},
  {file:'IMG_8888.jpg',title:'Chocolate & Vanilla Cake Bites',category:'treats'},
  {file:'IMG_8935.jpg',title:'Baby Shower Cupcakes',category:'treats'},
  {file:'IMG_8927.jpg',title:'Gender Reveal Cupcakes',category:'treats'},
  {file:'IMG_8887.jpg',title:'Blush Pink Birthday Cake',category:'cakes'},
  {file:'IMG_8894.jpg',title:'Chocolate Birthday Cake',category:'cakes'},
  {file:'IMG_8933.jpg',title:'Chocolate Cake Pops',category:'treats'},
  {file:'IMG_8921.PNG',title:'Graduation Celebration Cake',category:'cakes'},
  {file:'IMG_8903.jpg',title:'Buttercream Rose Cake',category:'cakes'},
  {file:'IMG_8886.jpg',title:'First Birthday Balloon Cake',category:'cakes'},
  {file:'IMG_8879.jpg',title:'Skylander Birthday Cake',category:'cakes'},
  {file:'IMG_8926.jpg',title:'Yellow Daisy Cake',category:'cakes'},
  {file:'IMG_8905.PNG',title:'Chocolate Cake',category:'cakes'},
  {file:'IMG_8901.jpg',title:'Mickey Mouse Cupcakes',category:'treats'},
  {file:'IMG_8878.jpg',title:'Spider-Man Birthday Cake',category:'cakes'},
  {file:'IMG_8877.jpg',title:'Paw Patrol Birthday Cake',category:'cakes'},
  {file:'IMG_8884.jpg',title:'Lego Birthday Cake',category:'cakes'},
  {file:'IMG_8917.jpg',title:'Cupcake Floral Arrangement',category:'treats'},
  {file:'IMG_8891.jpg',title:'Rose Swirl Chocolate Cake',category:'cakes'},
  {file:'IMG_8931.jpg',title:'Celebration Cake',category:'cakes'},
  {file:'IMG_8923.jpg',title:'Paris-Inspired Birthday Cake',category:'cakes'},
  {file:'IMG_8883.jpg',title:'Pink & Chocolate Rosette Cakes',category:'cakes'},
  {file:'IMG_8908.jpg',title:'Classic Happy Birthday Cake',category:'cakes'},
  {file:'IMG_8898.jpg',title:'Chocolate Flower Cake',category:'cakes'},
  {file:'IMG_8882.jpg',title:'Graduation Cap Cake',category:'cakes'},
  {file:'IMG_8938.jpg',title:'Mickey Mouse Birthday Cake',category:'cakes'},
  {file:'IMG_8952.jpg',title:'Elegant White Wedding Cake',category:'cakes'},
  {file:'IMG_8881.jpg',title:'Black & Blush Bow Cake',category:'cakes'},
  {file:'IMG_8914.jpg',title:'Unicorn Cake',category:'cakes'},
  {file:'IMG_8937.jpg',title:'Sonic the Hedgehog Cake',category:'cakes'},
  {file:'IMG_8944.jpg',title:'Skylanders Celebration Cake',category:'cakes'},
  {file:'IMG_8951.jpg',title:'Tuxedo Suit Cake',category:'cakes'},
];

const desserts = [...featuredDesserts, ...additionalDesserts];
const grid = document.querySelector('#galleryGrid');
const filters = document.querySelectorAll('.filter');
const seeMoreButton = document.querySelector('#seeMoreButton');
const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightboxImage');
const lightboxTitle = document.querySelector('#lightboxTitle');
const lightboxCount = document.querySelector('#lightboxCount');
const progress = document.querySelector('#timerProgress');
let visibleDesserts = [...desserts];
let currentIndex = 0;
let advanceTimer = null;
let animationFrame = null;
let startedAt = 0;
let showAll = false;
const INITIAL_COUNT = featuredDesserts.length;
const TEN_SECONDS = 10000;

function renderGallery(items) {
  visibleDesserts = items;
  const displayedItems = showAll ? items : items.slice(0, INITIAL_COUNT);
  grid.innerHTML = '';
  displayedItems.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = 'dessert-card';
    card.style.animationDelay = `${Math.min(index * 25, 250)}ms`;
    const image = document.createElement('img');
    image.src = `images/${item.file}`;
    image.alt = item.title;
    image.loading = index < 6 ? 'eager' : 'lazy';
    const imageWrap = document.createElement('div');
    imageWrap.className = 'dessert-image';
    imageWrap.appendChild(image);
    const openHint = document.createElement('span');
    openHint.className = 'image-open';
    openHint.setAttribute('aria-hidden', 'true');
    openHint.textContent = '↗';
    imageWrap.appendChild(openHint);
    const meta = document.createElement('div');
    meta.className = 'dessert-meta';
    if (item.title) {
      const title = document.createElement('span');
      title.className = 'dessert-title';
      title.textContent = item.title;
      meta.appendChild(title);
    }
    card.appendChild(imageWrap);
    if (item.title) card.appendChild(meta);
    card.tabIndex = 0;
    card.setAttribute('role','button');
    card.setAttribute('aria-label',`View ${item.title}`);
    card.addEventListener('click', () => openLightbox(index));
    card.addEventListener('keydown', e => {
      if(e.key === 'Enter' || e.key === ' '){e.preventDefault();openLightbox(index);}
    });
    grid.appendChild(card);
  });
  const allButton = document.querySelector('[data-filter="all"]');
  if (allButton) {
    const count = allButton.querySelector('span');
    if (count) count.textContent = desserts.length;
  }
  if (seeMoreButton) {
    const hasMore = items.length > INITIAL_COUNT;
    seeMoreButton.hidden = !hasMore;
    seeMoreButton.innerHTML = showAll
      ? 'Show less <span>−</span>'
      : 'See more sweet creations <span>＋</span>';
  }
}

filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.toggle('active', item === button));
  const filter = button.dataset.filter;
  showAll = false;
  const filtered = filter === 'all'
    ? [...desserts]
    : desserts.filter(item => item.category === filter);
  renderGallery(filtered);
}));

if (seeMoreButton) {
  seeMoreButton.addEventListener('click', () => {
    showAll = !showAll;
    renderGallery(visibleDesserts);
    if (showAll) {
      seeMoreButton.scrollIntoView({behavior:'smooth', block:'center'});
    }
  });
}

function openLightbox(index) {
  currentIndex = index;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
  showCurrent();
}
function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
  stopTimer();
}
function showCurrent() {
  const item = visibleDesserts[currentIndex];
  if (!item) return;
  lightboxImage.src = `images/${item.file}`;
  lightboxImage.alt = item.title;
  lightboxTitle.textContent = item.title;
  lightboxCount.textContent = `${String(currentIndex + 1).padStart(2,'0')} / ${String(visibleDesserts.length).padStart(2,'0')}`;
  startTimer();
}
function move(step) {
  currentIndex = (currentIndex + step + visibleDesserts.length) % visibleDesserts.length;
  showCurrent();
}
function stopTimer() {
  clearTimeout(advanceTimer);
  cancelAnimationFrame(animationFrame);
  progress.style.width = '0%';
}
function startTimer() {
  stopTimer();
  startedAt = performance.now();
  function animate(now) {
    const pct = Math.min(((now - startedAt) / TEN_SECONDS) * 100, 100);
    progress.style.width = `${pct}%`;
    if(pct < 100 && lightbox.classList.contains('open')) animationFrame = requestAnimationFrame(animate);
  }
  animationFrame = requestAnimationFrame(animate);
  advanceTimer = setTimeout(() => move(1), TEN_SECONDS);
}
document.querySelector('.lightbox-close').addEventListener('click',closeLightbox);
document.querySelector('.lightbox-arrow.prev').addEventListener('click',()=>move(-1));
document.querySelector('.lightbox-arrow.next').addEventListener('click',()=>move(1));
lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox();});
document.addEventListener('keydown',e=>{
  if(!lightbox.classList.contains('open')) return;
  if(e.key==='Escape')closeLightbox();
  if(e.key==='ArrowLeft')move(-1);
  if(e.key==='ArrowRight')move(1);
});
let touchX = 0;
lightbox.addEventListener('touchstart',e=>{touchX=e.changedTouches[0].screenX;},{passive:true});
lightbox.addEventListener('touchend',e=>{
  const diff=e.changedTouches[0].screenX-touchX;
  if(Math.abs(diff)>50)move(diff>0?-1:1);
},{passive:true});
const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('nav');
menuToggle.addEventListener('click',()=>{
  const isOpen=nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded',String(isOpen));
});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');
}));
renderGallery([...desserts]);
