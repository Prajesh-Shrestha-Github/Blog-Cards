// src/components/BlogList.jsx 
import React from 'react'; 
import BlogCard from './BlogCard'; 
import { list } from 'postcss';
const BlogList = () => { 
    const blogs = [ 
        { 
        "image": "https://picsum.photos/id/1011/300/200",
        "title": "Understanding React Components",
        "description": "Learn the basics of React components, the building blocks of any React application.",
        link: "#"
        }, 
        { 
        "image": "https://picsum.photos/id/1011/300/200",
        "title": "Understanding React Components",
        "description": "Learn the basics of React components, the building blocks of any React application.",
        link: "#"


        }, 
        { 
        "image": "https://picsum.photos/id/1011/300/200",
        "title": "Understanding React Components",
        "description": "Learn the basics of React components, the building blocks of any React application.",
        link: "#"

        }, // Add more blog objects as needed 
        ]; 
        
        return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {blogs.map((blog, index) => ( 
                <BlogCard 
                key={index} 
                image={blog.image} 
                title={blog.title} 
                description={blog.description} 
                link={blog.link}
                /> 
            ))}
        </div> 
    ); 
};

export default BlogList;