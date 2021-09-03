import { Http, HttpModule, XHRBackend, RequestOptions ,Headers} from '@angular/http';
import { InterceptorService } from '../utils/interceptor'

export class UserService {
    constructor(
        private http: Http,
        // private http: InterceptorService,
    ){}

    getList(params: any){
        return this.http.get('/api/getList',{
            params: params,
            // headers: new Headers({"Content-type":"application/json",'token':'test123456'})
        })
        .toPromise()
        .then(response => response.json())
        .catch(error => error)
    }

    getFile(){
        return this.http.get('/apiLocal/getFile')
    }
}