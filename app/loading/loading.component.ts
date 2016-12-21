import { Component } from "@angular/core"
import { Http, Response } from "@angular/http"
import { Observable } from "rxjs/Rx"
import "rxjs/add/operator/toPromise"

@Component({
    selector: "cb-loading",
    templateUrl: "loading/loading.component.html",
})
export class LoadingComponent {
    constructor(private http: Http) {

    }

    ngOnInit() {
        console.log("LoadingComponent onInit")
        this.http.get("http://tendersolid.com/carborn/status/")
        .toPromise()
        .then(response => {
            console.log(response.json().db_obj_id)
            return response.json()
        })
        .catch((error: Response) => {
            console.log(error.json())
            return Observable.throw(error)
        })
    }
}
