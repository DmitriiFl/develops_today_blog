import MainLayout from "../../components/MainLayout";
import { useRef } from "react";
import axios from "axios";
import Router from "next/router";

const New: React.FC = () => {
    const title = useRef<HTMLInputElement>();
    const body = useRef<HTMLInputElement>();
    const submitForm = async (e) => {
        e.preventDefault();
        await axios
            .post("https://simple-blog-api.crew.red/posts", {
                title: title.current.value,
                body: body.current.value,
            })
            .then((req) => (req.status === 201 ? Router.push("/") : false));
    };
    return (
        <MainLayout title={"Create post"}>
            <form>
                <input ref={title} type="text" id="title" placeholder="Title:" />
                <input ref={body} type="text" id="body" placeholder="Text:" />
                <button type="submit" onClick={(event) => submitForm(event)}>
                    Create post
                </button>
            </form>
        </MainLayout>
    );
};

export default New;
