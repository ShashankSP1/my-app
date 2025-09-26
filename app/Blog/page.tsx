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
    <div className="max-w-6xl mx-auto p-6 mt-16">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="flex gap-10">
        <div className="space-y-8">
          {posts.map(({ slug, frontmatter }) => (
            <div
              key={slug}
              className="p-6 border rounded-xl shadow-md hover:shadow-lg transition bg-white"
            >
              <div className="grid grid-cols-3 gap-6">
                {/* Left Side - Content */}
                <div className="col-span-2 flex flex-col justify-between">
                  <div>
                    {/* Date */}
                    <span className="text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded">
                      {frontmatter.date}
                    </span>

                    {/* Title */}
                    <h2 className="text-xl font-bold mt-2 hover:text-blue-600 transition">
                      {frontmatter.title}
                    </h2>

                    {/* Description */}
                    <p className="mt-3 text-gray-600 line-clamp-3">
                      {frontmatter.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {frontmatter.tags?.map((tag: string) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-gray-100 rounded-md text-gray-700"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Read More */}
                  <Link href={`/Blog/post/${slug}`}>
                    <span className="mt-4 inline-block text-blue-600 font-medium hover:underline">
                      Read More →
                    </span>
                  </Link>
                </div>

                {/* Right Side - Image */}
                <div className="relative">
                  <img
                    src={frontmatter.src || "/sample image.jpeg"}
                    alt="Blog"
                    className="w-full h-44 object-cover rounded-lg hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-64 space-y-6">
          <div>
            <label htmlFor="sort" className="block mb-2 font-semibold">
              Sort By
            </label>
            <select id="sort" className="w-full border rounded p-2">
              <option>Newest First</option>
              <option>Oldest First</option>
              <option>A-Z</option>
              <option>Z-A</option>
            </select>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Topics</h2>
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
                  className="px-2 py-0.5 bg-gray-200 rounded text-sm"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-2">General Info</h2>
            <p className="text-gray-600 text-sm">
              You can put any info here like author, categories, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
