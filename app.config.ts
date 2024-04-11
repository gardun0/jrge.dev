// https://github.com/nuxt-themes/alpine/blob/main/nuxt.schema.ts
export default defineAppConfig({
  alpine: {
    title: 'Jorge Garduño',
    description: 'Software Architect, Full Stack Developer, and Tech Enthusiast.',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: false
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'left', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Contactame en'
    },
    socials: {
      twitter: 'nuxtlabs',
      instagram: 'atinuxt',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/damnyorch'
      }
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
