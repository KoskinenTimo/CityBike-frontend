export type Page = number | null;
export type Filter = string | null;
export type Rows = number | null;

export type PageParam = {
  page: Page,
}

export type JourneysPerPageParam = {
  journeysPerPage: Rows
}

export type FilterParam = {
  filter: Filter
}

export type Station = {
  id: number,
  identifier: number,
  nimi: string,
  namn: string,
  name: string,
  osoite: string,
  adress: string,
  kaupunki: string,
  stad: string,
  operaattori: string,
  kapasiteetit: number,
  location: {
    id: number,
    latitude: number,
    longitude: number,
    new: boolean
  }
}

export type Journey = {
  id: number,
  departureTimeStamp: number,
  returnTimestamp: number,
  departureStationId: Station
  returnStationId: Station
  distance: number,
  duration: number,
  new: boolean
}

export type ResponsePage = {
  pageable: {
      sort: {
        sorted: boolean,
        unsorted: boolean,
        empty: boolean
      },
      pageSize: number,
      pageNumber: number,
      offset: number,
      unpaged: boolean,
      paged: boolean
    },
    last: boolean,
    totalElements: number,
    totalPages: number,
    sort: {
      sorted: boolean,
      unsorted: boolean,
      empty: boolean
    },
    numberOfElements: number,
    first: boolean,
    size: number,
    number: number,
    empty: boolean
}

export type StationsResponsePage = ResponsePage & {
  content: Station[]
}

export type JourneysResponsePage = ResponsePage & {
  content: Journey[]
}

export type TableCellProps = {
  text: string | number
}

export type GetJourneyProps= {
  page: Page,
  journeysPerPage: Rows,
  filter: Filter,
  departureStationId: number | null,
  returnStationId: number | null
}