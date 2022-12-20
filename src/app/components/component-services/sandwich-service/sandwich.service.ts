import { Injectable } from '@angular/core';
import {Crud, CrudConfig} from "../../../services/crud";
import {Sandwich} from "../../../models/sandwich";
import {HttpClient} from "@angular/common/http";

const config: CrudConfig = {
  many: 'sandwich',
  single: (id) => `sandwich/${id}`      /// TODO
}


@Injectable({
  providedIn: 'root'
})
export class SandwichService extends Crud<Sandwich>{

  constructor(protected httpC: HttpClient,) {
    super(httpC, config);
  }
}
