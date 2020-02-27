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
