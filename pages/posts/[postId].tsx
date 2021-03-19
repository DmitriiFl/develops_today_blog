import MainLayout from "../../components/MainLayout";
import axios from "axios";
import Router from "next/router";

export interface singlePost {
    id: number;
    title: string;
    body: string;
}
interface Props {
    post: singlePost;
}

const SinglePost = ({ post }: Props) => {
    return (
        <MainLayout title="Post">
            <div className="post">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        </MainLayout>
    );
};

export default SinglePost;
export async function getServerSideProps(context) {
    const response = await axios.get(`https://simple-blog-api.crew.red/posts/${context.params.postId}`);
    return { props: { post: response.data } };
}
