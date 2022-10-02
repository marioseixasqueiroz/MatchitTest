const db = require('./db')

insertquery {
    const text = 'INSERT INTO matchit.empresas VALUES($1, $2) RETURNING *'
    const values = ['', '']

    // callback
    client.query(text, values, (err, res) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(res.rows[0])
        }
    })
}

selectquery{
    const text = 'SELECT FROM matchit.empresas where id = VALUE($1) RETURNING *'
    const value = ['']
    // callback
    client.query(text, values, (err, res) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(res.rows[0])
        }
    })
}

deletequery {
    const text = 'DELECT FROM 'matchit.empresas' where id= value($1) RETURNING *'
    const value = ['']
    // callback
    client.query(text, values, (err, res) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(res.rows[0])
        }
    })
}

listquery {
    const text = 'SELECT * FROM 'matchit.empresas'
    // callback
    client.query(text, values, (err, res) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(res.rows[0])
        }
    })
}