import Link from "next/link";

export default function comparar() {

    return (
        <div className='min-h-screen py-10 bg-gray-50 sm:py-16 lg:py-24'>


            <section className="flex flex-col items-center justify-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 min-w-[1140px]">

                <div className="self-start px-4 max-w-7xl sm:px-6 lg:px-8">
                    <Link href={"/"} class="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
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
                <Link href={"/"} class="px-8 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                    Ayuda
                </Link>
            </div>

        </div>
    );

}