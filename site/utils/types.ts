export interface ResponseFuncs {
    GET?: Function
    POST?: Function
    PUT?: Function
    DELETE?: Function
  }
  
  
export interface Metadata {
    id: Number,
    title: String,
    slug: String,
    description: String,
}

export interface Tag {
  id: Number,
  title: String,
}

export interface License {
  id: Number,
  title: String,
}