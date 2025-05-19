import {categories, latestPosts, tags} from "@/data/blog";
import Comments from "@/components/Comments";

import blogFeatureImage from "@/assets/img/blog/blog-feature.jpg";
import relatedBlog1 from "@/assets/img/blog/blog-15.jpg";
import relatedBlog2 from "@/assets/img/blog/blog-16.jpg";
import relatedBlog3 from "@/assets/img/blog/blog-17.jpg";

export default function BlogDetailsSection() {
    return (
        <div className="blog-details-page">
            <div className="container">
                <div className="row gx-5 justify-content-around">

                    {/* Sidebar */}
                    <div className="col-xl-4 col-lg-4 order-2 order-lg-1">
                        <div className="blog-sidebar">

                            {/* Search Bar */}
                            <div className="search-bar-wrap d-flex">
                                <input type="search" placeholder="Search"/>
                                <i className="fal fa-search"></i>
                            </div>

                            {/* Categories */}
                            <div className="blog-category">
                                <h5>Categories</h5>
                                <ul>
                                    {categories.map(cat => (
                                        <li key={cat.id}>
                                            <span>{String(cat.id).padStart(2, '0')}</span>
                                            <a href={cat.link}>{cat.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Latest Posts */}
                            <div className="latest-post-wrap">
                                <h5>Latest Post</h5>
                                {latestPosts.map(post => (
                                    <div className="single-latest-post" key={post.id}>
                                        <div className="latest-post-content">
                                            <div className="post-tag"><p>{post.category}</p></div>
                                            <div className="post-title">
                                                <h3>
                                                    <a href={post.link}
                                                       dangerouslySetInnerHTML={{__html: post.title}}/>
                                                </h3>
                                            </div>
                                            <div className="blog-info">
                                                <p>by {post.author}</p>
                                                <p>{post.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Popular Tags */}
                            <div className="popular-tag-wrap mt-60">
                                <h5>Popular Tags</h5>
                                {tags.map((tag, index) => (
                                    <a href="#" key={index}>{tag}</a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Blog Content */}
                    <div className="col-xl-8 col-lg-8 order-1 order-lg-2">
                        <div className="section-title">
                            <h2>Creating a <br/> Functional Home <br/> Office Space <span><i
                                className="las la-arrow-right"></i></span></h2>
                        </div>
                        <hr/>
                        <div className="blog-meta">
                            <span>Sarah Roberts</span>
                            <span>September 22, 2023</span>
                        </div>

                        {/* Featured Image */}
                        <div className="blog-featured-img mt-30">
                            <img src={blogFeatureImage.src} alt="Featured"/>
                        </div>

                        {/* Blog Content */}
                        <div className="blog-content">
                            <h3>With the rise of remote work...</h3>
                            <p>Whether you're a full-time remote worker...</p>

                            {/* Tips Section */}
                            <div className="blog-content-inner">
                                {["Starts with basics", "Consider your storage needs", "Design for productivity", "Incorporate personal touches", "Don't forget about ergonomics"].map((tip, index) => (
                                    <div key={index}>
                                        <h4><span>{index + 1}.</span> {tip}</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                    </div>
                                ))}
                            </div>

                            {/* Related Images */}
                            <div className="blog-related-img mt-60">
                                <div className="row">
                                    {[relatedBlog1, relatedBlog2, relatedBlog3].map((img, index) => (
                                        <div className="col-xl-4 col-lg-4 col-md-4 mb-30" key={index}>
                                            <img src={img.src} alt="Related"/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Comments />

                    </div>
                </div>
            </div>
        </div>
    )
}