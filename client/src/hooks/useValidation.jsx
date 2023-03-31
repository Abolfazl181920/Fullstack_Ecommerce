import { useState } from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'

const useValidation = (initialValues) => {
  const [ validationSchema, setValidationSchema ] = useState(
    yup.object().shape({
      email: yup.string().email('Invalid email address').required('Email is required'),
      password: yup.string().min(8).max(20).required('password is required'),
      username: yup.string().min(2).max(50).required('username is required')
    })
  )

  const formik = useFormik({
    initialValues,
    validationSchema,
  })

  return { formik }
}

export default useValidation