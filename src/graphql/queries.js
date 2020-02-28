/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBookingSystemModel = /* GraphQL */ `
  query GetBookingSystemModel($id: ID!) {
    getBookingSystemModel(id: $id) {
      id
      user_id
      appointment_id
      clinic_id
      band
      time
      created_at
    }
  }
`;
export const listBookingSystemModels = /* GraphQL */ `
  query ListBookingSystemModels(
    $filter: TableBookingSystemModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookingSystemModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user_id
        appointment_id
        clinic_id
        band
        time
        created_at
      }
      nextToken
    }
  }
`;
export const getBookingSystem = /* GraphQL */ `
  query GetBookingSystem($ID: String!) {
    getBookingSystem(ID: $ID) {
      ID
      user_id
      appointment_id
      clinic_id
      band
      time
      created_at
    }
  }
`;
export const listBookingSystems = /* GraphQL */ `
  query ListBookingSystems(
    $filter: TableBookingSystemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookingSystems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        ID
        user_id
        appointment_id
        clinic_id
        band
        time
        created_at
      }
      nextToken
    }
  }
`;
export const getNewBookingSystem = /* GraphQL */ `
  query GetNewBookingSystem($ID: ID!) {
    getNewBookingSystem(ID: $ID) {
      ID
      user_id
      appointment_id
      clinic_id
      band
      time
      created_at
    }
  }
`;
export const listNewBookingSystems = /* GraphQL */ `
  query ListNewBookingSystems(
    $filter: TableNewBookingSystemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNewBookingSystems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        ID
        user_id
        appointment_id
        clinic_id
        band
        time
        created_at
      }
      nextToken
    }
  }
`;
