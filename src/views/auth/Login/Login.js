import axios from 'api/axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import { Header } from 'components/organisms/Header/Header';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { FormField } from 'components/molecules/FormField/FormField';
import { Button } from 'components/organisms/Button/Button';
import { requests } from 'api/requests';
import { Wrapper } from 'views/auth/Login/Login.styles';

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Pole wymagane';
  } else if (!/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Zły adres email';
  }

  if (!values.password) {
    errors.password = 'Pole wymagane';
  }

  return errors;
};

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || requests.selectUserRole;

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(requests.login, values);
        const accessToken = response?.data?.token;
        const roles = [response?.data?.permission];
        localStorage.setItem('token', JSON.stringify(accessToken));
        localStorage.setItem('roles', JSON.stringify(roles));
        localStorage.setItem('email', JSON.stringify(formik.values.email));
        navigate(from, { replace: true });
      } catch (error) {
        console.error(error.message);
      }
    },
  });

  return (
    <>
      <Header title="Logowanie do systemu inwentaryzacji" />
      <ContentWrapper>
        <ViewWrapper as="form" onSubmit={formik.handleSubmit}>
          <Wrapper>
            <FormField
              label="Email"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              error={formik.touched.email && formik.errors.email ? formik.errors.email : null}
            />
            <FormField
              label="Hasło"
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              error={formik.touched.password && formik.errors.password ? formik.errors.password : null}
            />
            <Button name="blue" text="Zaloguj" type="submit" />
          </Wrapper>
        </ViewWrapper>
      </ContentWrapper>
    </>
  );
};
