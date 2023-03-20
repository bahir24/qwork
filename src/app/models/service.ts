import {ICategory} from "./category";

export interface IService {
  _id?: string,
  title: string,
  subTitle: string,
  category?: ICategory,
  data: IServiceData[],
  img: string,
  thumb: string,
  desc: string
}

export interface IServiceData {
  key?: string | number | undefined
  value?: string | number | undefined
}

export interface IServicesGrouped {
  home: IService[],
  street: IService[],
  area: IService[]
}


// export interface IServicesSelect {
//   title: string,
//   icon: string,
//   services: IService[]
// }
// export interface IServicesSelectOption {
//   title: string,
//   value: string
// }
