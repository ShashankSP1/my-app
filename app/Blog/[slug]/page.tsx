import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export default async function Page(props: any) {
  const { slug } = props.params;

  // Make sure path matches your folder structure
  const filePath = path.join(
    process.cwd(),
    "app",
    "Blog",
    "post",
    `${slug}.md`
  );

  // Read markdown file
  const fileContent = fs.readFileSync(filePath, "utf8");

  // Parse frontmatter + content
  const { data, content } = matter(fileContent);

  // Convert markdown → HTML
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <article className="max-w-3xl mx-auto p-6 pt-32">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{data.date}</p>
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}
