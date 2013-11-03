/*
 * Copyright (c) 2013, Liferay Inc. All rights reserved.
 * Code licensed under the BSD License:
 * https://github.com/liferay/alloy-ui/blob/master/LICENSE.md
 *
 * @author Zeno Rocha <zeno.rocha@liferay.com>
 */

var TASK = {
    name: 'push',
    description: 'Push folder into a certain branch'
};

// -- Require ------------------------------------------------------------------
var async   = require('async');
var command = require('command');
var fs      = require('fs');
var fsExtra = require('fs-extra');
var path    = require('path');

// -- Global Vars --------------------------------------------------------------
var currentBranch = '';
var root          = process.cwd();

// -- Task ---------------------------------------------------------------------
module.exports = function(grunt) {
    grunt.registerTask(TASK.name, TASK.description, function() {
        var done = this.async();

        async.series([
            function(mainCallback) {
                grunt.log.ok('Setting Grunt config');
                exports._setGruntConfig(mainCallback, grunt);
            },
            function(mainCallback) {
                grunt.log.ok('Getting current branch');
                exports._gitCurrentBranch(mainCallback);
            },
            function(mainCallback) {
                grunt.log.ok('Going to ' + grunt.config('push.branch') + ' branch');
                exports._gitGoToBranch(mainCallback, grunt.config('push.branch'));
            },
            function(mainCallback) {
                grunt.log.ok('Moving files from ' + grunt.config('push.folder') + ' folder to root');
                exports._moveFolder(mainCallback, grunt.config('push.folder'));
            },
            function(mainCallback) {
                grunt.log.ok('Removing ' + grunt.config('push.folder') + ' folder');
                exports._removeFolder(mainCallback, grunt.config('push.folder'));
            },
            function(mainCallback) {
                grunt.log.ok('Adding changes to ' + grunt.config('push.branch') + ' branch');
                exports._gitAddAll(mainCallback);
            },
            function(mainCallback) {
                grunt.log.ok('Committing changes to ' + grunt.config('push.branch') + ' branch');
                exports._gitCommit(mainCallback);
            },
            function(mainCallback) {
                grunt.log.ok('Pushing changes to ' + grunt.config('push.remote') + ' remote');
                exports._gitPushToBranch(mainCallback, grunt.config('push.remote'), grunt.config('push.branch'));
            },
            function(mainCallback) {
                grunt.log.ok('Going back to the branch you were working');
                exports._gitGoToBranch(mainCallback, currentBranch);
            }],
            function() {
                done();
            }
        );
    });
};

exports._setGruntConfig = function(mainCallback, grunt) {
    var options = grunt.option.flags();

    options.forEach(function(option) {
        var key;
        var value;
        var valueIndex;

        // -- Normalize option
        option = option.replace(/^--(no-)?/, '');

        valueIndex = option.lastIndexOf('=');

        // -- String parameter
        if (valueIndex !== -1) {
            key   = option.substring(0, valueIndex);
            value = option.substring(valueIndex + 1);
        }
        // -- Boolean parameter
        else {
            key   = option;
            value = grunt.option(key);
        }

        grunt.config([TASK.name, key], value);
    });

    mainCallback();
};

exports._gitCurrentBranch = function(mainCallback) {
    command.open(root)
        .on('stdout', command.writeTo(process.stdout))
        .on('stderr', command.writeTo(process.stderr))
        .exec('git', ['symbolic-ref', 'HEAD'])
        .then(function() {
            var data = this.lastOutput.stdout;
            currentBranch = data.substring(data.lastIndexOf('/') + 1).trim();
            mainCallback();
        });
};

exports._gitGoToBranch = function(mainCallback, branch) {
    command.open(root)
        .on('stdout', command.writeTo(process.stdout))
        .on('stderr', command.writeTo(process.stderr))
        .exec('git', ['checkout', branch])
        .then(function() {
            mainCallback();
        });
};

exports._moveFolder = function(mainCallback, folder) {
    var folderPath = path.join(root, folder);
    var collection = fs.readdirSync(folderPath);

    async.eachLimit(collection, 10, function (fileName, callback) {
        var origin = path.join(folderPath, fileName);
        var destination = '';

        if (currentBranch === 'master') {
            destination = path.join(root, fileName);
        } else {
            destination = path.join(root, 'versions', currentBranch, fileName);
        }

        fsExtra.copy(origin, destination, function(err) {
            if (err) {
                command.writeTo(err);
            }
            else {
                command.writeTo('Copied: ' + fileName);
                callback();
            }
        });
    }, function() {
        mainCallback();
    });
};

exports._removeFolder = function(mainCallback, folder) {
    var folderPath = path.join(root, folder);

    fsExtra.remove(folderPath, function(err) {
        if (err) {
            command.writeTo(err);
        }
        else {
            command.writeTo('Removed: ' + folder);
            mainCallback();
        }
    });
};

exports._gitAddAll = function(mainCallback) {
    command.open(root)
        .on('stdout', command.writeTo(process.stdout))
        .on('stderr', command.writeTo(process.stderr))
        .exec('git', ['add', '.'])
        .then(function() {
            mainCallback();
        });
};

exports._gitCommit = function(mainCallback) {
    command.open(root)
        .on('stdout', command.writeTo(process.stdout))
        .on('stderr', command.writeTo(process.stderr))
        .exec('git', ['commit', '-m', 'Regenerate'])
        .then(function() {
            mainCallback();
        });
};

exports._gitPushToBranch = function(mainCallback, remote, branch) {
    command.open(root)
        .on('stdout', command.writeTo(process.stdout))
        .on('stderr', command.writeTo(process.stderr))
        .exec('git', ['push', remote, branch])
        .then(function() {
            mainCallback();
        });
};