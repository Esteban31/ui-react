import { useNavigate } from 'react-router-dom';


function Login(){

    const navigate = useNavigate();


    return (
        <>
            <div className="container" style={{margin:'10px'}}>
                <div className="row">
                    <div className="col-md-6" style={{borderRadius:'10px',height:'100vh',width:'100hv',backgroundImage:`url("https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}></div>
                    <div className="col-md-6 d-flex justify-content-center" style={{marginTop:'100px'}}>
                        <center>
                            <h1 style={{color:'#000027'}}>Siempre serás <br/> bienvenido a <br /> Pago Simple.</h1>
                            <br />
                            <small>Por favor ingresa tus datos</small>
                            <br />
                            <form>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" class="form-control shadow-el" placeholder="Ingresa tu email"/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Contraseña</label>
                                    <input type="password" class="form-control shadow-el" placeholder="**********************"/>
                                </div>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label" for="exampleCheck1">Recordarme por 30 días</label>
                                </div>
                                <br />
                                <button type="submit" class="btn" style={{backgroundColor:'#000027', color:'white'}} onClick={() => navigate('app')}>Ingresar</button>
                                <br />
                                <a href="#" style={{color:'#000027', textDecoration:'none'}}>Olvidé mi contraseña</a>
                            </form>
                        </center>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Login