export interface Event {
  metadata: Metadata;
  sys: VendorSys;
  fields: EventFields;
}

export interface EventFields {
  eventName: string;
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

export interface Vendor {
  metadata: Metadata;
  sys: VendorSys;
  fields: Fields;
}

export interface Fields {
  title: string;
  link: string;
}

export interface Metadata {
  tags: any[];
}

export interface VendorSys {
  space: ContentType;
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  environment: ContentType;
  revision: number;
  contentType: ContentType;
  locale: string;
}

export interface ContentType {
  sys: ContentTypeSys;
}

export interface ContentTypeSys {
  type: string;
  linkType: string;
  id: string;
}

export interface Event {
  eventName: string;
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

export interface Vendor {
  metadata: Metadata;
  sys: VendorSys;
  fields: Fields;
}

export interface Fields {
  title: string;
  link: string;
}

export interface Metadata {
  tags: any[];
}

export interface VendorSys {
  space: ContentType;
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  environment: ContentType;
  revision: number;
  contentType: ContentType;
  locale: string;
}

export interface ContentType {
  sys: ContentTypeSys;
}

export interface ContentTypeSys {
  type: string;
  linkType: string;
  id: string;
}
