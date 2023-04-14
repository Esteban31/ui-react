import {useState} from 'react'
import data from "../data.json"

function Table(){

    const [word, setWord] = useState("");
    const [rows, setRows] = useState([])
    let results = [];


    const loadData = (()=>{
        let aux = data.results.map((value)=>
            <tr key={value.id}>
                <td>checksito</td>
                <td>{value.id}</td>
                <td>{value.name[0]+" "+value.name[1]}</td>
                <td>{value.contacts[0].email}</td>
                <td>{value.contacts[0].phone.number}</td>
                <td>{value.address.city.city_name}</td>
                <td>nn</td>
                <td>nn</td>
                <td>nn</td>
                <td>nn</td>
                <td>nn</td>
                <td>nn</td>
            </tr>
        )
        setRows(aux)
    })

    



    if(word.length > 0) {//There're words
        
    }else{//There aren't
        results = data.results.filter((value)=>
            value.type.toLowerCase().includes(word.toLocaleLowerCase())
        )
    }

    const search = ((e)=>{
        setWord(e.target.value)
    })

    return (
        <>
            <div className="table-responsive" style={{padding:'2%', overflow:'none'}}>
                <form>
                    <div class="form-row">
                        <div class="col">
                            <div class="input-group mb-3 shadow-el">
                                <input type="text" class="form-control" placeholder="Busca" value={word} onChange={search} />
                                <div class="input-group-append">
                                    <span class="input-group-text" id="basic-addon2"><i className="fas fa-search"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <br />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID. Aportante</th>
                            <th>Nombre del Aportante</th>
                            <th>E-mail</th>
                            <th>Número de contacto</th>
                            <th>Ciudad o Municipio</th>
                            <th>última fecha de expedición de PILA</th>
                            <th>Canal de Expedición de Pila</th>
                            <th>Lugar de Expedición de Pila</th>
                            <th>Realizó la última PILA</th>
                            <th>Nombre del Autorizado</th>
                            <th>Operario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table