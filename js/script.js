// ==========================================================================
// NAVEGACIÓN Y MENÚ MOBILE
// ==========================================================================
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

navigation?.querySelectorAll('a').forEach((link) => 
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  })
);

document.querySelector('#year').textContent = new Date().getFullYear();

// ==========================================================================
// CARRUSEL DE VIDEOS DE FONDO (HERO)
// ==========================================================================
const heroVideos = document.querySelectorAll('.hero-video');
const heroDotsContainer = document.querySelector('.hero-dots');
let currentHeroIndex = 0;
let heroTimer;

if (heroVideos.length > 0 && heroDotsContainer) {
  // Generar dinámicamente los puntos indicadores (dots)
  heroDotsContainer.innerHTML = Array.from(heroVideos)
    .map((_, index) => `<button type="button" aria-label="Ver video ${index + 1}"></button>`)
    .join('');

  const heroDots = heroDotsContainer.querySelectorAll('button');

  const showHeroVideo = (index) => {
    currentHeroIndex = (index + heroVideos.length) % heroVideos.length;

    heroVideos.forEach((video, i) => {
      if (i === currentHeroIndex) {
        video.classList.add('active');
        video.currentTime = 0;
        video.play().catch(() => {
          /* Evita alertas si el navegador restringe la autoreproducción */
        });
      } else {
        video.classList.remove('active');
      }
    });

    heroDots.forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex === currentHeroIndex);
    });
  };

  const restartHeroTimer = () => {
    clearInterval(heroTimer);
    // Cambia de video cada 7 segundos
    heroTimer = setInterval(() => {
      showHeroVideo(currentHeroIndex + 1);
    }, 7000);
  };

  // Controles previo / siguiente
  document.querySelector('.hero-control-prev')?.addEventListener('click', () => {
    showHeroVideo(currentHeroIndex - 1);
    restartHeroTimer();
  });

  document.querySelector('.hero-control-next')?.addEventListener('click', () => {
    showHeroVideo(currentHeroIndex + 1);
    restartHeroTimer();
  });

  // Eventos al presionar los puntos
  heroDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showHeroVideo(index);
      restartHeroTimer();
    });
  });

  // Inicialización
  showHeroVideo(0);
  restartHeroTimer();
}
  
// ==========================================================================
// SERVICIOS Y GALERÍAS
// ==========================================================================
const services = [
  ['inflables', 'Inflables', 'Diversión garantizada para todas las edades.'],
  ['recreacion', 'Recreación', 'Juegos, dinámicas y mucha energía.'],
  ['recreacion-decoracion', 'Recreación y decoración', 'Diversión y un ambiente único para tu evento.'],
  ['recreacion-inflable', 'Recreación e inflable', 'La combinación perfecta para celebrar.'],
  ['baby-shower', 'Baby shower y revelación de género', 'Momentos especiales, llenos de magia.'],
  ['todo-incluido', 'Todo incluido', 'Nos encargamos de todo para que tú disfrutes.'],
  ['decoracion-inflable', 'Decoración e inflable', 'Ambientación y diversión en un solo lugar.'],
  ['sonido', 'Sonido', 'Música y sonido para tu evento.'],
  ['menu', 'Menú', 'Opciones gastronómicas para todos los gustos.'],
  ['talleres', 'Talleres', 'Actividades creativas y educativas para todos.'],
  ['personajes', 'Personajes', 'Tus personajes favoritos para animar tu evento.'],
];

const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
  if (services[index]) {
    const [id, title] = services[index];
    card.tabIndex = 0;
    card.setAttribute('role', 'link');
    card.setAttribute('aria-label', `Ver galería de ${title}`);
    
    const openService = () => { window.location.href = `servicio.html?servicio=${id}`; };
    card.addEventListener('click', openService);
    card.addEventListener('keydown', (event) => { 
      if (event.key === 'Enter' || event.key === ' ') { 
        event.preventDefault(); 
        openService(); 
      } 
    });
  }
});

const detailContainer = document.querySelector('#service-details');
if (detailContainer) {
  detailContainer.innerHTML = services.map(([id, title, description], index) => `
    <article class="service-detail service-detail-${index + 1}" id="servicio-${id}">
      <div class="detail-copy">
        <p class="eyebrow">Crazy Party Eventos</p>
        <h3>${title}</h3>
        <p>${description}</p>
        <a href="https://wa.me/573115246669?text=Hola%2C%20quiero%20cotizar%20el%20servicio%20de%20${encodeURIComponent(title)}." target="_blank" rel="noopener">Cotizar este servicio →</a>
      </div>
      <div class="detail-photos" aria-label="Galería temporal de ${title}">
        <div></div><div></div><div></div>
      </div>
    </article>`).join('');
}