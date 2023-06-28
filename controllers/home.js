module.exports = function (app) {
  var Usuario = app.models.usuario;

  var HomeController = {
    index: function (req, res) {
      res.render("home/index");
    },

    login: async function (req, res) {
      var email = req.body.usuario.email;
      const usuario = await Usuario.findOne({ email });
      if (usuario) {
        req.session.usuario = usuario;
        res.redirect("/contatos");
      } else {
        Usuario.create(req.body.usuario).then((result) => {
          if (!result) {
            res.redirect("/");
          } else {
            req.session.usuario = usuario;
            res.redirect("/contatos");
          }
        });
      }
    },

    logout: function (req, res) {
      req.session.destroy();
      res.redirect("/");
    },
  };

  return HomeController;
};
