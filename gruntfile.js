module.exports = function(grunt)
{
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    
    grunt.initConfig(
    {
        uglify: 
        {
            my_target: 
            {
                files: 
                {
                    'Code/js/script.js' : ['Code/Working/js/*.js']
                } //files
            } //my_target
        }, //uglify
        
        compass:
        {
            dev:
            {
                options:
                {
                    config: "config.rb"
                }
            }
        }, //compass
        
        watch:
        {
            options: 
            {
                livereload: true
            },  //options
            
            scripts:
            {
                files: ['Code/Working/js/*.js'],
                tasks: [ 'uglify' ]
            },
            
            sass:
            {
                files: ['Code/Working/sass/*.scss'],
                tasks: ['compass:dev']
            },
            
            html:
            {
                files: ['Code/Working/js/*.js']
            }
        } //watch
    }) //initConfig
    
    grunt.registerTask('default', 'watch');
}