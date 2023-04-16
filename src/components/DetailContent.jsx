
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from 'react-router-dom';



function DetailContent(){

    const [detailData, setDetailData] = useState([])
    const [customerInfo, setCustomerInfo] = useState([])
    const [customerName, setCustomerName] = useState(null)


    let { id } = useParams();


    useEffect(()=>{
        getDetailData()
        getCustomerInfo()
    },[])

    // GET CUSTOMER INFO
    const getCustomerInfo = async() => {
        
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
        

        const req2 = await axios.get('https://private-anon-d4b9efd372-siigoapi.apiary-proxy.com/v1/customers?identification='+id, {
            headers: {
                'Authorization': `Bearer ${req.data.access_token}`
            }
        })

        let results = req2.data.results.map((value)=>
            <tr key={value.id}>
                <td>nn</td>
                <td>nn</td>
                <td>nn</td>
                <td>nn</td>
                <td>nn</td>
                <td>{value.phones[0]?.number}</td>
                <td>{value.address.address}</td>
                <td>{value.address.city.city_code}</td>
                <td>{value.address.city.city_name}</td>
                <td>nn</td>
                <td>nn</td>
            </tr>
        )
        setCustomerInfo(results)
        setCustomerName(req2.data.results[0].name[0])

    }



    // GET DETAIL INVOICES FROM CUSTOMER
    const getDetailData = async()=>{
        
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

        console.log(req.data.access_token)
        

        const req2 = await axios.get('https://private-anon-d4b9efd372-siigoapi.apiary-proxy.com/v1/invoices?customer_identification='+id, {
            headers: {
                'Authorization': `Bearer ${req.data.access_token}`
            }
        })


        let results = req2.data.results.map((value)=>
            <tr key={value.id}>
                <td>{value.metadata.created}</td>
                <td>{value.date}</td>
                <td>nn</td>
                <td>nn</td>
                <td>nn</td>
                <td>{value.customer.id}</td>
                <td>nn</td>
                <td>nn</td>
                <td>dn</td>
                <td><i className="fas fa-book"></i></td>
            </tr>
        )
        setDetailData(results)

    }


    return (
        <>
            <div class="card text-center" style={{margin:'6px'}}>
                <div class="card-header" style={{backgroundColor:'#000000', color:'white', height:'80px'}}>
                    <h1>Nuestros Clientes pago Simple</h1>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Detalles de nuestro Cliente</h5>
                    <hr style={{width:'20%'}} />
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <center>
                                        <i className="fas fa-user" style={{fontSize:'400%'}}></i>
                                    </center>
                                </div>
                                <div className="col-md-6">
                                    <center>
                                        <p class="card-text">{customerName}</p>
                                        <p class="card-text">CC: {id}</p>
                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                        <table className="table table-striped shadow-el" style={{fontSize:'10px', marginTop:'10px'}}>
                            <thead>
                                <tr>
                                    <th>Fecha de Nacimiento</th>
                                    <th>Lugar expedición del documento</th>
                                    <th>Edad</th>
                                    <th>Género</th>
                                    <th>E-mail</th>
                                    <th>Número telefónico</th>
                                    <th>Dirección</th>
                                    <th>Código Ciudad o Municipio</th>
                                    <th>Ciudad o Municipio</th>
                                    <th>Autoriza Pila</th>
                                    <th>Autoriza Entidades financieras</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customerInfo}
                            </tbody>
                        </table>

                    </div>

                    <div className="table-responsive" style={{padding:'2%', overflow:'none'}}>
                        <br />
                        { detailData.length>0 ? (
                            <table className="table table-striped" style={{fontSize:'10px'}}>
                                <thead>
                                    <tr>
                                        <th>Fecha de última creación de Pila</th>
                                        <th>Lugar de expedición de Pila</th>
                                        <th>Ciudad</th>
                                        <th>Realizó la última Pila</th>
                                        <th>Tipo de ID</th>
                                        <th>ID. del tercero</th>
                                        <th>Nombre Completo</th>
                                        <th>E-mail</th>
                                        <th>Número de Contacto</th>
                                        <th>Documentos firmados</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {detailData}
                                </tbody>
                            </table>
                        ):null}
                    </div>

                </div>
            </div>
        </>
    )
}


export default DetailContent