import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";
import Project from "@/components/Project"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shubham IoT Homes",
  description: "Shubham IoT Home is a smart home automation solution designed to make everyday living easier, safer, and more efficient. It integrates IoT technology with modern design to control lighting, security, appliances, and energy management through seamless automation and remote access.",
  authors: { name: "Shubham Iot Homes", url: "https://shubhamiothomes.com" },
  creator: "Shubham Iot Homes",
  keywords: ["Smart Home", "Home Automation", "IoT", "Internet of Things", "Smart Devices", "Home Security", "Energy Management", "Remote Control", "Voice Control", "Smart Lighting", "Smart Thermostat", "Home Monitoring", "Connected Home", "Smart Appliances", "Home Integration"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Navbar />
        {/* <Hero /> */}
        <Service />
        <Project/>
        <About />
      </body>
    </html>
  );
}
