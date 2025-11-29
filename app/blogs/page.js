export const blogPosts = [
  {
    id: "y2s1-review",
    title: "Y2S1 Module Review!",
    date: "December 2025",
    summary: "In this sem, I took CS2030, CS2040, IT1244, SP1541, DSA2101, DSA2102. Click to read more about my review!",
  },
  {
    id: "y1s2-review",
    title: "Y1S2 Module Review!",
    date: "May 2025",
    summary: "In this sem, I took DSA1101, ST2131, CS1231, HSA1000, HSS1000, DTK1234, ES1103. Click to read more about my review!",
  },
  {
    id: "y1s1-review",
    title: "Y1S1 Module Review!",
    date: "December 2024",
    summary: "In this sem, I took CS1010S, MA2001, MA2002, HSH1000, HSI1000, CFG1002. Click to read more about my review!",
    content: "Here is the full long text for Y1S1..."
  }
];

export default function BlogsPage() {
  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans flex flex-col">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col">
        
        <p className="text-center text-white mb-8 text-2xl mt-8"><b>My blogs</b></p>
        <main className="py-3 flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {blogPosts.map((post) => (
                <a href={`/blogs/blog?id=${post.id}`} key={post.id}>
                  <div className="bg-amber-300 p-6 rounded-4xl hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <h3 className="text-xl font-semibold mb-2 text-black">{post.title}</h3>
                      <h3 className="mb-2 text-gray-800 italic">{post.date}</h3>
                      <p className="text-black mb-4">{post.summary}</p>
                  </div>
                </a>
              ))}

            </div>
        </main>

        {/* Footer */}
        <footer className="text-center text-gray-500 pb-8">
          <p>&copy; 2025 Nabil Rakaiza Abror.</p>
        </footer>
      </div>
    </div>
  );
}