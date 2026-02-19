// import { useState, useEffect } from 'react'
import Image from "next/image";

export default function ProjectPage() {
  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Content */}
        <main className="py-12">

          {/* 2026 Projects */}
          <h2 className="text-3xl font-bold">2026</h2>
          <div className="w-full h-px bg-gray-300 my-4" /> 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Automatic Survey Analyzer */}
            <div className="bg-amber-300 p-6 rounded-4xl hover:shadow-lg transition-shadow">
              <Image width = {100} height = {100} src = "/ml-image.webp" alt="Project Image" className="w-full h-36 object-cover rounded-4xl mb-4"/>
              <h3 className="text-2xl font-semibold mb-2 text-black">Automatic Survey Analyzer</h3>
              <h3 className="text-xl font-semibold mb-2 text-black">Machine Learning</h3>
              <p className="text-black mb-4">Prototype to help companies analyze survey responses, improve survey design, and generate actionable insights.</p>
              <div className="flex w-full gap-4">
                <a href="https://github.com/nabilrakaiza/automatic-survey-analyzer" rel="noopener noreferrer" target="_blank">
                  <Image width = {100} height = {100} src = "/github-logo.svg" alt="Github Logo" className="w-6 h-6 mb-4" />
                </a>
                <a href="https://docs.google.com/document/d/1bR-rovd3id2xVwrs4lwcII7C2LHKI7Sz-sSprjfme0E/edit?usp=sharing" rel="noopener noreferrer" target="_blank">
                  <Image width = {100} height = {100} src = "/Book open.png" alt="Doc Logo" className="w-6 h-6 mb-4" />
                </a>
              </div>
            </div>

            {/* Started a codeforces account */}
            <div className="bg-amber-300 p-6 rounded-4xl hover:shadow-lg transition-shadow">
              <Image width = {100} height = {100} src = "/cf_logo.jpeg" alt="Project Image" className="w-full h-36 object-cover rounded-4xl mb-4"/>
              <h3 className="text-2xl font-semibold mb-2 text-black">Codeforces Account</h3>
              <h3 className="text-xl font-semibold mb-2 text-black">Competitive Programming</h3>
              <p className="text-black mb-4">Started a cf account! still a newbie though</p>
              <div className="flex w-full gap-4">
                <a href="https://codeforces.com/profile/nabilrakaiza" rel="noopener noreferrer" target="_blank">
                  <Image width = {100} height = {100} src = "/Book open.png" alt="Doc Logo" className="w-6 h-6 mb-4" />
                </a>
              </div>
            </div>
          </div>

          {/* 2025 Projects */}
          <h2 className="text-3xl font-bold mt-10">2025</h2>
          <div className="w-full h-px bg-gray-300 my-4" /> 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* GrindHub */}
            <div className="bg-amber-300 p-6 rounded-4xl hover:shadow-lg transition-shadow">
              <Image width = {100} height = {100} src = "/GrindHub-Logo-Text.png" alt="Project Image" className="w-full h-36 rounded-4xl mb-4 object-scale-down"/>
              <h3 className="text-2xl font-semibold mb-2 text-black">GrindHub</h3>
              <h3 className="text-xl font-semibold mb-2 text-black">Mobile Application</h3>
              <p className="text-black mb-4">Developed and deployed a full-stack productivity app to enhance student study habits and collaboration.</p>
              <div className="flex w-full gap-4">
                <a href="https://github.com/zayyankece/GrindHub" rel="noopener noreferrer" target="_blank">
                  <Image width = {100} height = {100} src = "/github-logo.svg" alt="Github Logo" className="w-6 h-6 mb-4" />
                </a>
                <a href="https://www.youtube.com/watch?v=D58vn55_9tA" rel="noopener noreferrer" target="_blank">
                  <Image width = {100} height = {100} src = "/youtube-logo.webp" alt="YouTube Logo" className="w-6 h-6 mb-4" />
                </a>
                <a href="https://docs.google.com/document/d/1hydHodrLydbXBSne0u40UUoieVxPOhcbul0jzBgHqPA/edit?tab=t.0#heading=h.subsalufyc28" rel="noopener noreferrer" target="_blank">
                  <Image width = {100} height = {100} src = "/Book open.png" alt="Doc Logo" className="w-6 h-6 mb-4" />
                </a>
              </div>
            </div>

            {/* Oil Temperature Time Series - IT1244 */}
            <div className="bg-amber-300 p-6 rounded-4xl hover:shadow-lg transition-shadow">
              <Image width = {100} height = {100} src = "/nn-model.jpg" alt="Project Image" className="w-full h-36 object-cover rounded-4xl mb-4"/>
              <h3 className="text-2xl font-semibold mb-2 text-black">Oil Temperature Transformers Time Series Prediction</h3>
              <h3 className="text-xl font-semibold mb-2 text-black">Machine Learning</h3>
              <p className="text-black mb-4">Predicting an oil temperature in transformers using various deep learning and machine learning models.</p>
              <div className="flex w-full gap-4">
                <a href="https://github.com/nabilrakaiza/it1244-project" rel="noopener noreferrer" target="_blank">
                  <Image width = {100} height = {100} src = "/github-logo.svg" alt="Github Logo" className="w-6 h-6 mb-4" />
                </a>
                <a href="https://github.com/nabilrakaiza/it1244-project/blob/main/IT1244%20Report.pdf" rel="noopener noreferrer" target="_blank">
                  <Image width = {100} height = {100} src = "/Book open.png" alt="Doc Logo" className="w-6 h-6 mb-4" />
                </a>
              </div>
            </div>

            {/* Personal Website */}
            <div className="bg-amber-300 p-6 rounded-4xl hover:shadow-lg transition-shadow">
              <Image width = {100} height = {100} src = "/web-dev.png" alt="Project Image" className="w-full h-36 object-cover rounded-4xl mb-4"/>
              <h3 className="text-2xl font-semibold mb-2 text-black">Personal Website</h3>
              <h3 className="text-xl font-semibold mb-2 text-black">Web Development</h3>
              <p className="text-black mb-4">Well, this is the website that you&apos;re looking for.</p>
              <div className="flex w-full gap-4">
                <a href="https://github.com/nabilrakaiza/personal-website" rel="noopener noreferrer" target="_blank">
                  <Image width = {100} height = {100} src = "/github-logo.svg" alt="Github Logo" className="w-6 h-6 mb-4" />
                </a>
              </div>
            </div>

            {/* CS2030 Disrete Event Simulator */}
            <div className="bg-amber-300 p-6 rounded-4xl hover:shadow-lg transition-shadow">
              <Image width = {100} height = {100} src = "/discrete-event.jpg" alt="Project Image" className="w-full h-36 object-cover rounded-4xl mb-4"/>
              <h3 className="text-2xl font-semibold mb-2 text-black">Discrete Event Simulator</h3>
              <h3 className="text-xl font-semibold mb-2 text-black">CS2030 Project</h3>
              <p className="text-black mb-4">This is my individual project for CS2030 - Discrete Event Simulator.</p>
              <div className="flex w-full gap-4">
                <a href="https://github.com/nabilrakaiza/cs2030-discrete-event-simulator" rel="noopener noreferrer" target="_blank">
                  <Image width = {100} height = {100} src = "/github-logo.svg" alt="Github Logo" className="w-6 h-6 mb-4" />
                </a>
              </div>
            </div>

            {/* DSA1101 Final Assignment */}
            <div className="bg-amber-300 p-6 rounded-4xl hover:shadow-lg transition-shadow">
              <Image width = {100} height = {100} src = "/ml-image.webp" alt="Project Image" className="w-full h-36 object-cover rounded-4xl mb-4"/>
              <h3 className="text-2xl font-semibold mb-2 text-black">Heart Disease Statistical Report</h3>
              <h3 className="text-xl font-semibold mb-2 text-black">Machine Learning</h3>
              <p className="text-black mb-4">Evaluated several machine learning models to predict heart disease.</p>
              <div className="flex w-full gap-4">
                <a href="https://github.com/nabilrakaiza/dsa1101-individual-project" rel="noopener noreferrer" target="_blank">
                  <Image width = {100} height = {100} src = "/github-logo.svg" alt="Github Logo" className="w-6 h-6 mb-4" />
                </a>
                <a href="https://github.com/nabilrakaiza/dsa1101-individual-project/blob/main/DSA1101%20Statistical%20Report.pdf" rel="noopener noreferrer" target="_blank">
                  <Image width = {100} height = {100} src = "/Book open.png" alt="Doc Logo" className="w-6 h-6 mb-4" />
                </a>
              </div>
            </div>

            {/* DSA2101 Group Assignment */}
            <div className="bg-amber-300 p-6 rounded-4xl hover:shadow-lg transition-shadow">
              <Image width = {100} height = {100} src = "/ml-image.webp" alt="Project Image" className="w-full h-36 object-cover rounded-4xl mb-4"/>
              <h3 className="text-2xl font-semibold mb-2 text-black">Color Survey Result Analysis</h3>
              <h3 className="text-xl font-semibold mb-2 text-black">Data Visualization</h3>
              <p className="text-black mb-4">Visualized insights from color survey result data.</p>
              <div className="flex w-full gap-4">
                <a href="https://github.com/nabilrakaiza/color-survey-results-analysis" rel="noopener noreferrer" target="_blank">
                  <Image width = {100} height = {100} src = "/github-logo.svg" alt="Github Logo" className="w-6 h-6 mb-4" />
                </a>
              </div>
            </div>
          </div>

          {/* 2024 Projects */}
          <h2 className="text-3xl font-bold mt-10">2024</h2>
          <div className="w-full h-px bg-gray-300 my-4" /> 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Kaggle Competitions */}
            <div className="bg-amber-300 p-6 rounded-4xl hover:shadow-lg transition-shadow">
              <Image width = {100} height = {100} src = "/kaggle.png" alt="Project Image" className="w-full h-36 object-cover rounded-4xl mb-4"/>
              <h3 className="text-2xl font-semibold mb-2 text-black">Machine Learning Competition</h3>
              <h3 className="text-xl font-semibold mb-2 text-black">Machine Learning</h3>
              <p className="text-black mb-4">Doing lots of fun competition in Kaggle and university competitons. But I don&apos;t document the code properly :( So here&apos;s my kaggle account!</p>
              <div className="flex w-full gap-4">
                <a href="https://www.kaggle.com/nabilrakaizaabror" rel="noopener noreferrer" target="_blank">
                  <Image width = {100} height = {100} src = "/Book open.png" alt="Doc Logo" className="w-6 h-6 mb-4" />
                </a>
              </div>
            </div>

            {/* Leetcode / CP */}
            <div className="bg-amber-300 p-6 rounded-4xl hover:shadow-lg transition-shadow">
              <Image width = {100} height = {100} src = "/leetcode.png" alt="Project Image" className="w-full h-36 object-cover rounded-4xl mb-4"/>
              <h3 className="text-2xl font-semibold mb-2 text-black">DSA Practice</h3>
              <h3 className="text-xl font-semibold mb-2 text-black">Data Structure and Algorithm</h3>
              <p className="text-black mb-4">I usually do leetcode in my free time. so check my account below (yeah i know i&apos;m still a noob)</p>
              <div className="flex w-full gap-4">
                <a href="https://leetcode.com/u/nabilrakaiza/" rel="noopener noreferrer" target="_blank">
                  <Image width = {100} height = {100} src = "/Book open.png" alt="Doc Logo" className="w-6 h-6 mb-4" />
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center text-gray-500 py-8">
          <p>&copy; 2025 Nabil Rakaiza Abror.</p>
        </footer>
      </div>
    </div>
  );
}

