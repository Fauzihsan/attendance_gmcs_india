import { gql } from "@apollo/client";

export const GET_TIMESTAMP_RECORD = gql`
  subscription GetTimestampRecord($schedules_id: Int!) {
    timestamp_record(where: { schedules_id: { _eq: $schedules_id } }) {
      id
      meet_number
      date_meet
    }
  }
`;
