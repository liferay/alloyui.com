AUI().use('aui-io-request', 'node', function(A) {

  A.io.request('https://api.github.com/repos/liferay/alloy-ui/contributors?callback=?', {
    dataType: 'json',
    on: {
      success: function() {

        MEMBER = '<a class="project-contributor" href="#{url}" title="@#{login}">' +
                 '  <img src="#{avatar}" width="50" height="50" alt="@#{login}">' +
                 '</a>';

        var data = this.get('responseData');

        if (data && data.length > 0) {

          var members = "";

          for ( var i = 0; i < data.length ; i++ ) {

            members += MEMBER.replace("#{avatar}", data[i].avatar_url)
                             .replace("#{login}", data[i].login)
                             .replace("#{url}", data[i].url)
                             .replace("api.", "")
                             .replace("users/", "");
          }

          A.one('#contributors').append(members);

        }
      }
    }
  });
});
