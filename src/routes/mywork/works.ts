export type SkillType =
  | 'node'
  | 'react'
  | 'mongo'
  | 'kubernetes'
  | 'aws'
  | 'js'
  | 'flutter'
  | 'graphql'
  | 'svelte'
  | 'docker'
  | 'postgres'

export interface WorkItem {
  work: string
  title: string
  description: {
    es: string
    en: string
  }
  url?: string
  skills: SkillType[]
}

const works: WorkItem[] = [
  {
    work: 'vanta',
    title: 'Vanta',
    description: {
      es: 'Vanta es un unicornio estadounidense que se encarga de automatizar tests de seguridad. En mi rol como ingeniero de software trabajo junto al equipo de integraciones y nos dedicamos a conectar a Vanta con diferentes servicios externos. Generamos código altamente escalable.',
      en: 'Vanta is an unicorn from the states that helps companies to automate security compliance tests. In my role as a software engineer I work with the integrations team to connect Vanta with diferent external vendors, we generate highly reliable and scalable code.'
    },
    url: 'https://vanta.com',
    skills: ['react', 'graphql', 'node', 'mongo']
  },
  {
    work: 'naranjax',
    title: 'Naranja X',
    description: {
      es: 'NaranjaX es una fintech de alto crecimiento global. En mi rol de ingeniero en software yo trabajaba en el area de costumer success, mejorando la experiencia de usuarios seleccionados. Toda la arquitectura era serverless y estaba servida en AWS.',
      en: 'NaranjaX is a fintech of rapid growth. In my role as a software engineer I worked in the Costumer Success area, working to improve the experience of selected costumers. The whole architecture was serverless and deployed in AWS.'
    },
    url: 'https://naranjax.com',
    skills: ['aws', 'node']
  },
  {
    work: 'buildware',
    title: 'buildware',
    description: {
      es: 'Buildware es un emprendimiento del que fui parte como co-fundador. Esta encarado al IoT y trabaja con clientes como la universidad de Cordoba. Ayude a crear toda la arquitectura y también trabajé como diseñador UX/UI, hice el logo y el branding. La arquitectura estaba hecha con microservicios con GraphQL, MongoDB, MQTT y Svelte.',
      en: "Buildware is a side-project in which I was a co-founder. It's main focus is IoT and it works with clients such as the university of Cordoba in Argentina. I helped to build the whole architecture and I also worked as a UX/UI designer created the logo and the whole branding. It has a micro-services architecture and it uses GraphQL, MongoDB, MQTT and Svelte."
    },
    url: 'https://buildware.xyz',
    skills: ['node', 'graphql', 'svelte', 'docker']
  },
  {
    work: 'ineco',
    title: 'Ineco',
    description: {
      es: 'Ineco es una institución de salud mental. Empecé trabajando como software developer semi-senior y luego fui tech-lead del equipo de desarrollo. Tenía contacto directo con el CEO y los jefes de cada departamente, y convertía sus requerimientos en tickets para el equipo. Trabajamos en su sistema interno y en su aplicación móbil. Teníamos una arquitectura de micro-servicios deployada en kubernetes.',
      en: "Ineco it's a mental health institution. I started working there as a semi-senior software developer and then became tech lead of the software developing team. I talked directly with the CEO and the head of every department, we had a highly reliable and scalable architecture deployed in kubernetes. We also worked on their mobile application developed in flutter."
    },
    url: 'https://ineco.com.ar',
    skills: ['node', 'mongo', 'react', 'flutter', 'kubernetes']
  },
  {
    work: 'jucaran',
    title: 'Jucaran',
    description: {
      es: 'Este portfolio esta hecho con svelte-kit y NodeJS. Bastante lindo, no?',
      en: 'This portfolio is made with Svelte-kit and NodeJS, pretty cute right?'
    },
    skills: ['node', 'svelte']
  },
  {
    work: 'pranapp',
    title: 'Pranapp',
    description: {
      es: 'Proyecto personal que permite a los usuarios hacer ejercicios de respiración. Esta hecho con Flutter y deployado en Firebase. También permite a los usuarios crear sus propias sesiones de respiración.',
      en: "Personal project that allows the users to do guided breathing exercises. It's made with Flutter and deploy in Firebase. It allows the user to create their own breathing sessions.",
    },
    url: 'https://pranapp.jucaran.ar',
    skills: ['flutter']
  }
]

export default works
