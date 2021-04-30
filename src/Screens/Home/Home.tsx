import React, {memo, useContext} from 'react';
import {AuthContext} from '../../App';
import A1Button from '../../Components/Button/A1Button';
import A1Text from '../../Components/Text/A1Text';

const Profile = () => {
  const {logout} = useContext(AuthContext);
  return (
    <>
      <A1Text>HOME PAGE PLACEHOLDER</A1Text>
      <A1Button mode="outlined" onPress={() => logout()}>
        LOGOUT
      </A1Button>
    </>
  );
};

export default memo(Profile);
