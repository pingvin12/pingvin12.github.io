import fs from 'fs';
import matter from 'gray-matter';
// @ts-ignore
import md from 'markdown-it';
import BlogNavigationBar from "../../comp/BlogNavigationBar";
import Footer from "../../comp/BaseComponents/Footer";

export async function getStaticPaths() {
    const files = fs.readdirSync('src/posts');
    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace('.md', ''),
        },
    }));
    return {
        paths,
        fallback: false,
    };
}

// @ts-ignore
export async function getStaticProps({params: {slug}}) {
    const fileName = fs.readFileSync(`src/posts/${slug}.md`, 'utf-8');
    const {data: front, content} = matter(fileName);
    return {
        props: {
            front,
            content,
        },
    };
}

export default function PostPage({front, content}: { front: any, content: any }) {
    return (
        <>
            <BlogNavigationBar/>
            <div className='flex items-stretch'>

                <div className='prose mx-auto place-self-auto py-12 self-center self-stretch blog'>
                    <h1 className='text-7xl'>{front.title}</h1>
                    <div dangerouslySetInnerHTML={{__html: md().render(content)}}/>

                    <br/>
                    <p className='text-sm'>tags:</p>
                    <div className='flex'> 
                    {front.tags.map((tag: any) => (
                        <a className='dark:bg-darklight drop-shadow-md dark:text-white text-black dark:hover:bg-gray-800 bg-gray-50 hover:bg-gray-200 transition-colors block p-2 mr-2 mb-2  text-sm rounded-xl font-medium'>#{tag}</a>
                    ))}
                    </div>
                </div>
            </div>
            <Footer/>

        </>
    );
}