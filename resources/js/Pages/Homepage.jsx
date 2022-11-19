import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";

export default function Homepage(props) {
    console.log(props);
    return (
        <div>
            <Head title={props.title} />

            <table class="table-fixed">
                <thead>
                    <tr>
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {props.news ? (
                        props.news.map((data, i) => {
                            return (
                                <tr key={i}>
                                    <td>Shining Star</td>
                                    <td>Earth, Wind, and Fire</td>
                                    <td>1975</td>
                                </tr>
                            );
                        })
                    ) : (
                        <p>Data Tidak Tersedia</p>
                    )}
                </tbody>
            </table>
        </div>
    );
}
