import { useNavigate } from 'react-router-dom'
import useValidation from '../hooks/useValidation'

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">userName</label>
      <input
        id="username"
        name="username"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
      />
      {formik.touched.username && formik.errors.username ? (
        <div>{formik.errors.username}</div>
      ) : null}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}

      <label htmlFor="passwordconfirm">PasswordConfirm</label>
      <input
        id="passwordconfirm"
        name="passwordconfirm"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.passwordconfirm}
      />
      {formik.touched.passwordconfirm && formik.errors.passwordconfirm ? (
        <div>{formik.errors.passwordconfirm}</div>
      ) : null}

      <button type="submit">Signup</button>
    </form>
  )
}

export default Signup