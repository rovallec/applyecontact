import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { profiles } from './profiles';
import { job_histories } from './job_histories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'applyentform';
  distrit:string = null;
  zone:string = '1';


  first_job = 'Yes';
  medical_condition = 'No';
  currently_studing = 'No';

  created_profile = 0;
  created_contact = 0;
  created_details = 0;

  dt: Date = new Date

  birth_day = String(this.dt.getDate()).padStart(2, '0');
  birth_month = String(this.dt.getMonth() + 1).padStart(1);
  birth_year = String(this.dt.getFullYear()).padStart(4);

  start_day = String(this.dt.getDate()).padStart(2, '0');
  start_month = String(this.dt.getMonth() + 1).padStart(1);
  start_year = String(this.dt.getFullYear()).padStart(4);


  jobs_histories: job_histories[] = [];

  actual_job: job_histories = {
    id_profile: 0,
    company: null,
    date_joining: null,
    position: null,
    reference_name: null,
    reference_lastname: null,
    reference_position: null,
    reference_mail: null,
    reference_phone: null,
    working: 'No'
  };

  profile_to_create: profiles = {
    idprofile: null,
    tittle: 'MR',
    first_name: null,
    second_name: null,
    first_lastname: null,
    second_lastname: null,
    day_of_birthday: null,
    nationality: 'Guatemalan',
    marital_status: 'Single',
    dpi: null,
    nit: null,
    igss: null,
    irtra: null,
    status: 'PENDING',
    //Key
    id_profile: null,
    //Contact
    idcontact_details: null,
    primary_phone: null,
    secondary_phone: null,
    address: null,
    city: null,
    email: null,
    //Details
    idprofile_details: null,
    english_level: null,
    transport: 'Car',
    start_date: null,
    unavailable_days: null,
    marketing_campaing: null,
    first_lenguage: null,
    second_lenguage: null,
    third_lenguage: null,
    //Emergency
    idemergency_details: 0,
    emergency_first_name: null,
    emergency_second_name: null,
    emergency_first_lastname: null,
    emergency_second_lastname: null,
    emergency_phone: null,
    relationship: null,
    //Medical
    medical_treatment: null,
    medical_prescription: null,
    //Education
    current_level: null,
    futher_education: null,
    currently_studing: null,
    institution_name: null,
    degree: null
  };

  finishedForm:boolean = false;

  yrs: string[] = ["2020"]

  constructor(private apiService: ApiService) {

    for (let index = 0; index < 60; index++) {
      const it = (this.dt.getFullYear() - index);
      this.yrs.push(it.toString());
    }
  }
  create(form) {
    this.finishedForm = true;
    this.profile_to_create.day_of_birthday = this.birth_year + '-' + this.birth_month + '-' + this.birth_day;
    this.profile_to_create.start_date = this.start_year + '-' + this.start_month + '-' + this.start_day;
    this.profile_to_create.address = this.profile_to_create.address + ", " + this.profile_to_create.city + ", " + ", " + this.distrit + ", Zona " + this.zone;
    this.jobs_histories.push(this.actual_job);
    this.apiService.createProfile(form).subscribe((profile: number) => {
      console.log("Profile Created, ", profile);
      this.jobs_histories.forEach(it => {
        it.id_profile = profile;
      });
      this.apiService.create_job_history(this.jobs_histories).subscribe((record: number) => {
        this.jobs_histories = [];
        window.location.href = "https://nearsol.us/";
      });
    });
  }

  add_historie() {
    this.jobs_histories.push(this.actual_job);
    this.actual_job = {
      id_profile: 0,
      company: null,
      date_joining: null,
      position: null,
      reference_name: null,
      reference_lastname: null,
      reference_position: null,
      reference_mail: null,
      reference_phone: null,
      working: 'No'
    };
    console.log(this.jobs_histories);

  };

  remove_it(indx) {
    this.jobs_histories.splice(indx, 1);
  };

  onFocusIt(event) {
    event.target.value = "";
  }

  setselecteddate(val:any){
    this.actual_job.date_joining = val;
  }
}
