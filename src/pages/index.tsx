import React from "react";
import Link from 'next/link'
import Home from "./home";

function App() {
    return (
        <ul>
            <li>
                <Link href={'/'}><Home/></Link>
            </li>
            <li>
                <Link href={'/blog'}><></>
                </Link>
            </li>
        </ul>
    )
}

export default App;

