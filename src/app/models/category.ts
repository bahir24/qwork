import {IService} from "./service";

export interface ICategory {
  title: string,
  desc: string,
  icon: string,

}


export interface ICategoryWithService extends ICategory {
  services: IService[]
}
