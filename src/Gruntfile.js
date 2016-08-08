module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
        dist: {
            src: [
                'js/modernizr.js', 
                'js/jquery-3.1.0.js', 
                'js/global.js'  
            ],
            dest: '../js/script.js',
        }
    },

    uglify: {
        build: {
            src: '../js/script.js',
            dest: '../js/script.min.js'
        }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          '../css/style.css': 'scss/global.scss'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['ie >= 9', 'last 3 versions', '> 2%']
      },
      dist: {
        files: {
          '../css/style.css': '../css/style.css'
        }
      }
    },

    watch: {
      scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
        },
      },

      css: {
        files: ['scss/*'],
        tasks: ['sass', 'autoprefixer'],
        options: {
          spawn: false, 
          livereload: true, 
        },
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['sass', 'autoprefixer', 'concat', 'uglify']);

};
