import { gql } from '@apollo/client';

export const GET_EMPLOYEE_LIST = gql`
    query Employees {
        employees(first: 5) {
            totalCount
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
            pageCursors {
                around {
                    cursor
                    isCurrent
                    page
                }
                first {
                    cursor
                    isCurrent
                    page
                }
                last {
                    cursor
                    isCurrent
                    page
                }
            }
        }
    }
`