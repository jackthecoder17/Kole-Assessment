"use client";
import { useState, Fragment, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
const Layout = ({ children, title }) => {
  const location = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  // const notifactaionRef = useRef(null);

  return (
    <div className=" max-w-[2000px]  mx-auto w-full flex  relative">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="inline-flex items-center py-2 text-sm text-[#4F46BA] ml-5 mt-7 rounded-lg lg:hidden fixed top-0 z-30 w-full bg-dark"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed lg:sticky bg-white top-0 left-0 z-50 w-[45%] lg:max-w-[300px] h-screen transition-transform -translate-x-full lg:translate-x-0
        ${
          isSidebarOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
        }
        `}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto scrollbar-thin">
          {/* cancel mark */}
          <div className="flex justify-end px-4 mt-10">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className={`text-[#4F46BA] text-[20px] font-pro lg:hidden`}
            >
              X
            </button>
          </div>
          <div className="bg-white">
            <div className="  py-10 max-w-[231px] mx-auto w-full">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.svg"
                  width={62}
                  height={62}
                  className=" max-w-[141px] w-full mx-auto"
                />
                {/* <Image src="/user.png" width={62} height={62} /> */}
              </div>
            </div>
          </div>

          <div className="max-w-[225px] mx-auto w-full">
            <div className="flex flex-col font-thin mt-[20px] gap-[17px] px-2">
              <Link
                href="/"
                className="flex gap-[24px] items-center rounded-[100px] group bg-[#F3F0FF] text-xl text-[#551FFF] py-6 px-9"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#551FFF]"
                >
                  <g id="Iconly/Bold/Profile">
                    <g id="Profile">
                      <path
                        id="Profile_2"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.294 7.29105C17.294 10.2281 14.9391 12.5831 12 12.5831C9.0619 12.5831 6.70601 10.2281 6.70601 7.29105C6.70601 4.35402 9.0619 2 12 2C14.9391 2 17.294 4.35402 17.294 7.29105ZM12 22C7.66237 22 4 21.295 4 18.575C4 15.8539 7.68538 15.1739 12 15.1739C16.3386 15.1739 20 15.8789 20 18.599C20 21.32 16.3146 22 12 22Z"
                        className="fill-[#551FFF]"
                      />
                    </g>
                  </g>
                </svg>

                <p className="group-hover:text-[#551FFF]">Profile</p>
              </Link>
              <Link
                href="/"
                className="flex gap-[24px] items-center rounded-[100px] group hover:bg-[#F8F9FC] text-[#D0D2DA] text-xl hover:text-[#551FFF] py-6 px-9"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#D0D2DA] group-hover:text-[#551FFF]"
                >
                  <g id="Iconly/Bold/Document">
                    <g id="Document">
                      <path
                        id="Document_2"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.81 2H16.191C19.28 2 21 3.78 21 6.83V17.16C21 20.26 19.28 22 16.191 22H7.81C4.77 22 3 20.26 3 17.16V6.83C3 3.78 4.77 2 7.81 2ZM8.08 6.66V6.65H11.069C11.5 6.65 11.85 7 11.85 7.429C11.85 7.87 11.5 8.22 11.069 8.22H8.08C7.649 8.22 7.3 7.87 7.3 7.44C7.3 7.01 7.649 6.66 8.08 6.66ZM8.08 12.74H15.92C16.35 12.74 16.7 12.39 16.7 11.96C16.7 11.53 16.35 11.179 15.92 11.179H8.08C7.649 11.179 7.3 11.53 7.3 11.96C7.3 12.39 7.649 12.74 8.08 12.74ZM8.08 17.31H15.92C16.319 17.27 16.62 16.929 16.62 16.53C16.62 16.12 16.319 15.78 15.92 15.74H8.08C7.78 15.71 7.49 15.85 7.33 16.11C7.17 16.36 7.17 16.69 7.33 16.95C7.49 17.2 7.78 17.35 8.08 17.31Z"
                        className="group-hover:fill-[#551FFF] fill-current"
                      />
                    </g>
                  </g>
                </svg>

                <p className="group-hover:text-[#551FFF]">Billings</p>
              </Link>
              <Link
                href="/"
                className="flex gap-[24px] items-center rounded-[100px] group hover:bg-[#F8F9FC] text-[#D0D2DA] text-xl hover:text-[#551FFF] py-6 px-9"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#D0D2DA] group-hover:text-[#551FFF]"
                >
                  <g id="Iconly/Bold/Wallet">
                    <g id="Wallet">
                      <path
                        id="Wallet_2"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.7689 8.3818H22C22 4.98459 19.9644 3 16.5156 3H7.48444C4.03556 3 2 4.98459 2 8.33847V15.6615C2 19.0154 4.03556 21 7.48444 21H16.5156C19.9644 21 22 19.0154 22 15.6615V15.3495H17.7689C15.8052 15.3495 14.2133 13.7975 14.2133 11.883C14.2133 9.96849 15.8052 8.41647 17.7689 8.41647V8.3818ZM17.7689 9.87241H21.2533C21.6657 9.87241 22 10.1983 22 10.6004V13.131C21.9952 13.5311 21.6637 13.8543 21.2533 13.8589H17.8489C16.8548 13.872 15.9855 13.2084 15.76 12.2643C15.6471 11.6783 15.8056 11.0736 16.1931 10.6122C16.5805 10.1509 17.1573 9.88007 17.7689 9.87241ZM17.92 12.533H18.2489C18.6711 12.533 19.0133 12.1993 19.0133 11.7877C19.0133 11.3761 18.6711 11.0424 18.2489 11.0424H17.92C17.7181 11.0401 17.5236 11.1166 17.38 11.255C17.2364 11.3934 17.1555 11.5821 17.1556 11.779C17.1555 12.1921 17.4964 12.5282 17.92 12.533ZM6.73778 8.3818H12.3822C12.8044 8.3818 13.1467 8.04812 13.1467 7.63649C13.1467 7.22487 12.8044 6.89119 12.3822 6.89119H6.73778C6.31903 6.89116 5.9782 7.2196 5.97333 7.62783C5.97331 8.04087 6.31415 8.37705 6.73778 8.3818Z"
                        className="group-hover:fill-[#551FFF] fill-current"
                      />
                    </g>
                  </g>
                </svg>

                <p className="group-hover:text-[#551FFF]">Invoices</p>
              </Link>
              <div className="w-full border-t border-[#ECECEE]"></div>
              <Link
                href="/"
                className="flex gap-[24px] items-center rounded-[100px] group hover:bg-[#F8F9FC] text-[#D0D2DA] text-xl hover:text-[#551FFF] py-6 px-9"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#D0D2DA] group-hover:text-[#551FFF]"
                >
                  <g id="Iconly/Bold/Setting">
                    <g id="Setting">
                      <path
                        id="Setting_2"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.4022 13.5801C20.7599 13.7701 21.0358 14.0701 21.23 14.3701C21.6081 14.9901 21.5775 15.7501 21.2096 16.4201L20.4942 17.6201C20.1161 18.2601 19.4109 18.6601 18.6853 18.6601C18.3277 18.6601 17.9291 18.5601 17.6021 18.3601C17.3364 18.1901 17.0298 18.1301 16.7027 18.1301C15.691 18.1301 14.8428 18.9601 14.8121 19.9501C14.8121 21.1001 13.8719 22.0001 12.6967 22.0001H11.3068C10.1213 22.0001 9.18113 21.1001 9.18113 19.9501C9.16069 18.9601 8.31247 18.1301 7.30073 18.1301C6.96348 18.1301 6.6569 18.1901 6.40141 18.3601C6.07438 18.5601 5.6656 18.6601 5.31813 18.6601C4.58232 18.6601 3.87717 18.2601 3.49905 17.6201L2.7939 16.4201C2.41577 15.7701 2.39533 14.9901 2.77346 14.3701C2.93697 14.0701 3.24356 13.7701 3.59102 13.5801C3.87717 13.4401 4.06112 13.2101 4.23486 12.9401C4.74584 12.0801 4.43925 10.9501 3.57059 10.4401C2.55885 9.8701 2.23182 8.6001 2.81434 7.6101L3.49905 6.4301C4.09178 5.4401 5.35901 5.0901 6.38097 5.6701C7.27007 6.1501 8.42488 5.8301 8.94608 4.9801C9.10959 4.7001 9.20157 4.4001 9.18113 4.1001C9.16069 3.7101 9.27311 3.3401 9.46728 3.0401C9.8454 2.4201 10.5301 2.0201 11.2761 2.0001H12.7171C13.4734 2.0001 14.1581 2.4201 14.5362 3.0401C14.7201 3.3401 14.8428 3.7101 14.8121 4.1001C14.7917 4.4001 14.8837 4.7001 15.0472 4.9801C15.5684 5.8301 16.7232 6.1501 17.6225 5.6701C18.6342 5.0901 19.9117 5.4401 20.4942 6.4301L21.1789 7.6101C21.7716 8.6001 21.4446 9.8701 20.4227 10.4401C19.554 10.9501 19.2474 12.0801 19.7686 12.9401C19.9321 13.2101 20.1161 13.4401 20.4022 13.5801ZM9.10959 12.0101C9.10959 13.5801 10.4075 14.8301 12.012 14.8301C13.6164 14.8301 14.8837 13.5801 14.8837 12.0101C14.8837 10.4401 13.6164 9.1801 12.012 9.1801C10.4075 9.1801 9.10959 10.4401 9.10959 12.0101Z"
                        className="group-hover:fill-[#551FFF] fill-current"
                      />
                    </g>
                  </g>
                </svg>

                <p className="group-hover:text-[#551FFF]">Settings</p>
              </Link>
              <Link
                href="/"
                className="flex gap-[24px] items-center rounded-[100px] group hover:bg-[#F8F9FC] text-[#D0D2DA] text-xl hover:text-[#551FFF] py-6 px-9"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#D0D2DA] group-hover:text-[#551FFF]"
                >
                  <g id="Iconly/Bold/Calling">
                    <g id="Group">
                      <g id="Calling">
                        <path
                          id="Fill 1"
                          d="M14.4183 5.48994C13.9423 5.402 13.5051 5.70579 13.4145 6.17047C13.3238 6.63515 13.6286 7.08884 14.0917 7.17978C15.4859 7.45159 16.5625 8.53085 16.8354 9.92989V9.93089C16.9131 10.3336 17.2676 10.6264 17.6759 10.6264C17.7307 10.6264 17.7855 10.6214 17.8412 10.6114C18.3043 10.5185 18.6091 10.0658 18.5185 9.60012C18.1111 7.51055 16.5027 5.89666 14.4183 5.48994Z"
                          fill="#D0D2DA"
                        />
                        <path
                          id="Fill 3"
                          d="M14.3561 2.00793C14.133 1.97595 13.9089 2.04191 13.7307 2.18381C13.5474 2.32771 13.4329 2.53557 13.408 2.76841C13.3552 3.23908 13.6948 3.66479 14.1649 3.71776C17.4065 4.07951 19.9262 6.60477 20.2907 9.85654C20.3395 10.2922 20.705 10.621 21.1412 10.621C21.174 10.621 21.2059 10.619 21.2388 10.615C21.4668 10.59 21.67 10.4771 21.8134 10.2972C21.9558 10.1174 22.0206 9.89351 21.9947 9.66467C21.5405 5.60746 18.4005 2.45862 14.3561 2.00793Z"
                          className="group-hover:fill-[#551FFF] fill-current"
                        />
                      </g>
                    </g>
                    <g id="Call">
                      <path
                        id="Stroke 1"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.0317 12.9724C15.0208 16.9604 15.9258 12.3467 18.4656 14.8848C20.9143 17.3328 22.3216 17.8232 19.2192 20.9247C18.8306 21.237 16.3616 24.9943 7.6846 16.3197C-0.993478 7.644 2.76158 5.17244 3.07397 4.78395C6.18387 1.67385 6.66586 3.08938 9.11449 5.53733C11.6544 8.0765 7.04266 8.98441 11.0317 12.9724Z"
                        className="group-hover:fill-[#551FFF] fill-current"
                      />
                    </g>
                  </g>
                </svg>

                <p className="group-hover:text-[#551FFF]">Help</p>
              </Link>
              <Link
                href="/"
                className="flex gap-[24px] items-center rounded-[100px] group hover:bg-[#F8F9FC] text-[#D0D2DA] text-xl hover:text-[#551FFF] py-6 px-9"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-[#D0D2DA] group-hover:text-[#551FFF]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Iconly/Bold/Logout">
                    <g id="Logout">
                      <path
                        id="Logout_2"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.89535 11.23C9.45785 11.23 9.11192 11.57 9.11192 12C9.11192 12.42 9.45785 12.77 9.89535 12.77H16V17.55C16 20 13.9753 22 11.4724 22H6.51744C4.02471 22 2 20.01 2 17.56V6.45C2 3.99 4.03488 2 6.52762 2H11.4927C13.9753 2 16 3.99 16 6.44V11.23H9.89535ZM19.6302 8.5402L22.5502 11.4502C22.7002 11.6002 22.7802 11.7902 22.7802 12.0002C22.7802 12.2002 22.7002 12.4002 22.5502 12.5402L19.6302 15.4502C19.4802 15.6002 19.2802 15.6802 19.0902 15.6802C18.8902 15.6802 18.6902 15.6002 18.5402 15.4502C18.2402 15.1502 18.2402 14.6602 18.5402 14.3602L20.1402 12.7702H16.0002V11.2302H20.1402L18.5402 9.6402C18.2402 9.3402 18.2402 8.8502 18.5402 8.5502C18.8402 8.2402 19.3302 8.2402 19.6302 8.5402Z"
                        className="group-hover:fill-[#551FFF] fill-current"
                      />
                    </g>
                  </g>
                </svg>

                <p className="group-hover:text-[#551FFF]">Log out</p>
              </Link>
            </div>
          </div>
        </div>
      </aside>
      <div className={`w-full`} onClick={() => setIsSidebarOpen(false)}>
        <div className="sticky top-0 w-full z-10 py-[26px] mb-[24px] bg-[#F8F9FC]">
          <header className="flex justify-between w-full gap-4 items-center flex-wrap px-5 lg:px-10">
            <div className="text-lg sm:text-[25px] font-bold text-[#15192C] pl-10 lg:pl-0">
              <h1>Dashboard</h1>
              <p className="text-[12px] text-[#92959E]">Information about your current plan and usages</p>
            </div>
            <div className="flex ml-auto justify-end  items-center">
              <button className="flex items-center gap- bg-[#F4F5F7]  px-[10px] md:px-[20px] py-[5px] md:py-[10px] rounded-lg gap-2 text-[#15192C] text-[13px] font-medium">
                <Image src="/calendar.svg" width={24} height={24} />  
                Wednesday, 17 May 2021

                <Image src="/down.svg" width={24} height={24} />
              </button>
            </div>
          </header>
        </div>
        <div className="w-full px-5 lg:px-10 pb-10">
        {children}
        </div>
       
      </div>
    </div>
  );
};

export default Layout;
