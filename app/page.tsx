'use client'
import Head from "next/head";
import Image from "next/image";
import Header from "./Components/header";
import { headers } from "next/headers";
import Body from "./Components/Body";
import Footer from "./Components/Footer";


export default function Home() {
  const myImage = '/Gemini_Generated_Image_lsh8k6lsh8k6lsh8.jpg'
  return (
    <main className=" bg-gradient-to-r from  from-blue-500 to-blue-700 min-h-screen">
      <Header />
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
