import {useState, useEffect, Component} from 'react'
// import data from "../data.json"
import { useNavigate } from 'react-router-dom';
import axios from "axios"


function Table(){

    const [word, setWord] = useState("");
    const [rows, setRows] = useState([])
    const [generalResults, setgeneralResults] = useState([])
    const [pages, setPages] = useState([])
    const navigate = useNavigate();


    useEffect(() => {
        loadData()
        // loadPages()
    },[]);



    // LOAD FULL DATA
    const loadData = async() =>{

        const config={
            headers:{
                " Access-Control-Allow-Origin": "*"
            }
        }

        const body={
            "username": "diroperativa@dinamicatecnologica.com",
            "access_key": "YmM0ZDVhOTktMTE1Yi00NWFlLTkzNTItMTcwY2ZkYWI4YTdmOmROdVF4KTA0NlA="
        }

        const req = await axios.post("https://private-anon-d4b9efd372-siigoapi.apiary-proxy.com/auth",body, config)
        // setToken(req.data.access_token)
        

        const req2 = await axios.get('https://private-anon-d4b9efd372-siigoapi.apiary-proxy.com/v1/customers?created_start=2021-02-17', {
            headers: {
                'Authorization': `Bearer ${req.data.access_token}`
            }
        })


        let results = req2.data.results?.map((value)=>
            <tr key={value.id} style={{cursor:'pointer'}} onClick={() => navigate('detail/'+value.identification)}>
                <td><input type="checkbox" aria-label="Checkbox for following text input"/></td>
                <td>{value.identification}</td>
                <td>{value.name[0]+" "+value.name[1]}</td>
                <td>{value.contacts[0].email}</td>
                <td>{value.contacts[0].phone.number}</td>
                <td>{value.address.address}</td>
                <td>nn</td>
                <td>nn</td>
                <td>nn</td>
                <td>nn</td>
                <td>nn</td>
                <td>nn</td>
            </tr>
        )
        setRows(results)
        setgeneralResults(req2.data)
        

        let totalpage = req2.data?.pagination.total_results/req2.data.pagination.page_size
        let element = []
        

        for (let index = 1; index <= Math.round(totalpage); index++) {
            element.push(<li key={index} class="page-item"><a class="page-link" href="#" style={{color:'black', textDecoration:'none'}}>{index}</a></li>)
        }

        setPages(element)

    }


    //SEARCH FUNCTION 
    const search = ((e)=>{
        setWord(e.target.value)
        const newData = generalResults.results.filter(function(item){
            const itemData = item.type.toLowerCase()
            const wordToFind = word.toLowerCase()


            //Another filters
            const type = item.type.toLowerCase()
            const firstName = item.name[0]?.toLowerCase()
            const lastname = item.name[1]?.toLowerCase()
            const email = item.contacts[0].email.toLowerCase()
            const contactNumber = item.contacts[0]?.phone?.number?.toLowerCase()
            const city = item.address.address.toLowerCase()
            const id = item.id.toLowerCase()

            const generalField = type+" "+firstName+" "+lastname+" "+email+" "+contactNumber+" "+city+" "+id

            return generalField.indexOf(wordToFind) > -1
        })

        if (e.target.value.length > 0) {//Searching...
            let results = newData.map((value)=>
                <tr key={value.id} style={{cursor:'pointer'}} onClick={() => navigate('detail/'+value.identification)}>
                    <td><input type="checkbox" aria-label="Checkbox for following text input"/></td>
                    <td>{value.identification}</td>
                    <td>{value.name[0]+" "+value.name[1]}</td>
                    <td>{value.contacts[0].email}</td>
                    <td>{value.contacts[0].phone.number}</td>
                    <td>{value.address.address}</td>
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
            loadData()
        }

        
    })


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
                { rows.length>0 ? (
                    <table className="table table-striped shadow-el" style={{fontSize:'10px'}}>
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
                    ):null}
                <nav aria-label="Page navigation example">
                    <ul class="pagination pagination-sm justify-content-center">
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
        </>
    )
}

export default Table