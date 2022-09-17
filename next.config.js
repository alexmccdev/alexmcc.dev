const debug = process.env.NODE_ENV !== 'production'

module.exports = {
    future: {
        webpack5: false,
    },

    env: {
        siteName: 'alexmcc.dev',
        siteUrl: 'https://www.alexmcc.dev',

        myName: 'Alex McConnell',
        myInitials: 'AM',
        myJobTitle: 'Software Engineer',

        employerName: 'Upstart',
        employerLink: 'https://www.upstart.com/',

        myLocation: 'West Hartford, CT',
        locationLink: 'https://goo.gl/maps/7fhjEr5uVaAn1xuC7',

        gitHubLink: 'https://github.com/alexmccdev',
        linkedInLink: 'https://www.linkedin.com/in/alexmccdev',
        emailLink: 'mailto:alexmcc.dev@gmail.com',
    },

    assetPrefix: !debug ? '/' : '',
}
