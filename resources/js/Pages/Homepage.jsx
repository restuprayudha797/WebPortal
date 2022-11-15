import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";

export default function Homepage(props) {
    console.log(props);
    return (
        <div>
            <Head title={props.title} />

            {props.news ? (
                props.news.map((data, i) => {
                    return (
                        <div
                            key={i}
                            className="p-4 m-2 bg-white text-black shadow-md rounded-md"
                        >
                            <p className="text-2xl">{data.title}</p>
                            <p className="text-small">{data.description}</p>
                            <i>{data.category}</i>
                            <i>{data.author}</i>
                        </div>
                    );
                })
            ) : (
                <p>Data Tidak Tersedia</p>
            )}
        </div>
    );
}
