YUI().use('jsonp', 'node',function (Y) {

  var githubAPI = 'https://api.github.com/repos/liferay/alloy-ui/contributors?callback={callback}',
      template  = '<a href="http://github.com/{login}" title="@{login}">' +
                  '  <img src="{avatar_url}" width="50" height="50" alt="@{login}">' +
                  '</a>';

  function handleJSONP(response) {

    var contributorsHTML = '';

    for (var i = 0; i < response.data.length; i++) {
      contributorsHTML += Y.Lang.sub(template, response.data[i]);
    }

    Y.one("#contributors").setHTML(contributorsHTML);

  }

  Y.jsonp(githubAPI, handleJSONP);

});
