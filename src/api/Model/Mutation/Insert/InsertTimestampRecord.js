import { gql } from "@apollo/client";

export const INSERT_TIMESTAMP_RECORD = gql`
  mutation InsertTimestampRecord($schedules_id: Int!, $meet_number: Int!, $date_meet: String!) {
    insert_timestamp_record(objects: { schedules_id: $schedules_id, meet_number: $meet_number, date_meet: $date_meet }) {
      returning {
        id
      }
    }
  }
`;
