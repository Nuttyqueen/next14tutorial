import React, { Suspense } from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";

//FETCH DATA WITH AN API
/* const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
}; */

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  //FETCH DATA WITH AN API
  /* const post = await getData(slug); */

  //FETCH DATA WITHOUT AN API
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/23452742/pexels-photo-23452742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
        ></Image>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {/*           <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={50}
            height={50}
          ></Image> */}
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          {/*           <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense> */}
          <div>
            <span className={styles.detailTitle}>Published : </span>
            <span className={styles.detailValue}>{post?.date}</span>
          </div>
        </div>
        <div className={styles.content}>{post?.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
