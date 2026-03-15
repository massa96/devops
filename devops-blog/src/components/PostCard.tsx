import React from 'react';
import Link from 'next/link';

interface PostCardProps {
    post: any;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    const { title, excerpt, slug } = post || {};
    return (
        <div className="post-card">
            <h2>{title}</h2>
            <p>{excerpt}</p>
            <Link href={`/blog/${slug}`} className="card-link">Lire la suite</Link>
        </div>
    );
};

export default PostCard;