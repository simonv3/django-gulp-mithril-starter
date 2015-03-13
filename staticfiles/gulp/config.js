
var dest = "build";
var src = "client";

var jsxSource = src + "/msx-views/**/*.jsx";
var jsxDestination = src + "/js";
var sassSource = src + "/scss/**/*.{sass,scss}";
var sassDestination = dest + "/css";
var assetsSource = src + "/assets/**";
var assetsDestination = dest + "/assets";
var imagesSource = src + "/assets/img/**/*.{gif,jpg,jpeg,tiff,png,svg}";
var imagesDestination = src + "/assets/img";
var templatesSource = "templates/**";
var templatesDestination = dest;

module.exports = {

  clientDir: src,

  browserSyncMode: "proxy",
  browserSyncDebug: false,

  browserSync: {
    all: {
      port: process.env.PORT || 4000,
      // open browser window on start
      open: true
    },
    debug: {
      logFileChanges: true,
      logLevel: "debug"
    },
    serverOptions: {
      server: {
        baseDir: dest
      },
      files: [
        dest + "/**",
        // Exclude Map files
        "!" + dest + "/**.map"
      ],
    },
    proxyOptions: {
      proxy: 'localhost:8000'
    }
  },

  jsx: {
    src: jsxSource,
    dest: jsxDestination
  },

  sass: {
    src: sassSource,
    dest: sassDestination,
    settings: {
      // Required if you want to use Sass syntax
      // See https://github.com/dlmanning/gulp-sass/issues/81
      sourceComments: 'map',
      //TODO fix path
      imagePath: '/images' // Used by the image-url helper
    }
  },

  assets: {
    src: assetsSource,
    dest: assetsDestination,
    processImages: /\.(gif|jpg|jpeg|tiff|png)$/i,
    imageminOptions: {
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      // png optimization
      optimizationLevel: 1
    },
    imgSrc: imagesSource,
    imgDest: imagesDestination
  },

  templates: {
    // *Note* templates don't use the common src
    src: templatesSource,
    dest: templatesDestination
  },

  browserify: {
    // Additional file extentions to make optional
    //extensions: ['.coffee', '.hbs'],
    extensions: [],

    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: './' + src + '/js/index.js',
      dest: dest + '/js',
      outputName: 'app.js'
    }]
  },

  jshint: {
    src: [
      'gulpfile.js',
      // './client/js/index.js',
      './client/js/**/*.js'
    ]
  },

  test: {
    src: './client/**/*test.js',
    mochaOptions: {
      'ui': 'bdd',
      'reporter': 'spec'
    }
  }
};
