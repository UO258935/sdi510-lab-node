module.exports = function(app, swig) {
    app.get('/autores/agregar', function (req, res) {
        let respuesta = swig.renderFile('views/autores-agregar.html', {
        });
        res.send(respuesta);
    });

    app.get("/autores", function(req, res) {
        let autores = [{
            "nombre": "Luis Hurlé",
            "grupo": "Canarios Malos",
            "rol" : "Cantante"
        }, {
            "nombre": "Carlos Fleitas",
            "grupo": "La Isla Rebelde",
            "rol" : "Batería"
        }, {
            "nombre": "Carlos Hurlé",
            "grupo": "La Papaya",
            "rol" : "Bajista"
        }];

        let respuesta = swig.renderFile('views/autores.html', {
            vendedor: 'Tienda de canciones',
            autores: autores
        });

        res.send(respuesta);
    });

    app.post("/autor", function (req, res) {
        res.send("Autor agregado: " + req.body.nombre + "<br>"
            + " Grupo : " + req.body.grupo + "<br>"
            + " Rol: " + req.body.rol);
    });

    app.get('/aut*', function (req, res) {
        res.redirect('/autores');
    });


};