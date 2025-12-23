import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sparkles, Flash, BarChart } from 'lucide-react';
import Image from "next/image";
import {
  Clock,
  ChartBar,
  Users
} from "lucide-react";

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800'>

      {/* ✅ Navbar */}
      <header className='flex items-center justify-between px-6 py-1 shadow-sm bg-white sticky top-0 z-50'>
        <div className='text-2xl font-bold text-blue-600'>
        <Image
          className="w-[150px] flex mt-6 ml-10"
          src="/logo.png"
          alt="logo"
          width={200}
          height={100}
        />
        </div>

        {/* Navigation Links */}
        <nav className='hidden md:flex gap-8 text-sm font-medium text-gray-700'>
          <a href="#home" className='hover:text-blue-600'>Home</a>
          <a href="#features" className='hover:text-blue-600'>Features</a>
          <a href="#how-it-works" className='hover:text-blue-600'>How It Works</a>
        </nav>

        {/* Dashboard Button */}
        <Link href="/auth">
          <Button className='bg-blue-600 text-white text-sm'>Dashboard</Button>
        </Link>
      </header>

      {/* ✅ Hero Section */}
  <main className='flex-grow'>
    
<section
  id="home"
  className="flex flex-col md:flex-row items-center justify-end px-8 py-28 max-w-6xl mx-auto"
>
  {/* Left Text Content */}
  <div className="max-w-xl md:text-left ">
    <h1 className="text-3xl md:text-5xl font-bold ">
      AI-Powered <span className="text-blue-600">Interview Assistant</span> for Modern Recruiters
    </h1>
    <p className="mt-4 text-lg text-gray-600">
      Let AiCruiter auto-conduct candidate interviews while you focus on finding the perfect match.
      Save time, reduce bias, and improve your hiring process.
    </p>

    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
      <Link href="/auth">
        <Button className="bg-blue-600 text-white">Try AI Interview (Free)</Button>
      </Link>
      <Link href="/templates">
        <Button variant="outline">Browse Interview Templates</Button>
      </Link>
    </div>
  </div>

  {/* Right Image */}
  <div className="mt-12 md:mt-0 flex justify-center md:justify-end">
    <Image
      className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-xl shadow-lg"
      src="/image.png"
      alt="dashboard"
      width={600}
      height={300}
    />
  </div>
</section>


    {/* ✅ Features Section */}
    <section id="features" className="bg-gray-50 py-25">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Streamline Your Hiring Process</h2>
        <p className="mt-4 text-gray-600 text-lg">
          AiCruiter helps you save time and find better candidates with our advanced AI interview technology.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Feature 1 */}
          <div className="bg-white p-12 rounded-xl shadow">
            <Clock className="h-14 w-14 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-700">Save Time</h3>
            <p className="mt-2 text-gray-500 text-sm">
              Automate initial screening interviews and focus on final candidates.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-12 rounded-xl shadow">
            <ChartBar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-700">Data Driven Insights</h3>
            <p className="mt-2 text-gray-500 text-sm">
              Get detailed analytics and candidate comparisons based on interview responses.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-12 rounded-xl shadow">
            <Users className="h-14 w-14 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-700">Reduce Bias</h3>
            <p className="mt-2 text-gray-500 text-sm">
              Standardized interviews help eliminate unconscious bias in the hiring process.
            </p>
          </div>
        </div>
      </div>
    </section>

        {/* ✅ How It Works Section */}
    <section id="how-it-works" className="py-30 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 -mt-3">How AiCruiter Works</h2>
        <p className="mt-4 text-lg text-gray-600">
          Three simple steps to transform your recruitment process
        </p>

        <div className="mt-16 flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-1 text-center">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-lg font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Create Interview</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Set up your job requirements and customize interview questions.
            </p>
          </div>

          <div className="flex-1 text-center">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-lg font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Share with Candidates</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Send interview links to candidates to complete at their convenience.
            </p>
          </div>

          <div className="flex-1 text-center">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-lg font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Review Results</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Get AI-analyzed results, transcripts, and candidate comparisons.
            </p>
          </div>
        </div>
      </div>
    </section>


        {/* ✅ Call to Action Section */}

{/* ✅ Why Choose AiCruiter Section with Icons */}
<section className='bg-blue-50 py-16 text-center'>
  <h2 className='text-3xl font-bold mb-10 text-blue-800'>Why Choose AiCruiter?</h2>
  
  <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4'>

    {/* Feature 1 */}
    <div className='bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300'>
      <div className='flex flex-col items-center'>
        <div className='bg-blue-100 text-blue-600 p-4 rounded-full mb-4 text-3xl'>
          💡
        </div>
        <h3 className='text-lg font-semibold text-blue-700'>Smart Interview Automation</h3>
        <p className='mt-2 text-sm text-gray-600'>Let AI conduct preliminary interviews and save recruiter hours.</p>
      </div>
    </div>

    {/* Feature 2 */}
    <div className='bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300'>
      <div className='flex flex-col items-center'>
        <div className='bg-green-100 text-green-600 p-4 rounded-full mb-4 text-3xl'>
          ⚡
        </div>
        <h3 className='text-lg font-semibold text-green-700'>Faster Candidate Screening</h3>
        <p className='mt-2 text-sm text-gray-600'>Screen candidates 10x faster with automated assessments and insights.</p>
      </div>
    </div>

    {/* Feature 3 */}
    <div className='bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300'>
      <div className='flex flex-col items-center'>
        <div className='bg-purple-100 text-purple-600 p-4 rounded-full mb-4 text-3xl'>
          📊
        </div>
        <h3 className='text-lg font-semibold text-purple-700'>Insightful Dashboard</h3>
        <p className='mt-2 text-sm text-gray-600'>Track, manage and analyze interview results all in one place.</p>
      </div>
    </div>

  </div>
</section>



      </main>

      {/* ✅ Footer */}
      <footer className='bg-white py-6 text-center text-sm text-gray-500 border-t'>
        © 2025 <span className='text-blue-600 font-medium'>AiCruiter</span>. All rights reserved.
      </footer>
    </div>
  );
}
