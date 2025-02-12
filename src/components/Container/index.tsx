import React, { useState, useEffect } from "react";
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
    const [checked, setchecked] = useState<number[]>([]);
    const [openedModal, setOpenedModal] = useState<boolean>(false);

    const handleCheckboxChange = (id: number) => {
        if (checked.includes(id)) {
            setchecked(checked.filter(element => element !== id));
        } else {
            setchecked([...checked, id]);
        }
    };

    useEffect(() => {
        if (checked.length > 0) {
            setOpenedModal(true);
        }
    }, [checked]);

    const closeModal = () => setOpenedModal(false);

    return (
        <div>
            <table border={1} className="table">
                <thead className="tableHead">
                    <tr>
                        <th><b><p>Banner</p></b></th>
                        <th><b><p>Nome</p></b></th>
                        <th><b><p>Gênero</p></b></th>
                        <th><b><p>Visto</p></b></th>
                    </tr>
                </thead>
                <tbody className="tableBody">
                    {film.length > 0 && film.map((element) => (
                        <tr key={element.id} className="tableItems">
                            <td><img src={element.imagem} alt="banner de filme" /></td>
                            <td><h3>{element.nome}</h3></td>
                            <td><p>{element.genero}</p></td>
                            <td><input type="checkbox" checked={checked.includes(element.id)} onChange={() => {
                                handleCheckboxChange(element.id)
                            }} /></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            {openedModal && (
                <div className="modalStyle">
                    <div className="modalContentStyle">
                        <h3>Filmes Vistos:</h3>
                        {checked.length > 0 && checked.map((id) => {
                            const selectedMovie = film.find((element) => element.id === id);
                            return <li key={id}>{selectedMovie?.nome}</li>;
                        })
                        }
                        <button className="closeBtn" onClick={closeModal}>Fechar</button>
                    </div>
                </div>
            )}
        </div>
    );
}