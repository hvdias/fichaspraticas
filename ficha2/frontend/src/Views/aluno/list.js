import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';
import axios from 'axios';

class ListaAlunos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaAlunos: []
        }
    }

    componentDidMount() {
        const url = "http://localhost:3001/alunos";

        axios.get(url).then(res => {
            if (res.data.success) {
                const data = res.data.data;
                this.setState({ listaAlunos: data });
            } else {
                console.log('Erro');
            }
        })
            .catch(error => {
                console.log("Error msg: " + error);
            })
    }

    render() {

        return (
            <Table>
                <table class="table table-hover table-striped">
                    <thead class="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Morada</th>
                            <th>Telefone</th>
                            <th>Editar</th>
                            <th>Apagar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.preencherDados()}
                    </tbody>
                </table>
            </Table>
        );
    }
    preencherDados() {
        return this.state.listaAlunos.map((data, index) => {
            return (
                <tr key={index}>
                    <td>{data.id}</td>
                    <td>{data.nome}</td>
                    <td>{data.email}</td>
                    <td>{data.morada}</td>
                    <td>{data.telemovel}</td>
                    <td>
                        <Button color="info">Editar</Button>
                    </td>
                    <td>
                        <Button color="danger">Apagar</Button>
                    </td>
                </tr>
            )
        }
        );
    }
}

export default ListaAlunos;