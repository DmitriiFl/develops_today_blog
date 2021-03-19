import Link from "next/link";
import Head from "next/Head";
import { ReactElement } from "react";

interface Props {
    children: ReactElement;
    title: string;
}

const MainLayout = ({ children, title = "Blog" }: Props) => {
    return (
        <>
            <Head>
                <title>{title} | Blog</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
            </Head>
            <nav>
                <Link href={"/"}>Posts</Link>
                <Link href={"/posts/new"}>Create post</Link>
            </nav>
            <main className={"main"}>{children}</main>
        </>
    );
};

export default MainLayout;
