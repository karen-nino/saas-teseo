import Link from "next/link";

export default function info() {

    return (
        <div className='min-h-screen py-10 bg-gray-50 sm:py-16 lg:py-24'>


            <main className="flex flex-col items-center justify-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 min-w-[1140px]">

                <div id="informacion-destacada" className="self-start px-4 max-w-7xl sm:px-6 lg:px-8">
                    <Link href={"/buscar"} class="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.15426 2.44609C6.95423 2.24613 6.68297 2.13379 6.40013 2.13379C6.11729 2.13379 5.84603 2.24613 5.646 2.44609L0.845996 7.2461C0.646028 7.44612 0.53369 7.71739 0.53369 8.00023C0.53369 8.28307 0.646028 8.55433 0.845996 8.75436L5.646 13.5544C5.84717 13.7487 6.11661 13.8562 6.39629 13.8537C6.67597 13.8513 6.9435 13.7391 7.14127 13.5414C7.33904 13.3436 7.45122 13.0761 7.45365 12.7964C7.45608 12.5167 7.34857 12.2473 7.15426 12.0461L4.2668 9.0669H14.4001C14.683 9.0669 14.9543 8.95451 15.1544 8.75448C15.3544 8.55444 15.4668 8.28313 15.4668 8.00023C15.4668 7.71733 15.3544 7.44602 15.1544 7.24598C14.9543 7.04594 14.683 6.93356 14.4001 6.93356H4.2668L7.15426 3.95436C7.35423 3.75433 7.46657 3.48307 7.46657 3.20023C7.46657 2.91739 7.35423 2.64612 7.15426 2.44609Z" fill="white" />
                        </svg>
                        Atrás
                    </Link>
                </div>

                <section class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-20 mb-40">

                    <div class="min-w-[1140px]">

                        <h2 className="mb-2 text-2xl font-bold">Información destacada</h2>
                        <p className="text-sm text-grey-500">Descubre el panorama completo del mercado inmobiliario y explora las características clave de cada de cada segmento y zona de interés.</p>


                        <div class="grid grid-cols-1 gap-6 px-6 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">

                            <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                                <div class="px-4 py-6">
                                    <div class="flex flex-col">
                                        <div class="ml-4">
                                            <h4 class="mt-1.5 text-lg font-medium leading-tight text-gray-500 mb-4">Precio Mercado</h4>
                                        </div>
                                        <div className="flex items-center w-full ml-4">
                                            <p class="text-2xl font-bold text-gray-900">$12,426</p>
                                            <div className="flex justify-end w-full mr-4">
                                                <h4 class="text-lg font-medium text-gray-500">+5%</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                                <div class="px-4 py-6">
                                    <div class="flex items-start">
                                        <svg class="flex-shrink-0 w-12 h-12 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                        <div class="ml-4">
                                            <h4 class="text-4xl font-bold text-gray-900">37+</h4>
                                            <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">Team members</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                        </div>

                    </div>

                </section>



                <section id="informacion-general" class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-20">

                    <div class="min-w-[1140px]">

                        <h2 className="mb-2 text-2xl font-bold">Información general</h2>
                        {/* <p className="text-sm text-grey-500">lorem ipsum</p> */}

                        <div class="grid grid-cols-2 gap-6 px-6 mt-8 sm:px-0 lg:mt-16">



                            <div class="overflow-hidden">
                                <h3 >Precio Mercado</h3>

                                <div class="px-4 py-2 mt-4 bg-white border border-gray-200 rounded-lg">
                                    <table class="w-full">
                                        <tbody>
                                            <tr>
                                                <td class="py-4 pr-4 font-bold border-b border-gray-200 ">Precio MAX:</td>

                                                <td class="px-4 py-4 border-b border-gray-200 text-right">$28,500,000.00</td>
                                            </tr>

                                            <tr>
                                                <td class="py-4 pr-4 font-bold border-b border-gray-200">Precio MIN:</td>

                                                <td class="px-4 py-4 border-b border-gray-200 text-right">$157,136.00</td>
                                            </tr>

                                            <tr>
                                                <td class="py-4 pr-4 font-bold border-b border-gray-200">Promedio:</td>

                                                <td class="px-4 py-4 border-b border-gray-200 text-right">$3,090,536.02</td>

                                            </tr>

                                            <tr>
                                                <td class="py-4 pr-4 font-bold border-b border-gray-200">Media:</td>

                                                <td class="px-4 py-4 border-b border-gray-200 text-right">$3,090,536.02</td>

                                            </tr>

                                            <tr>
                                                <td class="py-4 pr-4 font-bold ">Promedio:</td>

                                                <td class="px-4 py-4 text-right">$3,090,536.02</td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>


                            <div class="overflow-hidden">
                                <h3 >Precio Mercado</h3>

                                <div class="px-4 py-2 mt-4 bg-white border border-gray-200 rounded-lg">
                                    <table class="w-full">
                                        <tbody>
                                            <tr>
                                                <td class="py-4 pr-4 font-bold border-b border-gray-200 ">Precio MAX:</td>

                                                <td class="px-4 py-4 border-b border-gray-200 text-right">$28,500,000.00</td>
                                            </tr>

                                            <tr>
                                                <td class="py-4 pr-4 font-bold border-b border-gray-200">Precio MIN:</td>

                                                <td class="px-4 py-4 border-b border-gray-200 text-right">$157,136.00</td>
                                            </tr>

                                            <tr>
                                                <td class="py-4 pr-4 font-bold border-b border-gray-200">Promedio:</td>

                                                <td class="px-4 py-4 border-b border-gray-200 text-right">$3,090,536.02</td>

                                            </tr>

                                            <tr>
                                                <td class="py-4 pr-4 font-bold border-b border-gray-200">Media:</td>

                                                <td class="px-4 py-4 border-b border-gray-200 text-right">$3,090,536.02</td>

                                            </tr>

                                            <tr>
                                                <td class="py-4 pr-4 font-bold ">Promedio:</td>

                                                <td class="px-4 py-4 text-right">$3,090,536.02</td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>


                            <div class="overflow-hidden">
                                <h3 >Precio Mercado</h3>

                                <div class="px-4 py-2 mt-4 bg-white border border-gray-200 rounded-lg">
                                    <table class="w-full">
                                        <tbody>
                                            <tr>
                                                <td class="py-4 pr-4 font-bold border-b border-gray-200 ">Precio MAX:</td>

                                                <td class="px-4 py-4 border-b border-gray-200 text-right">$28,500,000.00</td>
                                            </tr>

                                            <tr>
                                                <td class="py-4 pr-4 font-bold border-b border-gray-200">Precio MIN:</td>

                                                <td class="px-4 py-4 border-b border-gray-200 text-right">$157,136.00</td>
                                            </tr>

                                            <tr>
                                                <td class="py-4 pr-4 font-bold border-b border-gray-200">Promedio:</td>

                                                <td class="px-4 py-4 border-b border-gray-200 text-right">$3,090,536.02</td>

                                            </tr>

                                            <tr>
                                                <td class="py-4 pr-4 font-bold border-b border-gray-200">Media:</td>

                                                <td class="px-4 py-4 border-b border-gray-200 text-right">$3,090,536.02</td>

                                            </tr>

                                            <tr>
                                                <td class="py-4 pr-4 font-bold ">Promedio:</td>

                                                <td class="px-4 py-4 text-right">$3,090,536.02</td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>





                        </div>

                    </div>

                </section>



            </main>




        </div>
    );
}