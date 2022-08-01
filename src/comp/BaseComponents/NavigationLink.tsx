import React from "react";

type linkData =
    {
        title: string;
        href: string;
        id: string;
    };

class NavigationLink extends React.Component<linkData> {
    constructor(props: linkData) {
        super(props);
    }

    render() {
        return (
            <li>
                <a href={this.props.href} id = {this.props.id}
                   className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    {this.props.title}</a>
            </li>
        );
    };
}

export default NavigationLink;