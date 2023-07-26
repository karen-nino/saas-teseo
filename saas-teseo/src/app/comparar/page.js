import Link from "next/link";

export default function comparar() {

    return (
        <div className='min-h-screen py-10 bg-gray-50 sm:py-16 lg:py-24'>


            <section className="flex flex-col items-center justify-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 min-w-[1140px]">

                <div className="self-start px-4 max-w-7xl sm:px-6 lg:px-8">
                <Link href={"/"} class="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.15426 2.44609C6.95423 2.24613 6.68297 2.13379 6.40013 2.13379C6.11729 2.13379 5.84603 2.24613 5.646 2.44609L0.845996 7.2461C0.646028 7.44612 0.53369 7.71739 0.53369 8.00023C0.53369 8.28307 0.646028 8.55433 0.845996 8.75436L5.646 13.5544C5.84717 13.7487 6.11661 13.8562 6.39629 13.8537C6.67597 13.8513 6.9435 13.7391 7.14127 13.5414C7.33904 13.3436 7.45122 13.0761 7.45365 12.7964C7.45608 12.5167 7.34857 12.2473 7.15426 12.0461L4.2668 9.0669H14.4001C14.683 9.0669 14.9543 8.95451 15.1544 8.75448C15.3544 8.55444 15.4668 8.28313 15.4668 8.00023C15.4668 7.71733 15.3544 7.44602 15.1544 7.24598C14.9543 7.04594 14.683 6.93356 14.4001 6.93356H4.2668L7.15426 3.95436C7.35423 3.75433 7.46657 3.48307 7.46657 3.20023C7.46657 2.91739 7.35423 2.64612 7.15426 2.44609Z" fill="white" />
                        </svg>
                        Atrás
                    </Link>
                </div>

                <div className="flex items-center mt-20 mb-10">

                    <h2 className="pr-2 text-3xl font-plus-jakarta">Comparar</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 32 30" fill="none">
                        <path d="M20.1982 16.625L15.6179 12.125C15.4907 12 15.4007 11.8646 15.3482 11.7188C15.2956 11.5729 15.2689 11.4167 15.268 11.25C15.268 11.0833 15.2947 10.9271 15.3482 10.7812C15.4016 10.6354 15.4915 10.5 15.6179 10.375L20.1982 5.875C20.4527 5.625 20.7496 5.5 21.0889 5.5C21.4282 5.5 21.725 5.625 21.9795 5.875C22.234 6.125 22.3612 6.42208 22.3612 6.76625C22.3612 7.11042 22.234 7.40708 21.9795 7.65625L19.5939 10H27.4505C27.811 10 28.1134 10.12 28.3576 10.36C28.6019 10.6 28.7236 10.8967 28.7228 11.25C28.7228 11.6042 28.6007 11.9013 28.3564 12.1413C28.1121 12.3813 27.8101 12.5008 27.4505 12.5H19.5939L21.9795 14.8438C22.234 15.0938 22.3612 15.3854 22.3612 15.7187C22.3612 16.0521 22.234 16.3438 21.9795 16.5938C21.725 16.8438 21.4337 16.9792 21.1054 17C20.7772 17.0208 20.4748 16.8958 20.1982 16.625ZM10.0197 24.0938C10.2741 24.3438 10.571 24.4742 10.9103 24.485C11.2496 24.4958 11.5465 24.3758 11.8009 24.125L16.3813 19.625C16.5085 19.5 16.5984 19.3646 16.651 19.2188C16.7036 19.0729 16.7303 18.9167 16.7312 18.75C16.7312 18.5833 16.7045 18.4271 16.651 18.2812C16.5976 18.1354 16.5077 18 16.3813 17.875L11.8009 13.375C11.5465 13.125 11.2496 13 10.9103 13C10.571 13 10.2741 13.125 10.0197 13.375C9.76521 13.625 9.63798 13.9221 9.63798 14.2662C9.63798 14.6104 9.76521 14.9071 10.0197 15.1562L12.4053 17.5H4.54869C4.1882 17.5 3.88581 17.62 3.64153 17.86C3.39724 18.1 3.27552 18.3967 3.27637 18.75C3.27637 19.1042 3.39851 19.4012 3.6428 19.6412C3.88709 19.8812 4.18905 20.0008 4.54869 20H12.4053L10.0197 22.3438C9.76521 22.5938 9.63798 22.8854 9.63798 23.2188C9.63798 23.5521 9.76521 23.8438 10.0197 24.0938Z" fill="#2563EB" />
                    </svg>
                </div>

                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mb-10">

                    <div class="overflow-hidden bg-white rounded-md shadow-md min-w-[1140px] p-9">
                        <div class="px-4 py-6 sm:px-8 sm:py-7">
                            <form action="#" method="">

                                <h3 className="mb-6 text-base font-bold text-gray-900">Selecciona una locación</h3>

                                <div className="flex flex-col space-y-5">

                                    <div class="flex space-x-5">
                                        <div>
                                            <label for="" class="text-base font-medium text-gray-900"> Estado </label>
                                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600 w-60">
                                                <select name="cars" id="cars" className="block w-full py-4 pl-6 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600">
                                                    <option value="option1">Seleccionar</option>
                                                    <option value="option2">Opción 2</option>
                                                    <option value="option3">Opción 3</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label for="" class="text-base font-medium text-gray-900"> Ciudad </label>
                                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600 w-60">
                                                <select name="cars" id="cars" className="block w-full py-4 pl-6 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600">
                                                    <option value="option1">Seleccionar</option>
                                                    <option value="option2">Opción 2</option>
                                                    <option value="option3">Opción 3</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex space-x-5">
                                        <div className="w-full">
                                            <label for="" class="text-base font-medium text-gray-900"> Colonia </label>
                                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <select name="cars" id="cars" className="block w-full py-4 pl-6 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600">
                                                    <option value="option1">Seleccionar</option>
                                                    <option value="option2">Opción 2</option>
                                                    <option value="option3">Opción 3</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="w-full">
                                            <label for="" class="text-base font-medium text-gray-900"> Fraccionamiento </label>
                                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <select name="cars" id="cars" className="block w-full py-4 pl-6 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600">
                                                    <option value="option1">Seleccionar</option>
                                                    <option value="option2">Opción 2</option>
                                                    <option value="option3">Opción 3</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="w-full">
                                            <label for="" class="text-base font-medium text-gray-900"> Categoría </label>
                                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <select name="cars" id="cars" className="block w-full py-4 pl-6 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600">
                                                    <option value="option1">Seleccionar</option>
                                                    <option value="option2">Opción 2</option>
                                                    <option value="option3">Opción 3</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>

                </div>

                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mb-10">

                    <div class="overflow-hidden bg-white rounded-md shadow-md min-w-[1140px] p-9">
                        <div class="px-4 py-6 sm:px-8 sm:py-7">
                            <form action="#" method="">

                                <h3 className="mb-6 text-base font-bold text-gray-900">Selecciona una locación</h3>

                                <div className="flex flex-col space-y-5">

                                    <div class="flex space-x-5">
                                        <div>
                                            <label for="" class="text-base font-medium text-gray-900"> Estado </label>
                                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600 w-60">
                                                <select name="cars" id="cars" className="block w-full py-4 pl-6 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600">
                                                    <option value="option1">Seleccionar</option>
                                                    <option value="option2">Opción 2</option>
                                                    <option value="option3">Opción 3</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label for="" class="text-base font-medium text-gray-900"> Ciudad </label>
                                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600 w-60">
                                                <select name="cars" id="cars" className="block w-full py-4 pl-6 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600">
                                                    <option value="option1">Seleccionar</option>
                                                    <option value="option2">Opción 2</option>
                                                    <option value="option3">Opción 3</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex space-x-5">
                                        <div className="w-full">
                                            <label for="" class="text-base font-medium text-gray-900"> Colonia </label>
                                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <select name="cars" id="cars" className="block w-full py-4 pl-6 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600">
                                                    <option value="option1">Seleccionar</option>
                                                    <option value="option2">Opción 2</option>
                                                    <option value="option3">Opción 3</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="w-full">
                                            <label for="" class="text-base font-medium text-gray-900"> Fraccionamiento </label>
                                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <select name="cars" id="cars" className="block w-full py-4 pl-6 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600">
                                                    <option value="option1">Seleccionar</option>
                                                    <option value="option2">Opción 2</option>
                                                    <option value="option3">Opción 3</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="w-full">
                                            <label for="" class="text-base font-medium text-gray-900"> Categoría </label>
                                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <select name="cars" id="cars" className="block w-full py-4 pl-6 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600">
                                                    <option value="option1">Seleccionar</option>
                                                    <option value="option2">Opción 2</option>
                                                    <option value="option3">Opción 3</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="self-center pt-12">
                    {/* <button type="submit" class="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                        Comparar
                    </button> */}

                    <button type="submit" class="px-8 py-3 text-white bg-neutral-400 rounded focus:outline-none" disabled>Comparar</button>
                </div>
            </section>

            <div className="flex justify-end mt-20 mr-20">
                <Link href={"/"} class="flex items-center px-8 py-3 text-base text-blue-700 font-semibold transition-all duration-200 bg-blue-100 border border-transparent rounded-full focus:outline-none hover:bg-blue-200 focus:bg-blue-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                        <path d="M19.034 21.3144C19.034 21.6563 18.9326 21.9906 18.7426 22.275C18.5526 22.5593 18.2826 22.7809 17.9667 22.9118C17.6507 23.0426 17.3031 23.0769 16.9677 23.0102C16.6323 22.9434 16.3242 22.7788 16.0824 22.537C15.8406 22.2952 15.676 21.9871 15.6092 21.6517C15.5425 21.3163 15.5768 20.9687 15.7076 20.6527C15.8385 20.3368 16.0601 20.0668 16.3444 19.8768C16.6288 19.6868 16.963 19.5854 17.305 19.5854C17.7636 19.5854 18.2033 19.7675 18.5276 20.0918C18.8518 20.416 19.034 20.8558 19.034 21.3144ZM28.9757 15.6951C28.9757 18.0034 28.2913 20.2598 27.0089 22.1791C25.7265 24.0983 23.9038 25.5942 21.7712 26.4775C19.6387 27.3608 17.2921 27.5919 15.0282 27.1416C12.7643 26.6913 10.6847 25.5798 9.05256 23.9476C7.42038 22.3154 6.30885 20.2359 5.85853 17.972C5.40821 15.7081 5.63933 13.3615 6.52266 11.2289C7.40599 9.0964 8.90186 7.27368 10.8211 5.99129C12.7403 4.70889 14.9968 4.02441 17.305 4.02441C20.3992 4.02785 23.3657 5.25854 25.5537 7.44648C27.7416 9.63443 28.9723 12.6009 28.9757 15.6951ZM26.3822 15.6951C26.3822 13.8998 25.8499 12.1448 24.8525 10.6521C23.855 9.15936 22.4374 7.99591 20.7787 7.30887C19.1201 6.62184 17.2949 6.44208 15.5341 6.79233C13.7733 7.14257 12.1559 8.0071 10.8864 9.27657C9.61696 10.546 8.75244 12.1635 8.40219 13.9243C8.05195 15.6851 8.23171 17.5102 8.91874 19.1688C9.60578 20.8275 10.7692 22.2452 12.262 23.2426C13.7547 24.24 15.5097 24.7724 17.305 24.7724C19.7117 24.7698 22.019 23.8126 23.7207 22.1109C25.4225 20.4091 26.3797 18.1018 26.3822 15.6951ZM17.305 8.77916C14.6834 8.77916 12.5503 10.7178 12.5503 13.1016V13.5339C12.5503 13.8778 12.6869 14.2076 12.9301 14.4508C13.1733 14.694 13.5031 14.8306 13.847 14.8306C14.1909 14.8306 14.5208 14.694 14.764 14.4508C15.0071 14.2076 15.1438 13.8778 15.1438 13.5339V13.1016C15.1438 12.1485 16.1163 11.3727 17.305 11.3727C18.4937 11.3727 19.4663 12.1485 19.4663 13.1016C19.4663 14.0548 18.4937 14.8306 17.305 14.8306C16.9611 14.8306 16.6313 14.9673 16.3881 15.2105C16.1449 15.4536 16.0083 15.7835 16.0083 16.1274V16.9919C16.0075 17.3123 16.1253 17.6216 16.3391 17.8602C16.5529 18.0989 16.8474 18.2499 17.1659 18.2843C17.4844 18.3186 17.8044 18.2339 18.0642 18.0463C18.3239 17.8588 18.505 17.5817 18.5726 17.2685C20.5804 16.7628 22.0598 15.0868 22.0598 13.1016C22.0598 10.7178 19.9266 8.77916 17.305 8.77916Z" fill="#2563EB" />
                    </svg>
                    Ayuda
                </Link>
            </div>

        </div>
    );

}