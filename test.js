var x = function(args) {
    console.log("%c Hello World!", "background: red; color: white");
    return args ? args : "noarg"
}

x();