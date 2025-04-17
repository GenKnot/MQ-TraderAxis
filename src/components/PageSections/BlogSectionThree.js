"use client";

import {blogPostsThree} from "@/data/blog";

export default function BlogSectionThree() {
    return (
        <div id="blog-3" className="blog-section section-padding pb-50">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="section-title">
                            <h2>Design Insight</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt-40">
                    {blogPostsThree.map(post => (
                        <div className="single-blog-item pb-40 pt-40" key={post.id}>
                            <div className="blog-bg">
                                <img src={post.image} alt={post.title.replace(/<[^>]+>/g, '')} />
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <p>{post.category}</p>
                                </div>
                                <div className="blog-info">
                                    <div className="blog-author">
                                        <p>by {post.author}</p>
                                    </div>
                                    <div className="blog-date">
                                        <p>{post.date}</p>
                                    </div>
                                </div>
                                <h3>
                                    <a href={post.link}
                                       dangerouslySetInnerHTML={{ __html: post.title }}>
                                    </a>
                                </h3>
                                <p>{post.description}</p>
                                <a href={post.link} className="read-more-btn">Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
