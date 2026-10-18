const serviceId = new URLSearchParams(window.location.search).get('servicio') || 'inflables';

// Función helper flexible para paquetes (soporta con o sin imagen previa)
const pack = (...args) => {
  if (typeof args[0] === 'string' && (args[0].startsWith('img/') || args[0].startsWith('/img/'))) {
    return { image: args[0], name: args[1], includes: args[2] || [] };
  }
  return { image: null, name: args[0], includes: args[1] || [] };
};

// Función helper para elementos individuales con atributos/medidas
const makeItem = (image, name, ...details) => ({ image, name, details: details.flat() });

const serviceData = {
  inflables: {
    title: 'Inflables y atracciones',
    description: 'Inflables y atracciones con operario y transporte dentro de Bogotá. El cliente debe garantizar la conexión eléctrica indicada y a máximo 30 metros.',
    videos: [
      'videos/video1.mp4',
      'videos/video2.mp4',
      'videos/video3.mp4'
    ],
    items: [
      makeItem('img/servicios/matchinflable.jfif', 'Match Inflable',
        'Logístico (1 persona)',
        '5 juegos inflables (cancha de futbol, cancha de canasta, tiro al blanco, bolos, tejo)'
      ),
      makeItem('img/servicios/2castillocrazy.jpeg', 'Castillo Crazy',
        '3 Mts Ancho X 3 Mts Largo X 2.5 Mts Alto.',
        'Capacidad 6 Niños Por Ronda.'
      ),
      makeItem('img/servicios/3camaelastica.png', 'Cama Elástica',
        '5 Mtrs De Diámetro.',
        'Capacidad 8 Niños.'
      ),
      makeItem('img/servicios/4castillodeslizador.png', 'Castillo Deslizador',
        '2.5 Mts Ancho X 3 Mts Largo X 2.30 Mts Alto.',
        'Pelotas de piscina.',
        'Capacidad 6 Niños Por Ronda.'
      ),
      makeItem('img/servicios/castillomultijuegos.png', 'Castillo Multijuegos',
        '2.5 Mts Ancho X 3 Mts Largo X 2.30 Mts Alto.',
        'Pelotas de piscina.',
        'Capacidad 6 Niños Por Ronda.'
      ),
      makeItem('img/servicios/intensamente.jpg', 'Castillo Intensamente',
        '2.5 Mts Ancho X 3 Mts Largo X 2.30 Mts Alto.',
        'Pelotas de piscina.',
        'Capacidad 6 Niños Por Ronda.'
      ),
      makeItem('img/servicios/deslizadorcrazy.PNG', 'Deslizador Crazy',
        '4. Mts Ancho X 6 Mts Largo X 5 Mts Alto.',
        'Capacidad 6 Niños Por Ronda.'
      ),
      makeItem('img/servicios/roblox.jpg', 'Deslizador Roblox',
        '4.5 Mts Ancho X 7.0 Mts Largo X 6 Mts Alto.',
        'Capacidad 12 Niños Por Ronda.'
      ),
      makeItem('img/servicios/spiderman.jpg', 'Deslizador Spiderman',
        'Mts Alto x 6 Mts Largo x 3.5 Ancho.',
        'Capacidad 8 Niños Por Ronda.'
      ),
      makeItem('img/servicios/encanto.jpg', 'Deslizador Encanto',
        '4.5 Mts Alto x 6 Mts Largo x 3.5 Ancho.',
        'Capacidad 8 Niños Por Ronda.'
      ),
      makeItem('img/servicios/dragoncrazy11.jfif', 'Dragon Crazy',
        '2.3 Mts Ancho X 7 Mts Largo X 7.5 Mts Alto.',
        'Capacidad 6 a 14 niños Niños Por Ronda.'
      ),
      makeItem('img/servicios/barcopirata.jfif', 'Deslizador Pirata Crazy',
        '4. Mts Ancho X 8 Mts Largo X 6 Mts Alto.',
        'Capacidad 6 a 12 Niños Por Ronda.'
      ),
      makeItem('img/servicios/candycrazy.jfif', 'Candy Crazy',
        '7Mts Alto x 9 Mts Largo x 5 Ancho.',
        'Capacidad 10 a 15 Niños Por Ronda.'
      ),
      makeItem('img/servicios/muroescalar.jfif', 'Muro de Escalar',
        '6 Mts Ancho X 7 Mts de alto.',
        'Capacidad 2 personas por ronda.'
      ),
      makeItem('img/servicios/toromecanico.png', 'Toro Mecánico',
        '6 Mts Ancho X 6 Mts Largo.',
        'Colchoneta inflable.'
      ),
      makeItem('img/servicios/relojmecanico.png', 'Reloj Mecánico',
        '5 Mts Diámetro x 2.8 Mts de Alto.',
        '6 obstáculos.',
        'Sistema mecánico con variador de velocidad y giro.'
      ),
      makeItem('img/servicios/pistaobstaculos.jfif', 'Pista de Obstáculos Crazy',
        '4. Mts Ancho X 16 Mts Largo X 5 Mts Alto.',
        'Capacidad 6 a 20 Niños Por Ronda.'
      ),
      makeItem('img/servicios/jumping.jfif', 'Jumping',
        '6 Mts Alto.',
        '4 Camas.'
      ),
      makeItem('img/barcacrazy2.jfif', 'Barca Crazy',
        '24 puestos.'
      )
    ]
  },

  recreacion: {
    title: 'Recreación',
    description: 'Paquetes de recreación, shows, juegos y competencias para niños, jóvenes, familias y empresas.',
    videos: [
      'videos/videorec.mp4'
    ],
items: [
  pack('img/recreacion.jpg', 'Paquete sencillo', [
    'Recreación dirigida (1 persona)',
    '1 show central (títeres, payasos o magia semiprofesional)',
    'Taller de pintucaritas',
    'Globoflexia máx. 20 unidades'
  ]),
  pack('img/recconvencional.jpeg', 'Paquete convencional', [
    'Recreación dirigida (1 persona)',
    'Show de títeres',
    'Show de payasitos',
    'Magia semiprofesional',
    'Taller de pintucaritas',
    'Globoflexia máx. 20 unidades'
  ]),
  pack('img/recchikyrumba.jpeg', 'Chiky rumba', [
    'Recreación dirigida (1 persona)',
    '1 show central (baile hora loca - sin accesorios)',
    'Taller de pintucaritas',
    '2 luces audiorrítmicas',
    'Globoflexia máx. 20 unidades',
    'Cliente facilita el equipo de sonido'
  ]),
  pack('img/chikytkc.jpeg', 'Chiky TK Crazy', [
    'Recreación dirigida (1 persona)',
    'Logístico (1 persona)',
    '1 show central (títeres, payasos o magia semiprofesional)',
    'Taller de pintucaritas',
    '2 luces audiorrítmicas',
    '30 pitos espanta-suegra',
    'Lluvia de nieve',
    'Explosión de papel',
    'Cliente facilita el equipo de sonido'
  ]),
  pack('img/minitkj.jfif', 'Mini TK Crazy juvenil', [
    'Recreación dirigida (1 persona)',
    'Logístico (1 persona)',
    '1 show central de baile (45 minutos de baile dirigido)',
    'Reto Tik Tok',
    '2 luces audiorrítmicas',
    '30 pitos espanta-suegra',
    '30 manillas de neón',
    '30 gafas de neón',
    'Lluvia de nieve',
    'Explosión de papel',
    'Cámara de humo',
    'Cliente facilita el equipo de sonido'
  ]),
  pack('img/fiestaf.jpeg', 'Fiesta Fusión', [
    'Recreación dirigida (1 persona)',
    'Logístico (1 persona)',
    'Show de títeres',
    'Show de payasitos o magia semiprofesional',
    'Personaje animado',
    'Taller de pintucaritas',
    '2 luces audiorrítmicas',
    '30 pitos espanta-suegra',
    'Lluvia de nieve',
    'Explosión de papel',
    'Cliente facilita el equipo de sonido'
  ]),
  pack('img/fiestafusion.jfif', 'Mega Party', [
    'Recreación dirigida (2 personas)',
    'Logístico (1 persona)',
    'Show de títeres',
    'Show de payasitos',
    'Personaje animado',
    'Magia semiprofesional',
    'Taller de pintucaritas',
    '4 luces audiorrítmicas',
    '30 pitos espanta-suegra',
    'Lluvia de nieve',
    'Explosión de papel',
    'Sonido profesional'
  ]),
  pack('img/showdeseries.png', 'Show de series', [
    'Recreación dirigida (2 personas)',
    'Logístico (1 persona)',
    'Show de títeres',
    'Show de payasitos',
    'Personajes de las series',
    'Taller de pintucaritas',
    'Show de magia cómica',
    'Coreografías de las series',
    '4 luces audiorrítmicas',
    '1 cámara de humo',
    'Lluvia de nieve',
    'Explosión de papel',
    'Sonido profesional'
  ]),
  pack('img/matchsencillo.jfif', 'Match sencillo', [
    'Recreación dirigida (1 persona)',
    'Conos',
    'Aros',
    'Costales',
    'Vasos locos',
    'Salta la cuerda',
    'Juegos, competencias y agilidad'
  ]),
  pack('img/match.jfif', 'Match', [
    'Recreación dirigida (1 persona)',
    'Logística (1 persona)',
    'Pista enjabonada',
    'Bombazo',
    'Encostalados',
    'Escaleras',
    'Obstáculo de conos',
    'Demarcación'
  ]),
  pack('img/feriapueblo.jpeg', 'Feria de pueblo', [
    'Recreación dirigida (1 persona)',
    'Logístico (1 persona)',
    'Rana',
    'Twister',
    'Minitejo',
    'Demarcación',
    'Tiro al blanco',
    'Escalera gigante',
    'Pruebas múltiples'
  ]),
  pack('img/matchcrazy.jfif', 'Match Crazy', [
    'Recreación dirigida (1 persona)',
    'Logístico (1 persona)',
    'Tiro al blanco frisby',
    'Enchola aros',
    'Futbolito',
    'Jenga gigante',
    'Golfito',
    'Demarcación',
    'Escalera'
  ]),
  pack('img/matchempresarial.jpg', 'Match empresarial', [
    'Recreación dirigida',
    'Pruebas múltiples',
    'Juego de cascos',
    'Costales',
    'Escalera gigante',
    'Twister',
    'Maraña',
    'Obstáculos conos',
    'Pimpones',
    'Jenga gigante',
    'Juego de cultura general',
    'Zapato sobre mesa',
    'Captura la bandera',
    'Demarcaciones',
    'Sonido profesional (2 cabinas BTA, trípodes, mezclador, PC, DJ)',
    'Pista enjabonada',
    'Enchola aros',
    'Rana',
    'Gusano de aros',
    'Tiro al frisby',
    'Tiro al blanco',
    'Tejo'
  ]),
  pack('img/servicios/matchinflable.jfif', 'Match inflable', [
    'Logística (1 persona)',
    '5 juegos inflables (cancha de fútbol, cancha de canasta, tiro al blanco, bolos, tejo)',
    'Escalera'
  ])
]
  },

  'decoracion-baby-revelacion': {
    title: 'Decoración baby shower y revelación',
    description: 'Decoraciones personalizadas; el cliente selecciona los tonos. Incluye decorador de 2 a 3 horas de montaje.',
    videos: [
      'videos/videobbshower.mp4'
    ],
    items: [
      pack('img/servicios/baby_decorador.jpg', 'Decorador', ['Arco orgánico, 2 teteros de globos y 2 cortinas metalizadas', 'Mantel, letrero Baby Shower o Girl or Boy, menaje para 30', 'Cubos Baby y aplique en icopor']),
      pack('img/servicios/baby_crazy.jpg', 'Decoración Crazy', ['Arco, teteros, fondo redondo con backing y 3 cilindros', 'Cubos Baby, aplique, alfombra, menaje para 30 y luz LED']),
      pack('img/servicios/baby_jumbo.jpg', 'Decoración Jumbo', ['Arco, teteros y 2 paneles temáticos', '3 cilindros, cubos, 2 apliques, alfombra, menaje y luces']),
      pack('img/servicios/baby_golden.jpg', 'Decoración Golden', ['Arco, teteros y 3 paneles temáticos', 'Cilindros, cubos, apliques, alfombra, menaje y luces', 'Topper y confeti del color elegido'])
    ]
  },

'recreacion-decoracion': {
  title: 'Decoración y recreación',
  description: 'Combos con montaje decorativo y cuatro horas de acompañamiento recreativo.',
  videos: [
    'videos/videodecoracion.mp4'
  ],
  items: [
    pack('img/combocrazy1.jpeg', 'Combo Crazy #1', [
      '--- DECORACIÓN ---',
      'Arco orgánico en globos (tonos a elección)',
      '2 torres de globos de 1m',
      '2 cortinas metalizadas',
      'Mantel plástico y número metalizado',
      'Menaje x 30 und (vasos, bandejas, cubiertos)',
      'Piñata tipo cuadrada con relleno mixto',
      '--- RECREACIÓN ---',
      'Recreación dirigida (1 persona)',  
      'Logístico (1 persona)',
      'Personaje animado',
      'Show de títeres',
      'Show de payasitos',
      'Magia semiprofesional',
      'Taller de pintucaritas',
      'Globoflexia (máx. 20 unidades)',
      '--- TIEMPOS DE SERVICIO ---',
      'Decorador: 2 a 3 horas de montaje',
      'Recreación: 4 horas de acompañamiento'
    ]),
    pack('img/combocrazy2.jpeg', 'Combo Crazy #2', [
      '--- DECORACIÓN ---',
      'Arco orgánico en globos (tonos a elección)',
      '2 torres de globos de 1m',
      'Fondo redondo temático con backing (alquiler)',
      '3 cilindros temáticos (alquiler)',
      'Número con luces de 1m (alquiler)',
      'Nombre en icopor del festejado y alfombra (alquiler)',
      'Menaje x 30 und (vasos, bandejas, cubiertos)',
      'Piñata tipo (fuente, estrella o vestido) con relleno/dulces',
      '--- RECREACIÓN ---',
      'Recreación dirigida (1 persona)',
      'Logístico (1 persona)',
      'Show de títeres',
      'Show de payasitos o magia semiprofesional',
      'Personaje animado',
      'Taller de pintucaritas',
      '2 luces audiorrítmicas y 30 pitos espanta-suegra',
      'Lluvia de nieve y explosión de papel',
      'Música USB (cliente facilita equipo de sonido)',
      '--- TIEMPOS DE SERVICIO ---',
      'Decorador: 2 a 3 horas de montaje',
      'Recreación: 4 horas de acompañamiento'
    ]),
    pack('img/combocrazy3.jpeg', 'Combo Crazy #3', [
      '--- DECORACIÓN ---',
      'Arco orgánico completo en globos (tonos a elección)',
      '2 torres de globos',
      '3 paneles con fondo temático (alquiler)',
      '3 cilindros temáticos (alquiler)',
      'Número con luces de 1m (alquiler)',
      'Nombre en icopor del festejado',
      'Happy Birthday LED',
      'Escalera para sorpresas (alquiler)',
      'Aplique en icopor de 1m y alfombra (alquiler)',
      'Menaje x 30 und (vasos, bandejas, cubiertos)',
      'Piñata tipo (fuente, estrella o vestido) con relleno y dulces',
      '--- RECREACIÓN ---',
      'Recreación dirigida (1 persona)',
      'Logístico (1 persona)',
      'Show de títeres',
      'Show de payasitos o magia semiprofesional',
      'Personaje animado',
      'Taller de pintucaritas',
      '2 luces audiorrítmicas y 30 pitos espanta-suegra',
      'Lluvia de nieve y explosión de papel',
      'Cabina de sonido de 12 pulgadas incluida',
      '--- TIEMPOS DE SERVICIO ---',
      'Decorador: 2 a 3 horas de montaje',
      'Recreación: 4 horas de acompañamiento'
    ])
  ]
},

  'recreacion-inflable': {
    title: 'Recreación e inflable',
    description: 'Combos de inflables y acompañamiento recreativo de cuatro horas para una celebración completa.',
    videos: [
      'videos/vidinf.mp4'
    ],
items: [
  pack('img/inf1.jpeg', 'Paquete sencillo con infable', [
    'Inflable interior o exterior con o sin logistico',
    'Recreación dirigida (1 persona)',
    '1 show central (títeres, payasos o magia semiprofesional)',
    'Taller de pintucaritas',
    'Globoflexia máx. 20 unidades'
  ]),
  pack('img/inf2.jpeg', 'Paquete convencional con infable', [
    'Inflable interior o exterior con o sin logistico',
    'Recreación dirigida (1 persona)',
    'Show de títeres',
    'Show de payasitos',
    'Magia semiprofesional',
    'Taller de pintucaritas',
    'Globoflexia máx. 20 unidades'
  ]),
  pack('img/inf3.jpeg', 'Chiky rumba con infable', [
    'Inflable interior o exterior con o sin logistico',
    'Recreación dirigida (1 persona)',
    '1 show central (baile hora loca - sin accesorios)',
    'Taller de pintucaritas',
    '2 luces audiorrítmicas',
    'Globoflexia máx. 20 unidades',
    'Cliente facilita el equipo de sonido'
  ]),
  pack('img/inf4.jpeg', 'Chiky TK Crazy con inflable', [
    'Inflable interior o exterior',
    'Recreación dirigida (1 persona)',
    'Logístico (1 persona)',
    '1 show central (títeres, payasos o magia semiprofesional)',
    'Taller de pintucaritas',
    '2 luces audiorrítmicas',
    '30 pitos espanta-suegra',
    'Lluvia de nieve',
    'Explosión de papel',
    'Cliente facilita el equipo de sonido'
  ]),
  pack('img/minitkj.jfif', 'Mini TK Crazy juvenil con inflable', [
    'Inflable interior o exterior',
    'Recreación dirigida (1 persona)',
    'Logístico (1 persona)',
    '1 show central de baile (45 minutos de baile dirigido)',
    'Reto Tik Tok',
    '2 luces audiorrítmicas',
    '30 pitos espanta-suegra',
    '30 manillas de neón',
    '30 gafas de neón',
    'Lluvia de nieve',
    'Explosión de papel',
    'Cámara de humo',
    'Cliente facilita el equipo de sonido'
  ]),
  pack('img/inf5.jpeg', 'Fiesta Fusión con inflable', [
    'Inflable interior o exterior',
    'Recreación dirigida (1 persona)',
    'Logístico (1 persona)',
    'Show de títeres',
    'Show de payasitos o magia semiprofesional',
    'Personaje animado',
    'Taller de pintucaritas',
    '2 luces audiorrítmicas',
    '30 pitos espanta-suegra',
    'Lluvia de nieve',
    'Explosión de papel',
    'Cliente facilita el equipo de sonido'
  ]),
  pack('img/fiestafusion.jfif', 'Mega Party con inflable', [
    'Inflable interior o exterior',
    'Recreación dirigida (2 personas)',
    'Logístico (1 persona)',
    'Show de títeres',
    'Show de payasitos',
    'Personaje animado',
    'Magia semiprofesional',
    'Taller de pintucaritas',
    '4 luces audiorrítmicas',
    '30 pitos espanta-suegra',
    'Lluvia de nieve',
    'Explosión de papel',
    'Sonido profesional'
  ]),
  pack('img/matchsencillo.jfif', 'Match sencillo con inflable', [
    'Inflable interior o exterior',
    'Recreación dirigida (1 persona)',
    'Conos',
    'Aros',
    'Costales',
    'Vasos locos',
    'Salta la cuerda',
    'Juegos, competencias y agilidad'
  ]),
  pack('img/match.jfif', 'Match con inflable', [
    'Inflable interior o exterior',
    'Recreación dirigida (1 persona)',
    'Logística (1 persona)',
    'Pista enjabonada',
    'Bombazo',
    'Encostalados',
    'Escaleras',
    'Obstáculo de conos',
    'Demarcación'
  ]),
  pack('img/inf6.jpeg', 'Feria de pueblo con inflable', [
     'Inflable interior o exterior',
    'Recreación dirigida (1 persona)',
    'Logístico (1 persona)',
    'Rana',
    'Twister',
    'Minitejo',
    'Demarcación',
    'Tiro al blanco',
    'Escalera gigante',
    'Pruebas múltiples'
  ]),
  pack('img/matchcrazy.jfif', 'Match Crazy con inflable', [
    'Inflable interior o exterior',
    'Recreación dirigida (1 persona)',
    'Logístico (1 persona)',
    'Tiro al blanco frisby',
    'Enchola aros',
    'Futbolito',
    'Jenga gigante',
    'Golfito',
    'Demarcación',
    'Escalera'
  ]),
]
  },

  'decoracion-inflable': {
    title: 'Decoración e inflable',
    description: 'Combos de decoración y recreación para celebraciones llenas de color y diversión.',
    videos: [
      'videos/videodecoinf.mp4'
    ],
items: [
  pack('img/deconinf1.jfif', 'Decoracion Crazy #1 con inflable', [
    '--- ADICIONAL ---',
    'Inflable de interior o exterior',
    '--- DECORACIÓN ---',
    'Arco orgánico en globos (cliente selecciona los tonos)',
    'Dos torres en globos de 1 metro',
    'Dos cortinas metalizadas',
    'Mantel plástico',
    'Número metalizado',
    'Menaje x 30 und (vasos, bandejas, cubiertos)',
    'Piñata tipo cuadrada',
    'Relleno mixto',
    '--- TIEMPOS ---',
    'Decorador: 2 a 3 horas de montaje',
    'Recreación: acompañamiento de 4 horas'
  ]),
  pack('img/decoinf2.png', 'Decoracion Crazy #2 con inflable', [
    '--- ADICIONAL ---',
    'Inflable de interior o exterior',
    '--- DECORACIÓN ---',
    'Arco orgánico en globos (cliente selecciona los tonos)',
    'Dos torres en globos de 1 metro',
    'Fondo redondo temático con backing (alquiler)',
    '3 cilindros temáticos (alquiler)',
    'Número con luces de 1 metro (alquiler)',
    'Nombre en icopor del festejado',
    'Alfombra (alquiler)',
    'Menaje x 30 und (vasos, bandejas, cubiertos)',
    'Piñata tipo (fuente, estrella, vestido)',
    'Relleno seleccionado o dulces',
    '--- TIEMPOS ---',
    'Decorador: 2 a 3 horas de montaje',
    'Recreación: acompañamiento de 4 horas'
  ]),
  pack('img/dec1.jpeg', 'Decoracion Crazy #3 con inflable', [
    '--- ADICIONAL ---',
    'Inflable de interior o exterior',
    '--- DECORACIÓN ---',
    'Arco orgánico completo en globos (cliente selecciona los tonos)',
    'Dos torres en globos de 1 metro',
    'Dos paneles con fondo temático (alquiler)',
    '3 cilindros temáticos (alquiler)',
    'Número con luces de 1 metro (alquiler)',
    'Nombre en icopor del festejado',
    'Happy Birthday LED',
    'Aplique en icopor por 1 metro',
    'Alfombra (alquiler)',
    'Menaje x 30 und (vasos, bandejas, cubiertos)',
    'Piñata tipo (fuente, estrella, vestido)',
    'Relleno seleccionado',
    'Relleno de dulces',
    '--- TIEMPOS ---',
    'Decorador: 2 a 3 horas de montaje',
    'Recreación: acompañamiento de 4 horas'
  ]),
  pack('img/dec2.jpeg', 'Decoracion Crazy #4 con inflable', [
    '--- ADICIONAL ---',
    'Inflable de interior o exterior',
    '--- DECORACIÓN ---',
    'Arco orgánico completo en globos (cliente selecciona los tonos)',
    'Dos torres en globos',
    'Tres paneles con fondo temático (alquiler)',
    '3 cilindros temáticos (alquiler)',
    'Número con luces de 1 metro (alquiler)',
    'Nombre en icopor del festejado',
    'Happy Birthday LED',
    'Escalera para sorpresas (alquiler)',
    'Aplique en icopor por 1 metro',
    'Alfombra (alquiler)',
    'Menaje x 30 und (vasos, bandejas, cubiertos)',
    'Piñata tipo (fuente, estrella, vestido)',
    'Relleno seleccionado',
    'Relleno de dulces',
    '--- TIEMPOS ---',
    'Decorador: 2 a 3 horas de montaje',
    'Recreación: acompañamiento de 4 horas'
  ])
]
  },

  'baby-shower': {
    title: 'Baby shower y revelación',
    description: 'Juegos, recreación y actividades para celebrar la llegada de tu bebé o revelar el género.',
    videos: [
      'videos/videobbshower.mp4'
    ],
items: [
  pack('img/bbimg3.jpeg', 'Baby shower / revelación de género', [
    'Recreación dirigida (1 persona)',
    'Show de payasos',
    'Apertura de regalos',
    'Vasos locos',
    'Juegos de cultura general',
    '2 teteros',
    'Compotas',
    '2 pañales pequeños',
    '1 pañal gigante',
    '2 bebés'
  ]),
  pack('img/bbimg2.jpeg', 'Baby shower #2', [
    'Recreación dirigida (1 persona)',
    'Logístico (1 persona)',
    'Show de payasos',
    'Apertura de regalos',
    'Vasos locos',
    'Juego de cascos',
    'Pimpones',
    'Juegos de cultura general',
    '2 teteros',
    'Competencia',
    '2 pañales pequeños',
    '1 pañal gigante',
    '2 bebés',
    '1 metro'
  ]),
  pack('img/bbimg1.jpeg', 'Revelación #1', [
    'Recreación dirigida (1 persona)',
    'Show de payasos',
    'Apertura de regalos',
    'Vasos locos',
    'Pimpones',
    'Juegos de cultura general',
    'Pansa embombada',
    'Competencias',
    '1 pañal gigante',
    'Árbol del género',
    'Bomba de género',
    '1 metro'
  ]),
  pack('img/baby1.jpeg', 'Revelación #2', [
    'Recreación dirigida (1 persona)',
    'Logístico (1 persona)',
    'Show de payasos',
    'Apertura de regalos',
    'Vasos locos',
    'Zapato a la mesa',
    'Juego de cascos',
    'Pimpones',
    'Juegos de cultura general',
    'Pansa embombada',
    'Competencias',
    '1 pañal gigante',
    'Árbol del género',
    'Bomba de género',
    '1 metro'
  ])
]
  },

  'todo-incluido': {
    title: 'Todo incluido',
    description: 'Combos completos con decoración, recreación e inflable; los paquetes superiores suman sonido y menú.',
    videos: [
      'videos/todoincluido.mp4'
    ],
items: [
  pack('img/imgtodo1.jpeg', 'Combo Crazy #1', [
    '--- DECORACIÓN ---',
    'Arco orgánico en globos (cliente selecciona los tonos)',
    'Dos torres en globos de 1 metro',
    'Dos cortinas metalizadas',
    'Mantel plástico',
    'Número metalizado',
    'Menaje x 30 und (vasos, bandejas, cubiertos)',
    'Piñata tipo cuadrada',
    'Relleno mixto',
    '--- RECREACIÓN ---',
    'Recreación dirigida (1 persona)',
    'Logístico (1 persona)',
    'Personaje animado',
    'Show de títeres',
    'Show de payasitos',
    'Magia semiprofesional',
    'Taller de pintucaritas',
    'Globoflexia máx. 20 unidades',
    '--- ADICIONAL ---',
    'Inflable de interior o exterior'
  ]),
  pack('img/imgtodo2.jpeg', 'Combo Crazy #2', [
    '--- DECORACIÓN ---',
    'Arco orgánico en globos (cliente selecciona los tonos)',
    'Dos torres en globos de 1 metro',
    'Fondo redondo temático con backing (alquiler)',
    '3 cilindros temáticos (alquiler)',
    'Número con luces de 1 metro (alquiler)',
    'Nombre en icopor del festejado',
    'Alfombra (alquiler)',
    'Menaje x 30 und (vasos, bandejas, cubiertos)',
    'Piñata tipo (fuente, estrella, vestido)',
    'Relleno seleccionado o dulces',
    '--- RECREACIÓN ---',
    'Recreación dirigida (1 persona)',
    'Logístico (1 persona)',
    'Show de títeres',
    'Show de payasitos o magia semiprofesional',
    'Personaje animado',
    'Taller de pintucaritas',
    '2 luces audiorrítmicas',
    '30 pitos espanta-suegra',
    'Lluvia de nieve',
    'Explosión de papel',
    'Música USB',
    'Sonido (12 pulgadas)',
    '--- ADICIONAL ---',
    'Inflable de interior o exterior'
  ]),
  pack('img/imgtodo3.jpeg', 'Combo Crazy #3', [
    '--- DECORACIÓN ---',
    'Arco orgánico completo en globos (cliente selecciona los tonos)',
    'Dos torres en globos de 1 metro',
    'Dos paneles con fondo temático (alquiler)',
    '3 cilindros temáticos (alquiler)',
    'Número con luces de 1 metro (alquiler)',
    'Nombre en icopor del festejado',
    'Happy Birthday LED',
    'Aplique en icopor por 1 metro',
    'Alfombra (alquiler)',
    'Menaje x 30 und (vasos, bandejas, cubiertos)',
    'Piñata tipo (fuente, estrella, vestido)',
    'Relleno seleccionado',
    'Relleno de dulces',
    '--- RECREACIÓN ---',
    'Recreación dirigida (2 personas)',
    'Logístico (1 persona)',
    'Show de títeres',
    'Show de payasitos',
    'Personaje animado',
    'Magia semiprofesional',
    'Taller de pintucaritas',
    '4 luces audiorrítmicas',
    '30 pitos espanta-suegra',
    'Lluvia de nieve',
    'Explosión de papel',
    'Sonido profesional',
    '--- MENÚ ---',
    '40 perros americanos (pan Bimbo, queso, papa cabello de ángel, jugo Hit)',
    'Carrito de perros + operario',
    '40 crispetas con máquina',
    '--- ADICIONAL ---',
    'Inflable de interior o exterior'
  ]),
  pack('img/imgtodo4.jpeg', 'Combo Crazy #4', [
    '--- DECORACIÓN ---',
    'Arco orgánico completo en globos (cliente selecciona los tonos)',
    'Dos torres en globos',
    'Tres paneles con fondo temático (alquiler)',
    '3 cilindros temáticos (alquiler)',
    'Número con luces de 1 metro (alquiler)',
    'Nombre en icopor del festejado',
    'Happy Birthday LED',
    'Escalera para sorpresas (alquiler)',
    'Aplique en icopor por 1 metro',
    'Alfombra (alquiler)',
    'Menaje x 30 und (vasos, bandejas, cubiertos)',
    'Piñata tipo (fuente, estrella, vestido)',
    'Relleno seleccionado',
    'Relleno de dulces',
    '--- RECREACIÓN ---',
    'Recreación dirigida (2 personas)',
    'Logístico (1 persona)',
    'Show de títeres',
    'Show de payasitos',
    'Personaje animado',
    'Magia semiprofesional',
    'Taller de pintucaritas',
    '4 luces audiorrítmicas',
    '30 pitos espanta-suegra',
    'Lluvia de nieve',
    'Explosión de papel',
    'Sonido profesional',
    '--- MENÚ ---',
    '40 perros americanos (pan Bimbo, queso, papa cabello de ángel, jugo Hit)',
    'Carrito de perros + operario',
    '40 crispetas con máquina',
    '40 gelatinas (vasos 5 oz)',
    '40 algodones de azúcar + máquina',
    '--- ADICIONAL ---',
    'Inflable de interior o exterior'
  ])
]
  },

  sonido: {
    title: 'Sonido profesional',
    description: 'Montajes de sonido, luces y animación para diferentes tamaños de evento.',
    videos: [
      'videos/videosonido.mp4'
    ],
    items: [
      pack('img/son1.jpeg', 'Mini TK', ['2 cabinas BTA 3 de 15 pulgadas, controladora, computador y 2 micrófonos', '4 luces, humo, papel, nieve, DJ y animador']),
      pack('img/son2.jfif', 'Mini TK Neón', ['2 cabinas BTA3, mezclador, computador, luces LED, láser y estrobo', 'Humo, papel, nieve, 100 accesorios neón, DJ y animador']),
      pack('img/son3.jfif', 'Mini TK Crazy', ['2 cabinas, controladora, computador, micrófonos, luces y cabezas móviles', 'Estructura malacate, humo, papel, nieve, DJ y animador']),
      pack('img/son4.png', 'Mini TK Crazy con panel', ['Mini TK Crazy más cabina DJ tipo panel con luces audiorrítmicas']),
      pack('img/son5.png', 'Montaje en Truss', ['2 cabinas, controladora, micrófonos, 6 luces y 4 cabezas móviles', 'Truss en H, panel DJ, humo, papel, nieve, DJ y animador']),
      pack('img/son6.jfif', 'Mini TK Premium', ['2 cabinas, 2 bajos, interface, micrófonos y estructura', 'Panel DJ, cabezas móviles, luces, DMX, Ventury, DJ y animador']),
      pack('img/son7.png', 'Mini TK Golden', ['4 cabinas, 4 bajos, micrófonos, truss, luces, DMX y Ventury', 'Humo, pantalla de 55 pulgadas, DJ y animador']),
      pack('img/son8.png', 'Sonido Array', ['6 cajas, 2 bajos, 2 monitores, luces y truss', 'Consola de 16 canales, humo, DJ y animador'])
    ]
  },

  menu: {
    title: "Menú",
    description: "Deliciosas opciones gastronómicas preparadas con ingredientes de alta calidad para complementar tu evento.",
    videos: [
      'videos/menu1.mp4'
    ],
    items: [
      pack('img/Menu.jpeg', 'Menú Infantil Completo', [
        'Estaciones de comida (perros, hamburguesas, crispetas o fresas con chocolate)',
        'Gaseosa o jugo individual',
        'Cumplimiento estricto de normas de higiene'
      ])
    ]
  },

  talleres: {
    title: "Talleres",
    description: "Nuestros talleres recreativos y creativos están diseñados para fomentar la imaginación de los niños mientras se divierten aprendiendo.",
    videos: [
      'videos/videotaller.mp4'
    ],
    items: [
      pack('img/ceramica.png', 'Pintura en Cerámica', [
        '20 figuras de cerámica de 12 cm',
        'Pinceles y témperas de colores variados',
        '5 mesas y 20 sillas incluidas',
        'Capacidad para 20 niños por ronda'
      ]),
      pack('img/cupcakes.jpg', 'Decoración de Cupcakes', [
        '20 cupcakes tradicionales frescos',
        'Cobertura dulce, mangas y grageas decorativas',
        '5 mesas y 20 sillas incluidas',
        'Capacidad para 20 niños por ronda'
      ]),
      pack('img/pintura.png', 'Pintura en Caballetes', [
        '40 dibujos temáticos en láminas',
        'Pinceles, témperas y paletas',
        '10 caballetes dobles de madera y 20 sillas',
        'Capacidad para 20 niños por ronda'
      ]),
      pack('img/babybgym.jfif', 'Taller Baby Gym', [
        'Piscina de pelotas, rampa, túnel, escalera y rodadero',
        'Muñecos inflables, piso decorativo y dados gigantes',
        'Actividad con globoflexia y pintucaritas',
        'Acompañamiento por recreadores especializados'
      ])
    ]
  },

  personajes: {
    title: "Personajes",
    description: "Lleva la magia de los personajes animados favoritos a tu celebración con presentaciones interactivas y show de fotos.",
    videos: [
      'videos/videopersonajes.mp4'
    ],
    items: [
      // Superhéroes y Cómics
      pack('img/personajes/abeja.png', 'Abeja', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/Anna-frozen.png', 'Anna (Frozen)', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/ansiedad.png', 'Ansiedad (Intensamente)', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/Avengers.png', 'Avengers', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/batman.png', 'Batman', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/bicho.png', 'Labubu', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/bluey-2.png', 'Bingo', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/bluey.png', 'Bluey', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/Bowser.png', 'Bowser (Mario)', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/capibara.png', 'Capibara', ['Acompañamiento, show de fotos y animación temática']),

      // Princesas y Cuentos
      pack('img/personajes/chica-kpop.png', 'Chica K-pop', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/Dinosaurio.png', 'Dinosaurio', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/doctora-juguetes.png', 'Doctora Juguetes', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/duende.png', 'Duende', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/elsa.png', 'Elsa (Frozen)', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/encanto.png', 'Encanto', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/furia.png', 'Furia (Intensamente)', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/galletadegengibre.png', 'Galleta', ['Acompañamiento, show de fotos y animación temática']),

      pack('img/personajes/Gallina.png', 'Gallina pintadita', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/gallina2.png', 'Gallina pintadita', ['Acompañamiento, show de fotos y animación temática']),

      pack('img/personajes/gata.png', 'Everest', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/goku.png', 'Goku', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/granja.png', 'Bartolito y Zenon', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/grinch.png', 'Grinch', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/ironman.png', 'Iron Man', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/jake-piratas.png', 'Jake Pirata', ['Acompañamiento, show de fotos y animación temática']),


      pack('img/personajes/leon.png', 'Leon', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/los-increibles.png', 'Los increibles', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/maribel.png', 'Maribel (Encanto)', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/mario.png', 'Mario', ['Acompañamiento, show de fotos y animación temática']),

      pack('img/personajes/masha-masha-y-el-oso.png', 'Masha y el Oso', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/merlina.png', 'Merlina', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/mickeymause.png', 'Mickey Mouse', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/minny-mouse.png', 'Minny Mouse', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/munecas-doll.png', 'Muñecas (Doll)', ['Acompañamiento, show de fotos y animación temática']),


      pack('img/personajes/Navidad.png', 'Navidad', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/oso-macha-y-el-oso.png', 'Oso (Masha y el Oso)', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/papanoel.png', 'Papá Noel', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/PawPatrol.png', 'Paw Patrol', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/peppa.png', 'Peppa Pig', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/pikachu.png', 'Pikachu', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/plimplim.png', 'PlimPlim', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/roblox.png', 'Avatar Roblox', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/rummy.png', 'Rummy ', ['Acompañamiento, show de fotos y animación temática']),

      // Películas y Tendencias
      pack('img/personajes/sirenita.png', 'Sirenita', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/sonic.png', 'Sonic', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/Spiderman-2.png', 'Spider-Man 2', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/Spiderman.png', 'Spider-Man', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/stichs.png', 'Stich', ['Acompañamiento, show de fotos y animación temática']),


      pack('img/personajes/superheroes.png', 'CatBoy, Ululette y Gekko', ['Acompañamiento, show de fotos y animación temática']),


      pack('img/personajes/ToyStory.png', 'Toy Story', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/troll.png', 'Troll', ['Acompañamiento, show de fotos y animación temática']),
      pack('img/personajes/VacaLola.png', 'Vaca Lola', ['Acompañamiento, show de fotos y animación temática']),

      pack('img/personajes/vampira.png', 'Vampirina', ['Acompañamiento, show de fotos y animación temática'])
    ]
  }
};

// Fallback por si el servicio solicitado no existe en la BD
const fallback = {
  title: serviceId.replace(/-/g, ' '),
  description: 'Próximamente encontrarás aquí toda la información y las fotografías de este servicio.',
  videos: ['videos/video1.mp4'],
  items: []
};

const service = serviceData[serviceId] || fallback;
const title = service.title.charAt(0).toUpperCase() + service.title.slice(1);

// Actualizar Metadatos y Encabezados
document.title = `${title} | Crazy Party Eventos`;
const serviceTitleEl = document.querySelector('#service-title');
const serviceDescEl = document.querySelector('#service-description');
const catalogTitleEl = document.querySelector('#catalog-title');
const yearEl = document.querySelector('#year');

if (serviceTitleEl) serviceTitleEl.textContent = title;
if (serviceDescEl) serviceDescEl.textContent = service.description;
if (catalogTitleEl) catalogTitleEl.textContent = serviceId === 'inflables' ? 'Nuestros inflables' : `Galería de ${title}`;
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Enlaces de WhatsApp con mensaje personalizado
const whatsappMessage = encodeURIComponent(`Hola, quiero cotizar el servicio de ${title}.`);
const whatsappUrl = `https://wa.me/573115246669?text=${whatsappMessage}`;

const heroWhatsapp = document.querySelector('#service-whatsapp');
const ctaWhatsapp = document.querySelector('#cta-whatsapp');

if (heroWhatsapp) heroWhatsapp.href = whatsappUrl;
if (ctaWhatsapp) ctaWhatsapp.href = whatsappUrl;

// Función para construir la lista de viñetas
const buildDetailList = (item) => {
  const details = [
    ...(Array.isArray(item.dimensions) ? item.dimensions : []),
    ...(Array.isArray(item.includes) ? item.includes : []),
    ...(Array.isArray(item.details) ? item.details : [])
  ];

  if (!details.length) return '';
  return `<ul class="catalog-details">${details.map((detail) => `<li>${detail}</li>`).join('')}</ul>`;
};

// Renderizar la Galería de Tarjetas
const catalog = document.querySelector('#catalog-grid');

if (catalog) {
  catalog.innerHTML = service.items.length ? service.items.map((item) => {
    // Si tiene imagen asignada se muestra de fondo, de lo contrario un degradado corporativo
    const bgStyle = item.image
      ? `style="background-image: url('${item.image}'); background-size: cover; background-position: center;"`
      : `style="background: linear-gradient(135deg, #e040fb 0%, #00bcd4 100%);"`;

    return `<article class="catalog-card">
      <div class="catalog-photo" ${bgStyle}></div>
      <div class="catalog-info">
        <h3>${item.name}</h3>
        ${buildDetailList(item)}
        <a href="https://wa.me/573115246669?text=${encodeURIComponent(`Hola, quiero cotizar ${item.name}.`)}" target="_blank" rel="noopener">Consultar disponibilidad →</a>
      </div>
    </article>`;
  }).join('') : `<p class="catalog-empty">Estamos preparando esta galería. Escríbenos para conocer las opciones disponibles.</p>`;
}

/* ==========================================================================
   LÓGICA PARA REPRODUCCIÓN Y CARRUSEL CONTINUO DE VIDEOS EN EL HERO
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const videoCarouselBox = document.querySelector("#video-carousel");
  const dotsContainer = document.querySelector("#carousel-dots");

  const currentVideos = (service.videos && service.videos.length > 0)
    ? service.videos
    : ['videos/video1.mp4'];

  // Inyección de etiquetas <video>
  if (videoCarouselBox) {
    videoCarouselBox.innerHTML = currentVideos.map((src, index) => `
      <video class="hero-video ${index === 0 ? 'active' : ''}" autoplay muted playsinline preload="auto">
        <source src="${src}" type="video/mp4">
      </video>
    `).join('');
  }

  // Inyección de Puntos/Indicadores
  if (dotsContainer) {
    dotsContainer.innerHTML = currentVideos.map((_, index) => `
      <span class="dot ${index === 0 ? 'active' : ''}"></span>
    `).join('');
  }

  // Control de transiciones
  const videos = document.querySelectorAll(".hero-video");
  const dots = document.querySelectorAll("#carousel-dots .dot");
  let currentIndex = 0;

  if (videos.length === 0) return;

  function playVideo(index) {
    videos.forEach((video, i) => {
      if (i === index) {
        video.currentTime = 0;
        video.play().catch(err => console.log("Autoplay diferido/bloqueado por navegador:", err));
        video.classList.add("active");
      } else {
        video.classList.remove("active");
        video.pause();
      }
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  playVideo(0);

  // Evento cuando termina cada video -> Pasa al siguiente automáticamente
  videos.forEach((video, index) => {
    video.addEventListener("ended", () => {
      currentIndex = (index + 1) % videos.length;
      playVideo(currentIndex);
    });
  });

  // Cambio manual con los puntos
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      if (index < videos.length) {
        currentIndex = index;
        playVideo(currentIndex);
      }
    });
  });
});