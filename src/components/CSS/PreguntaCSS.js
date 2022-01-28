import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { endpoint } from '../../helpers/Url';
import { CssJContainer, Text } from '../../styles/HomeStyles';
import { Form, Imagen, Question } from '../../styles/Preguntas';

const Pregunta1 = () => {
  
    const [question, setQuestion] = useState([]);

    useEffect(()=>{
        getData()
    },[])

    const getData = ()=>{
        axios.get(endpoint + "css/4")
            .then(res =>{
                setQuestion(res.data)
            })
            .catch(error =>{
                console.log(error);
            })
    }
    const {id, pregunta, respuesta1, respuesta2, respuesta3} = question

    return(
        <>
    {
            <div key={id}>
            <CssJContainer className='cabeceraPre'>
                <div className='headPreguntas'>
                    <Imagen src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643377835/worshop/Property_1_3_y1jwbp.png' alt="avatar" />
                </div>
                <Text className='headPreguntas'>
                    {pregunta}
                </Text>
            </CssJContainer>
            <Form>
                <Question>
                    <label>{respuesta1}</label>
                    <input type="checkbox"></input>
                </Question>
                <Question>
                    <label>{respuesta2}</label>
                    <input type="checkbox"></input>
                </Question>
                <Question>
                    <label>{respuesta3}</label>
                    <input type="checkbox"></input>
                </Question>

            <a href='/CSS/2' className='btn' >  <button > comprobar</button> </a>  
            </Form>
            </div>
    }
        </>
    )
    
}
export const Pregunta2 = () => {
    const [question, setQuestion] = useState([]);

    useEffect(()=>{
        getData()
    },[])

    const getData = ()=>{
        axios.get(endpoint + "css/5")
            .then(res =>{
                setQuestion(res.data)
            })
            .catch(error =>{
                console.log(error);
            })
    }
    const {id, pregunta, respuesta1, respuesta2, respuesta3} = question

    return(
        <>
    {
            <div key={id}>
            <CssJContainer>
                <div>
                    <Imagen src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643377835/worshop/Property_1_3_y1jwbp.png' alt="avatar" />
                </div>
                <Text>
                    {pregunta}
                </Text>
            </CssJContainer>
            <Form>
                <Question>
                    <label>{respuesta1}</label>
                    <input type="checkbox"></input>
                </Question>
                <Question>
                    <label>{respuesta2}</label>
                    <input type="checkbox"></input>
                </Question>
                <Question>
                    <label>{respuesta3}</label>
                    <input type="checkbox"></input>
                </Question>

                <a href='/CSS/1' className='btn'>  <button > comprobar</button> </a>  
            </Form>
            </div>
    }
        </>
    )
}

export const Pregunta3 = () => {
    const [question, setQuestion] = useState([]);

    useEffect(()=>{
        getData()
    },[])

    const getData = ()=>{
        axios.get(endpoint + "css/6")
            .then(res =>{
                setQuestion(res.data)
            })
            .catch(error =>{
                console.log(error);
            })
    }
    const {id, pregunta, respuesta1, respuesta2, respuesta3} = question

    return(
        <>
    {
            <div key={id}>
            <CssJContainer>
                <div>
                    <Imagen src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643377835/worshop/Property_1_3_y1jwbp.png' alt="avatar" />
                </div>
                <Text>
                    {pregunta}
                </Text>
            </CssJContainer>
            <Form>
                <Question>
                    <label>{respuesta1}</label>
                    <input type="checkbox"></input>
                </Question>
                <Question>
                    <label>{respuesta2}</label>
                    <input type="checkbox"></input>
                </Question>
                <Question>
                    <label>{respuesta3}</label>
                    <input type="checkbox"></input>
                </Question>

                <a href='/home' className='btn'>  <button > comprobar</button> </a>  
            </Form>
            </div>
    }
        </>
    )
};

export default Pregunta1;
