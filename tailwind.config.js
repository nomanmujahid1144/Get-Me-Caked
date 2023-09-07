
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: theme => ({
                'hero-img': "url('~/src/assets/hero-section-img.png')",
                'hero-img1': "url('~/src/assets/Terps-Hero2.webp')",
                'hero-img2': "url('~/src/assets/second-hero-section.png')",
                'AgeBackgroundImage' : "url('~/src/assets/cannabis.webp')",
                'footerBackgroundImage' : "url('~/src/assets/footer-background-3.jpg')",
                'cannabisSmokeImage' : "url('~/src/assets/cannabis-img.jpg')",
                'footerImage' : "url('~/src/assets/vaps.png')",
                'flowerImage' : "url('~/src/assets/pexels-kindel-media-7667731.jpg')",
            }),
            colors: {
                'myBg': '#2F627D',
                'myBgHover': '#eed581',
                
                'primaryColor': '#379683',
                'primaryColorHover': '#5CDB95',
                'primaryColorLight': '#8EE4AF',
                'secondaryColor': '#65A6C8',
                'bgGrayLight': '#F5F5F5',
                'textColor': '#303133',
                'textColorWhite': '#FFFFFF',
                'loaderBg': 'rgba(0 , 0, 0 , 0.6)'
            },
            screens: {
                'xxs': '355px', // min-width
            },
            keyframes: {
                up: {
                  '0%': { transform: 'translateY(0)' },
                  '30%': { transform: 'translateY(-10%)' },
                },
            },
            animation: {
                'up': 'up 2s ease-out'
            }
        },
        fontSize: {
            '2xl': ['2rem', {
              lineHeight: '1.5rem',
                fontWeight: '500',
            }],
            '3xl': ['2.5rem', {
                lineHeight: '1.5rem',
                fontWeight: '700',
            }],
        },
    },
    fontFamily: {
        'sans': ['Roboto', 'Arial', 'sans-serif'],
        'squada-one' : ['squada-one' , 'sans-sarif']
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],

}