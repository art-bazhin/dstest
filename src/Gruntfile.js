module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

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
      options: { livereload: true },
      files: ['scss/*'],
      tasks: ['default']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['sass', 'autoprefixer']);

};
