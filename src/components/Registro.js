import React from 'react';
import { Body, Contenedor, Img, H1, Button, Input, P, A  } from '../styles/InicioStyles';

const Registro = () => {
  return (
    <div>
      <Body>
        <Contenedor>
          <Img src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643377834/worshop/Color_Purple_Container_Yes_nrvkmv.png' alt="imagen"/>
          <H1>Registrar cuenta</H1>
          <P>Correo electronico</P>
          <Input type="text" placeholder="Ingrese su Nombe"></Input>
          <P>Correo electronico</P>
          <Input type="text" placeholder="Ingrese su correo electronico"></Input>
          <P>Contraseña</P>
          <Input type="password" placeholder="Ingrese su contraseña"></Input>
          <br></br>
          <Button>Registrar cuenta</Button>
          <P>¿ya tienes una cuenta?  <A href="/Inicio">Log In</A></P>
        </Contenedor>
      </Body>

  </div>
  );
};
export default Registro;