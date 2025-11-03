import { basicDemoData } from '@/components/sections/basic/data/basic-demo-data'
import { quinceMainData } from '../../data/main-data'

// Datos demo para el paquete premium de quinceañera
export const premiumDemoData = {
  // Heredar todos los datos del básico
  ...basicDemoData,
  
  // Sobreescribir información demo con datos premium
  demo: {
    badge: "🌟 DEMO - Paquete Premium ($499)",
    description: "¡La más solicitada! - Incluye música, galería y padrinos",
    features: [
      ...basicDemoData.demo.features,
      "Música personalizada",
      "Galería de fotos", 
      "Lista de padrinos"
    ],
    cta: {
      title: "¿Te encanta el paquete Premium?",
      subtitle: "El más solicitado - Incluye TODAS las características esenciales + 3 premium exclusivas",
      buttonText: "Contratar Paquete Premium - $499",
      link: "/#pricing"
    }
  },
  
  // Configuración de música premium
  music: {
    title: "Música Especial",
    track: quinceMainData.audio.src, // Usar la pista de audio del main data
    autoplay: false, // Por UX, mejor no autoplay automático
    loop: true,
    description: "Música personalizada para tu evento"
  },
  
  // Información completa de invitación (característica premium)
  invitation: {
    title: "INVITACIÓN ESPECIAL",
    message: "Acompáñanos a celebrar",
    subtitle: "Mis XV años",
    blessing: "con la bendición de Dios y mis padres:",
    celebrant: basicDemoData.event.celebrant,
    parents: basicDemoData.event.parents,
    decorativeMessage: "Te esperamos en este día tan especial"
  },
  
  // Lista de padrinos (característica premium NUEVA)
  padrinos: [
    { 
      role: "Madrinas de Honor", 
      names: [quinceMainData.event.godparents.godfather, quinceMainData.event.godparents.godmother],
      description: "Quienes me guían con su ejemplo"
    },
    { 
      role: "Padrinos del Vestido", 
      names: ["Cudberto Pérez Hernández", "Consuelo Plata"],
      description: "Por hacer realidad mi vestido soñado"
    },
    { 
      role: "Padrinos del Ramo", 
      names: ["Erica Hernández", "Nayeli Dubai"],
      description: "Por las flores más hermosas"
    },
    { 
      role: "Padrinos de la Música", 
      names: ["Patricia Victoria San Juan", "Sandra Luz García Pérez"],
      description: "Por llenar de melodía mi celebración"
    },
    { 
      role: "Padrinos de las Flores", 
      names: ["Domingo Pérez Hernández", "Maria García"],
      description: "Por decorar este día especial"
    }
  ],
  
  // Galería de fotos (característica premium)
  gallery: {
    title: "Galería de Recuerdos",
    subtitle: "Momentos especiales de Luz",
    description: "Una colección de mis fotos favoritas preparándome para este gran día",
    images: [
      { 
        src: "/images/luz02.jpg", 
        alt: "Luz - Sesión fotográfica 2", 
        caption: "Con mi vestido soñado",
        category: "vestido"
      },
      { 
        src: "/images/luz03.jpg", 
        alt: "Luz - Sesión fotográfica 3", 
        caption: "Momento de alegría",
        category: "alegria"
      },
      { 
        src: "/images/luz04.jpg", 
        alt: "Luz - Sesión fotográfica 4", 
        caption: "Lista para celebrar",
        category: "celebracion"
      },
      {
        src: "/images/luz05.jpg", 
        alt: "Luz - Sesión fotográfica 5", 
        caption: "Un día inolvidable",
        category: "inolvidable"
      },
      {
        src: "/images/luz06.jpg", 
        alt: "Luz - Sesión fotográfica 6", 
        caption: "Con mis seres queridos",
        category: "familia"
      }
    ]
  },
  
  // Mensaje final personalizado (característica premium)
  thankYou: {
    title: "¡Gracias por ser parte de uno de los mejores días de mi vida!",
    personalMessage: "Cada uno de ustedes tiene un lugar especial en mi corazón, y no puedo imaginar esta celebración sin su presencia.",
    message: "Con todo mi cariño:",
    signature: "Luz",
    footer: {
      year: "2024",
      name: "Luz XV",
      company: "BY INVITACIONES WEB MX",
      rights: "ALL RIGHTS RESERVED",
      cta: {
        question: "¿TIENES UN EVENTO EN PUERTA?",
        action: "DISEÑA CON NOSOTROS TU INVITACIÓN WEB DIGITAL.",
        linkText: "AQUÍ",
        link: "https://www.invitacionesweb.lat/"
      }
    }
  },
  
  // Configuración premium adicional
  premium: {
    hasMusic: true,
    hasGallery: true,
    hasPadrinos: true,
    hasFullInvitation: true,
    hasPersonalizedThankYou: true,
    badge: "PREMIUM",
    color: "from-purple-600 to-pink-600"
  }
}

export type PremiumDemoData = typeof premiumDemoData 