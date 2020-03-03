/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBookingSystemDb = /* GraphQL */ `
  query GetBookingSystemDb($id: ID!) {
    getBookingSystemDB(id: $id) {
      id
      appointment_id
      clinic_id
      time
      created_at
      date
      band
    }
  }
`;
export const listBookingSystemDBs = /* GraphQL */ `
  query ListBookingSystemDBs(
    $filter: ModelBookingSystemDBFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookingSystemDBs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        appointment_id
        clinic_id
        time
        created_at
        date
        band
      }
      nextToken
    }
  }
`;
export const getAppointmentDb = /* GraphQL */ `
  query GetAppointmentDb($id: ID!) {
    getAppointmentDB(id: $id) {
      id
      clinic_id
      name
      description
      phone
      created_at
    }
  }
`;
export const listAppointmentDBs = /* GraphQL */ `
  query ListAppointmentDBs(
    $filter: ModelAppointmentDBFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointmentDBs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clinic_id
        name
        description
        phone
        created_at
      }
      nextToken
    }
  }
`;
export const getClinicsDb = /* GraphQL */ `
  query GetClinicsDb($id: ID!) {
    getClinicsDB(id: $id) {
      id
      name
      address
      phone
      description
    }
  }
`;
export const listClinicsDBs = /* GraphQL */ `
  query ListClinicsDBs(
    $filter: ModelClinicsDBFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClinicsDBs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        phone
        description
      }
      nextToken
    }
  }
`;
