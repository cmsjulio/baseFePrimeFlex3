import { BaseModel } from './base.model';
import {OrganizacaoResponse} from './organizacao.model';


export interface User extends BaseModel {
  nome?: string;
  nrCpf?: string;
  roles?: string[];
  organizacao?: OrganizacaoResponse;
}
