import React from 'react';
import { Link } from 'react-router-dom';
import { Botones, ButtonContainer, CategoriasContainer, Circulo, CssJContainer, HomeContainer, ImgBttn, ImgCategory, Text, TitleContainer } from '../styles/HomeStyles';


const Home = () => {
  return(
      <HomeContainer>
          <TitleContainer>
              <h3>Practica tus conocimientos en la categoria que prefieras</h3>
          </TitleContainer>

          <CategoriasContainer>
              <div>
                 <a href='/html'>   <Circulo>
                    <ImgCategory src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643377834/worshop/Ellipse_9_xs1gib.png' alt='HTML' />
                    </Circulo>
                    </a>
              </div>
              <Text>HTML</Text>                  
              

              <CssJContainer>
                  <div>
                     <a href='/CSS/1'> <Circulo>
                            <ImgCategory src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643377834/worshop/css_ve8iym.png' alt='CSS' />
                        </Circulo>
                        </a>   
                      <Text>CSS</Text>
                  </div>

                  <div>
                    <a href='/JS/1'>  <Circulo>
                      <ImgCategory src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643377835/worshop/js_azalbz.png' alt='JS' />
                      </Circulo>
                      </a>
                      <Text>JS</Text>
                  </div>
             </CssJContainer>
          </CategoriasContainer>


          <ButtonContainer>
            <Botones><Link to={"/home"}><ImgBttn src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643389042/worshop/home_bk2c3h.png' /></Link></Botones>
            <Botones><Link to={"/estadisticas"}><ImgBttn src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643389042/worshop/stadist_bw5izs.png' /></Link></Botones>
            <Botones><Link to={"/registro"}><ImgBttn src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643389042/worshop/profile_y7umrz.png' /></Link></Botones>
          </ButtonContainer>


          <div className='white'>
                <div className='grid'></div>
          </div>
      </HomeContainer>
  );
};

export default Home;