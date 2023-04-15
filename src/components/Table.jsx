import {useState, useEffect} from 'react'
import data from "../data.json"
import Modal from "./Modal"




function Table(){

    const [word, setWord] = useState("");
    const [rows, setRows] = useState([])
    const [pages, setPages] = useState([])



    useEffect(() => {
        loadData(data)
        loadPages()
    },[]);



    //LOAD DATA FUNCTION
    const loadData = (data) => {
        let results = data.results.map((value)=>
            <tr key={value.id} style={{cursor:'pointer'}} data-toggle="modal" data-target="#exampleModal">
                <td><input type="checkbox" aria-label="Checkbox for following text input"/></td>
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
        setRows(results)
    }

    

    //SEARCH FUNCTION 
    const search = ((e)=>{
        setWord(e.target.value)
        const newData = data.results.filter(function(item){
            const itemData = item.type.toLowerCase()
            const wordToFind = word.toLowerCase()


            //Another filters
            const type = item.type.toLowerCase()
            const firstName = item.name[0].toLowerCase()
            const lastname = item.name[1].toLowerCase()
            const email = item.contacts[0].email.toLowerCase()
            const contactNumber = item.contacts[0].phone.number.toLowerCase()
            const city = item.address.city.city_name.toLowerCase()
            const id = item.id.toLowerCase()

            const generalField = type+" "+firstName+" "+lastname+" "+email+" "+contactNumber+" "+city+" "+id

            return generalField.indexOf(wordToFind) > -1
        })

        if (e.target.value.length > 0) {//Searching...
            let results = newData.map((value)=>
                <tr key={value.id}>
                    <td><input type="checkbox" aria-label="Checkbox for following text input"/></td>
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
            setRows(results)
        }else{//Not Searching...
            loadData(data)
        }

        
    })


    //LOAD PAGINATION
    const loadPages = () => {
        let totalpage = data.pagination.total_results/data.pagination.page_size
        let element = []
        

        for (let index = 1; index <= Math.round(totalpage); index++) {
            element.push(<li key={index} class="page-item"><a class="page-link" href="#" style={{color:'black', textDecoration:'none'}}>{index}</a></li>)
        }

        setPages(element)

    }


    return (
        <>
            <div className="table-responsive" style={{padding:'2%', overflow:'none'}}>
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
                <br />
                <table className="table table-striped" style={{fontSize:'10px'}}>
                    <thead>
                        <tr>
                            <th><input type="checkbox" aria-label="Checkbox for following text input"/></th>
                            <th>ID. Aportante</th>
                            <th>Nombre del Aportante</th>
                            <th>E-mail</th>
                            <th>Número de contacto</th>
                            <th>Ciudad o Municipio</th>
                            <th>Última fecha de expedición de PILA</th>
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
                <nav aria-label="Page navigation example">
                    <ul class="pagination pagination-sm justify-content-end">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabIndex={-1}>Anterior</a>
                        </li>
                        {pages}
                        <li class="page-item">
                            <a class="page-link" href="#" style={{color:'black', textDecoration:'none'}}>Siguiente</a>
                        </li>
                    </ul>
                    </nav>
            </div>
            <Modal/>
        </>
    )
}

export default Table