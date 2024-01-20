import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

const Shema= Yup.object().shape({
  name:Yup.string()
  .required(' name is Required'),
  price:Yup.number()
  .required('require'),
  title:Yup.string()
  .required('require'),
  img:Yup.string()
  .required('require')



})


function Add() {
  const [add, setAdd]= useState([])
  useEffect(()=>{
axios.get("http://localhost:5050/products").then((res)=>{
  setAdd(res.data)
})
  },[])


  return (
    <div className="mainAdd">
      <div className="forms">
        <Formik initialValues={{
          name:"",
          price:0,
          title:"",
          img:""
        }} validationSchema={Shema} 
        onSubmit={(value)=>{
          axios.post('http://localhost:5050/products', value).then((res)=>{
            console.log(res.data);
            setAdd([...add,res.data])
          })
        }}
        >
         {({errors, touched})=>(
           <Form>
           <Field type="text"  name='name' placeholder='name'/>
           {errors.name && touched.name && ( <div>{errors.name}</div>)}
           <Field type="number" name='price' placeholder='price'/>
           {errors.price && touched.price && ( <div>{errors.price}</div>)}
           
           <Field type="text" name='title' placeholder='title'/>
           {errors.title && touched.title && ( <div>{errors.title}</div>)}
           <Field type="text" name='img' placeholder='img'/>
           {errors.img && touched.img && ( <div>{errors.img}</div>)}


           <button type='submit'>Add</button>
         </Form>
         )}
        </Formik>
      </div>

      <div className="tab">
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>ImageLink</th>
          <th>Title</th>
          <th>price</th>
          <th>Button</th>
        </tr>
      </thead>
      <tbody>
        {
          add.map((elem,i)=>(
            <tr key={i}>
            <td>{elem._id}</td>
            <td>{elem.name}</td>
            <td>{elem.img}</td>
            <td>{elem.title}</td>
            <td>{elem.price}</td>
            <td><button
            onClick={()=>{
              axios.delete(`http://localhost:5050/products/${elem._id}`).then(()=>{
                axios("http://localhost:5050/products").then((res)=>{
                  setAdd(res.data)
                })
              })

            }}
            
            >Delete</button></td>
          </tr>
          ))
        }
       
    
      </tbody>
    </Table>
      </div>
    </div>
  )
}

export default Add