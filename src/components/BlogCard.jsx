import React from "react";

const BlogCard = ({image, title, description, link }) => {
    return (
        <div className="max-w-sm bg-neutral-300 border border-white rounded-lg shadow-md overflow-hidden">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-5">
                <h5 className="text-2xl font-bold mb-2">{title}</h5>
                <p className="text-gray-700 mb-4">{description}</p>
                <a
                href={link}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-black"
                >
                    Read More
                </a>
            </div>

        </div>
        
    );
};

export default BlogCard