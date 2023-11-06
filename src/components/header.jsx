import { useState } from "react";
import Icon from "../assets/images/icon.png";
import { Links } from "../assets/js/all";
export default function Header() {
  const [mobile, setMobile] = useState(false);
  function openMenu() {
    setMobile(!mobile);
  }
  return (
    <>
      <header className="w-5/6 mx-auto py-4 relative">
        <nav className="w-full flex items-center gap-x-2">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center">
              <img src={Icon.src} width={"40px"} alt="" />
              <h1 className="text-2xl font-bold">
                LifeInsure<span className="text-primary">Ease</span>
              </h1>
            </div>
            <div className="hidden lg:block">
              <ul className="flex space-x-4">
                {Links.map((item, index) => {
                  return <a aria-label={item.name} href={item.link} key={index}>{item.name}</a>;
                })}
              </ul>
            </div>
            <div className="hidden lg:block">
              <a
                className="px-4 py-2.5 bg-primary rounded-md text-white"
                aria-label="contact button"
                href="/#contact"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div
            onClick={() => {
              openMenu();
            }}
            className="flex h-9 w-9 p-1.5 bg-primary rounded-xl stroke-white bg-opacity-50 lg:hidden "
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="Menu / Menu_Alt_02">
                  {" "}
                  <path
                    id="Vector"
                    d="M11 17H19M5 12H19M11 7H19"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
        </nav>

        {mobile ? (
          <div className=" absolute w-full block lg:hidden">
            <ul className="text-center flex flex-col text-xl font-semibold bg-white rounded-xl mt-2 shadow-lg px-4 py-4">
              {Links.map((item, index) => {
                return (
                  <a aria-label={item.name} href={item.link} key={index} className=" py-2 hover:shadow-xl rounded-xl">
                    {item.name}
                  </a>
                );
              })}
            </ul>
          </div>
        ) : null}
      </header>
    </>
  );
}
