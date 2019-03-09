import React from 'react';
import { Link } from 'react-router-dom'

const arr = ['about', 'settings', 'vodka', 'cat'];
export default function() {
    return (
        <div>
            {arr.map((a, i) => (
                <div key={i}>
                <Link to={a}>{a}</Link>
                </div>
            ))}
        </div>
    )
}
