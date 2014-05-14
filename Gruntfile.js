module.exports = function(grunt) {

  //Load NPM tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-latex');

  // Project Configuration
  grunt.initConfig({
    watch: {
      tex: {
        files: ['*.tex'],
        tasks: ['latex']
      }
    },
    latex: {
      src: ['copay.tex'],
      options: {
        // Task-specific options go here.
      },
      paper: {
        // Target-specific file lists and/or options go here.
      }
    }
  });

  grunt.registerTask('default', ['latex', 'watch']);

};
