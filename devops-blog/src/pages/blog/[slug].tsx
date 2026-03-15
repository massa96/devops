import MainLayout from '../../layouts/MainLayout';

const BlogPost = ({ post }: { post: any }) => {
    if (!post) {
        return <MainLayout><div>Article introuvable</div></MainLayout>;
    }

    return (
        <MainLayout>
            <article>
                <h1>{post.data?.title || 'Sans titre'}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
        </MainLayout>
    );
};

export async function getStaticPaths() {
    const { getAllPosts } = await import('../../lib/markdown');
    const posts = getAllPosts();
    const paths = posts.map((p: any) => ({ params: { slug: String(p.slug) } }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
    const { getPostBySlug } = await import('../../lib/markdown');
    const post = await getPostBySlug(String(params.slug));
    return { props: { post } };
}

export default BlogPost;