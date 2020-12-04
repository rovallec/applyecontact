import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

import { job_histories } from './job_histories';
import { Family_Information } from './Family_Information';
import {profiles} from './profiles';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

//PHP_API_SERVER = "http://localhost/angularproject"; // desarrollo  
PHP_API_SERVER = "http://200.94.251.67";  // produccion

  createProfile(profile:profiles){
    return this.httpClient.post<number>(`${this.PHP_API_SERVER}/phpscripts/create_application.php`, profile);
  };

  create_job_history(profile:job_histories[]){
    return this.httpClient.post<number>(`${this.PHP_API_SERVER}/phpscripts/create_job_history.php`, profile);
  }

  create_family_information(profile:Family_Information[]){
    return this.httpClient.post<number>(`${this.PHP_API_SERVER}/phpscripts/create_family_history.php`, profile);
  }

  constructor(private httpClient: HttpClient) {
  }


}
