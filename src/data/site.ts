export const contact = {
  phoneDisplay: '+252 63 448 1737',
  phoneHref: 'tel:+252634481737',
  whatsapp: 'https://wa.me/252634481737',
  facebook: 'https://www.facebook.com/104937844313558',
  city: 'Hargeisa, Somaliland',
}

export const photos = {
  hero: 'https://images.unsplash.com/photo-1769971361656-cbf2facb0f8b?auto=format&fit=crop&w=2200&q=88',
  print: 'https://images.unsplash.com/photo-1596040078821-9b5f50e71ea5?auto=format&fit=crop&w=1200&q=85',
  led: 'https://images.unsplash.com/photo-1576990049702-8418081b420e?auto=format&fit=crop&w=1400&q=85',
  counter: 'https://images.unsplash.com/photo-1564419965579-5da68ffdf3af?auto=format&fit=crop&w=1200&q=85',
  signage: 'https://images.unsplash.com/photo-1791990035847-09cadef92e25?auto=format&fit=crop&w=1400&q=85',
  building: 'https://images.unsplash.com/photo-1593427995298-cad6731716d8?auto=format&fit=crop&w=1400&q=85',
  stage: 'https://images.unsplash.com/photo-1607872863060-fb85bd7229c4?auto=format&fit=crop&w=1400&q=85',
  store: 'https://images.unsplash.com/photo-1490122560550-d5ce9f8211e8?auto=format&fit=crop&w=1400&q=85',
  event: 'https://images.unsplash.com/photo-1730134322176-862f1cf9bc9f?auto=format&fit=crop&w=1400&q=85',
}

export const services = [
  { n: '01', title: 'LED Screens & Digital Displays', image: photos.led, featured: true, text: 'Indoor and outdoor LED screens, video walls, rentals and permanent installations built for visibility.' },
  { n: '02', title: 'Branding', image: photos.store, text: 'Brand applications, corporate environments, exhibitions and visual communication with a consistent point of view.' },
  { n: '03', title: 'Events', image: photos.event, text: 'Corporate events, conferences, stage setups, product launches and complete event production.' },
]

export const moreServices = [
  { id: 'digital-printing', n: '01', title: 'Digital Printing', text: 'Large-format graphics, banners, vinyl, stickers and promotional materials.' },
  { id: 'signage', n: '02', title: '3D Signage & Building Branding', text: 'Illuminated lettering, facade systems, storefront signs and architectural branding.' },
  { id: 'counters', n: '03', title: 'Digital Counter Tables', text: 'Custom reception counters and integrated branded display solutions.' },
]

export const projects = [
  {
    title: 'Curved LED Wall',
    category: 'LED Displays',
    image: '/products/curved-led.jpg?v=5',
    gallery: ['/products/curved-led.jpg?v=5'],
    className: 'project project--wide',
    text: 'A curved LED wall that wraps the room, large enough to read from across the floor.',
  },
  {
    title: 'LED Podium',
    category: 'LED Displays',
    image: '/products/podium.png?v=9',
    gallery: ['/products/podium.png?v=9'],
    className: 'project project--tall',
    text: 'The lectern is the screen. A curved face, a reading top, and a base that rolls into place.',
  },
  {
    title: 'Stand Banners',
    category: 'Branding',
    image: '/products/banner-front.png?v=6',
    gallery: ['/products/banner-front.png?v=6', '/products/banner-back.png?v=6'],
    className: 'project project--tall',
    text: 'Two campaign faces on one stand, built to carry a brand across a room.',
  },
  {
    title: 'Stand Lightboxes',
    category: 'Branding',
    image: '/products/lightbox-frame.png?v=8',
    gallery: ['/products/lightbox-frame.png?v=8', '/products/lightbox-floor.png?v=8', '/products/lightbox-stands.png?v=8'],
    className: 'project',
    text: 'Lit frames, floor stands, and pole stands. Still graphics with a bright edge.',
  },
  {
    title: 'LED Runway',
    category: 'Events',
    image: '/products/runway.jpg?v=7',
    gallery: ['/products/runway.jpg?v=7'],
    className: 'project project--wide',
    text: 'A modular LED floor. Widen it for a reception, lengthen it into a runway, or raise it into a step.',
  },
]

export type Project = (typeof projects)[number]

export const projectFilters = ['All Projects', 'LED Displays', 'Branding', 'Events']

export const heroWheel = [
  photos.stage,
  'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=85',
  photos.event,
  '/products/runway.jpg?v=7',
  'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1200&q=85',
  photos.led,
  '/products/curved-led.jpg?v=5',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85',
]

export type FeaturedProject = {
  slug: string
  tag: string
  title: string
  image: string
  text: string
  industry: string
  year: string
  objective: string
  results: string
  gallery: string[]
}

export const featuredProjects: FeaturedProject[] = [
  {
    slug: 'hargeisa-night',
    tag: 'Corporate event',
    title: 'Hargeisa Night',
    image: photos.stage,
    text: 'The brief called for a live evening in Hargeisa that felt cinematic — stage, screens and full production working as one moment.',
    industry: 'Events',
    year: '2025',
    objective: 'To deliver a high-impact night that balanced technical precision with atmosphere — screens, lighting and stage craft timed to the programme so guests felt every cue.',
    results: 'A full-capacity house, a clear brand presence across the room, and a production rhythm that stayed sharp from doors open to final cue.',
    gallery: [photos.stage, photos.event, photos.led],
  },
  {
    slug: 'reception-floor',
    tag: 'Brand activation',
    title: 'Reception Floor',
    image: '/products/runway.jpg?v=7',
    text: 'A modular LED floor that turns receptions, runways and raised stages into a moving brand surface.',
    industry: 'Experiential',
    year: '2025',
    objective: 'To create a walkable media plane that carries brand motion underfoot without interrupting guest flow or safety.',
    results: 'A flexible floor system that reconfigured across spaces, giving the activation a continuous visual identity from entrance to stage.',
    gallery: ['/products/runway.jpg?v=7', photos.led, photos.stage],
  },
  {
    slug: 'curved-led-wall',
    tag: 'Exhibition',
    title: 'Curved LED Wall',
    image: '/products/curved-led.jpg?v=5',
    text: 'A curved LED wall that wraps the room and carries the brand across the floor line.',
    industry: 'Exhibitions',
    year: '2024',
    objective: 'To wrap the exhibition volume with continuous LED so messaging, motion and architecture read as one surface.',
    results: 'A seamless curved wall that held attention from distance and close-up, becoming the spatial signature of the stand.',
    gallery: ['/products/curved-led.jpg?v=5', photos.led, photos.building],
  },
  {
    slug: 'stand-banners',
    tag: 'Campaign display',
    title: 'Stand Banners',
    image: photos.event,
    text: 'Freestanding campaign faces that roll from lobby to hall with a consistent brand line.',
    industry: 'Branding',
    year: '2024',
    objective: 'To give the campaign portable, high-visibility faces that stay sharp from reception through exhibition floors.',
    results: 'A set of freestanding banners that moved with the programme and kept the brand readable in every zone.',
    gallery: [photos.event, photos.store, photos.signage],
  },
  {
    slug: 'city-launch',
    tag: 'Live show',
    title: 'City Launch',
    image: photos.building,
    text: 'Opening moments, product reveals and large-audience entertainment shaped as one city-scale night.',
    industry: 'Entertainment',
    year: '2025',
    objective: 'To stage a public launch with clear narrative beats — arrival, reveal and celebration — supported by screens and live production.',
    results: 'A memorable city moment with strong visual recall and a production that stayed composed under a large audience.',
    gallery: [photos.building, photos.stage, photos.event],
  },
]

export function featuredProjectBySlug(slug: string) {
  return featuredProjects.find((project) => project.slug === slug)
}

export function nextFeaturedProject(slug: string) {
  const index = featuredProjects.findIndex((project) => project.slug === slug)
  if (index < 0) return featuredProjects[0]
  return featuredProjects[(index + 1) % featuredProjects.length]
}

export const eventTicker = [
  'Exhibitions & Conferences',
  'Brand Activations',
  'Festivals & Public Events',
  'Brand & Product Launches',
  'Gala Dinners & Awards Nights',
  'Opening & Closing Ceremonies',
  'Corporate & Government Events',
  'Entertainment & Live Shows',
  'Pavilions & Temporary Structures',
  'Roadshows & Multi-City Events',
]

export const eventServices = [
  {
    n: '01',
    icon: 'squares',
    title: 'Exhibitions, Conferences, Roadshows, Pavilions',
    text: 'Trade shows, forums, summits and large-scale conferences — full design, build and on-ground delivery.',
  },
  {
    n: '02',
    icon: 'triangles',
    title: 'Brand Activations & Experiential Campaigns',
    text: 'Immersive brand experiences, pop-ups, roadshows and interactive installations.',
  },
  {
    n: '03',
    icon: 'bolt',
    title: 'Festivals & Public Events',
    text: 'Cultural, entertainment, tourism and city-wide festivals of all scales.',
  },
  {
    n: '04',
    icon: 'steps',
    title: 'Product Launches & Roadshows',
    text: 'High-impact launches for brands, destinations and major initiatives.',
  },
  {
    n: '05',
    icon: 'circle',
    title: 'Gala Dinners & Awards Nights',
    text: 'Formal galas, award ceremonies and high-profile recognition events.',
  },
  {
    n: '06',
    icon: 'pinwheel',
    title: 'Opening & Closing Ceremonies',
    text: 'Major ceremonial productions for government, corporate and public entities.',
  },
  {
    n: '07',
    icon: 'facing',
    title: 'Corporate & Government Events',
    text: 'Executive gatherings, VIP protocol events and official announcements.',
  },
  {
    n: '08',
    icon: 'pedestal',
    title: 'Entertainment & Live Shows',
    text: 'Concerts, performances, fan zones and large-audience entertainment.',
  },
] as const

export const quoteServices = [
  'Event Management',
  'Exhibitions & Conferences',
  'Brand Activations',
  'Gala Dinners & Awards',
  'Product Launches',
  'Curved LED Screen',
  'LED Podium',
  'LED Runway',
  'LED Counter Table',
  'LED Digital Stand Banners',
  'Stand Lightboxes',
]

export const eventPhases = [
  { n: '01', title: 'Plan', image: photos.event, text: 'Strategy, audience flow and production planning.' },
  { n: '02', title: 'Build', image: photos.stage, text: 'Stage, screens, lighting and branded environments.' },
  { n: '03', title: 'Deliver', image: photos.led, text: 'Live coordination and confident on-site execution.' },
]

export const processSteps = [
  ['01', 'Discover & Design', 'We understand your vision, audience, venue and the moment you want to create.'],
  ['02', 'Produce & Create', 'We plan, produce, fabricate and assemble every element with close attention to detail.'],
  ['03', 'Deliver & Install', 'We coordinate production, delivery, installation and live execution until the last moment.'],
]

export const reasons = [
  'Event management led by timing, collaboration and precision',
  'Creative, technical and operational delivery under one roof',
  'LED screens, branding and live production in Hargeisa',
  'Support from first concept through the final cue',
]
