/*
 * Copyright (c) 2013, Liferay Inc. All rights reserved.
 * Code licensed under the BSD License:
 * https://github.com/liferay/alloy-ui/blob/master/LICENSE.md
 *
 * @author Zeno Rocha <zeno.rocha@liferay.com>
 */

var TASK = {
    name: 'watch',
    description: 'Build and watch for any changes on http://localhost:9778'
};

// -- Requires -----------------------------------------------------------------
var spawn = require('child_process').spawn;
var which = require('which').sync;

module.exports = function(grunt) {
    grunt.registerTask(TASK.name, TASK.description, function() {
        // -- Variables --------------------------------------------------------
        var cmd  = {};
        var done = this.async();

        // -- Command ----------------------------------------------------------
        cmd = spawn(which('docpad'), ['run'], {
            stdio: 'inherit'
        });

        cmd.on('close', function (exitCode) {
            if (exitCode !== 0) {
                done(false);
            }
        });
    });
};

// TODO - Check if node_modules folder exists
// TODO - Use command instead of spawn