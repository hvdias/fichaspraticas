import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';

class EditarAluno extends Component {
    render() {

        return (
            <form>
                <div class="form-group">
                    <label for="id">ID</label>
                    <input type="number" class="form-control" id="id" placeholder="Escolhe o teu ID"></input>
                </div>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="Email"></input>
                </div>
                <div class="form-group">
                    <label for="pass">Password</label>
                    <input type="password" class="form-control" id="pass" placeholder="Password"></input>
                </div>
                <div class="form-group">
                    <label for="morada">Morada</label>
                    <input type="text" class="form-control" id="morada" placeholder="Morada"></input>
                </div>
                <div class="form-group">
                    <label for="telemovel">Número de telemóvel</label>
                    <input type="text" class="form-control" id="telemovel" placeholder="Número de telemóvel"></input>
                </div>
                <div>
                    <Button color="info">Editar</Button>
                </div>
            </form>
        )
    }
}

export default EditarAluno;