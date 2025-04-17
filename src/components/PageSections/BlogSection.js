
import Image from "next/image";
import Link from "next/link";
import {blogPosts} from "@/data/blog";

export default function BlogSection() {
    return (
        <div className="blog-section blog-two section-padding pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="section-title">
                            <div className="heading-animation">
                                <h2>Design Insight</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-40">
                    {blogPosts.map(post => (
                        <div key={post.id} className="col-xl-4 col-lg-4 col-md-6 col-12 wow fadeInUp animated"
                             data-wow-delay={post.delay}
                        >
                            <div className="single-blog-item">
                                <div className="blog-bg">
                                    <Image src={post.img} alt={post.title} style={{height: 'auto'}}/>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <p>{post.category}</p>
                                    </div>
                                    <h3>
                                        <Link href={post.link}
                                              dangerouslySetInnerHTML={{__html: post.title}}
                                        ></Link>
                                    </h3>
                                    <div className="blog-info">
                                        <div className="blog-author">
                                            <p>by {post.author}</p>
                                        </div>
                                        <div className="blog-date">
                                            <p>{post.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}