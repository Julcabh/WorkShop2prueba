import { render } from '@testing-library/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { endpoint } from '../../helpers/Url';
import { CssJContainer, Text } from '../../styles/HomeStyles';
import { Form, Imagen, Question } from '../../styles/Preguntas';


export const Html = ()=>{
    const [question, setQuestion] = useState([]);

    useEffect(()=>{
        getData()
    },[])

    const getData = ()=>{
        axios.get(endpoint + "html/1")
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
                </div >
                <Text className='headPreguntas'>
                    {pregunta}
                </Text>
            </CssJContainer>
            <Form>
                <Question >
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

             <a href='/html/1' className='btn'>   <button > comprobar</button> </a>
            </Form>
            </div>
    }
        </>
    )
}

export const Html1 = ()=>{
    const [question, setQuestion] = useState([]);

    useEffect(()=>{
        getData()
    },[])

    const getData = ()=>{
        axios.get(endpoint + "html/2")
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

             <a href='/html/2' className='btn'>  <button > comprobar</button> </a> 
            </Form>
            </div>
    }
        </>
    )
}


export const Html2 = ()=>{
    const [question, setQuestion] = useState([]);

    useEffect(()=>{
        getData()
    },[])

    const getData = ()=>{
        axios.get(endpoint + "html/3")
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

             <a href='/home' className='btn'>    <button > comprobar</button> </a>
            </Form>
            </div>
    }
        </>
    )
}