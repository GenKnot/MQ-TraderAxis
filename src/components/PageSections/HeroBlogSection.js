import Link from "next/link";
import {blogPostsList} from "@/data/blog";

export default function HeroBlogSection() {
    return (
        <div id="blog_page" className="hero-area">
            <div className="container">
                <div className="row hero-area-inner">
                    <div className="col-xl-9 col-lg-9">
                        <div className="hero-area-content">
                            <div className="section-title">
                                <h1>Design Insight</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-40">
                    {blogPostsList.map((post) => (
                        <div key={post.id} className="col-xl-4 col-lg-4 col-md-6 col-12">
                            <hr />
                            <div className="single-blog-item mt-30">
                                <div className="blog-bg">
                                    <img src={post.image.src} alt={post.title.replace(/<[^>]+>/g, '')} />
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <p>{post.category}</p>
                                    </div>
                                    <h3>
                                        <Link href={`/blog/${post.id}`}>
                                            <span dangerouslySetInnerHTML={{ __html: post.title }} />
                                        </Link>
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

                {/* Pagination */}
                <div className="row">
                    <div className="col-12">
                        <ul className="pagination justify-content-center mt-4">
                            <li className="page-item"><a className="page-link" href="#"><i className="las la-arrow-left"></i></a></li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#"><i className="las la-arrow-right"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
