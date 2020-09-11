import React from 'react';
import { useForm } from "react-hook-form";
import './Shipment.css';
const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (

      <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
              <input name="name" ref={register({ required: true })} placeholder='Name'/>
              {errors.name && <span className="error">Name field is required</span>}
              <input name="email" ref={register({ required: true })} placeholder='Email'/>
              {errors.email && <span className="error">Email field is required</span>}
              <input name="address" ref={register({ required: true })} placeholder='Address'/>
              {errors.address && <span className="error">Address field is required</span>}
              <input name="phone" ref={register({ required: true })} placeholder='Phone'/>
              {errors.phone && <span className="error">Phone field is required</span>}
     
        
        <input className='input'  type="submit" />
      </form>
    );
};

export default Shipment;