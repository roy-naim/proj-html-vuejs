Vue.config.devtools = true;
var app = new Vue(
  {
  el: '#root',
  data: {
    names: [
      {
        title: 'Home',
        extra: false,
      },
      {
        title: 'Services',
        extra: false,

      },
      {
        title: 'About',
        extra: false,

      },
      {
        title: 'Videos',
        extra: false,

      },
      {
        title: 'Blog',
        extra: false,
      },
      {
        title: 'Store',
        extra: true,
      },

    ],

    keys: [
      {
        title: 'Schedule a workout',
        link: 'https://avada.theme-fusion.com/fitness/contact/',
      },
    ],

    icons: [
      {
        class: 'fas fa-search',
      },

      {
        class: 'fas fa-shopping-cart',
      },
    ],

    socials: [
      {
        class: 'fab fa-facebook-f'
      },

      {
        class: 'fab fa-twitter'
      },

      {
        class: 'fab fa-instagram'
      },

      {
        class: 'fab fa-linkedin-in'
      },

      {
        class: 'fab fa-youtube'
      },
    ]

  },

  }
);
