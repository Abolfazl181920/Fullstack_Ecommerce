import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../less/pages/signup.less'

const Signup = () => {

  const [ newUser, setNewUser ] = useState({
    username: 'RezaPahlavi',
    email: 'RezaPahlavi@gmail.com',
    password: '123456789'
  })

  const navigate = useNavigate()

  // useEffect(() => {
  //   axios.post(`http://localhost:3001/signup`, newUser).then(response => {
  //     console.log(response.data)
  //   })
  //   .catch(error => {
  //     console.log(error.response.data)
  //   })
  // })

  return (
    <div className='container'>
      <h1 className='welcome'>Welcome to our e-commerce app <br /> Please Signup </h1>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false)
            navigate("/dashboard")
          }, 400)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label className='signup__label' htmlFor="username">Username</label>
              <Field type="text" name="username" className="form-control" />
              <ErrorMessage name="username" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label className='signup__label' htmlFor="email">Email</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" className="form-control" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field type="password" name="confirmPassword" className="form-control" />
              <ErrorMessage name="confirmPassword" component="div" className="error-message" />
            </div>

            <span>Do you already have an account? <Link to='/signin'>Signin</Link> </span>
            <button type="submit" className="signup__btn" disabled={isSubmitting}>
              Signup
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Signup