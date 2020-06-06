import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

import { job_histories } from './job_histories';
import {profiles} from './profiles';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  php_api_server = "http://168.194.75.13";

  createProfile(profile:profiles){
    return this.httpClient.post<number>(`${this.php_api_server}/phpscripts/create_application.php`, profile);
  };

  create_job_history(profile:job_histories[]){
    return this.httpClient.post<number>(`${this.php_api_server}/phpscripts/create_job_history.php`, profile);
  }

  constructor(private httpClient: HttpClient) {
  }


}
