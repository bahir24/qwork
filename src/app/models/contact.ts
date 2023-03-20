

export interface IContactTable {
    email: string,
    address: string,
    city: ICity,
    phone: string,
}

export interface IContact extends IContactTable{
    geo: ICoords
}

export interface ICity {
  _id?: string,
    title: string
}
export interface ICoords{
    lat: string,
    lon: string
}
