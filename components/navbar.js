import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  const navigation = [
    <button style={{backgroundColor:'#e4e986', width:'100px', color:'black'}}> 
    SignIn
    </button>
  ];

  return (
    <div className="w-full navbar">
      <nav className="flex justify-between items-center px-8 py-4">
        <div className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
          <Link href="/">
            <div>
              <img
                src="https://eazyfin.s3.ap-south-1.amazonaws.com/public-doc/d8caa120-1b17-11ee-a2b6-55c55d21878b-My_project-1-fotor-20230705121850-removebg-preview.png"
                alt="Logo"
                width={300}
                height={200}
              />
            </div>
          </Link>
        </div>
        <div className="hidden lg:flex lg:items-center">
          <ul style={{color:'#e4e986'}} className="flex items-center space-x-4">
            {navigation.map((menu, index) => (
              <li key={index}>
                <Link href="/">
                  <div className="nav-texts">{menu}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:hidden">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="p-2 text-gray-500 rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open ? (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="my-5">
                  <div className="flex flex-col items-center space-y-4">
                    {navigation.map((item, index) => (
                      <Link key={index} href="/">
                        <div className="text-lg">{item}</div>
                      </Link>
                    ))}
                    <Link href="/">
                      <div className="px-6 py-2 text-white bg-indigo-600 rounded-md">
                        Get Started
                      </div>
                    </Link>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;