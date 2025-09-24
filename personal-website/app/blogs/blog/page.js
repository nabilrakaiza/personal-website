const NavLink = ({ href, children, className = "px-4 py-2 rounded-full text-sm font-medium transition-colors", active = false }) => (
    <a
      href={href}
      className={`${className} ${
        active
          ? 'bg-gray-700 text-white'
          : 'text-gray-400 hover:text-white'
      }`}
    >
      {children}
    </a>
  );
  
  export default function BlogPage() {
    return (
      <div className="bg-gray-900 min-h-screen text-white font-sans">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="flex justify-between items-center py-6">
            <NavLink href="projects" className="bg-gray-800 px-6 py-3 rounded-full hover:bg-gray-700">
                <h1 className="text-md font-medium ">Nabil Rakaiza Abror</h1>
            </NavLink>   
            <nav className="bg-gray-800 px-4 py-2 rounded-full flex items-center space-x-2">
              <NavLink href="/">
                Home
              </NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/blogs" active>Blogs</NavLink>
              <NavLink href="/about-me">All About Me!</NavLink>
            </nav>
          </header>

          <p className="mt-5 text-center text-white mb-8 text-2xl"><b>DSA2101: Essential Data Analytics Tools: Data Visualisation </b></p>
            {/* Main Content */}
            <main className="py-3">
                <div className="bg-amber-300 rounded-4xl p-6 transition-shadow">
                    <p className="text-black">
Lecturer: Prof. Vik Gopal <br/><br/>

Assessment:<br/>
10% DataCamp assignments<br/>
30% Tutorials (each 2% except the 7th which is 10%)<br/>
20% Midterm<br/>
40% Finals<br/><br/>

Module Difficulty<br/>
The module difficulty actually depends on whether you know R well or not. It is very useful to understand how to read R help pages and the main star of this module, dplyr and ggplot2.<br/>

For the first few weeks you are refreshed upon the basic R commands, and how you should try to program functionally instead of declaratively, i.e. use the apply command family such as sapply and lapply instead of the well-known control flows like for and while or even repeat.<br/>

Next up is about importing data, where it can be from an HTML page, some API, excel files, you name it. This just opens our mind to what kinds of data storage are there out in the wild. You will also touch the concept of simple feature objects (sf) which is useful for spatial data.<br/>

Starting the middle of the semester we were introduced to dplyr which is very convenient to use when manipulating data. It feels like method chaining at its finest with the help of the pipe operator.<br/>

With all data importing and manipulating skills in hand, it's time to output and visualize the data as the module title says, which is using ggplot2. There are many ways of visualizing the same data, and we also went through the rationale on visualizing different types of data, such as considering the data-ink ratio, the accuracy of the data, and how the visualization is approachable to layman people.<br/>

As a supplementary material but not examinable, we were also introduced to Tableau on the last week, and how the basic tools work.<br/>

The workload below is measured weekly.<br/>
Lectures - 4h (2 x 2h)<br/>
Prof decided to use Microsoft Teams as the main communication platform, which I had no complain about. He will definitely provide the recording, but his lectures are just so calming I'd actually come for it. He also touched on some extra information such as some statistical methods that might be useful for further modules. It's a good idea to graze on these so as to give us awareness of their existence, e.g. how does the loess method work, instead of just using it in lm's method.<br/>

He also has a website that basically displays his code live, and we can comment on the code that he's currently explaining or copying them for easy reference and learning. It's just such easy to work around with these.<br/>

Tutorials - 1h<br/>
Basically, for every week, there will be a tutorial worksheet released to be done in a week by submitting Rmd files (R markdown). As someone who's been familiar with GitHub Markdown files, I had no trouble familiarizing myself with Rmd files, but learning this becomes crucial when you have to always submit everything in this file format.<br/>

The one-hour session is to simply discuss about these problems for you as a help to solve these questions. It is also recorded.<br/>

Personally, the questions take a while to solve (at least 3 hours?) but I enjoy exploring these datasets provided beforehand. There's actually more insights you can gain the moment you explore them.<br/>

DataCamp assignments<br/>
Prof used DataCamp for non-tutorial submissions which basically is an extra guide on how to work with everything taught in DSA2101. It is a comfortable tool and you don't have to worry about being wrong here because you are just graded for the sake of completeness. Also very chiong-able, how about finishing all ten in the end of Week 0 :)<br/>

Exams and Personal Opinion<br/>
Hands up the mod I had the most fun during the semester. Had ups and downs during debugging but isn't that the way of life.<br/>

Midterms was a one-day take home thing. So, you can ask for clarification during the next 24h of the paper's release. Difficulty-wise, it's medium difficulty and definitely can be searched by R's help page as well.<br/>

Finals was held F2F and the difficulty was easier than I expected, thankfully. There was a moment where I realized understanding the help page in a short amount time is a useful thing, since there was one package rarely used I only came upon it during exam yet I had to use it.<br/>

Overall, I learnt a lot from this module and how do we deal different kinds of datasets as a way of adapting.<br/>

Expected grade: A<br/>
                    </p>
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
  
  