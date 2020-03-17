module.exports = function (app, swig) {
    app.get('/autores/agregar', function (req, res) {
        let roles = [{"nombre": "Cantante"}, {"nombre": "Batería"}, {"nombre": "Bajista"},
            {"nombre": "Teclista"}, {"nombre": "Guitarrista"}];
        let respuesta = swig.renderFile('views/autores-agregar.html', {
            roles: roles
        });
        res.send(respuesta);
    });

    app.get("/autores", function (req, res) {
        let autores = [{
            "nombre": "Luis Hurlé",
            "grupo": "Canarios Malos",
            "rol": "Cantante"
        }, {
            "nombre": "Carlos Fleitas",
            "grupo": "La Isla Rebelde",
            "rol": "Batería"
        }, {
            "nombre": "Carlos Hurlé",
            "grupo": "La Papaya",
            "rol": "Bajista"
        }];

        let respuesta = swig.renderFile('views/autores.html', {
            autores: autores
        });

        res.send(respuesta);
    });

    app.post("/autor", function (req, res) {
        let respuesta = "";
        if (typeof (req.body.nombre) != "undefined") {
            respuesta += 'Nombre: ' + req.body.nombre + '<br>'
        }
        if (typeof (req.body.grupo) != "undefined") {
            respuesta += 'Grupo: ' + req.body.grupo + '<br>'
        }
        if (typeof (req.body.rol) != "undefined") {
            respuesta += 'Rol: ' + req.body.rol + '<br>'
        }
        res.send(respuesta);
    });

    app.get('/autores/filtrar/:rol', function (req, res) {
        let autores = [{
            "nombre": "Luis Hurlé",
            "grupo": "Canarios Malos",
            "rol": "Cantante"
        }, {
            "nombre": "Carlos Fleitas",
            "grupo": "La Isla Rebelde",
            "rol": "Batería"
        }, {
            "nombre": "Carlos Hurlé",
            "grupo": "La Papaya",
            "rol": "Bajista"
        }];

        let busqueda = [];

        for(let a in autores){
            if(autores[a].rol==req.params.rol){
                busqueda.push(autores[a]);
            }
        }

        let respuesta = swig.renderFile('views/autores.html',{
            autores:busqueda
        })

        res.send(respuesta);
    });

    app.get('/autores/*', function (req, res) {
        res.redirect('/autores');
    });

};