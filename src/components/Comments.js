"use client";

import { useState, useEffect } from 'react';
import { API_BASE_URL } from '@/../constants/api';

export default function Comments() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({
        name: '',
        context: '',
        country: '',
        avatar: null
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/comments/`);
            if (!response.ok) {
                throw new Error('Failed to fetch comments');
            }
            const data = await response.json();
            setComments(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', newComment.name);
        formData.append('context', newComment.context);
        formData.append('country', newComment.country);
        if (newComment.avatar) {
            formData.append('avatar', newComment.avatar);
        }

        try {
            const response = await fetch(`${API_BASE_URL}/api/comments/`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to post comment');
            }

            setNewComment({
                name: '',
                context: '',
                country: '',
                avatar: null
            });

            fetchComments();
        } catch (err) {
            setError(err.message);
        }
    };

    const handleFileChange = (e) => {
        setNewComment({
            ...newComment,
            avatar: e.target.files[0]
        });
    };

    if (loading) return <div>Loading comments...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="comments-section">
            <h3>Comments</h3>

            <div className="comments-list">
                {comments.map(comment => (
                    <div key={comment.id} className="comment-item">
                        <div className="comment-avatar">
                            {comment.avatar ? (
                                <img src={`${API_BASE_URL}${comment.avatar}`} alt={comment.name} />
                            ) : (
                                <div className="default-avatar">{comment.name[0]}</div>
                            )}
                        </div>
                        <div className="comment-content">
                            <h4>{comment.name}</h4>
                            <p className="comment-country">{comment.country}</p>
                            <p className="comment-text">{comment.context}</p>
                            <p className="comment-date">
                                {new Date(comment.created_at).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="comment-form">
                <h3>Leave a Comment</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={newComment.name}
                            onChange={(e) => setNewComment({...newComment, name: e.target.value})}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Your Country"
                            value={newComment.country}
                            onChange={(e) => setNewComment({...newComment, country: e.target.value})}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            placeholder="Your Comment"
                            value={newComment.context}
                            onChange={(e) => setNewComment({...newComment, context: e.target.value})}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>
                    <button type="submit">Submit Comment</button>
                </form>
            </div>
        </div>
    );
}