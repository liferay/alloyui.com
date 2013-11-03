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

    grunt.loadTasks('tasks');

    grunt.registerTask('deploy', ['build', 'push']);
};