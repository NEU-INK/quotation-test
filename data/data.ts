import FacebookIcon from '../public/icons/walttec/socializeIcon-2.png'
import LocationIcon from '../public/images/location-icon.png'
import MailIcon from '../public/images/mail-icon.png'
import TestimonialLeft from '../public/images/testimonial-left.svg'
import TestimonialRight from '../public/images/testimonial-right.svg'
import LinkdeinIcon from '../public/images/linkdein-icon.png'
import likes from '../public/images/handsClapping.png'
import comments from '../public/images/chatTeardropDots.png'
import scrollToTop from '../public/images/scrollToTop.png'
import InstagramIcon from '../public/images/instagram-icon.png'
// import { FEATURES } from '../data/features'

/*********          Header Menu Data            ********** */
/*export const pages = [
  {
    path: '/',
    text: 'Home',
  },
  {
    path: '/about-us-learn-more',
    text: 'About Us',

  },
  {
    path: '/about-us-learn-more',
    text: 'PRODUCTS',
  },
  {
    path: '/about-us-learn-more',
    text: 'SUSTAINABILITY',
  },
  // {
  //   path: '/idea-product-page#idea',
  //   text: 'Ideas',
  // },
  // {
  //   path: '/idea-product-page#credibility',
  //
  //   text: 'Credibility',
  // },
  // {
  //   path: 'https://www.neu-ink.com/pages/custom',
  //   text: 'Neu Ink',
  // },

  // {
  //   path: '/about-us',
  //   text: 'About Us',
  // },
  // {
  //   path: '/services',
  //   text: 'Services',
  // },
  // {
  //   path: '/contact-us',
  //   text: 'Contact Us',
  // },
  // {
  //   path: '/team',
  //   text: 'Meet the team',
  // },
]*/
export const pages = [
  {
    path: '/',
    text: 'HOME',
  },
  {
    // path: '/about-us-learn-more',
    path: '/about-us',
    text: 'ABOUT US',
    submenuItems: [
      // { path: '/mission-vision', text: 'Mission and Vision' },
      // { path: '/global-presence', text: 'Global Presence' },
      // { path: '/our-story', text: 'Our Story' },

      { path: '/about-us', text: 'Our Story' },
      { path: '/our-partners', text: 'Partners' },
      { path: '/news-events', text: 'News And Events' },
      { path: '/sustainability', text: 'Sustainability' },
    ],
  },
  {
    path: '/products',
    text: 'PRODUCTS',
    // submenuItems: [
    //   { path: '/mission-vision', text: 'Mission and Vision' },
    //   { path: '/global-presence', text: 'Global Presence' },
    //   { path: '/our-story', text: 'Our Story' },
    // ],
  },
  {
    path: '/contact-us',
    text: 'CONTACT US',
  },
  {
    path: '/quotation',
    text: 'QUOTATION',
  },
]

// if (FEATURES.blogs) {
//   pages.push({
//     path: '/blogs',
//     text: 'News & Blogs',
//   })
// }

// if (FEATURES.product) {
//   pages.push({
//     path: '/product',
//     text: 'Products',
//   })
// }

export const siteName = 'WALT TEC.'

/***********            Home Page Main Data             *********** */
export const homeData = {
  title: `${siteName}`,
  videos: [
    {
      type: 2,
      src: '/images/home/sep2025.jpg',
      poster: '/video/home-lbt3.jpg',
      header: '',
      description: '',
      btnText: '',
      btnLink: '',
    },
    {
      type: 1,
      name: 'introduction',
      src: '/video/xcsp1.mp4',
      poster: '/images/home/xcsplst2.jpg',
      header: '',
      text1: '',
      text2: '',
      text3: '',
      description: '',
      btnText: '',
      btnLink: '',
    },
    {
      type: 2,
      // src: "/video/home-lbt3.jpg",
      // src: "home-top-lbt-2.jpg",
      src: '/images/home/home-lbt3.jpg',
      // src: "https://asset.cloudinary.com/dq928gtws/b0edac3e74a9c038662754ab6fd9abcb",
      poster: '/video/home-lbt3.jpg',
      header: 'ADVANCED TECHNOLOGY',
      description: 'For The Future And Beyond, We Are Ready',
      btnText: ' PLACE CUSTOM ORDER',
      btnLink: '/contact-us',
      // btnLink: "/about-us-learn-more",
    },
    {
      type: 1,
      name: 'hdgc',
      src: '/video/xcsp1.mp4',
      // src: "https://asset.cloudinary.com/dq928gtws/b0edac3e74a9c038662754ab6fd9abcb",
      poster: '/images/home/xcsplst1.jpg',
      // header: "“ FOR THE FUTURE<br> AND BEYOND WE <br>  ARE READY！”",
      header: 'FOR THE FUTURE AND WE ARE READY！',
      text1: 'FOR THE FUTURE',
      text2: 'AND BEYOND',
      text3: ' WE ARE READY！',
      description: 'For The Future And Beyond, We Are Ready',
      btnText: ' PLACE CUSTOM ORDER',
      btnLink: '/contact-us',
      // btnLink: "/about-us-learn-more",
    },
    {
      type: 2,
      // src: "/video/home-lbt2.jpg",
      src: '/images/home/home-lbt2.jpg',
      // src: "home-top-lbt-3.jpg",
      // src: "https://asset.cloudinary.com/dq928gtws/b0edac3e74a9c038662754ab6fd9abcb",
      poster: '/video/home-lbt2.jpg',
      header: 'FUNCTIONAL MATERIALS',
      description: 'For The Future And Beyond, We Are Ready',
      btnText: ' PLACE CUSTOM ORDER',
      btnLink: '/contact-us',
      // btnLink: "/about-us-learn-more",
    },
    {
      name: 'jpz',
      type: 1,
      src: '/video/xcspjpz.mp4', // Update with your actual video paths
      poster: '/images/home/xcspjpz-bg.png',
      // header:  "WE PARTICIPATE IN SUSTAINABLE DEVELOPMENT！",
      header: 'SUSTAINABLE DEVELOPMENT',
      description:
        'We can use the most advanced digital printing technology to print any content on clothing. Our abilities include',
      btnText: ' PLACE CUSTOM ORDER',
      // btnLink: "/about-us-learn-more",
      btnLink: '/contact-us',
    },
  ],

  header: 'Transform Your Business With Us',

  heading: 'One-stop Solution to Your Business Needs',
  homeAim:
    'We aim to constantly bring innovative solutions to cater to our client’s requirements and expectations.',
  contactUsButtonText: 'Contact Us',
  videoButtonText: 'Watch Video',
  paragraphs: [
    {
      para: `Prixite is one online technology solutions provider company that is
            considered as a new breed of thinkers who is driven to create
            effective business solutions for its clients. We aspire to become
            our client’s first choice when it comes to being a world leader in
            the progress and advancement of businesses through digital
            platforms.`,
    },
    {
      para: `Our goal is to offer our clients complete customer satisfaction,
            growth, innovation, and a continuous path to evolve and grow within
            their industry. We aim to constantly bring innovative solutions to
            cater to our client’s requirements and expectations.`,
    },
    {
      para: `Our team of professionals is always on our client’s side offering
            them alluring and tailor-made solutions to the ever-changing
            landscape of their business industry to achieve innovative,
            scalable, customized, and cost-effective solutions to your business
            needs.`,
    },
  ],
}

export const sustainabilityData = {
  header: 'Our Sustainability',
  heading:
    'Walt Technology Group Co. Ltd, dedicated to the revolutionary wave of the textile industry',
  description:
    'When it comes to sustainable development, we are talking about a balance aimed at meeting current needs while not ignoring the needs of future generations. This means effectively utilizing resources while setting clear short-term and long-term goals for humanity, the planet, and future generations. To achieve this, we have made the following efforts',
  features: [
    {
      img: '/images/walt/ai/imgAI6.png',
      title: 'Coordinated robotic forklift',
      description:
        'Our products are made from sustainable and eco-friendly materials to reduce environmental impact.',
      width: 300,
      height: 200,
    },
    {
      img: '/images/walt/ai/imgAI3.png',
      title: 'Automatic transport system',
      description:
        'We use energy-efficient manufacturing processes to minimize our carbon footprint.',
      width: 300,
      height: 200,
    },
    {
      img: '/images/walt/ai/imgAI4.png',
      title: 'Automated pick and pack',
      description:
        'Our packaging is 100% recyclable, ensuring minimal waste and maximum sustainability.',
      width: 300,
      height: 200,
    },
    {
      img: '/images/walt/ai/imgAI14.png',
      title: '3D storage that brings out the needed dye color bases per dye recipe',
      description:
        'Our products are designed to use water efficiently, promoting water conservation.',
      width: 300,
      height: 200,
    },
    {
      img: '/images/walt/ai/imgAI10.png',
      title: 'We use high efficient dyeing equipment to conserve water',
      description:
        'We invest in renewable energy sources to power our facilities and reduce reliance on fossil fuels.',
      width: 300,
      height: 200,
    },
    {
      img: '/images/walt/ai/imgAI12.png',
      title:
        'On-site filtration system results to 80% of recycled water used within the facility that is also environmentally responsible',
      description:
        'Our production processes are optimized to emit the lowest possible levels of greenhouse gases.',
      width: 300,
      height: 200,
    },
    {
      img: '/images/walt/ai/imgAI18.png',
      title:
        'By utilizing river water in our facility, we not only save on cost, but more importantly it is sustainable and environmentally sound',
      description:
        'We ensure that our raw materials are sourced from sustainable and ethical suppliers.',
      width: 300,
      height: 200,
    },
    {
      img: '/images/walt/ai/imgAI9.png',
      title: 'Waste Reduction',
      description:
        'Auto controls the amount to be used in production by computerized weight calculation.',
      width: 300,
      height: 200,
    },
    {
      img: '/images/walt/ai/imgAI17.png',
      title: 'Energy Saving Equipment such as rooftop solar panels',
      description:
        'We support various green initiatives and community programs to promote environmental sustainability.',
      width: 300,
      height: 200,
    },
  ],
}

export const neuInkData = {
  header: 'NeuInk',
  description:
    'NeuInk is our latest innovation in sustainable ink technology. It offers unparalleled quality and eco-friendliness, making it the perfect choice for environmentally conscious consumers.',
  features: [
    'Eco-friendly materials',
    'High durability and performance',
    'Cost-effective solution',
    'Versatile applications',
  ],
  buttonText: 'Learn More about NeuInk',
}

/**********           News and Blogs Data             ********* */
export const newsAndBlogs = {
  title: `${siteName} - Blogs`,
  header: 'News & Blogs',
  heading:
    'We aim to constantly bring innovative solutions to cater to our client’s requirements and expectations.',
  viewButtonText: 'View All',
  likesImg: likes,
  commentsImg: comments,
  scrollToTopImg: scrollToTop,
}

/**********           Testimonials Data             ********** */
export const testimonialsData = {
  heading: 'Our Testimonials',
  leftImg: TestimonialLeft,
  rightImg: TestimonialRight,
}

/**********            Home Page Services Data          ********* */
export const servicesData = {
  servicesPageTitle: 'Services',
  servicesPageHeader: 'We are Offering the Amazing Services 🚀',
  servicesHeading: 'Our Services',
  servicesAim:
    'We aim to constantly bring innovative solutions to cater to our client’s requirements and expectations.',
}

export const ourCapacityData = {
  capacityPageTitle: 'Services',
  capacityPageHeader: 'We are Offering the Amazing Services 🚀',
  capacityHeading: 'Our Capacity',
  capacityAim:
    'We aim to constantly bring innovative solutions to cater to our client’s requirements and expectations.',
}

/*********          Contact Us Page Data            ************* */
export const contactUs = {
  title: `${siteName} - Contact Us`,
  heading: 'Contact Us & Start Building Amazing Products',
}

/**********             Careers Page Data           ************* */
export const careersData = {
  title: `${siteName} - Careers`,
  heading: 'JOIN US',
  buttonText: 'Search Jobs',
}

export const joinUsLinkIcons = [
  {
    icon: FacebookIcon,
    width: 13,
    height: 20,
    path: 'https://web.facebook.com/prixite/',
  },
  {
    icon: LinkdeinIcon,
    width: 24,
    height: 25,
    path: 'https://www.linkedin.com/company/prixite/mycompany/',
  },
]

/*********          Meet the Team Page Data            ************* */
export const categories: Array<string> = [
  'All',
  'Machine Learning',
  'Web App Development',
  'Mobile App Development',
  'Scraping',
  'Quality Assurance',
]

export interface Employee {
  id: number
  name: string
  title: string
  image: string
  description: string
  moreInfo: string
  DevelopmentStack: Array<string>
  facebookLink?: string
  twitterLink?: string
  linkedInLink?: string
  category: string
}

/**************             Footer Data         ************ */
export const footerData = {
  copyright: `Copyright © ${new Date().getFullYear()}.  Walt Technology Group Co. Ltd - All Rights Reserved. `,
  details: [
    {
      icon: LocationIcon,
      desc: 'Walt Tec China Haining | Walt USA  Utah ',
    },
    // {
    //   icon: PhoneIcon,
    //   desc: '+1 (628) 277-3693',
    // },
    {
      icon: MailIcon,
      desc: 'print@neu-ink.com',
    },
  ],
  info: {
    title: 'More Information',
    contactUs: [
      {
        text: 'About Us',
        // path: '/about-us-learn-more',
        path: '/about-us',
      },
      {
        path: '/idea-product-page#idea',
        text: 'Ideas',
      },
      {
        path: '/idea-product-page#credibility',

        text: 'Credibility',
      },
      {
        path: 'https://www.neu-ink.com/pages/custom',
        text: 'Neu Ink',
      },
      {
        path: '/contact-us',
        text: 'Contact Us',
      },
    ],
  },
  affiliates: {
    title: 'Affiliates',
    links: [
      {
        path: 'https://www.neu-ink.com',
        text: 'www.neu-ink.com',
      },
      {
        path: 'https://www.xwaist.com',
        text: 'www.xwaist.com',
      },
      {
        path: 'https://www.comfort-fresh.com',
        text: 'www.comfort-fresh.com',
      },
      {
        path: 'https://www.inksoc.com',
        text: 'www.inksoc.com',
      },
    ],
  },
  joinUs: {
    title: 'Join Us On',
    links: [
      {
        icon: FacebookIcon,
        width: 13,
        height: 20,
        path: 'https://web.facebook.com/prixite/',
      },
      {
        icon: LinkdeinIcon,
        width: 24,
        height: 25,
        path: 'https://www.linkedin.com/company/prixite/mycompany/',
      },
      {
        icon: InstagramIcon,
        width: 24,
        height: 25,
        path: 'https://www.instagram.com/prixitegram/',
      },
    ],
  },
}

export const contactForm = {
  success: 'Submitted',
  error: 'Not submitted. Please try again!',
}

export const productsList = {
  title: `${siteName} - Product`,
  header: 'Our Products',
  heading: 'Our aim is to build secure and reliable products and fulfill our clients requirements.',
}
