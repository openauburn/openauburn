export interface ResponseFuncs {
  GET?: Function;
  POST?: Function;
  PUT?: Function;
  DELETE?: Function;
}

export interface Metadata {
  _id: Number;
  title: string;
  slug: string;
  description: string;
  portal_icon: string;
  [key: string]: any;
}

export interface Tag {
  _id: number;
  title: string;
  icon: string;
  [key: string]: any;
}

export interface License {
  _id: number;
  title: string;
  license_id: string;
  url: string;
}
