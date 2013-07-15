AUI().use('jsonp', 'aui-node', function (A) {

  var githubAPI = 'https://api.github.com/repos/liferay/alloy-ui/contributors?callback={callback}',
      template  = '<a href="http://github.com/{login}" title="@{login}">' +
                  '  <img src="{avatar_url}" width="50" height="50" alt="@{login}">' +
                  '</a>';

  function handleJSONP(response) {

    var contributorsHTML = '';

    for( var i = 0; i < response.data.length; i++ ) {
      contributorsHTML += A.Lang.sub(template, response.data[i]);
    }

    A.one("#contributors").html(contributorsHTML);

  }

  A.jsonp(githubAPI, handleJSONP);

});
