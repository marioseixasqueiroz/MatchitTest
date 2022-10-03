const db = require('./db')

exports.insertquery = function (values) {
    const text = 'INSERT INTO matchit.empresas VALUES($1, $2) RETURNING *'
    client.query(text, values, (err, res) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(res.rows[0])
        }
    })
    return res.rows;
};

exports.selectquery = function (value) {
    const text = 'SELECT FROM matchit.empresas where id = VALUE($1) RETURNING *'
    client.query(text, value, (err, res) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(res.rows[0])
        }
    })
    return res.rows;
};

exports.deletequery = function (value) {
    const text = 'DELECT FROM matchit.empresas where id= value($1) RETURNING *'
    client.query(text, value, (err, res) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(res.rows[0])
        }
    })
    return res.rows;
};

exports.listquery = function (value) {
    const text = 'SELECT * FROM matchit.empresas'
    client.query(text, value, (err, res) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(res.rows)
        }
    })
    return res.rows;
};