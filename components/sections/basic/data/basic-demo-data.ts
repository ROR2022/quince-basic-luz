import { quinceMainData } from '../../data/main-data'

// Datos demo para el paquete básico de quinceañera

export const basicDemoData = {
  hero: {
    name: quinceMainData.hero.name,
    subtitle: "¡Mis XV años!",
    backgroundImage: quinceMainData.hero.backgroundImage,
  },
  
  event: {
    celebrant: quinceMainData.event.celebrant,
    parents: {
      father: quinceMainData.event.parents.father,
      mother: quinceMainData.event.parents.mother
    },
    date: {
      full: quinceMainData.event.date.full,
      day: quinceMainData.event.date.day,
      date: quinceMainData.event.date.date,
    },
    ceremony: {
      time: "15:00 hrs.",
      venue: "Parroquia San José Obrero",
      address: "Av. Revolución 123, Centro, 64000 Monterrey, N.L.",
      type: "Misa de Acción de Gracias"
    },
    party: {
      time: quinceMainData.event.party.time,
      venue: quinceMainData.event.party.venue,
      address: quinceMainData.event.party.address,
      type: "Recepción"
    },
    dressCode: "Formal",
    restrictions: "No Niños"
  },

  countdown: {
    targetDate: "December 28, 2025 18:00:00",
    backgroundImage: "/images/countdown-bg.jpg"
  },

  attendance: {
    title: "CONFIRMACIÓN DE ASISTENCIA",
    message: "Respetuosamente <No Niños>",
    subtitle: "Espero que no sea impedimento para que ustedes puedan asistir a mi fiesta.",
    fields: {
      name: "Nombre completo",
      response: "¿Podrás acompañarme?",
      companions: "Nombre(s) de acompañante(s)",
      phone: "Número de celular",
      responseOptions: {
        yes: "¡Claro, ahí estaré!",
        no: "Lo siento, no podré asistir."
      }
    }
  },

  gifts: {
    title: "OPCIONES DE REGALO",
    message: "Mi mejor regalo es compartir contigo este gran día, si deseas obsequiarme algo, puedo sugerir las siguientes opciones:",
    options: [
      {
        icon: "💳",
        title: "Transferencia Bancaria",
        description: "Spin by OXXO",
        details: "Cuenta: 4217 4700 8239 6769\nCLABE: 8239728979000005907686\nA nombre de: Sandra Luz García Pérez"
      },
      {
        icon: "🎁",
        title: "Regalo Sorpresa",
        description: "Un detalle especial",
        details: "El regalo que tú elijas será bien recibido"
      },
      {
        icon: "💰",
        title: "Sobre con efectivo",
        description: "El día del evento",
        details: "Puedes entregarlo en la recepción"
      }
    ]
  },

  demo: {
    badge: "🎭 DEMO - Paquete Básico ($299)",
    description: "Esta es una demostración del paquete básico",
    features: [
      "Cuenta Regresiva",
      "Cuándo y dónde", 
      "Confirmación de asistencia",
      "Opciones de regalo",
      "Código de vestimenta"
    ],
    cta: {
      title: "¿Te gusta este paquete?",
      subtitle: "Incluye todas las características esenciales para tu evento",
      buttonText: "Contratar Paquete Básico - $299",
      link: "/#pricing"
    }
  }
}

export type BasicDemoData = typeof basicDemoData 