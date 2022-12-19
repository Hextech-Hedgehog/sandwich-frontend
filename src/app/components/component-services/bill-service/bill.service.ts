import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Crud, CrudConfig} from "../../../services/crud";
import {Bill} from "../../../model/bill.model";

const config: CrudConfig = {
  many: 'bill',
  single: (id) => `bill/${id}`      // TODO
}

@Injectable({
  providedIn: 'root'
})
export class BillService extends Crud<Bill> {

  constructor(protected httpC: HttpClient,) {
    super(httpC, config);
  }
}
