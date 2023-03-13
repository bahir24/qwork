import {ICategory} from "./category";

export interface IService {
  title: string,
  subTitle: string,
  category: ICategory,
  data: IServiceData[],
  img: string,
  thumb: string
}

export interface IServiceData {
  key?: string | number | undefined
  value?: string | number | undefined
}
