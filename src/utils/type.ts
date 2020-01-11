export interface RouterItemType {
    path?: string,
    component?: any,
    from?: string,
    to?: any,
    children?: RouterItemType[]
}

export interface RouterPropType {
    routes: RouterItemType[]
}

interface MainItemType {
    path?: any,
    component?: any,
    from?: string,
    to?: any,
    title:string
}

export interface MainPropType {
    routes: MainItemType[]
}

export interface SpecialItemType {
    id?:number,
    title?:string,
    price_info?:number,
    scene_pic_url?:string,
    subtitle?:string
}