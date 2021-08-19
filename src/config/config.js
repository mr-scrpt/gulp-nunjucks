const paths = {
    src: "./src",
    build: "./build",
    html: {
        src: "/*.html",
        dest: "/",
    },
    nunjucks: {
        watch: "/views/**/*.njk",
        src: "/views/pages/*.njk",
        dest: "/",
    },
    fonts: {
        src: "/fonts/*",
        dest: "/fonts/",
    },
    js: {
        src: "/js/**/*.js",
        dest: "/js/",
    },
    img: {
        src: "/img/**",
        dest: "/img/",
        watch: "/img/**/*.*",
    },
    css: {
        src: "/css/*",
        dest: "/css/",
    },
    sass: {
        watch: "/styles/**/*.scss",
        src: "/styles/**/style.scss",
        dest: "/css/",
    },
    data: {
        watch: "/data/**/*.*",
    },
};

exports.config = {
    ...paths,
};
