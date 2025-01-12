import React from "react";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster"
import Footerr from '../components/Footer'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Team .Exe</title>
      </head>

      <body><main>{children}</main>
      <Toaster />
      <Footerr/>
      </body>
     

    </html>
  );
}
