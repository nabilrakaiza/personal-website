import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";

export default async function BlogPage({searchParams}) {
  const id = await searchParams.id;
  const content = blogContents[id]["content"]
  const title = blogContents[id]["title"]

  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <p className="text-center text-white mb-8 text-2xl"><b>{title}</b></p>
          {/* Main Content */}
          <main className="py-3">
              <div className="bg-amber-300 rounded-4xl p-6 transition-shadow text-black">
                  <ReactMarkdown remarkPlugins={remarkGfm} components={{
  p: ({ node, ...props }) => <p className="mb-4" {...props} />,
  li: ({ node, ...props }) => <li className="ml-6 list-disc" {...props} />,
  h3: ({ node, ...props }) => <h3 className="text-xl font-semibold mt-6 mb-2" {...props} />,
}}>
                      {content} 
                  </ReactMarkdown>
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


const blogContents = {
  "y2s1-review" : {
    "title": "Y2S1 Module Review",
    "content": `CS2040

I like this module a lot, even though it might be difficult for some of you. I enjoy solving the weekly tutorial and doing the take home assignments as it challenges me to solve the problem without much external help. I believed my score was near high until finals came (i’m not really sure with my finals). 

Expected Grade: A-/A

----------------------------------------------------------------    

CS2030

For the first half of this module, I was doing just fine. But suddenly, somehow, I managed to throw everything. The module was taught great, but I think it was more about me who doesn’t really like the course itself (I prefer to do algo problems than designing pipelines). 

Expected Grade: B/B+

----------------------------------------------------------------    

DSA2101

Even though most of the time you spent on this module is plotting graph, I find it enjoyable, especially the group project. I was able to understand how a good graph is easier for humans to understand and how we construct it to answer questions. Midterm and finals were fine (I think), but the bell curve is known to be very steep. 

Expected Grade: A-

----------------------------------------------------------------    

DSA2102

I love this module so much, especially the first half of the module. You will learn how computers do calculations and what their limitations are. In the end, I think I should be able to score well since I got near high for the midterm and feel confident for finals. 

Expected Grade: A

----------------------------------------------------------------    

IT1244

I also love this module. Some of the algorithms are actually taught in other courses, like DSA1101 (KNN, Kmeans, Linear Regression, Logistic Regression, etc) and CS2040 (DFS, BFS). So I was able to grasp the content quite quickly, and I think I can score well for this course. Some tips I want to share are: pls take this module with your friends if you don&apos;t want teammates who aren&apos;t good enough. 

Expected Grade: A-/A

----------------------------------------------------------------    

SP1541

Well, I have a love-hate relationship with this mod. There are no statistics at all, so I can’t compare myself with the other cohorts. Other than that, the grading is quite subjective, so you can get a poor grade if you are unlucky. I also somehow never got > 70 for any assessment other than a quiz (which is basically also a free mark for everyone). But, the class activities were fun, and I like going to the science centre also. 

Expected Grade: C (S)
`
  },
  
  "y1s2-review" : {
    "title": "Y1S2 Module Review",
    "content": `
CS1231

I find this module to be enjoyable as I can brush up my knowledge on discrete math again. However, the grading of this module is purely based on assessment, so please do your assessment carefully. 

Final Grade: A-

----------------------------------------------------------------

DSA1101

This module was very interesting as you learn how several machine learning algorithms work. The tutorial session was fun as well, thanks to my wonderful TA. However, I don’t really like the usage of R in this course, since most of the time python is the best language for developing machine learning algorithms. 

Final Grade: A+

----------------------------------------------------------------

ST2131

This module was hard as hell. For the final exam, I believe I can only do 2-3 questions, and I just wrote gibberish for the rest of the questions. But I find the material to be interesting, and I am still very curious about the answer to the final exam to this day. 

Final Grade: A-

----------------------------------------------------------------

ES1103

So, basically, this module will teach you how to write an academic text. You will be given a task to create around 1000 words for the entire semester, and it will be divided into several CAs. I think, as long as you consult a lot with the tutor, you should be able to get a good grade already

Final Grade: A- 

----------------------------------------------------------------

HSS1000

Another CHS fluff mods. Nothing much to say since I’m planning to SU since the very beginning.

Final Grade: S 

----------------------------------------------------------------

HSA1000

Another one CHS fluff mods. Nothing much to say since I’m planning to SU since the very beginning.

Final Grade: S

----------------------------------------------------------------

DTK1234

Another one CHS fluff mods. Nothing much to say since I’m planning to SU since the very beginning.

Final Grade: S
`
  },

  "y1s1-review" : {
    "title": "Y1S1 Module Review",
    "content": `
CS1010S

I feel very confident for this module since I have a background in python. However, if you don’t have any background before, this mod might be very hard for you, and you might want to take this with easier mods. 

Final Grade: A+

----------------------------------------------------------------

MA2001

This module wasn’t quite hard, it’s just that the work might be long and tedious. As long as you didn’t mess up your calculation and practice a lot, you might be able to get a good grade. 

Final Grade: A

----------------------------------------------------------------

MA2002

This module was a bit hard, especially the final exam. Maybe it’s just me that are not prepared enough for this exam, but I legit only did like ⅔ of the exam itself. However, I think others are also find it hard as well since my final grade wasn’t so bad. 

Final Grade: A- 

----------------------------------------------------------------

HSI1000

This module was fun as there is a workshops where you actually go to real lab and do some science stuff. However, the assessment was quite boring and you can just bring a lot of cheatsheets (pdf) and do ctrl+f for the entire exam. 

Final Grade: A-

----------------------------------------------------------------

HSH1000

This module was fun for me, but not so much when it comes to grading. I always scored under lower quartile for every quiz since it was hard for me. Maybe this module just wasn’t for me, but the discussion in class is fun though!

Final Grade: S

----------------------------------------------------------------

CFG1002

This is just a career preparation mod that you can finish everything in 1 day (with 2 live lecture that you need to come).

Final Grade: S
`
  },
}