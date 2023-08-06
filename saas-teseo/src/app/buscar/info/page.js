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

                <section id="informacion-destacada" class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-20 mb-40">

                    <div class="min-w-[1140px]">

                        <div className="mb-10">
                            <h2 className="mb-2 text-2xl font-bold">Información destacada</h2>
                            <p className="text-sm text-grey-500">Descubre el panorama completo del mercado inmobiliario y explora las características clave de cada de cada segmento y zona de interés.</p>
                        </div>


                        <div class="grid grid-cols-1 gap-6 px-6 sm:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">

                            <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                                <div class="px-6 py-6">
                                    <div class="flex flex-col">
                                        <div>
                                            <h4 class=" text-lg text-gray-500 mb-4">Precio Mercado</h4>
                                        </div>
                                        <div className="flex items-center w-full">
                                            <p class="text-2xl font-bold text-gray-900">$12,426</p>
                                            <div className="flex justify-end w-full">
                                                <div className="flex items-center">
                                                    <h4 class="text-lg text-green-500 mr-1">+5%</h4>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 10 10" fill="none">
                                                        <path d="M2.08301 4.16667L4.99967 1.25M4.99967 1.25L7.91634 4.16667M4.99967 1.25V8.75" stroke="#22C55E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                                <div class="px-6 py-6">
                                    <div class="flex flex-col">
                                        <div>
                                            <h4 class="text-lg text-gray-500 mb-4">Precio Mercado</h4>
                                        </div>
                                        <div className="flex items-center w-full">
                                            <p class="text-2xl font-bold text-gray-900">$12,426</p>
                                            <div className="flex justify-end w-full">
                                                <div className="flex items-center">
                                                    <h4 class="text-lg text-red-500 mr-1">-5%</h4>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 8 10" fill="none">
                                                        <path d="M6.9165 5.83333L3.99984 8.75M3.99984 8.75L1.08317 5.83333M3.99984 8.75L3.99984 1.25" stroke="#EF4444" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>

                </section>



                <section id="informacion-general" class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mb-40">

                    <div class="min-w-[1140px]">

                        <div className="mb-14">
                            <h2 className="text-2xl font-bold ">Información general</h2>
                            {/* <p className="text-sm text-grey-500">lorem ipsum</p> */}
                        </div>

                        <div class="grid grid-cols-2 gap-6 px-6 sm:px-0">


                            <div class="overflow-hidden mb-20">
                                <div className="flex">
                                    <div className="flex items-end w-full">
                                        <h3 className="mr-2">Precio Mercado</h3>
                                        <div className="flex items-center">
                                            <h4 class="text-md text-green-500 mr-1">+5%</h4>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 10 10" fill="none">
                                                <path d="M2.08301 4.16667L4.99967 1.25M4.99967 1.25L7.91634 4.16667M4.99967 1.25V8.75" stroke="#22C55E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex justify-end w-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M11 17H13V11H11V17ZM12 9C12.2833 9 12.521 8.904 12.713 8.712C12.905 8.52 13.0007 8.28267 13 8C13 7.71667 12.904 7.479 12.712 7.287C12.52 7.095 12.2827 6.99933 12 7C11.7167 7 11.479 7.096 11.287 7.288C11.095 7.48 10.9993 7.71733 11 8C11 8.28333 11.096 8.521 11.288 8.713C11.48 8.905 11.7173 9.00067 12 9ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22Z" fill="#2563EB" />
                                        </svg>
                                    </div>
                                </div>

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




                            <div class="overflow-hidden mb-20">
                                <div className="flex">
                                    <div className="flex items-end w-full">
                                        <h3 className="mr-2">Casa</h3>
                                        <div className="flex items-center">
                                            <h4 class="text-md text-green-500 mr-1">+5%</h4>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 10 10" fill="none">
                                                <path d="M2.08301 4.16667L4.99967 1.25M4.99967 1.25L7.91634 4.16667M4.99967 1.25V8.75" stroke="#22C55E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex justify-end w-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M11 17H13V11H11V17ZM12 9C12.2833 9 12.521 8.904 12.713 8.712C12.905 8.52 13.0007 8.28267 13 8C13 7.71667 12.904 7.479 12.712 7.287C12.52 7.095 12.2827 6.99933 12 7C11.7167 7 11.479 7.096 11.287 7.288C11.095 7.48 10.9993 7.71733 11 8C11 8.28333 11.096 8.521 11.288 8.713C11.48 8.905 11.7173 9.00067 12 9ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22Z" fill="#2563EB" />
                                        </svg>
                                    </div>
                                </div>

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




                            <div class="overflow-hidden mb-20">
                                <div className="flex">
                                    <div className="flex items-end w-full">
                                        <h3 className="mr-2">Precio Mercado</h3>
                                        <div className="flex items-center">
                                            <h4 class="text-md text-green-500 mr-1">+5%</h4>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 10 10" fill="none">
                                                <path d="M2.08301 4.16667L4.99967 1.25M4.99967 1.25L7.91634 4.16667M4.99967 1.25V8.75" stroke="#22C55E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex justify-end w-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M11 17H13V11H11V17ZM12 9C12.2833 9 12.521 8.904 12.713 8.712C12.905 8.52 13.0007 8.28267 13 8C13 7.71667 12.904 7.479 12.712 7.287C12.52 7.095 12.2827 6.99933 12 7C11.7167 7 11.479 7.096 11.287 7.288C11.095 7.48 10.9993 7.71733 11 8C11 8.28333 11.096 8.521 11.288 8.713C11.48 8.905 11.7173 9.00067 12 9ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22Z" fill="#2563EB" />
                                        </svg>
                                    </div>
                                </div>

                                <div class="mt-4 bg-white border border-gray-200 rounded-lg">
                                    <table class="w-full">
                                        <tbody>

                                            <tr className="w-full">
                                                <td class="py-4 pl-4 pr-4 font-bold border-b border-gray-200 bg-gray-200">Recámaras</td>
                                                <td class="py-4 pr-4 font-bold border-b border-gray-200 bg-gray-200"></td>
                                            </tr>
                                            <tr>
                                                <td class="py-4 pl-4 pr-4 font-bold border-b border-gray-200">Promedio:</td>
                                                <td class="px-4 pl-4 pr-4 text-right border-b border-gray-200">$3,090,536.02</td>
                                            </tr>
                                            <tr>
                                                <td class="py-4 pl-4 pr-4 font-bold">Media:</td>
                                                <td class="py-4 pl-4 pr-4 text-right">$3,090,536.02</td>
                                            </tr>


                                            <tr className="w-full">
                                                <td class="py-4 pl-4 pr-4 font-bold border-b border-gray-200 bg-gray-200">Baños</td>
                                                <td class="py-4 pr-4 font-bold border-b border-gray-200 bg-gray-200"></td>
                                            </tr>
                                            <tr>
                                                <td class="py-4 pl-4 pr-4 font-bold border-b border-gray-200">Promedio:</td>
                                                <td class="px-4 pl-4 pr-4 text-right border-b border-gray-200">$3,090,536.02</td>
                                            </tr>
                                            <tr>
                                                <td class="py-4 pl-4 pr-4 font-bold">Media:</td>
                                                <td class="py-4 pl-4 pr-4 text-right">$3,090,536.02</td>
                                            </tr>


                                            <tr className="w-full">
                                                <td class="py-4 pl-4 pr-4 font-bold border-b border-gray-200 bg-gray-200">Estacionamientos</td>
                                                <td class="py-4 pr-4 font-bold border-b border-gray-200 bg-gray-200"></td>
                                            </tr>
                                            <tr>
                                                <td class="py-4 pl-4 pr-4 font-bold border-b border-gray-200">Promedio:</td>
                                                <td class="px-4 pl-4 pr-4 text-right border-b border-gray-200">$3,090,536.02</td>
                                            </tr>
                                            <tr>
                                                <td class="py-4 pl-4 pr-4 font-bold">Media:</td>
                                                <td class="py-4 pl-4 pr-4 text-right">$3,090,536.02</td>
                                            </tr>


                                            <tr className="w-full">
                                                <td class="py-4 pl-4 pr-4 font-bold border-b border-gray-200 bg-gray-200">Terreno</td>
                                                <td class="py-4 pr-4 font-bold border-b border-gray-200 bg-gray-200"></td>
                                            </tr>
                                            <tr>
                                                <td class="py-4 pl-4 pr-4 font-bold border-b border-gray-200">Promedio:</td>
                                                <td class="px-4 pl-4 pr-4 text-right border-b border-gray-200">$3,090,536.02</td>
                                            </tr>
                                            <tr>
                                                <td class="py-4 pl-4 pr-4 font-bold">Media:</td>
                                                <td class="py-4 pl-4 pr-4 text-right">$3,090,536.02</td>
                                            </tr>


                                            <tr className="w-full">
                                                <td class="py-4 pl-4 pr-4 font-bold border-b border-gray-200 bg-gray-200">M2 Construido</td>
                                                <td class="py-4 pr-4 font-bold border-b border-gray-200 bg-gray-200"></td>
                                            </tr>
                                            <tr>
                                                <td class="py-4 pl-4 pr-4 font-bold border-b border-gray-200">Promedio:</td>
                                                <td class="px-4 pl-4 pr-4 text-right border-b border-gray-200">$3,090,536.02</td>
                                            </tr>
                                            <tr>
                                                <td class="py-4 pl-4 pr-4 font-bold">Media:</td>
                                                <td class="py-4 pl-4 pr-4 text-right">$3,090,536.02</td>
                                            </tr>


                                            <tr className="w-full">
                                                <td class="py-4 pl-4 pr-4 font-bold border-b border-gray-200 bg-gray-200">Precio</td>
                                                <td class="py-4 pr-4 font-bold border-b border-gray-200 bg-gray-200"></td>
                                            </tr>
                                            <tr>
                                                <td class="py-4 pl-4 pr-4 font-bold border-b border-gray-200">Promedio:</td>
                                                <td class="px-4 pl-4 pr-4 text-right border-b border-gray-200">$3,090,536.02</td>
                                            </tr>
                                            <tr>
                                                <td class="py-4 pl-4 pr-4 font-bold">Media:</td>
                                                <td class="py-4 pl-4 pr-4 text-right">$3,090,536.02</td>
                                            </tr>


                                            <tr className="w-full">
                                                <td class="py-4 pl-4 pr-4 font-bold border-b border-gray-200 bg-gray-200">Precio M2 Construido</td>
                                                <td class="py-4 pr-4 font-bold border-b border-gray-200 bg-gray-200"></td>
                                            </tr>
                                            <tr>
                                                <td class="py-4 pl-4 pr-4 font-bold border-b border-gray-200">Promedio:</td>
                                                <td class="px-4 pl-4 pr-4 text-right border-b border-gray-200">$3,090,536.02</td>
                                            </tr>
                                            <tr>
                                                <td class="py-4 pl-4 pr-4 font-bold">Media:</td>
                                                <td class="py-4 pl-4 pr-4 text-right">$3,090,536.02</td>
                                            </tr>


                                        </tbody>
                                    </table>
                                </div>
                            </div>







                        </div>

                    </div>

                </section>




                <section id="mapa" class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mb-40">

                    <div class="min-w-[1140px]">

                        <div className="mb-10">
                            <h2 className="mb-2 text-2xl font-bold">Mapa</h2>
                            {/* <p className="text-sm text-grey-500">Lorem ipsum dolor sit amet consectetur. Maecenas morbi vitae ipsum orci. Nulla dolor sed neque at neque.</p> */}
                        </div>


                        <div class="overflow-hidden bg-white rounded-md shadow-md min-w-[1140px] p-9">
                            <div>

                                <article class="grid grid-cols-6 gap-8 items-center">


                                    <div class="overflow-hidden bg-white border border-gray-200 rounded-lg col-span-4">
                                        <div>
                                            <div className="w-full bg-blue-300 h-96">

                                            </div>
                                        </div>
                                    </div>

                                    <section class="col-span-2 space-y-4">

                                        <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                                            <div class="px-4 py-4">
                                                <div class="flex flex-col">
                                                    <div>
                                                        <h4 class=" text-lg font-bold mb-4">Crecimiento Histórico</h4>
                                                    </div>
                                                    <div className="flex w-full">
                                                        <div>
                                                            <h3 className="mb-1 text-sm font-light">Propiedad</h3>
                                                            <p class="text-2xl font-bold ">$921,750</p>
                                                        </div>
                                                        <div className="flex items-end justify-end w-full">
                                                            <div className="flex items-center">
                                                                <h4 class="text-lg text-green-500 mr-1">+36%</h4>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 10 10" fill="none">
                                                                    <path d="M2.08301 4.16667L4.99967 1.25M4.99967 1.25L7.91634 4.16667M4.99967 1.25V8.75" stroke="#22C55E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                                            <div class="px-4 py-4">
                                                <div class="flex flex-col">
                                                    <div>
                                                        <h4 class=" text-lg font-bold mb-4 text-gray-500">Precio Promedio Propiedad</h4>
                                                    </div>
                                                    <div className="flex w-full">
                                                        <div>
                                                            <h3 className="mb-1 text-sm font-light">Propiedad</h3>
                                                            <p class="text-2xl font-bold text-gray-500 ">64</p>
                                                        </div>
                                                        <div className="flex items-end justify-end w-full">
                                                            <div className="flex items-center">
                                                                <h4 class="text-lg text-green-500 mr-1">+36%</h4>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 10 10" fill="none">
                                                                    <path d="M2.08301 4.16667L4.99967 1.25M4.99967 1.25L7.91634 4.16667M4.99967 1.25V8.75" stroke="#22C55E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                                            <div class="px-4 py-4">
                                                <div class="flex flex-col">
                                                    <div>
                                                        <h4 class=" text-lg font-bold mb-4 text-gray-500">Precio P2 m2</h4>
                                                    </div>
                                                    <div className="flex w-full">
                                                        <div>
                                                            <h3 className="mb-1 text-sm font-light">Propiedad</h3>
                                                            <p class="text-2xl font-bold text-gray-500">64</p>
                                                        </div>
                                                        <div className="flex items-end justify-end w-full">
                                                            <div className="flex items-center">
                                                                <h4 class="text-lg text-green-500 mr-1">+5%</h4>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 10 10" fill="none">
                                                                    <path d="M2.08301 4.16667L4.99967 1.25M4.99967 1.25L7.91634 4.16667M4.99967 1.25V8.75" stroke="#22C55E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </section>


                                </article>



                            </div>
                        </div>

                    </div>

                </section>





                <section id="tendencias" class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mb-40">

                    <div class="min-w-[1140px]">

                        <div className="mb-10">
                            <h2 className="mb-2 text-2xl font-bold">Tendencias inmobiliarias</h2>
                            {/* <p className="text-sm text-grey-500">Lorem ipsum dolor sit amet consectetur. Maecenas morbi vitae ipsum orci. Nulla dolor sed neque at neque.</p> */}
                        </div>


                        <div class="overflow-hidden bg-white rounded-md shadow-md min-w-[1140px] p-9">
                            <div class="px-4 py-6 sm:px-8 sm:py-7">

                            </div>
                        </div>

                    </div>

                </section>





                <section id="crecimiento" class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mb-40">

                    <div class="min-w-[1140px]">

                        <div className="mb-10">
                            <h2 className="mb-2 text-2xl font-bold">Crecimiento Inmobiliario</h2>
                            <p className="text-sm text-grey-500">Conoce la evolución anual de los días en el mercado, el precio medio de las propiedades y el valor por m2. Observa cómo fluctúan estos indicadores a lo largo del tiempo y obtén insights valiosos para tus decisiones de inversión.</p>
                        </div>


                        <div class="overflow-hidden bg-white rounded-md shadow-md min-w-[1140px] p-9">
                            <div>



                                <section class="grid grid-cols-6 gap-6 px-6 sm:px-0  xl:gap-x-12 items-center">

                                    <article class=" col-span-2 space-y-4">


                                        <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                                            <div class="px-4 py-4">
                                                <div class="flex flex-col">
                                                    <div className="flex w-full">
                                                        <div className="w-full">
                                                            <h4 class="text-xl text-gray-500 mb-4">Precio Medio</h4>
                                                        </div>
                                                        <div className="flex items-center justify-end w-full">
                                                            <div className="flex items-center">
                                                                <div className="flex items-center px-4 py-2 font-bold text-white bg-blue-700 rounded-xl">Ver
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none" className="ml-2">
                                                                        <path d="M8 10.4C9.10457 10.4 10 9.54932 10 8.49998C10 7.45063 9.10457 6.59998 8 6.59998C6.89543 6.59998 6 7.45063 6 8.49998C6 9.54932 6.89543 10.4 8 10.4Z" fill="#F4F4F5" />
                                                                        <path d="M15.4698 8.33852C14.8817 6.89341 13.8608 5.64367 12.5332 4.74377C11.2056 3.84386 9.62953 3.33325 7.99979 3.27502C6.37005 3.33325 4.79398 3.84386 3.46639 4.74377C2.1388 5.64367 1.11787 6.89341 0.529787 8.33852C0.490071 8.44289 0.490071 8.55716 0.529787 8.66152C1.11787 10.1066 2.1388 11.3564 3.46639 12.2563C4.79398 13.1562 6.37005 13.6668 7.99979 13.725C9.62953 13.6668 11.2056 13.1562 12.5332 12.2563C13.8608 11.3564 14.8817 10.1066 15.4698 8.66152C15.5095 8.55716 15.5095 8.44289 15.4698 8.33852ZM7.99979 11.5875C7.357 11.5875 6.72864 11.4064 6.19418 11.0672C5.65972 10.7279 5.24316 10.2457 4.99718 9.68156C4.75119 9.11739 4.68683 8.4966 4.81224 7.89768C4.93764 7.29877 5.24717 6.74863 5.70169 6.31683C6.15621 5.88504 6.73531 5.59098 7.36574 5.47185C7.99618 5.35272 8.64965 5.41386 9.24351 5.64755C9.83737 5.88123 10.3449 6.27696 10.7021 6.7847C11.0592 7.29244 11.2498 7.88937 11.2498 8.50002C11.2485 9.31849 10.9056 10.1031 10.2964 10.6818C9.68722 11.2606 8.86133 11.5863 7.99979 11.5875Z" fill="#F4F4F5" />
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex w-full mt-4">
                                                        <div>
                                                            <p class="text-2xl font-bold ">$921,750</p>
                                                        </div>
                                                        <div className="flex items-end justify-end w-full">
                                                            <div className="flex items-center">
                                                                <h4 class="text-lg text-green-500 mr-1">+36%</h4>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 10 10" fill="none">
                                                                    <path d="M2.08301 4.16667L4.99967 1.25M4.99967 1.25L7.91634 4.16667M4.99967 1.25V8.75" stroke="#22C55E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                                            <div class="px-4 py-4">
                                                <div class="flex flex-col">
                                                    <div className="flex w-full">
                                                        <div className="w-full">
                                                            <h4 class="text-xl text-gray-500 mb-4">Días en el mercado</h4>
                                                        </div>
                                                        <div className="flex items-center justify-end w-full">
                                                            <div className="flex items-center">
                                                                <div className="flex items-center px-4 py-2 text-blue-700 bg-blue-100 rounded-xl">Ver
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none" className="ml-2">
                                                                        <path d="M8 10.4C9.10457 10.4 10 9.54932 10 8.49998C10 7.45063 9.10457 6.59998 8 6.59998C6.89543 6.59998 6 7.45063 6 8.49998C6 9.54932 6.89543 10.4 8 10.4Z" fill="#2563EB" />
                                                                        <path d="M15.4698 8.33852C14.8817 6.89341 13.8608 5.64367 12.5332 4.74377C11.2056 3.84386 9.62953 3.33325 7.99979 3.27502C6.37005 3.33325 4.79398 3.84386 3.46639 4.74377C2.1388 5.64367 1.11787 6.89341 0.529787 8.33852C0.490071 8.44289 0.490071 8.55716 0.529787 8.66152C1.11787 10.1066 2.1388 11.3564 3.46639 12.2563C4.79398 13.1562 6.37005 13.6668 7.99979 13.725C9.62953 13.6668 11.2056 13.1562 12.5332 12.2563C13.8608 11.3564 14.8817 10.1066 15.4698 8.66152C15.5095 8.55716 15.5095 8.44289 15.4698 8.33852ZM7.99979 11.5875C7.357 11.5875 6.72864 11.4064 6.19418 11.0672C5.65972 10.7279 5.24316 10.2457 4.99718 9.68156C4.75119 9.11739 4.68683 8.4966 4.81224 7.89768C4.93764 7.29877 5.24717 6.74863 5.70169 6.31683C6.15621 5.88504 6.73531 5.59098 7.36574 5.47185C7.99618 5.35272 8.64965 5.41386 9.24351 5.64755C9.83737 5.88123 10.3449 6.27696 10.7021 6.7847C11.0592 7.29244 11.2498 7.88937 11.2498 8.50002C11.2485 9.31849 10.9056 10.1031 10.2964 10.6818C9.68722 11.2606 8.86133 11.5863 7.99979 11.5875Z" fill="#2563EB" />
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex w-full mt-4">
                                                        <div>
                                                            <p class="text-2xl text-gray-400">$921,750</p>
                                                        </div>
                                                        <div className="flex items-end justify-end w-full">
                                                            <div className="flex items-center">
                                                                <h4 class="text-lg text-green-500 mr-1">+36%</h4>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 10 10" fill="none">
                                                                    <path d="M2.08301 4.16667L4.99967 1.25M4.99967 1.25L7.91634 4.16667M4.99967 1.25V8.75" stroke="#22C55E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                                            <div class="px-4 py-4">
                                                <div class="flex flex-col">
                                                    <div className="flex w-full">
                                                        <div className="w-full">
                                                            <h4 class="mb-4 text-xl text-gray-500">Precio m2</h4>
                                                        </div>
                                                        <div className="flex items-center justify-end w-full">
                                                            <div className="flex items-center">
                                                                <div className="flex items-center px-4 py-2 text-blue-700 bg-blue-100 rounded-xl">Ver
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none" className="ml-2">
                                                                        <path d="M8 10.4C9.10457 10.4 10 9.54932 10 8.49998C10 7.45063 9.10457 6.59998 8 6.59998C6.89543 6.59998 6 7.45063 6 8.49998C6 9.54932 6.89543 10.4 8 10.4Z" fill="#2563EB" />
                                                                        <path d="M15.4698 8.33852C14.8817 6.89341 13.8608 5.64367 12.5332 4.74377C11.2056 3.84386 9.62953 3.33325 7.99979 3.27502C6.37005 3.33325 4.79398 3.84386 3.46639 4.74377C2.1388 5.64367 1.11787 6.89341 0.529787 8.33852C0.490071 8.44289 0.490071 8.55716 0.529787 8.66152C1.11787 10.1066 2.1388 11.3564 3.46639 12.2563C4.79398 13.1562 6.37005 13.6668 7.99979 13.725C9.62953 13.6668 11.2056 13.1562 12.5332 12.2563C13.8608 11.3564 14.8817 10.1066 15.4698 8.66152C15.5095 8.55716 15.5095 8.44289 15.4698 8.33852ZM7.99979 11.5875C7.357 11.5875 6.72864 11.4064 6.19418 11.0672C5.65972 10.7279 5.24316 10.2457 4.99718 9.68156C4.75119 9.11739 4.68683 8.4966 4.81224 7.89768C4.93764 7.29877 5.24717 6.74863 5.70169 6.31683C6.15621 5.88504 6.73531 5.59098 7.36574 5.47185C7.99618 5.35272 8.64965 5.41386 9.24351 5.64755C9.83737 5.88123 10.3449 6.27696 10.7021 6.7847C11.0592 7.29244 11.2498 7.88937 11.2498 8.50002C11.2485 9.31849 10.9056 10.1031 10.2964 10.6818C9.68722 11.2606 8.86133 11.5863 7.99979 11.5875Z" fill="#2563EB" />
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex w-full mt-4">
                                                        <div>
                                                            <p class="text-2xl text-gray-400">$921,750</p>
                                                        </div>
                                                        <div className="flex items-end justify-end w-full">
                                                            <div className="flex items-center">
                                                                <h4 class="text-lg text-green-500 mr-1">+36%</h4>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 10 10" fill="none">
                                                                    <path d="M2.08301 4.16667L4.99967 1.25M4.99967 1.25L7.91634 4.16667M4.99967 1.25V8.75" stroke="#22C55E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                    </article>

                                    <div class="overflow-hidden bg-white border border-gray-200 rounded-lg col-span-4">
                                        <div class="px-4 py-6">

                                            <div className="w-full bg-blue-300 h-96">

                                            </div>

                                        </div>
                                    </div>

                                </section>





                            </div>
                        </div>


                    </div>

                </section>



                <section id="mudando" class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mb-40">

                    <div class="min-w-[1140px]">

                        <div className="mb-10">
                            <h2 className="mb-2 text-2xl font-bold">¿De dónde se están mudando?</h2>
                            <p className="text-sm text-grey-500">Conoce la tendencia migratoria y la cantidad de personas que han elegido esta ubicación como su nuevo hogar. Nuestra gráfica te brinda una perspectiva clara de la popularidad de la zona y cómo ha sido elegida por los nuevos residentes.</p>
                        </div>


                        <div class="overflow-hidden bg-white rounded-md shadow-md min-w-[1140px] p-9">
                            <div class="px-4 py-6 sm:px-8 sm:py-7">

                                <section class="grid grid-cols-12 gap-6 px-6 sm:px-0  xl:gap-x-12">

                                    <div class=" col-span-5 space-y-4">

                                        <div class="px-4 py-6 overflow-hidden bg-white border border-gray-200 rounded-lg">
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

                                    <div class="overflow-hidden bg-white border border-gray-200 rounded-lg col-span-7">
                                        <div class="px-4 py-6 flex justify-center items">
                                            <div className="w-full bg-blue-300 h-96">

                                            </div>

                                        </div>
                                    </div>

                                </section>





                            </div>
                        </div>

                    </div>

                </section>






                <section id="mudando" class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mb-40">

                    <div class="min-w-[1140px]">

                        <div className="mb-10">
                            <h2 className="mb-2 text-2xl font-bold">Distribución de m2 de construcción</h2>
                            <p className="text-sm text-grey-500">Esta potente herramienta te permitirá identificar rápidamente las proporciones y variaciones entre las clasificaciones inmobiliarias.</p>
                        </div>


                        <div class="overflow-hidden bg-white rounded-md shadow-md min-w-[1140px] p-9">
                            <div class="px-4 py-6 sm:px-8 sm:py-7 w-full bg-blue-300 h-96">








                            </div>
                        </div>

                    </div>

                </section>








            </main>




        </div>
    );
}