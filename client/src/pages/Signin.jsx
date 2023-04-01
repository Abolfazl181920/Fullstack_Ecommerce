import { useNavigate, Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../less/pages/signup.less'

const Signup = () => {

  const navigate = useNavigate()

  return (
    <div className='container'>
      <h1 className='welcome'>Please Signin </h1>
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
          password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Required'),
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
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" className="form-control" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <span>Don't have an account? <Link to='/'>Signup</Link> </span>
            <button type="submit" className="signup__btn" disabled={isSubmitting}>
              Signin
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Signup