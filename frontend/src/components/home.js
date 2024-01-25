import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react";
import NavBar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos";

export default function CallToActionWithAnnotation() {
  const navigate = useNavigate();
  localStorage.setItem("auth", false);
  return (
    <>
      <NavBar />
      <section class="w-full xl:pb-[8.2rem] pt-16  bg-black">
        <div class="container px-4 md:px-6">
          <div class="grid gap-6 ">
            <div class="flex flex-col space-y-8 ">
              <div className="flex">
                {/* Gif Section */}
                <div className="absolute right-[22px] w-auto h-auto text-white">
                  <img
                    src="https://media.tenor.com/7LAB1WbMURAAAAAd/website.gif"
                    alt="GIF"
                    className="w-full h-auto"
                  />
                </div>

                <div className="space-y-2 xl:pt-56">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                    Discover Our Unique Features
                  </h1>
                  <p className="text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                    Our features are designed to enhance your productivity and
                    streamline your workflow.
                  </p>
                </div>
              </div>

              {/* Features Section */}
              <div class="w-full max-w-full xl:pt-72 space-y-4 mx-auto text-center">
                <div class="grid grid-cols-3 gap-8" data-aos="zoom-in">
                  <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-5 dark:bg-gray-800 backdrop-filter backdrop-blur-lg">
                    <div class="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                      <div class="p-2 bg-black bg-opacity-50 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="text-white h-6 w-6 mb-2 opacity-75"
                        >
                          <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                          <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                        </svg>
                      </div>
                      <h2 class="text-xl font-bold text-white">Smart Inbox</h2>
                      <p class="text-zinc-200 dark:text-zinc-100">
                        Our Smart Inbox feature helps you manage your emails
                        efficiently by prioritizing important emails.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-5 dark:bg-gray-800 backdrop-filter backdrop-blur-lg">
                    <div class="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                      <div class="p-2 bg-black bg-opacity-50 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="text-white h-6 w-6 mb-2 opacity-75"
                        >
                          <path d="m8 6 4-4 4 4"></path>
                          <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"></path>
                          <path d="m20 22-5-5"></path>
                        </svg>
                      </div>
                      <h2 class="text-xl font-bold text-white">
                        Seamless Integration
                      </h2>
                      <p class="text-zinc-200 dark:text-zinc-100">
                        Seamless Integration allows you to connect with your
                        favorite apps and services without leaving your inbox.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-5 dark:bg-gray-800 backdrop-filter backdrop-blur-lg">
                    <div class="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                      <div class="p-2 bg-black bg-opacity-50 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="text-white h-6 w-6 mb-2 opacity-75"
                        >
                          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </div>
                      <h2 class="text-xl font-bold text-white">
                        Advanced Customization
                      </h2>
                      <p class="text-zinc-200 dark:text-zinc-100">
                        With Advanced Customization, you can personalize your
                        email client to suit your preferences and work style.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-5 dark:bg-gray-800 backdrop-filter backdrop-blur-lg">
                    <div class="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                      <div class="p-2 bg-black bg-opacity-50 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="text-white h-6 w-6 mb-2 opacity-75"
                        >
                          <circle cx="11" cy="11" r="8"></circle>
                          <path d="m21 21-4.3-4.3"></path>
                        </svg>
                      </div>
                      <h2 class="text-xl font-bold text-white">
                        Powerful Search
                      </h2>
                      <p class="text-zinc-200 dark:text-zinc-100">
                        Our Powerful Search feature allows you to find any
                        email, contact, or file in seconds.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-5 dark:bg-gray-800 backdrop-filter backdrop-blur-lg">
                    <div class="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                      <div class="p-2 bg-black bg-opacity-50 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="text-white h-6 w-6 mb-2 opacity-75"
                        >
                          <rect
                            width="18"
                            height="11"
                            x="3"
                            y="11"
                            rx="2"
                            ry="2"
                          ></rect>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                      </div>
                      <h2 class="text-xl font-bold text-white">
                        Reliable Security
                      </h2>
                      <p class="text-zinc-200 dark:text-zinc-100">
                        With Reliable Security, your data is always safe and
                        protected.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-5 dark:bg-gray-800 backdrop-filter backdrop-blur-lg">
                  <div class="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <div class="p-2 bg-black bg-opacity-50 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="text-white h-6 w-6 mb-2 opacity-75"
                      >
                        <path d="m8 6 4-4 4 4"></path>
                        <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"></path>
                        <path d="m20 22-5-5"></path>
                      </svg>
                    </div>
                    <h2 class="text-xl font-bold text-white">Easy Access</h2>
                    <p class="text-zinc-200 dark:text-zinc-100">
                      Easy Access allows you to share and edit documents with
                      your team in real time.
                    </p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
