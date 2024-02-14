import { gql } from '@apollo/client';

export const GET_EMPLOYEE_LIST = gql`
    query Employees {
        employees(first: 2) {
            totalCount
            edgeCount
            edges {
                node {
                    empNo
                    birthDate
                    firstName
                    lastName
                    gender
                    id
                }
            }
        }
    }
`