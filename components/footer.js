import React from "react";

export default function Footer() {
  const navigation = [
    "Home",
    "Product",
    "Partner",
    "Blog",
    "Media",
    "About Us",
    "FAQ"
  ];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div className="relative footer">
      <div style={{ padding: '30px 0px 0px' }}>
        <footer class="footer-body">
          <div class=" py-6 lg:px-20 footer-part">
            <div class="lg:flex">
              <div class="text-teal-600 px-8 fotter-logo">

              </div>
              <div
                class="mt-8 grid grid-cols-2 gap-16 lg:mt-0 lg:grid-cols-6 lg:gap-y-16"
              >
                <div class="col-span-2">
                  <div>
                    <img
                      src="https://eazyfin.s3.ap-south-1.amazonaws.com/public-doc/d8caa120-1b17-11ee-a2b6-55c55d21878b-My_project-1-fotor-20230705121850-removebg-preview.png"
                      alt="N"
                      width={300}
                    />
                  </div>
                </div>

                <div class="col-span-2 lg:col-span-3  ">
                  <form class="w-full">
                    <label for="UserEmail" class="sr-only"> Email </label>

                    <div style={{ borderStyle: 'none' }}
                      class="border p-2 focus-within:ring sm:flex sm:gap-4"
                    >
                      <input
                        type="email"
                        id="UserEmail"
                        placeholder=" example@gmail.com"
                        class="w-full border-none px-4 focus:border-transparent focus:ring-transparent sm:text-sm"
                      />

                      <button style={{backgroundColor:'#e4e986', color:'black'}}
                        class="mt-1 w-full px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none sm:mt-0 sm:w-auto sm:shrink-0"
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
                <div class="col-span-2 sm:col-span-2">
                  <p class="font-medium text-white-900">Contact Info</p>

                  <ul class="mt-6 space-y-4 text-sm">
                    <li>
                      <a href="#" class="text-white-700 transition hover:opacity-75">
                        B-1/12 sharma colony budh vihar phase-2, rohini sector-24, new delhi 110086, 
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-span-2 sm:col-span-1">
                  <p class="font-medium text-white-900">Commitee</p>

                  <ul class="mt-6 space-y-4 text-sm">
                    <li>
                      <a href="#" class="text-white-700 transition hover:opacity-75">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-white-700 transition hover:opacity-75">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-white-700 transition hover:opacity-75">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-white-700 transition hover:opacity-75">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-white-700 transition hover:opacity-75">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-white-700 transition hover:opacity-75">
                        Help and support
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-span-2 sm:col-span-1">
                  <p class="font-medium text-white-900">QUICK Links</p>

                  <ul class="mt-6 space-y-4 text-sm">
                    <li>
                      <a href="#" class="text-white-700 transition hover:opacity-75">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-white-700 transition hover:opacity-75">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-white-700 transition hover:opacity-75">
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-white-700 transition hover:opacity-75">
                        Grievance
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-white-700 transition hover:opacity-75">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-white-700 transition hover:opacity-75">
                        Sachet Portal
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-span-2 sm:col-span-1">
                  <p class="font-medium text-white-900"></p>

                  <ul class="mt-6 space-y-4 text-sm">
                    <li>
                      <a href="#" class="text-white-700 transition hover:opacity-75">
                        <img src="https://static4.lottiefiles.com/images/v3/footer/download-appstore.png" />
                      </a>
                    </li>

                    <li>
                      <a href="#" class="text-white-700 transition hover:opacity-75">
                        <img src="https://static4.lottiefiles.com/images/v3/footer/download-googleplay.png" />
                      </a>
                    </li>
                  </ul>
                </div>
                <ul
                  class="col-span-2 flex justify-start gap-6 lg:col-span-6 lg:justify-end"
                >
                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      class="text-white-700 transition hover:opacity-75"
                    >
                      <span class="sr-only">Facebook</span>

                      <img width={'60px'} src="https://eazyfin.s3.ap-south-1.amazonaws.com/public-doc/c5ade5d0-5113-11ed-bee8-8f2d4319f4f2-facebook-icon%402x.png" alt="SVG Image" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      class="text-white-700 transition hover:opacity-75"
                    >
                      <span class="sr-only">Instagram</span>

                      <img width={'60px'} src="https://eazyfin.s3.ap-south-1.amazonaws.com/public-doc/d89c16d0-5113-11ed-bee8-8f2d4319f4f2-insta-icon%402x.png" alt="SVG Image" />

                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      class="text-white-700 transition hover:opacity-75"
                    >
                      <span class="sr-only">Twitter</span>

                      <img width={'60px'} src="https://eazyfin.s3.ap-south-1.amazonaws.com/public-doc/eb245a10-5113-11ed-9dbb-89a22ffc5b1f-twitter-icon%402x.png" alt="SVG Image" />

                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      class="text-white-700 transition hover:opacity-75"
                    >
                      <span class="sr-only">Linkedin</span>

                      <img width={'60px'} src="https://eazyfin.s3.ap-south-1.amazonaws.com/public-doc/e1651500-5113-11ed-9dbb-89a22ffc5b1f-linkedin-icon%402x.png" alt="SVG Image" />

                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      class="text-white-700 transition hover:opacity-75"
                    >
                      <span class="sr-only">YouTube</span>

                      <img width={'60px'} src="https://eazyfin.s3.ap-south-1.amazonaws.com/public-doc/fd5618e0-5113-11ed-9dbb-89a22ffc5b1f-youtube-icon%402x.png" alt="SVG Image" />

                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      class="text-white-700 transition hover:opacity-75"
                    >
                      <span class="sr-only">WhatsApp</span>
                      <img width={'60px'} src="https://eazyfin.s3.ap-south-1.amazonaws.com/public-doc/f4f81180-5113-11ed-bee8-8f2d4319f4f2-whatsapp-icon%402x.png" alt="SVG Image" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="mt-8 border-t border-white-100 pt-8">
              <div class="copy-right sm:flex sm:justify-between">
                <p class="text-xs text-white-500">
                  &copy; 2023. Commitee All rights reserved.
                </p>

                <ul
                  class="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end"
                >
                  <li>
                    <a href="#" class="text-white-500 transition hover:opacity-75">
                      Terms & Conditions
                    </a>
                  </li>

                  <li>
                    <a href="#" class="text-white-500 transition hover:opacity-75">
                      Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a href="#" class="text-white-500 transition hover:opacity-75">
                      Cookies
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

      </div>

    </div>
  );
}
