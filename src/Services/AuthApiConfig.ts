import AsyncStorage from '@react-native-community/async-storage';
import apisauce, {ApisauceInstance} from 'apisauce';

export class AuthApi {
  api: ApisauceInstance;

  token_id: any;
  // https://legal-marriage.herokuapp.com/

  constructor(baseURL = '180.192.168.1.3') {
    this.api = apisauce.create({
      baseURL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic MjIwNjE5OTMtMDgwNzE5OTQtMTAwNDE5OTQ6cGFzc3dvcmQ=',
      },
    });

    (async () => {
      this.token_id = await AsyncStorage.getItem('id_token');
      return this;
    })();

    this.api.axiosInstance.interceptors.request.use(
      config => {
        if (this.token_id && 0) {
          config.headers.Authorization = `Bearer ${this.token_id}`;
        }
        return config;
      },
      error => {
        Promise.reject(error);
      },
    );
    this.api.addMonitor(this.tokenMonitor);
  }

  tokenMonitor = (response: any) => {
    const {ok, status} = response;
    if (!ok && status === 401) {
      AsyncStorage.removeItem('id_token');
      console.log('TOKEN CLEARED');
    }
  };
}
