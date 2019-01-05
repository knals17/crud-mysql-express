const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM data', (err, row) => {
            if (err) {
                res.json(err);
            }
            console.log(row);
            res.render('customer',{
                data: row
            });
        })
    });
};

controller.guardar = (req, res) => {
    const datos = req.body;
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO data set ?', [datos], (err, customer) => {
            console.log(customer);
            res.redirect('/');
        });
    })
};

controller.editar = (req, res) => {
    const { id } = req.params;
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM data WHERE id = ?', [id], (err,row) => {
            res.render('edit', {
                data: row[0]
            });
        })
    })
};

controller.actualizar = (req, res) => {
    const { id } = req.params;
    const datos = req.body;
    req.getConnection((err,conn) => {
        conn.query('UPDATE data set ? WHERE id = ?', [datos,id], (err,row) => {
            res.redirect('/');
        })
    })
};

controller.borrar = (req, res) => {
    const { id } = req.params;
    req.getConnection((err,conn) => {
        conn.query('DELETE FROM data WHERE id = ?', [id], (err,row) => {
            res.redirect('/');
        })
    })
};

module.exports = controller;