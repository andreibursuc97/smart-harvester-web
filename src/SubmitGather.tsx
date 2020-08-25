import React, { useState, useRef } from 'react';
import { useFormik } from 'formik';

export default function SubmitGather() {
    const formik = useFormik({
        initialValues: {
          email: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    return (
        <div>
            <h1>My form</h1>
            <form onSubmit={formik.handleSubmit}>
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       <button type="submit">Submit</button>
     </form>
        </div>
        // <form className="baseForm" onSubmit={formik.handleSubmit} noValidate>
        //     <input
        //         type="text"
        //         name="input"
        //         id="input"
        //         className="input"
        //         value={formik.values.input} // We also bind our email value
        //         onChange={formik.handleChange} // And, we bind our "onChange" event.
        //     />
        // </form>
    );

};