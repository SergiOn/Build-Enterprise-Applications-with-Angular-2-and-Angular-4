import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Patient } from './patient';

@Injectable()
export class PatientService {
    constructor(private http: Http) {}

    save(patient: Patient): Observable<any> {
        return this.http.post('/api/patients', patient);
    }
}
