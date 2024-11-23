import React from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

const featuredPosts: BlogPost[] = [
  {
    title: "Latest Advancements in FUE Hair Transplantation",
    excerpt: "Discover how new technologies are revolutionizing the field of hair transplantation, making procedures more efficient and results more natural.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Technology",
    image: "https://example.com/fue-advances.jpg",
    slug: "latest-fue-advancements"
  },
  {
    title: "Understanding Hair Loss: Causes and Solutions",
    excerpt: "An in-depth look at the various factors contributing to hair loss and the most effective treatment options available today.",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Education",
    image: "https://example.com/hair-loss-causes.jpg",
    slug: "understanding-hair-loss"
  },
  {
    title: "Post-Transplant Care: Essential Tips for Optimal Results",
    excerpt: "Learn the best practices for caring for your newly transplanted hair to ensure the best possible outcome.",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Patient Care",
    image: "https://example.com/post-care.jpg",
    slug: "post-transplant-care"
  }
];

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
    <img 
      src={post.image} 
      alt={post.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
        <span className="inline-flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          {new Date(post.date).toLocaleDateString()}
        </span>
        <span className="inline-flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          {post.readTime}
        </span>
      </div>
      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-3">
        <Tag className="w-4 h-4 mr-1" />
        {post.category}
      </span>
      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <a href={`/blog/${post.slug}`} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
        Read More
        <ArrowRight className="w-4 h-4 ml-1" />
      </a>
    </div>
  </div>
);

export default function Blog() {
  return (
    <section className="bg-white">
      <div className="bg-gradient-to-b from-navy-900 to-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Latest Insights & Articles</h2>
            <p className="text-blue-100">
              Stay informed with the latest developments in hair restoration, expert advice,
              and success stories from our clinic.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {/* Featured Post */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Featured Articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Browse by Category</h3>
          <div className="flex flex-wrap gap-4">
            {["All", "Technology", "Education", "Patient Care", "Success Stories", "Research"].map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest articles, news, and updates
            about hair restoration directly in your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
