import { useQuery } from '@apollo/client';
import { GET_EMPLOYEE_LIST } from '../../../graphql/employee';
import { OffsetBasedList } from '../../../types/api-response';
import { Employee } from '../../../types/employee';

export default function EmployeeTable() {
  const { loading, error, data } = useQuery(GET_EMPLOYEE_LIST);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error! ${error.message}</p>;

  const { totalCount, edgeCount, edges } = data.employees as OffsetBasedList<Employee>;
  console.log(edges);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              EMPLOYEE NUMBER
            </th>
            <th scope="col" className="px-6 py-3">
              NAME
            </th>
            <th scope="col" className="px-6 py-3">
              GENDER
            </th>
            <th scope="col" className="px-6 py-3">
              BIRTHDAY
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">NOT SHOWN</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {edges.map((edge, idx) => {
            const { node: employee } = edge;
            return (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">
                  {employee.empNo}
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {employee.firstName + ' ' + employee.lastName}
                </th>
                <td className="px-6 py-4">
                  {employee.gender}
                </td>
                <td className="px-6 py-4">
                  {employee.birthDate}
                </td>
                <td className="px-6 py-4 text-right">
                  <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Light</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}