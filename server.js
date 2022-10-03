'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

const { Pool, Client } = require('pg')

const query = require('./queries')

const client = new Client()
await client.connect()

class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={function () { console.log('click'); }}>        {this.props.value}
            </button>
        );
    }
}

class Button extends React.Component {
    render() {
        return (
            <button className="button">
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
                    console.log{`nome= $empresas[0][0], cnpj= $empresas[0][1]` }
                </div>
                <div className="Empresa-row">
                    console.log{`nome= $empresas[1][0], cnpj= $empresas[1][1]` }
                </div>
                <div className="Empresa-row">
                    console.log{`nome= $empresas[2][0], cnpj= $empresas[2][1]` }
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
                    <ol>{/* TODO */}</ol>
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
