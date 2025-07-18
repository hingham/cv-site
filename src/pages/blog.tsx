import TextBlock from "@/components/textBlock";
import { blogPosts } from "@/data/learning-blog";

export default function Blog() {
  return (
    <div className="main-accent">
      <h1>My daily thoughts, reflections, ideas</h1>
      {blogPosts.map((post, index) => (
        <TextBlock
          key={index}
          title={post.title}
          bodyText={post.body}
        />
      ))}
    </div >
  );
}