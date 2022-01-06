import React from "react";

function Dashboard() {
    return(
        <div>
            {/* <Header /> */}
            <div class="min-w-min">
            <div class="container bg-champagnePink w-min whitespace-nowrap">
                <h className='font-mono text-5xl'>Sup Shawty</h>
                <div class="font-mono text-3x1 py-2 text-center">
                    Welcome to Your Dashboard
                </div>
            </div>
            </div>

            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table class="min-w-min">
                        <thead class="border-b bg-powderBlue">
                            <tr>
                            <th scope="col" class="text-sm font-mono text-gray-900 px-6 py-4">
                                Category
                            </th>
                            <th scope="col" class="text-sm font-mono text-gray-900 px-6 py-4">
                                Expense
                            </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr class="bg-mintCream border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">1</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                    Mark
                                </td>
                            </tr>

                            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">2</td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                Jacob
                            </td>
                            </tr>

                            <tr class="bg-mintCream border-b transition duration-300 ease-in-out hover:bg-gray-100">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">3</td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                Larry
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard