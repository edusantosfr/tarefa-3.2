import React from "react";
import "./index.css";

type Filme = {
    id: number;
    nome: string;
    genero: string;
    imagem: string;
}

type Props = {
    film: Filme[];
}

export const FilmsTable: React.FC<Props> = ({ film }) => {
    return (
        <table border={1} className="table">
            <thead className="tableHead">
                <tr>
                    <th><b><p>Banner</p></b></th>
                    <th><b><p>Nome</p></b></th>
                    <th><b><p>Gênero</p></b></th>
                </tr>
            </thead>
            <tbody className="tableBody">
                {film.length > 0 && film.map((element) => (
                    <tr key={element.id} className="tableItems">
                        <td><img src={element.imagem} alt="banner de filme" /></td>
                        <td><h3>{element.nome}</h3></td>
                        <td><p>{element.genero}</p></td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    );
};