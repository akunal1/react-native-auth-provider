import apisauce, {ApisauceInstance} from 'apisauce';

export class PreAuthApi {
  api: ApisauceInstance;

  // https://legal-marriage.herokuapp.com/

  constructor(baseURL = 'https://legal-marriage.herokuapp.com/') {
    this.api = apisauce.create({
      baseURL,
      timeout: 30000,
    });
  }
}
