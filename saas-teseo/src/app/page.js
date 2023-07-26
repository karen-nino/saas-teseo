import Link from "next/link";

export default function Home() {
  return (
    // <main className="flex flex-col items-center justify-between min-h-screen p-24">
    //   <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
    //     <p className="fixed top-0 left-0 flex justify-center w-full pt-8 pb-6 border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">src/app/page.js</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex items-end justify-center w-full h-48 bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    //       <a
    //         className="flex gap-2 p-8 pointer-events-none place-items-center lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="grid mb-32 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Docs{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Learn{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Templates{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Explore the Next.js 13 playground.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Deploy{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
    <main className='flex flex-col items-center justify-center min-h-screen py-10 bg-gray-50 sm:py-16 lg:py-24'>
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex justify-center items-start gap-10">

        <div class="overflow-hidden bg-white rounded-md shadow-md w-[225px] p-9">

            <div>
              <Link href={"/buscar"} class="inline-flex items-center justify-center  text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700 w-40 h-40">
                <div className='flex flex-col items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none" className='mb-2'>
                      <path d="M32.1695 25.4512C36.8768 25.4512 40.6427 29.2915 40.6427 34.0918C40.6427 35.7815 40.1719 37.3752 39.3434 38.7001L45.1429 44.6525L42.5256 47.3214L36.6509 41.4267C35.3516 42.2523 33.8076 42.7323 32.1695 42.7323C27.4622 42.7323 23.6963 38.8921 23.6963 34.0918C23.6963 29.2915 27.4622 25.4512 32.1695 25.4512ZM32.1695 29.2915C30.921 29.2915 29.7237 29.7972 28.8409 30.6975C27.9581 31.5977 27.4622 32.8187 27.4622 34.0918C27.4622 35.3649 27.9581 36.5859 28.8409 37.4861C29.7237 38.3863 30.921 38.8921 32.1695 38.8921C33.418 38.8921 34.6153 38.3863 35.4981 37.4861C36.3809 36.5859 36.8768 35.3649 36.8768 34.0918C36.8768 32.8187 36.3809 31.5977 35.4981 30.6975C34.6153 29.7972 33.418 29.2915 32.1695 29.2915ZM29.3451 14.1417L18.0476 10.0902V32.9205L19.9305 33.5926V34.0918C19.9305 35.3207 20.0999 36.5111 20.42 37.6248L18.0476 36.78L7.99273 40.7546L7.69146 40.8122C7.44177 40.8122 7.20231 40.7111 7.02575 40.531C6.84919 40.351 6.75 40.1068 6.75 39.8522V10.8199C6.75 10.3783 7.03244 10.0326 7.42785 9.89823L18.0476 6.25L29.3451 10.2823L39.3999 6.25H39.7012C39.9509 6.25 40.1904 6.35115 40.3669 6.5312C40.5435 6.71124 40.6427 6.95544 40.6427 7.21006V25.0864C38.366 22.853 35.3286 21.6072 32.1695 21.611C31.228 21.611 30.2866 21.7262 29.3451 21.9374V14.1417Z" fill="white" />
                    </svg>
                  <p>Buscar</p>
                </div>
              </Link>
            </div>
        </div>

        <div class="overflow-hidden bg-white rounded-md shadow-md w-[225px] p-9">
            <div>
              <Link href={"/comparar"} class="inline-flex items-center justify-center  text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700 w-40 h-40">
                <div className='flex flex-col items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none" className='mb-2'>
                      <path d="M32.3751 27.7082L24.8751 20.2082C24.6668 19.9998 24.5195 19.7741 24.4334 19.5311C24.3473 19.288 24.3036 19.0276 24.3022 18.7498C24.3022 18.4721 24.3459 18.2116 24.4334 17.9686C24.5209 17.7255 24.6681 17.4998 24.8751 17.2915L32.3751 9.7915C32.7918 9.37484 33.2779 9.1665 33.8334 9.1665C34.389 9.1665 34.8751 9.37484 35.2918 9.7915C35.7084 10.2082 35.9168 10.7033 35.9168 11.2769C35.9168 11.8505 35.7084 12.345 35.2918 12.7603L31.3855 16.6665H44.2501C44.8404 16.6665 45.3355 16.8665 45.7355 17.2665C46.1355 17.6665 46.3348 18.1609 46.3334 18.7498C46.3334 19.3401 46.1334 19.8353 45.7334 20.2353C45.3334 20.6353 44.839 20.8346 44.2501 20.8332H31.3855L35.2918 24.7394C35.7084 25.1561 35.9168 25.6422 35.9168 26.1978C35.9168 26.7533 35.7084 27.2394 35.2918 27.6561C34.8751 28.0728 34.398 28.2985 33.8605 28.3332C33.323 28.3679 32.8279 28.1596 32.3751 27.7082ZM15.7084 40.1561C16.1251 40.5728 16.6112 40.7901 17.1668 40.8082C17.7223 40.8262 18.2084 40.6262 18.6251 40.2082L26.1251 32.7082C26.3334 32.4998 26.4806 32.2741 26.5668 32.0311C26.6529 31.788 26.6966 31.5276 26.698 31.2498C26.698 30.9721 26.6543 30.7116 26.5668 30.4686C26.4793 30.2255 26.332 29.9998 26.1251 29.7915L18.6251 22.2915C18.2084 21.8748 17.7223 21.6665 17.1668 21.6665C16.6112 21.6665 16.1251 21.8748 15.7084 22.2915C15.2918 22.7082 15.0834 23.2033 15.0834 23.7769C15.0834 24.3505 15.2918 24.845 15.7084 25.2603L19.6147 29.1665H6.75009C6.15981 29.1665 5.66467 29.3665 5.26467 29.7665C4.86467 30.1665 4.66537 30.661 4.66676 31.2498C4.66676 31.8401 4.86676 32.3353 5.26676 32.7353C5.66676 33.1353 6.1612 33.3346 6.75009 33.3332H19.6147L15.7084 37.2394C15.2918 37.6561 15.0834 38.1422 15.0834 38.6978C15.0834 39.2533 15.2918 39.7394 15.7084 40.1561Z" fill="white" />
                    </svg>
                  <p>Comparar</p>
                </div>
              </Link>
            </div>
        </div>


      </div>

      <Link href={"/"} class="flex items-center px-8 py-3 text-base text-blue-700 font-semibold transition-all duration-200 bg-blue-100 border border-transparent rounded-full focus:outline-none hover:bg-blue-200 focus:bg-blue-200 right-20 bottom-20 absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                        <path d="M19.034 21.3144C19.034 21.6563 18.9326 21.9906 18.7426 22.275C18.5526 22.5593 18.2826 22.7809 17.9667 22.9118C17.6507 23.0426 17.3031 23.0769 16.9677 23.0102C16.6323 22.9434 16.3242 22.7788 16.0824 22.537C15.8406 22.2952 15.676 21.9871 15.6092 21.6517C15.5425 21.3163 15.5768 20.9687 15.7076 20.6527C15.8385 20.3368 16.0601 20.0668 16.3444 19.8768C16.6288 19.6868 16.963 19.5854 17.305 19.5854C17.7636 19.5854 18.2033 19.7675 18.5276 20.0918C18.8518 20.416 19.034 20.8558 19.034 21.3144ZM28.9757 15.6951C28.9757 18.0034 28.2913 20.2598 27.0089 22.1791C25.7265 24.0983 23.9038 25.5942 21.7712 26.4775C19.6387 27.3608 17.2921 27.5919 15.0282 27.1416C12.7643 26.6913 10.6847 25.5798 9.05256 23.9476C7.42038 22.3154 6.30885 20.2359 5.85853 17.972C5.40821 15.7081 5.63933 13.3615 6.52266 11.2289C7.40599 9.0964 8.90186 7.27368 10.8211 5.99129C12.7403 4.70889 14.9968 4.02441 17.305 4.02441C20.3992 4.02785 23.3657 5.25854 25.5537 7.44648C27.7416 9.63443 28.9723 12.6009 28.9757 15.6951ZM26.3822 15.6951C26.3822 13.8998 25.8499 12.1448 24.8525 10.6521C23.855 9.15936 22.4374 7.99591 20.7787 7.30887C19.1201 6.62184 17.2949 6.44208 15.5341 6.79233C13.7733 7.14257 12.1559 8.0071 10.8864 9.27657C9.61696 10.546 8.75244 12.1635 8.40219 13.9243C8.05195 15.6851 8.23171 17.5102 8.91874 19.1688C9.60578 20.8275 10.7692 22.2452 12.262 23.2426C13.7547 24.24 15.5097 24.7724 17.305 24.7724C19.7117 24.7698 22.019 23.8126 23.7207 22.1109C25.4225 20.4091 26.3797 18.1018 26.3822 15.6951ZM17.305 8.77916C14.6834 8.77916 12.5503 10.7178 12.5503 13.1016V13.5339C12.5503 13.8778 12.6869 14.2076 12.9301 14.4508C13.1733 14.694 13.5031 14.8306 13.847 14.8306C14.1909 14.8306 14.5208 14.694 14.764 14.4508C15.0071 14.2076 15.1438 13.8778 15.1438 13.5339V13.1016C15.1438 12.1485 16.1163 11.3727 17.305 11.3727C18.4937 11.3727 19.4663 12.1485 19.4663 13.1016C19.4663 14.0548 18.4937 14.8306 17.305 14.8306C16.9611 14.8306 16.6313 14.9673 16.3881 15.2105C16.1449 15.4536 16.0083 15.7835 16.0083 16.1274V16.9919C16.0075 17.3123 16.1253 17.6216 16.3391 17.8602C16.5529 18.0989 16.8474 18.2499 17.1659 18.2843C17.4844 18.3186 17.8044 18.2339 18.0642 18.0463C18.3239 17.8588 18.505 17.5817 18.5726 17.2685C20.5804 16.7628 22.0598 15.0868 22.0598 13.1016C22.0598 10.7178 19.9266 8.77916 17.305 8.77916Z" fill="#2563EB" />
                    </svg>
                    Ayuda
                </Link>

    </main>
  )
}
