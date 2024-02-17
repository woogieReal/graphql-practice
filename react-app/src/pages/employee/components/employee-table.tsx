import { useQuery } from '@apollo/client';
import { GET_EMPLOYEE_LIST } from '../../../graphql/employee';
import { OffsetBasedList } from '../../../types/api-response';
import { Employee } from '../../../types/employee';

export default function EmployeeTable() {
  const { loading, error, data } = useQuery(GET_EMPLOYEE_LIST);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error! ${error.message}</p>;

  const { totalCount, edgeCount, edges } = data.employees as OffsetBasedList<Employee>;

  return (
    <div className="relative overflow-x-auto rounded-lg">
      {/* 
        overflow-x-auto 가로 스크롤링이 가능하도록 함, e.g. 아래 table이 div의 width 보다 길어지면 가로 스크롤링
        rounded-lg 모서리에 둥근 테두리 적용, rounded, rounded-md, rounded-lg 순으로 더 둥글어짐
      */}

      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-md text-gray-700 uppercase bg-gray-50">
          <tr>
            {/* 
              scope="col" 테이블의 헤더 셀을 정의하는 태그, 스크린 리더 등의 보조 기술에서 테이블을 읽을 때, 셀의 역할을 정확히 이해할 수 있도록 도와준다
              whitespace-nowrap 텍스트가 줄 바꿈 없이 한 줄에 계속 표시되도록 한다
            */}
            <th scope="col" className="px-6 py-3 whitespace-nowrap">
              employee number
            </th>
            <th scope="col" className="px-6 py-3">
              name
            </th>
            <th scope="col" className="px-6 py-3">
              gender
            </th>
            <th scope="col" className="px-6 py-3">
              birthday
            </th>
            <th scope="col" className="px-6 py-3">
              {/* 
                sr-only 요소를 숨기되, 스크린 리더에서는 보이도록 한다
              */}
              <span className="sr-only">not shown</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {edges.map((edge, idx) => {
            const { node: employee } = edge;
            return (
              <tr className="bg-white border-b hover:bg-gray-50">
                {/* 
                  border-b b는 bottom, 아래에 border가 생기게 함
                */}
                <td className="px-6 py-4">
                  {employee.empNo}
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {employee.firstName + ' ' + employee.lastName}
                </th>
                <td className="px-6 py-4">
                  {employee.gender}
                </td>
                <td className="px-6 py-4">
                  {employee.birthDate}
                </td>
                <td className="px-6 py-4 text-right">
                  <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Light</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <nav className="flex justify-center">
        <ul className="flex items-center -space-x-px h-10 text-base">
          <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
              <span className="sr-only">Previous</span>
              <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
          </li>
          <li>
            <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">3</a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">4</a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">5</a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">
              <span className="sr-only">Next</span>
              <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}