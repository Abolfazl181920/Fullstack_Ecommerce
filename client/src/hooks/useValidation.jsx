import { useState } from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'

const useValidation = (initialValues) => {
  const [validationSchema, setValidationSchema] = useState(
    yup.object().shape({
      email: yup.string().email('Invalid email address').required('Required'),
      password: yup.string().required('Required'),
    })
  )

  const formik = useFormik({
    initialValues,
    validationSchema,
  })

  return { formik }
}

export default useValidation