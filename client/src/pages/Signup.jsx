import { useNavigate } from 'react-router-dom'
import useValidation from '../hooks/useValidation'
import '../less/pages/signup.less'

const Signup = () => {

  const { formik } = useValidation({ email: '', password: '', passwordconfirm: '', username: '' })
  const redirect = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    if (formik.isValid) {
      redirect("/dashboard")
    }
  }

  return (
    <div className='flex'>
      <form className='signup__container' onSubmit={handleSubmit}>
      <input
        id="username"
        name="username"
        type="text"
        className='input'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
      />
      {formik.touched.username && formik.errors.username ? (
        <div>{formik.errors.username}</div>
      ) : null}

      <br />

      <input
        id="email"
        name="email"
        type="email"
        className='input'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <br />

      <input
        id="password"
        name="password"
        type="password"
        className='input'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}

      <br />

      <input
        id="passwordconfirm"
        name="passwordconfirm"
        type="password"
        className='input'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.passwordconfirm}
      />
      {formik.touched.passwordconfirm && formik.errors.passwordconfirm ? (
        <div>{formik.errors.passwordconfirm}</div>
      ) : null}

      <br />

      <button type="submit">Signup</button>
    </form>
    </div>
  )
}

export default Signup