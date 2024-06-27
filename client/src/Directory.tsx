/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Chapter1 from './components/Chapter1'
import Chapter2 from './components/Chapter2'
import Chapter3 from './components/Chapter3'
import Chapter4 from './components/Chapter4'
import Chapter5 from './components/Chapter5'
import Chapter6 from './components/Chapter6'
import Chapter7 from './components/Chapter7'
import Chapter8 from './components/Chapter8'
import Chapter9 from './components/Chapter9'
import Chapter10 from './components/Chapter10'

interface ChapterProps {
    index: number;
    title: string;
    file: JSX.Element
}

const ChapterList = [
    {
        "index": 1,
        "title": "Introduction to Internet Security",
        "file": <Chapter1 />
    },
    {
        "index": 2,
        "title": "Symmetric Encryption & Message Confidentiality",
        "file": <Chapter2 />
    },
    {
        "index": 3,
        "title": "Public Key Cryptography & Message Authentication",
        "file": <Chapter3 />
    },
    {
        "index": 4,
        "title": "Key Distribution & User Authentication",
        "file": <Chapter4 />
    },
    {
        "index": 5,
        "title": "Electronic Main Security",
        "file": <Chapter5 />
    },
    {
        "index": 6,
        "title": "Transport Level Security",
        "file": <Chapter6 />
    },
    {
        "index": 7,
        "title": "IP Security",
        "file": <Chapter7 />
    },
    {
        "index": 8,
        "title": "Intruders",
        "file": <Chapter8 />
    },
    {
        "index": 9,
        "title": "Firewalls",
        "file": <Chapter9 />
    },
    {
        "index": 10,
        "title": "Malicious Software",
        "file": <Chapter10 />
    }
] as ChapterProps[];


const FindChapter = (index: number) => {
    return ChapterList.find((chapter) => chapter.index === index);
}


export { ChapterList, FindChapter };