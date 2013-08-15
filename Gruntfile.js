/*
 * Copyright (c) 2013, Liferay Inc. All rights reserved.
 * Code licensed under the BSD License:
 * https://github.com/liferay/alloy-ui/blob/master/LICENSE.md
 *
 * @author Zeno Rocha <zeno.rocha@liferay.com>
 */

var spawn = require('child_process').spawn;

// -- Config -------------------------------------------------------------------
module.exports = function(grunt) {
    grunt.initConfig({
        build: {},
        push: {
            branch: 'gh-pages',
            folder: 'out/',
            remote: 'origin'
        },
        watch: {}
    });

    grunt.registerTask('deploy', ['build', 'push']);

    // -- Install --------------------------------------------------------------
    grunt.registerTask('default', 'Install local dependencies', function() {
        var done = this.async();

        var cmd = spawn('npm', ['install'], {
            stdio: 'inherit'
        });

        cmd.on('close', done);
    });

    grunt.registerTask('build',  ['default']);
    grunt.registerTask('deploy', ['default']);
    grunt.registerTask('push',   ['default']);
    grunt.registerTask('watch',  ['default']);

    if (grunt.file.exists('node_modules')) {
        grunt.loadTasks('grunt');
    }
};