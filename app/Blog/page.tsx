import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogListClient from "./BlogListClient";

interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    description: string;
    tags?: string[];
    src?: string;
  };
}

export default function BlogList() {
  try {
    const postsDir = path.join(process.cwd(), "app", "Blog", "post");
    
    // Check if directory exists
    if (!fs.existsSync(postsDir)) {
      console.error(`Posts directory not found: ${postsDir}`);
      console.error(`Current working directory: ${process.cwd()}`);
      return <BlogListClient posts={[]} />;
    }

    const files = fs
      .readdirSync(postsDir)
      .filter((filename) => filename.endsWith(".md"));

    const posts: Post[] = files
      .map((filename) => {
        try {
          const filePath = path.join(postsDir, filename);
          const fileContent = fs.readFileSync(filePath, "utf-8");
          const { data } = matter(fileContent);

          // Ensure all required fields exist
          if (!data || typeof data !== "object") {
            console.warn(`Invalid frontmatter in ${filename}`);
            return null;
          }

          return {
            slug: filename.replace(".md", ""),
            frontmatter: {
              title: String(data.title || ""),
              date: String(data.date || ""),
              description: String(data.description || ""),
              tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
              src: data.src ? String(data.src) : undefined,
            },
          } as Post;
        } catch (error) {
          console.error(`Error reading file ${filename}:`, error);
          return null;
        }
      })
      .filter((post): post is Post => post !== null && post.frontmatter.title !== "");

    return <BlogListClient posts={posts} />;
  } catch (error) {
    console.error("Error loading blog posts:", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    return <BlogListClient posts={[]} />;
  }
}
