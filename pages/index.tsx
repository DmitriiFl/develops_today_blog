import MainLayout from "../components/MainLayout";
import axios from "axios";
import Link from "next/link";
import { singlePost } from "./posts/[postId]";
import { ReactElement } from "react";

interface Props {
    posts: Array<singlePost>;
}

const Posts = ({ posts }: Props): ReactElement => {
    return (
        <MainLayout title="Posts">
            <ul>
                {posts.length ? (
                    posts.map((post) => (
                        <li key={post.id}>
                            <Link href={`/posts/[postId]`} as={`/posts/${post.id}`}>
                                {post.title}
                            </Link>
                        </li>
                    ))
                ) : (
                    <p>No posts yet</p>
                )}
            </ul>
        </MainLayout>
    );
};
export default Posts;
export async function getServerSideProps() {
    const response = await axios.get("https://simple-blog-api.crew.red/posts");
    return { props: { posts: response.data || [] } };
}
