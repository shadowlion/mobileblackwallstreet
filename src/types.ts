export interface Event {
  metadata: Metadata;
  sys: MapSys;
  fields: EventFields;
}

export interface EventFields {
  eventName: string;
  map: Map;
  timeStart: string;
  timeEnd: string;
  location: Location;
  formLink: string;
  vendors: Vendor[];
}

export interface Location {
  data: Data;
  content: LocationContent[];
  nodeType: string;
}

export interface LocationContent {
  data: Data;
  content: ContentContent[];
  nodeType: string;
}

export interface ContentContent {
  data: Data;
  marks: any[];
  value: string;
  nodeType: string;
}

export interface Data {}

export interface Map {
  metadata: Metadata;
  sys: MapSys;
  fields: MapFields;
}

export interface MapFields {
  title: string;
  description: string;
  file: File;
}

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

export interface Details {
  size: number;
}

export interface Metadata {
  tags: any[];
}

export interface MapSys {
  space: ContentType;
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  environment: ContentType;
  revision: number;
  locale: string;
  contentType?: ContentType;
}

export interface ContentType {
  sys: ContentTypeSys;
}

export interface ContentTypeSys {
  id: string;
  type: string;
  linkType: string;
}

export interface Vendor {
  metadata: Metadata;
  sys: MapSys;
  fields: VendorFields;
}

export interface VendorFields {
  title: string;
  link: string;
}
