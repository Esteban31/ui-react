import '../../src/index.css'

import Table from './Table'

function MainContent(){

    return (
        <>
            <div className="container">
                <center>
                    <br />
                    <h2>Autorizaciones Pago Simple.</h2>
                    <br />
                    <button class="btn" style={{backgroundColor:'#DEDEDE'}}><i class="fas fa-star"></i>Agregar Visita de PILA</button>
                    <br /><br />
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">Total Aportes</h5>
                                                <h4>04</h4>
                                                <span class="badge badge-pill badge-secondary"><i className='fas fa-calendar'>Oct 2018 a oct 2019</i></span>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">Pilas totales expedidas</h5>
                                                <h4>04</h4>
                                                <span class="badge badge-pill badge-secondary"><i className='fas fa-calendar'>Oct 2018 a oct 2019</i></span>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </center>
            </div>
            <br />
            <Table/>
        </>
    )

}

export default MainContent