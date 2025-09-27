import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "app/Blog/post");

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post file not found for slug: ${slug}`);
  }
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    slug,
    meta: data,
    content,
  };
}

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    return getPostBySlug(slug);
  });
}

export const posts = [
  {
    slug: "firstBlog",
    frontmatter: { title: "My Journey into Full Stack Development" },
  },
  {
    slug: "secondBlog",
    frontmatter: { title: "How I Built My Portfolio Website" },
  },
  {
    slug: "thirdBlog",
    frontmatter: { title: "Lessons Learned from Villagepepro Project" },
  },
  {
    slug: "fourthBlog",
    frontmatter: { title: "React + Tailwind Tips for Beginners" },
  },
  {
    slug: "fifthBlog",
    frontmatter: { title: "Balancing Learning & Real-World Projects" },
  },
];

