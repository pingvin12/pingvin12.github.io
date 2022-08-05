import React from "react";
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import BlogNavigationBar from "../comp/BlogNavigationBar";
import BlogLayout from "../comp/BaseComponents/BlogLayout";

export async function getStaticProps() {
    const files = fs.readdirSync('src/posts');
    const posts = files.map((file) => {
        const slug = file.replace('.md','');
        const read = fs.readFileSync(`src/posts/${file}`, 'utf-8');
        const { data: front } = matter(read);
        return {
            slug,
            front,
        };
    });
    return {
        props: {
            posts,
        },
    };
}

export default function Blog({ posts }) {
    return (
        <div>
            <BlogNavigationBar/>
            <BlogLayout>
                <div className='grid grid-cols-1 md:grid-cols-3 drop-shadow-md lg:grid-cols-4 p-4 md:p-0'>
                    {posts.map(({ slug, front }) => (
                        <div
                            key={slug}
                            className='border dark:border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'
                        >
                            <Link href={`/post/${slug}`}>
                                <a>
                                    <h1 className='p-4'>{front.title}</h1>
                                    <img className='p-4' src={front.socialImage} alt={'bannerimg-'+front.title}/>
                                    <p className='text-sm p-4'>Date: {front.date}</p>
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
            </BlogLayout>
        </div>
    )
}