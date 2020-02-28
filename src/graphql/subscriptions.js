/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBookingSystemModel = /* GraphQL */ `
  subscription OnCreateBookingSystemModel(
    $id: ID
    $user_id: Int
    $appointment_id: Int
    $clinic_id: String
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
    $clinic_id: String
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
    $clinic_id: String
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
export const onCreateBookingSystem = /* GraphQL */ `
  subscription OnCreateBookingSystem(
    $ID: String
    $user_id: String
    $appointment_id: String
    $clinic_id: String
    $band: Int
  ) {
    onCreateBookingSystem(
      ID: $ID
      user_id: $user_id
      appointment_id: $appointment_id
      clinic_id: $clinic_id
      band: $band
    ) {
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
export const onUpdateBookingSystem = /* GraphQL */ `
  subscription OnUpdateBookingSystem(
    $ID: String
    $user_id: String
    $appointment_id: String
    $clinic_id: String
    $band: Int
  ) {
    onUpdateBookingSystem(
      ID: $ID
      user_id: $user_id
      appointment_id: $appointment_id
      clinic_id: $clinic_id
      band: $band
    ) {
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
export const onDeleteBookingSystem = /* GraphQL */ `
  subscription OnDeleteBookingSystem(
    $ID: String
    $user_id: String
    $appointment_id: String
    $clinic_id: String
    $band: Int
  ) {
    onDeleteBookingSystem(
      ID: $ID
      user_id: $user_id
      appointment_id: $appointment_id
      clinic_id: $clinic_id
      band: $band
    ) {
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
export const onCreateNewBookingSystem = /* GraphQL */ `
  subscription OnCreateNewBookingSystem(
    $ID: ID
    $user_id: String
    $appointment_id: String
    $clinic_id: String
    $band: Int
  ) {
    onCreateNewBookingSystem(
      ID: $ID
      user_id: $user_id
      appointment_id: $appointment_id
      clinic_id: $clinic_id
      band: $band
    ) {
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
export const onUpdateNewBookingSystem = /* GraphQL */ `
  subscription OnUpdateNewBookingSystem(
    $ID: ID
    $user_id: String
    $appointment_id: String
    $clinic_id: String
    $band: Int
  ) {
    onUpdateNewBookingSystem(
      ID: $ID
      user_id: $user_id
      appointment_id: $appointment_id
      clinic_id: $clinic_id
      band: $band
    ) {
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
export const onDeleteNewBookingSystem = /* GraphQL */ `
  subscription OnDeleteNewBookingSystem(
    $ID: ID
    $user_id: String
    $appointment_id: String
    $clinic_id: String
    $band: Int
  ) {
    onDeleteNewBookingSystem(
      ID: $ID
      user_id: $user_id
      appointment_id: $appointment_id
      clinic_id: $clinic_id
      band: $band
    ) {
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
