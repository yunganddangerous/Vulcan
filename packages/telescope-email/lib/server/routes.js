Meteor.startup(function () {

  // New user email

  Router.route('/email/new-user/:id?', {
    name: 'newUser',
    where: 'server',
    action: function() {
      var html;
      var user = Meteor.users.findOne(this.params.id);
      var emailProperties = {
        profileUrl: Users.getProfileUrl(user),
        username: Users.getUserName(user)
      };
      html = Telescope.email.getTemplate('emailNewUser')(emailProperties);
      this.response.write(Telescope.email.buildTemplate(html));
      this.response.end();
    }
  });

  // New post email

  Router.route('/email/new-post/:id?', {
    name: 'newPost',
    where: 'server',
    action: function() {
      var html;
      var post = Posts.findOne(this.params.id);
      if (!!post) {
        html = Telescope.email.getTemplate('emailNewPost')(Posts.getProperties(post));
      } else {
        html = "<h3>No post found.</h3>"
      }
      this.response.write(Telescope.email.buildTemplate(html));
      this.response.end();
    }
  });

  // Post approved

  Router.route('/email/post-approved/:id?', {
    name: 'postApproved',
    where: 'server',
    action: function() {
      var html;
      var post = Posts.findOne(this.params.id);
      if (!!post) {
        html = Telescope.email.getTemplate('emailPostApproved')(Posts.getProperties(post));
      } else {
        html = "<h3>No post found.</h3>"
      }
      this.response.write(Telescope.email.buildTemplate(html));
      this.response.end();
    }
  });

  // New comment email

  Router.route('/email/new-comment/:id?', {
    name: 'newComment',
    where: 'server',
    action: function() {
      var html;
      var comment = Comments.findOne(this.params.id);
      if (!!comment) {
        html = Telescope.email.getTemplate('emailNewComment')(Comments.getProperties(comment));
      } else {
        html = "<h3>No post found.</h3>"
      }
      this.response.write(Telescope.email.buildTemplate(html));
      this.response.end();
    }
  });

  // New reply email

  Router.route('/email/new-reply/:id?', {
    name: 'newReply',
    where: 'server',
    action: function() {
      var html;
      var comment = Comments.findOne(this.params.id);
      if (!!comment) {
        html = Telescope.email.getTemplate('emailNewReply')(Comments.getProperties(comment));
      } else {
        html = "<h3>No post found.</h3>"
      }
      this.response.write(Telescope.email.buildTemplate(html));
      this.response.end();
    }
  });
});
