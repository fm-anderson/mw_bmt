export interface MenuItem {
  url: string;
  name: string;
  icon: string;
}

export interface Option {
  name: string;
  rank: string;
  type: string;
  img: string;
}

export interface Data {
  af: Option[];
}
