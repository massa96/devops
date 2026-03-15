import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src', 'data', 'posts');

export async function getPostBySlug(slug: string) {
  try {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, `${realSlug}.md`);
    if (!fs.existsSync(fullPath)) {
      return { content: '<p>Post not found</p>', data: { title: 'Not found' } };
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const processedContent = await remark().use(html).process(content);
    return { content: processedContent.toString(), data };
  } catch (err) {
    return { content: '<p>Error loading post</p>', data: { title: 'Error' } };
  }
}

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) return [];
  const files = fs.readdirSync(postsDirectory);
  return files
    .filter((f) => f.endsWith('.md'))
    .map((file) => {
      const fullPath = path.join(postsDirectory, file);
      const { data } = matter(fs.readFileSync(fullPath, 'utf8'));
      return { slug: file.replace(/\.md$/, ''), ...data };
    });
}

export default { getPostBySlug, getAllPosts };

export function getRecentPosts(count = 5) {
  const all = getAllPosts();
  return all.slice(0, count);
}
