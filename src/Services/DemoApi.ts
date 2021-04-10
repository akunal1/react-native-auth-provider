import apisauce, {ApisauceInstance, ApiResponse} from 'apisauce';
import {singleEmpInput} from '../Types/demo/demoTypes';

export class DemoGetPostApi {
  api: ApisauceInstance;

  constructor(baseURL = 'http://192.168.1.4:8080') {
    this.api = apisauce.create({
      baseURL,
      timeout: 15000, // Timeout set to 15sec
    });
  }

  param = {
    firstName: 'Avinash',
    lastName: 'Nayak',
    userName: 'mail.kunal132@gmail.com',
    password: '123456',
  };

  allEmployees = (): Promise<ApiResponse<any>> =>
    this.api.post('/user/signup', this.param);

  employeeById = (id: singleEmpInput): Promise<ApiResponse<any>> =>
    this.api.get(`/employee/${id}`);
}
