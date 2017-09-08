module.exports = {

  /* =================================
   * Template Data
   */

  // These are variables will be accessible via our templates
  templateData: {

    /* -----------------------------
     * AlloyUI Information
     */

    alloy: {
      // AlloyUI version
      version: '1.0.3',

      // CDN domain
      cdnDomain: 'https://cdn.alloyui.com'
    },

    /* -----------------------------
     * Site Information
     */

    site: {
      // Website version
      version: '1.0.x',
      isLastVersion: false,

      // Production URL
      url: 'https://alloyui.com',

      // Github branch
      githubUrl: 'https://github.com/liferay/alloy-ui/tree/1.0.x',

      // Basic info
      title: 'AlloyUI',
      description: 'AlloyUI is a framework built on top of YUI3 that provides a simple API for building high scalable applications.'
    },

    /* -----------------------------
     * Helpers
     */

    // Get the prepared site/document title
    getPreparedTitle: function() {

      // if we have a document title, then we should use that and suffix the site's title into it
      if (this.document.title) {
        if (this.document.category) {
          return "" + this.document.category + " - " + this.document.title + " | " + this.site.title;
        } else {
          return "" + this.document.title + " | " + this.site.title;
        }
      } // if our document does not have it's own title, then we should just use the site's title
      else {
        return this.site.title;
      }
    },

    // Get the prepared site/document description
    getPreparedDescription: function() {
      // if we have a document description, then we should use that, otherwise use the site's description
      return this.document.description || this.site.description;
    },

    // Get the CDN path for this Alloy version
    getCdnPath: function() {
      return "" + this.alloy.cdnDomain + "/" + this.alloy.version;
    },

    // Get the CDN seed file for this Alloy version
    getCdnSeed: function() {
      return "" + this.alloy.cdnDomain + "/" + this.alloy.version + "/aui/aui-min.js";
    },

    // Get the download URL for this Alloy version
    getDownloadUrl: function() {
      return "" + this.alloy.cdnDomain + "/downloads/alloy-" + this.alloy.version + ".zip";
    },

    // Get the absolute URL of the website
    getSiteUrl: function() {
      if (this.site.isLastVersion) {
        return "" + this.site.url;
      } else {
        return "" + this.site.url + "/versions/" + this.site.version;
      }
    },

    // Get the absolute URL of the assets folder
    getAssetsUrl: function() {
      if (this.site.isLastVersion) {
        return "" + this.site.url + "/website";
      } else {
        return "" + this.site.url + "/versions/" + this.site.version + "/website";
      }
    },

    // Read File
    readFile: function(relativePath) {
      var fsUtil, path, result;
      fsUtil = require('fs');
      path = this.document.fullDirPath + '/' + relativePath;
      result = fsUtil.readFileSync(path);
      if (result instanceof Error) {
        throw result;
      } else {
        return result.toString();
      }
    },

    // Code File
    codeFile: function(relativePath, language) {
      var contents;
      contents = this.readFile(relativePath);
      return "<pre><code class=\"" + language + "\">" + contents + "</code></pre>";
    }
  },

  /* =================================
   * Collections
   */

  collections: {
    // Get all tutorials sorted by alphabetical order
    tutorials: function() {
      return this.getCollection("documents").findAllLive({
        url: {
          $startsWith: '/tutorials'
        }
      }, [
        {
          title: 1
        }
      ]);
    },

    // Get all examples sorted by alphabetical order
    examples: function() {
      return this.getCollection("documents").findAllLive({
        url: {
          $startsWith: '/examples'
        }
      }, [
        {
          category: 1,
          title: 1
        }
      ]);
    },

    // Get all examples that contains featuringOrder attribute
    featuring: function(database) {
      return database.findAllLive({
        featuringOrder: {
          $exists: true
        }
      }, [
        {
          featuringOrder: 1
        }
      ]);
    }
  },

  /* =================================
   * Environments
   */

  environments: {
    development: {
      templateData: {

        /* -----------------------------
         * Site Information
         */

        // Development URL
        site: {
          url: 'http://localhost:9778'
        },

        /* -----------------------------
         * Helpers
         */

        // Get the absolute Development URL of the website
        getSiteUrl: function() {
          return "" + this.site.url;
        },

        // Get the absolute Development URL of the assets folder
        getAssetsUrl: function() {
          return "" + this.site.url + "/website";
        }
      }
    }
  }
};