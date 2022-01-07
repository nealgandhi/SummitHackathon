import React from 'react';
import CategoryList from './CategoryList';

export default function Dashboard() {
  return (
    <div>
      <div class='grid grid-cols-12 gap-8 grid-flow-col auto-cols-max grid-flow-row auto-rows-max '>
        <div class='col-span-3 rounded-lg p-4 pt-9 pb-9 text-center'>
          <div class='font-mono text-5xl'>Sup Shawty</div>
          <div class='font-mono text-3x1 py-2 whitespace-nowrap'>
            Welcome to Your Dashboard
          </div>
        </div>
        <div class='row-start-2 col-span-6 row-span-2 bg-aliceBlue p-4 rounded-lg'>
          <CategoryList />
        </div>
        <div class='row-start-2 col-span-2 bg-beauBlue p-4 rounded-lg text-lg font-mono'>
          Remaining Budget
        </div>
      </div>

      {/* <div class='flex flex-col'>
        <div class='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div class='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
            <div class='overflow-hidden'>
              <table class='min-w-min'>
                <thead class='border-b bg-aliceBlue'>
                  <tr>
                    <th
                      scope='col'
                      class='text-sm font-mono text-gray-900 px-6 py-4'
                    >
                      Category
                    </th>
                    <th
                      scope='col'
                      class='text-sm font-mono text-gray-900 px-6 py-4'
                    >
                      Expense
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr class='bg-mintCream border-b transition duration-300 ease-in-out hover:bg-gray-100'>
                    <td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center'>
                      1
                    </td>
                    <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center'>
                      Mark
                    </td>
                  </tr>

                  <tr class='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
                    <td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center'>
                      2
                    </td>
                    <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center'>
                      Jacob
                    </td>
                  </tr>

                  <tr class='bg-mintCream border-b transition duration-300 ease-in-out hover:bg-gray-100'>
                    <td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center'>
                      3
                    </td>
                    <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center'>
                      Larry
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
  </div> */}
    </div>
  );
}
