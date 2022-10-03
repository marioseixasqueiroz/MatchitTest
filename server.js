'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

const { Pool, Client } = require('pg')

const query = require('./query')

const client = new Client()
await client.connect()


class Button extends React.Component {
    render() {
        return (
            <button className="button" onClick={function () { /* TODO */; }}>

                {/* TODO */}
            </button>
        );
    }
}

class Screen extends React.Component {
    renderButton(i) {
        return <Button />;
    }

    render() {
        const empresas = query.listquery(0);
        return (
            <div>
                <div className="status">Empresas</div>
                <div className="Empresa-row">
                    {`nome= $empresas[0][0], cnpj= $empresas[0][1]` }
                </div>
                <div className="Empresa-row">
                    {`nome= $empresas[1][0], cnpj= $empresas[1][1]` }
                </div>
                <div className="Empresa-row">
                    {`nome= $empresas[2][0], cnpj= $empresas[2][1]` }
                </div>
            </div>
        );
    }
}

class Empresas extends React.Component {
    render() {
        return (
            <div className="Empresa">
                <div className="Lista">
                    <Screen />
                </div>
                <div className="CRUDButtons">
                    <div>{/* status */}</div>
                    <ol>{
                        <li> /*insert button */ </li>
                        <li> /*select button */ </li>
                        <li> /*delete button */ </li>

                    }</ol>
                </div>
            </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Empresas />);

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);
