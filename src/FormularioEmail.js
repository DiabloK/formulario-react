// src/FormularioEmail.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function FormularioEmail() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email inválido')
        .required('Obrigatório'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div style={{ color: 'red' }}>{formik.errors.email}</div>
      ) : null}

      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioEmail;
