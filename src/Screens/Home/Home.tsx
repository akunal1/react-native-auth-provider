import React, {memo} from 'react';
import A1Button from '../../Components/Button/A1Button';
import A1Text from '../../Components/Text/A1Text';
import {logout} from '../../Navigation/tokenValidator';

const Profile = () => {
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
