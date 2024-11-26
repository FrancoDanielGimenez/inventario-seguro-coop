import '../login/login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () =>{
    return(
        <>
        <div className='conteinerLogin'>
          <h2>Inicio Sesión</h2>
          <img src="/src/img/logoCoop.png" alt="" width={100} height={100}/>
          <Form className='conteinerForm'>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label><b>Usuario</b></Form.Label>
                <Form.Control type="text" placeholder="Ingrese su Usuario" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label><b>Contraseña</b></Form.Label>
                <Form.Control type="password" placeholder="Ingrese su contraseña" />
            </Form.Group>
          </Form>
          <Button variant="success" className='btnLogin'>Ingresar</Button>
        </div>
        </>
    )
}

export default Login;