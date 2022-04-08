export interface Entry {
  metadata: Metadata;
  sys: EventSys;
  fields: Fields;
}

export interface Fields {
  eventName: string;
  timeStart: string;
  timeEnd: string;
  location: Location;
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

export interface Metadata {
  tags: any[];
}

export interface EventSys {
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
