import About from "@/components/About";
import Archive from "@/components/Archive";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vishwajeet Kumar | Full-Stack & Generative AI Developer</title>
        <meta
          name="description"
          content="Portfolio of Vishwajeet Kumar, a full-stack developer (React, Next.js, Node.js) building Generative AI, LLM, RAG and Agentic AI solutions."
        />
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <div className="min-h-screen w-full font-bodyFont bg-white text-textLight overflow-x-hidden">
        <Navbar />
        <main>
          <Banner />
          <About />
          <Experience />
          <Projects />
          <Archive />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
