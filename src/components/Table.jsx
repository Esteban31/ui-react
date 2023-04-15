import {useState, useEffect} from 'react'
import data from "../data.json"
import { useNavigate } from 'react-router-dom';
import axios from "axios"




function Table(){

    const [word, setWord] = useState("");
    const [rows, setRows] = useState([])
    const [pages, setPages] = useState([])
    const navigate = useNavigate();


    useEffect(() => {
        loadData(data)
        loadPages()
    },[]);



    //LOAD DATA FUNCTION
    const loadData = async (data) => {

        // const config = {
        //     headers:{
        //         Authorization: "",
        //     }
        // };

        // const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IkQ3OTkxNEU2MTJFRkI4NjE5RDNFQ0U4REFGQTU0RDFBMDdCQjM5QjJSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IjE1a1U1aEx2dUdHZFBzNk5yNlZOR2dlN09iSSJ9.eyJuYmYiOjE2ODE1ODE1NjQsImV4cCI6MTY4MTY2Nzk2NCwiaXNzIjoiaHR0cDovL21zLXNlY3VyaXR5c2VydmljZTo1MDAwIiwiYXVkIjoiaHR0cDovL21zLXNlY3VyaXR5c2VydmljZTo1MDAwL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IlNpaWdvQVBJIiwic3ViIjoiMTE5NjI4MSIsImF1dGhfdGltZSI6MTY4MTU4MTU2NCwiaWRwIjoibG9jYWwiLCJuYW1lIjoiZGlyb3BlcmF0aXZhQGRpbmFtaWNhdGVjbm9sb2dpY2EuY29tIiwibWFpbF9zaWlnbyI6ImRpcm9wZXJhdGl2YUBkaW5hbWljYXRlY25vbG9naWNhLmNvbSIsImNsb3VkX3RlbmFudF9jb21wYW55X2tleSI6IkRJTkFNSUNBVEVDTk9MT0dJQ0FTQVMiLCJ1c2Vyc19pZCI6IjI1NTIiLCJ0ZW5hbnRfaWQiOiIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjEwMjk1IiwidXNlcl9saWNlbnNlX3R5cGUiOiIwIiwicGxhbl90eXBlIjoiMTQiLCJ0ZW5hbnRfc3RhdGUiOiIxIiwibXVsdGl0ZW5hbnRfaWQiOiIxNTMiLCJjb21wYW5pZXMiOiIwIiwiYXBpX3N1YnNjcmlwdGlvbl9rZXkiOiI1ODRiNDczYzA0YTU0OTI5YWVlMDdlZjc1YmUyOGMzZiIsImFjY291bnRhbnQiOiJmYWxzZSIsImp0aSI6IjhEMzBEMjc3QjRGMEVFMkRENjIwMjA0OTE4Q0RENTM1IiwiaWF0IjoxNjgxNTgxNTY0LCJzY29wZSI6WyJTaWlnb0FQSSJdLCJhbXIiOlsiY3VzdG9tIl19.f_rEJLnJlT4D_qryu0tK767rsPB0Jdhi11TXgIFO2XhOU207iwFYDKteVODasFDWCmdXzohLQzCFz63RtGqsrsdYFGTCsYpM0aAXzRsPiDzPXZXfAL52-MT2XW7Bou3dnAVmnxH9B2nAbS68LYt4KMyvunn9TfZjsOC-j9ryXyCKoEwwpxsALpIqExR9XSd8q6XJRqES5EkvO8JjIMFV9w3TCU6te0Fk_PR4_R2qBlvC6LFqBV6djcOZrdpZWOJfu9uur3TELldr5tv_xxNohUh4qj4i5_BcnwzKG6Hcg0tlHqbpI3t1HOX0vroUwbHj_wFstH28pMdwwa-oElIO9Q"

        // // const req = await axios.get("https://api.siigo.com/v1/invoices", {} ,config)


        // const req = await axios.post('https://api.siigo.com/v1/invoices', { hello: 'world' }, {
        // headers: {
        //     // 'application/json' is the modern content-type for JSON, but some
        //     // older servers may use 'text/json'.
        //     // See: http://bit.ly/text-json
        //     'Authorization':token,
        //     'content-type': 'text/json',
        //     'Access-Control-Allow-Origin': '*',
        //     'origin':'x-requested-with',
        // }
        // });

        // console.log(req)

        let results = data.results.map((value, index)=>
            <tr key={value.id} style={{cursor:'pointer'}} onClick={() => navigate('detail/'+value.name[0]+"-"+value.name[1])}>
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
                <tr key={value.id} style={{cursor:'pointer'}} onClick={() => navigate('detail/'+value.name[0]+"-"+value.name[1])}>
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
        </>
    )
}

export default Table