

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
    title: string,
    id: number,
}
export interface ICoords{
    lat: string,
    lon: string
}