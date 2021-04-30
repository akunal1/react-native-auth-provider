import React, {useContext} from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';
import {Formik} from 'formik';
import {connect} from 'react-redux';

import A1Button from '../../Components/Button/A1Button';
import A1RowSeparator from '../../Components/RowSeparator/A1RowSeparator';
import A1Text from '../../Components/Text/A1Text';
import A1TextInput from '../../Components/TextInput/A1TextInput';
import {useTheme} from '../../Themes/ThemeProvider';
import {getLoginStyle} from './loginStyle';
import {
  loginInitialValue,
  loginValidationSchema,
} from './loginValidationSchema';
import {A1HelperText} from '../../Components/HelperText/A1HelperText';
import {authRequest} from '../../Store/Auth/action';
import {AuthParams} from '../../Types/auth/authTypes';
import {AuthContext} from '../../App';

interface Props {
  navigation?: any;
}
const Login = (props: Props) => {
  const {colors} = useTheme();
  const styles = getLoginStyle(colors);
  const {navigation}: Props = props;
  const signUpNavigation = () => {
    navigation && navigation.navigate('Signup');
  };

  const {login} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <View style={styles.subScreenContainer}>
          <View style={styles.screenPadding}>
            <Formik
              initialValues={loginInitialValue}
              validationSchema={loginValidationSchema}
              onSubmit={async values => {
                await login({
                  ...values,
                  grant_type: 'password',
                });
              }}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                isSubmitting,
              }) => (
                <>
                  <A1TextInput
                    label="Email"
                    textContentType="emailAddress"
                    placeholder="Enter your email id"
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                    error={!!errors.username && !!touched.username}
                  />
                  <A1HelperText
                    title={errors.username}
                    type="error"
                    visible={!!errors.username && !!touched.username}
                    iconName="envelope"
                  />
                  <A1TextInput
                    label="Password"
                    textContentType="password"
                    placeholder="Enter your password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    secureTextEntry={true}
                    value={values.password}
                    error={!!errors.password && !!touched.password}
                  />
                  <A1HelperText
                    title={errors.password}
                    type="error"
                    visible={!!errors.password && !!touched.password}
                    iconName="eye-slash"
                  />

                  <View style={styles.loginBtnSection}>
                    <A1Button>Forgot Password?</A1Button>
                    <A1Button
                      mode="contained"
                      onPress={handleSubmit}
                      disabled={isSubmitting}>
                      LOGIN
                    </A1Button>
                  </View>
                </>
              )}
            </Formik>
          </View>
          <View style={styles.orContainer}>
            <A1RowSeparator />
            <A1Text style={styles.orSpacing}>OR</A1Text>
            <A1RowSeparator />
          </View>

          <View style={styles.orSpacing}>
            <A1Button mode="outlined" onPress={signUpNavigation}>
              CREATE ACCOUNT
            </A1Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  login: (params: AuthParams) => dispatch(authRequest(params)),
});

export default connect(null, mapDispatchToProps)(Login);
