import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function BlogList() {
  const postsDir = path.join(process.cwd(), "app", "Blog", "post");
  const files = fs
    .readdirSync(postsDir)
    .filter((filename) => filename.endsWith(".md"));

  const posts = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(postsDir, filename), "utf-8");
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(".md", ""),
      frontmatter: data,
    };
  });

  return (
    <div className="min-h-screen w-full pt-20 pb-10 px-2 sm:px-0 bg-gradient-to-br from-blue-100 via-cyan-100 to-pink-100 dark:from-blue-950 dark:via-purple-950 dark:to-fuchsia-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto p-4 sm:p-8 rounded-3xl shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-blue-200 dark:border-purple-900">
        <h1 className="text-4xl font-extrabold mb-10 text-blue-900 dark:text-fuchsia-200 drop-shadow-lg">Blog</h1>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 space-y-8">
            {posts.map(({ slug, frontmatter }) => (
              <div
                key={slug}
                className="p-6 border border-blue-200 dark:border-purple-900 rounded-2xl shadow-lg hover:shadow-blue-300/40 dark:hover:shadow-fuchsia-400/40 transition bg-white/90 dark:bg-gray-950/90 backdrop-blur-md group hover:scale-[1.02] active:scale-100 duration-200"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Left Side - Content */}
                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      {/* Date */}
                      <span className="text-xs font-semibold text-green-800 dark:text-green-200 bg-green-100 dark:bg-green-900/60 px-2 py-1 rounded shadow-sm">
                        {frontmatter.date}
                      </span>

                      {/* Title */}
                      <h2 className="text-2xl font-bold mt-2 group-hover:text-blue-600 dark:group-hover:text-fuchsia-400 transition">
                        {frontmatter.title}
                      </h2>

                      {/* Description */}
                      <p className="mt-3 text-gray-700 dark:text-gray-300 line-clamp-3">
                        {frontmatter.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {frontmatter.tags?.map((tag: string) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-blue-100 dark:bg-fuchsia-900/60 rounded-md text-blue-700 dark:text-fuchsia-200 font-semibold shadow hover:bg-blue-200 dark:hover:bg-fuchsia-800/80 transition-colors duration-200"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Read More */}
                    <Link href={`/Blog/post/${slug}`}>
                      <span className="mt-4 inline-block text-blue-600 dark:text-fuchsia-300 font-bold hover:underline hover:text-fuchsia-600 dark:hover:text-blue-300 transition">
                        Read More →
                      </span>
                    </Link>
                  </div>

                  {/* Right Side - Image */}
                  <div className="relative">
                    <img
                      src={frontmatter.src || "/sample image.jpeg"}
                      alt="Blog"
                      className="w-full h-44 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-200 border border-blue-100 dark:border-fuchsia-900"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-72 space-y-8 bg-white/70 dark:bg-gray-950/80 border border-blue-200 dark:border-purple-900 rounded-2xl shadow-lg p-6 backdrop-blur-md">
            <div>
              <label htmlFor="sort" className="block mb-2 font-bold text-blue-900 dark:text-fuchsia-200">
                Sort By
              </label>
              <select id="sort" className="w-full border border-blue-200 dark:border-fuchsia-900 rounded p-2 bg-white dark:bg-gray-900 text-blue-900 dark:text-fuchsia-200">
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>A-Z</option>
                <option>Z-A</option>
              </select>
            </div>

            <div>
              <h2 className="font-bold mb-2 text-blue-900 dark:text-fuchsia-200">Topics</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "react",
                  "nextjs",
                  "tailwindcss",
                  "typescript",
                  "javascript",
                  "css",
                ].map((topic) => (
                  <span
                    key={topic}
                    className="px-2 py-0.5 bg-blue-100 dark:bg-fuchsia-900/60 rounded text-sm text-blue-700 dark:text-fuchsia-200 font-semibold shadow hover:bg-blue-200 dark:hover:bg-fuchsia-800/80 transition-colors duration-200"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-bold mb-2 text-blue-900 dark:text-fuchsia-200">General Info</h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                You can put any info here like author, categories, etc.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
