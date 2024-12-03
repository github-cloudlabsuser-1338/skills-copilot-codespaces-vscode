import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <textarea
                style={{ width: '80%', height: '200px', marginBottom: '20px' }}
                value={markdown}
                onChange={handleChange}
            />
            <div style={{ width: '80%', border: '1px solid #ddd', padding: '20px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}
function reverseSentence(sentence) {
    return sentence
        .split(' ')
        .reverse()
        .join(' ')
        .replace(/^\w/, (c) => c.toUpperCase());
}

// Example usage:
const inputSentence = "hello world";
const reversedSentence = reverseSentence(inputSentence);
console.log(reversedSentence); // Output: "World hello"

function flattenArray(arr) {
    return arr.reduce((acc, val) => acc.concat(val), []);
}

const flattenedData = flattenArray(data);
console.log(flattenedData);
// Output: [{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }, { name: 'Bob', age: 40 }]

function extractNames(data) {
    return data.map(item => item.name);
}

// Example usage:
const data = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 40 }
];

const names = extractNames(data);
console.log(names); // Output: ['John', 'Jane', 'Bob']
function extractNamesFromNestedArray(nestedArray) {
    return nestedArray.flatMap(innerArray => innerArray.map(item => item.name));
}

// Example usage:
const nestedData = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 }
    ],
    [
        { name: 'Bob', age: 40 }
    ]
];

const namesFromNestedArray = extractNamesFromNestedArray(nestedData);
console.log(namesFromNestedArray); // Output: ['John', 'Jane', 'Bob']