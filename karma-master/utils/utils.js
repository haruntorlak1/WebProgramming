var Utils = {
init_spapp : function(){
    var app = $.spapp({
        defaultView: "#home",
        templateDir: "./pages/"
    });
    app.run();
},
logout : function(){
    localStorage.clear();
    location.reload();
  },
  unblock_ui: function (element) {
    $(element).unblock({});
  },
  get_from_localstorage: function (key) {
    return JSON.parse(window.localStorage.getItem(key));
  },
  set_to_localstorage: function (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },

}