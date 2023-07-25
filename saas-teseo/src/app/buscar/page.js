export default function buscar() {

    return (
        <div className='min-h-screen py-10 bg-gray-50 sm:py-16 lg:py-24'>


            <section className="flex flex-col items-center justify-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 min-w-[1140px]">

                <div className="self-start px-4 max-w-7xl sm:px-6 lg:px-8">
                    <button type="submit" class="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                        Atrás
                    </button>
                </div>

                <div className="flex items-center mt-20 mb-10">

                    <h2 className="pr-2 text-3xl font-plus-jakarta">Buscar</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 31 30" fill="none">
                        <path d="M19.875 15C23 15 25.5 17.5 25.5 20.625C25.5 21.725 25.1875 22.7625 24.6375 23.625L28.4875 27.5L26.75 29.2375L22.85 25.4C21.9875 25.9375 20.9625 26.25 19.875 26.25C16.75 26.25 14.25 23.75 14.25 20.625C14.25 17.5 16.75 15 19.875 15ZM19.875 17.5C19.0462 17.5 18.2513 17.8292 17.6653 18.4153C17.0792 19.0013 16.75 19.7962 16.75 20.625C16.75 21.4538 17.0792 22.2487 17.6653 22.8347C18.2513 23.4208 19.0462 23.75 19.875 23.75C20.7038 23.75 21.4987 23.4208 22.0847 22.8347C22.6708 22.2487 23 21.4538 23 20.625C23 19.7962 22.6708 19.0013 22.0847 18.4153C21.4987 17.8292 20.7038 17.5 19.875 17.5ZM18 7.6375L10.5 5V19.8625L11.75 20.3V20.625C11.75 21.425 11.8625 22.2 12.075 22.925L10.5 22.375L3.825 24.9625L3.625 25C3.45924 25 3.30027 24.9342 3.18306 24.8169C3.06585 24.6997 3 24.5408 3 24.375V5.475C3 5.1875 3.1875 4.9625 3.45 4.875L10.5 2.5L18 5.125L24.675 2.5H24.875C25.0408 2.5 25.1997 2.56585 25.3169 2.68306C25.4342 2.80027 25.5 2.95924 25.5 3.125V14.7625C23.9886 13.3086 21.9722 12.4975 19.875 12.5C19.25 12.5 18.625 12.575 18 12.7125V7.6375Z" fill="#2563EB" />
                    </svg>
                </div>

                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

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
                                                    <option value="option1">Opción 1</option>
                                                    <option value="option2">Opción 2</option>
                                                    <option value="option3">Opción 3</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label for="" class="text-base font-medium text-gray-900"> Ciudad </label>
                                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600 w-60">
                                                <select name="cars" id="cars" className="block w-full py-4 pl-6 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600">
                                                    <option value="option1">Opción 1</option>
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
                                                    <option value="option1">Opción 1</option>
                                                    <option value="option2">Opción 2</option>
                                                    <option value="option3">Opción 3</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="w-full">
                                            <label for="" class="text-base font-medium text-gray-900"> Fraccionamiento </label>
                                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <select name="cars" id="cars" className="block w-full py-4 pl-6 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600">
                                                    <option value="option1">Opción 1</option>
                                                    <option value="option2">Opción 2</option>
                                                    <option value="option3">Opción 3</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="w-full">
                                            <label for="" class="text-base font-medium text-gray-900"> Categoría </label>
                                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <select name="cars" id="cars" className="block w-full py-4 pl-6 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600">
                                                    <option value="option1">Opción 1</option>
                                                    <option value="option2">Opción 2</option>
                                                    <option value="option3">Opción 3</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="self-center pt-12">
                                        <button type="submit" class="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                            Buscar
                                        </button>

                                        <button type="submit" class="px-8 py-3 text-white bg-neutral-400 rounded focus:outline-none" disabled>Buscar</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </section>

            <button type="button" class="px-8 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700 right-20 bottom-20 absolute">
                Ayuda
            </button>


        </div>
    );
}