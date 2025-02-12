import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import SignIn from '../SignIn'

const Tailwind = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div>
            {/* <h1 className="text-3xl font-bold underline text-red-100 bg-green-300 md:bg-blue-500">
                Hello world!
            </h1> */}

            <SignIn />
            <hr />
            <h2>card</h2>
            <div className="h-screen dark:bg-gray-700 bg-gray-200 pt-12">
  {/* Card start */}
  <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
    <div className="border-b px-4 pb-6">
      <div className="text-center my-4">
        <img
          className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
          src="https://randomuser.me/api/portraits/women/21.jpg"
          alt=""
        />
        <div className="py-2">
          <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">
            Cait Genevieve
          </h3>
          <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
            <svg
              className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
            >
              <path
                className=""
                d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
              />
            </svg>
            New York, NY
          </div>
        </div>
      </div>
      <div className="flex gap-2 px-2">
        <button className="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
          Follow
        </button>
        <button className="flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black dark:text-white px-4 py-2">
          Message
        </button>
      </div>
    </div>
    <div className="px-4 py-4">
      <div className="flex gap-2 items-center text-gray-800 dark:text-gray-300 mb-4">
        <svg
          className="h-6 w-6 text-gray-600 dark:text-gray-400"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          height={24}
        >
          <path
            className=""
            d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
          />
        </svg>
        <span>
          <strong className="text-black dark:text-white">12</strong> Followers
          you know
        </span>
      </div>
      <div className="flex">
        <div className="flex justify-end mr-2">
          <img
            className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt=""
          />
          <img
            className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
            src="https://randomuser.me/api/portraits/women/31.jpg"
            alt=""
          />
          <img
            className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
            src="https://randomuser.me/api/portraits/men/33.jpg"
            alt=""
          />
          <img
            className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
            src="https://randomuser.me/api/portraits/women/32.jpg"
            alt=""
          />
          <img
            className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
            src="https://randomuser.me/api/portraits/men/44.jpg"
            alt=""
          />
          <img
            className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
            src="https://randomuser.me/api/portraits/women/42.jpg"
            alt=""
          />
          <span className="flex items-center justify-center bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-white font-semibold border-2 border-gray-200 dark:border-gray-700 rounded-full h-10 w-10">
            +999
          </span>
        </div>
      </div>
    </div>
  </div>
  {/* Card end */}
</div>

            <hr />
            <h2>Pricing</h2>
            <section className="py-6 leading-7 text-gray-900 bg-white sm:py-12 md:py-16">
                <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-0 max-w-7xl">
                    <div className="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
                        <h2
                            id="pricing"
                            className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl"
                        >
                            Simple, Transparent Pricing
                        </h2>
                        <p className="box-border mt-2 text-xl text-gray-900 border-solid sm:text-2xl"></p>
                    </div>
                    <div
                        id="pricing"
                        className="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3"
                    >
                        {/* Price 1 */}
                        <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                                Starter
                            </h3>
                            <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                                <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                                    $1
                                </p>
                                <p
                                    className="box-border m-0 border-solid"
                                    style={{ borderImage: "initial" }}
                                >
                                    / month
                                </p>
                            </div>
                            <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg
                                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    1 Website
                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg
                                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    SSL (HTTPS)
                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg
                                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    SiteFast Domain
                                </li>
                            </ul>
                            <a
                                href="#"
                                className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-blue-600 rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg"
                            >
                                Start Now
                            </a>
                        </div>
                        {/* Price 2 */}
                        <div className="relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-white border-4 border-blue-600 border-solid rounded-lg sm:p-6 md:px-8 md:py-16">
                            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                                Basic
                            </h3>
                            <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                                <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                                    $29
                                </p>
                                <p
                                    className="box-border m-0 border-solid"
                                    style={{ borderImage: "initial" }}
                                >
                                    / month
                                </p>
                            </div>
                            <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg
                                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    15 Websites
                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg
                                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    SSL (HTTPS)
                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg
                                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    Custom Domain
                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg
                                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    SiteFast Branding Removal
                                </li>
                            </ul>
                            <a
                                href="#"
                                className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-blue-600 border rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg"
                            >
                                Start Now
                            </a>
                        </div>
                        {/* Price 3 */}
                        <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-ml-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                                Plus
                            </h3>
                            <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                                <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                                    $49
                                </p>
                                <p
                                    className="box-border m-0 border-solid"
                                    style={{ borderImage: "initial" }}
                                >
                                    / month
                                </p>
                            </div>
                            <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg
                                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    50 Websites
                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg
                                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    SSL (HTTPS)
                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg
                                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    Custom Domain
                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg
                                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    SiteFast Branding Removal
                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg
                                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    Google Analytics
                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg
                                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    Email Integration
                                </li>
                            </ul>
                            <a
                                href="#"
                                className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-blue-600 rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg"
                            >
                                Start Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <hr />

            <div className="bg-white">
                <header className="absolute inset-x-0 top-0 z-50">
                    <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                        <div className="flex lg:flex-1">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    alt=""
                                    src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                    className="h-8 w-auto"
                                />
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(true)}
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        {/* <div className="hidden lg:flex lg:gap-x-12">
            {navigation?.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                {item.name}
              </a>
            ))}
          </div> */}
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <a href="#" className="text-sm/6 font-semibold text-gray-900">
                                Log in <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </nav>
                    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                        <div className="fixed inset-0 z-50" />
                        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        alt=""
                                        src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                        className="h-8 w-auto"
                                    />
                                </a>
                                <button
                                    type="button"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="size-6" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    {/* <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div> */}
                                    <div className="py-6">
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            Log in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </Dialog>
                </header>

                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        />
                    </div>
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                Announcing our next round of funding.{' '}
                                <a href="#" className="font-semibold text-indigo-600">
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    Read more <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                                Data to enrich your online business
                            </h1>
                            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                                fugiat veniam occaecat.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get started
                                </a>
                                <a href="#" className="text-sm/6 font-semibold text-gray-900">
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tailwind

