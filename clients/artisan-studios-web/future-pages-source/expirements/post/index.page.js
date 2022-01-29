import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Header from "../0shared/Header";

const posts = [0, 1, 2, 3, 4];

const Post = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <ul>
        {posts.map((item) => (
          <li>
            <Link href={`/expirements/post/${item}`}>
              <a>Post: {item}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Post;
