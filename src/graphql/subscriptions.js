/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBookingSystemModel = /* GraphQL */ `
  subscription OnCreateBookingSystemModel(
    $id: ID
    $user_id: Int
    $appointment_id: Int
    $clinic_id: Int
    $band: Int
  ) {
    onCreateBookingSystemModel(
      id: $id
      user_id: $user_id
      appointment_id: $appointment_id
      clinic_id: $clinic_id
      band: $band
    ) {
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
export const onUpdateBookingSystemModel = /* GraphQL */ `
  subscription OnUpdateBookingSystemModel(
    $id: ID
    $user_id: Int
    $appointment_id: Int
    $clinic_id: Int
    $band: Int
  ) {
    onUpdateBookingSystemModel(
      id: $id
      user_id: $user_id
      appointment_id: $appointment_id
      clinic_id: $clinic_id
      band: $band
    ) {
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
export const onDeleteBookingSystemModel = /* GraphQL */ `
  subscription OnDeleteBookingSystemModel(
    $id: ID
    $user_id: Int
    $appointment_id: Int
    $clinic_id: Int
    $band: Int
  ) {
    onDeleteBookingSystemModel(
      id: $id
      user_id: $user_id
      appointment_id: $appointment_id
      clinic_id: $clinic_id
      band: $band
    ) {
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
