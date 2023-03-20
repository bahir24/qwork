import {IService} from "./service";

export interface ICategory {
  title: string,
  desc: string,
  icon: string,
  services?: IService[]
}


export interface ICategoryWithService extends ICategory {
  services: IService[]
}
