"use client";

import { Footer } from "flowbite-react";
import Link from "next/link";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export default function CompletePage() {
  return (
    <div className="bg-black text-white  flex flex-col">
    
    <footer className="bg-black text-white w-full mt-auto">
      <div className="max-w-screen-xl mx-auto px-6 py-10">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Footer.Brand
              src="/exe 1.png" // Ensure the logo path is correct
              alt="Team.Exe Logo"
              name="LOGO"
              className="text-white"
              style={{ height: "80px", width: "180px", objectFit: "contain" }}
            />
            <p className="text-gray-400 text-lg mt-4 ml-10">
              TEAM .EXE
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4"></h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Domains" className="hover:underline">
                  Domains
                </Link>
              </li>
              <li>
                <Link href="/Team" className="hover:underline">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4"></h3>
            <ul className="space-y-2">
              <li>
                <Link href="/AboutUs" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/Event" className="hover:underline">
                  Event
                </Link>
              </li>
              <li>
                <Link href="/ContactUs" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4"></h3>
            <ul className="space-y-2">
              <li>
                <Link href="/Projects" className="hover:underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/Workshops" className="hover:underline">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="/Faqs" className="hover:underline">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Team.Exe. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-6 sm:mt-0">
            <Link
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="Facebook"
            >
              <BsFacebook size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="Instagram"
            >
              <BsInstagram size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="Twitter"
            >
              <BsTwitter size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="GitHub"
            >
              <BsGithub size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="Dribbble"
            >
              <BsDribbble size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  </div>
  
  
  );
}
