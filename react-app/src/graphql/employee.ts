import { gql } from '@apollo/client';

export const GET_EMPLOYEE_LIST = gql`
    query Employees($first: Int!, $after: String, $empNo: Int) {
        employees(first: $first, after: $after, empNo: $empNo) {
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
                next {
                    cursor
                    isCurrent
                    page
                }
                previous {
                    cursor
                    isCurrent
                    page
                }
            }
        }
    }
`