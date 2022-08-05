import Footer from "./Footer";

// @ts-ignore
export default function BlogLayout({ children }) {
    return(
        <div className={'flex flex-col min-h-screen'}>
            <main className={'container mx-auto flex-1'}>{children}</main>
        <Footer/>
        </div>
    )
}