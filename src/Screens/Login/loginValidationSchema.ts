import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Please enter email'),
  password: Yup.string().required('Please enter Password'),
});

export const loginInitialValue = {
  email: 'aishwaryadas28@gmail.com',
  password: '123456',
};
