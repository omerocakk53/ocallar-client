import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import { AuthService } from '@/services'
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from || { pathname: '/admin', search: '' }

  const validationSchema = Yup.object({
    email: Yup.string().email('Geçersiz e-posta').required('E-posta zorunludur'),
    password: Yup.string().min(6, 'En az 6 karakter olmalı').required('Şifre zorunludur'),
  })

  const handleSubmit = async (values) => {
    toast.promise(AuthService.login(values), {
      loading: 'Giriş yapılıyor...',
      error(err) {
        console.log(err)
        return 'Giriş başarısız!'
      },
      success(data) {
        navigate(from.pathname + from.search, { replace: true })
        console.log(data)
        return 'Giriş başarılı!'
      },
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Giriş Yap</h2>

        <Formik
          initialValues={{ email: 'mail@address.com', password: 'my_password_1s_5trong' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">E-Posta Adresi</label>
              <Field
                type="email"
                name="email"
                className="mt-1 block w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="ornek@mail.com"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Şifre</label>
              <Field
                type="password"
                name="password"
                className="mt-1 block w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="••••••••"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Giriş Yap
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Login
