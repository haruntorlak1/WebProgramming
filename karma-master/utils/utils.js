var Utils = {
init_spapp : function(){
    var app = $.spapp({
        defaultView: "#home",
        templateDir: "./pages/"
    });
    app.run();
}


}