export interface ResponseFuncs {
    GET?: Function
    POST?: Function
    PUT?: Function
    DELETE?: Function
  }
  
  
export interface Metadata {
    id: Number,
    title: string,
    slug: string,
    description: string,
    icon: string,
    [key: string]: any;
}

export interface Tag {
  id: number,
  title: string,
  icon: string,
  [key: string]: any;

}

export interface License {
  id: number,
  title: string,
  license_id: string,
  url: string
}