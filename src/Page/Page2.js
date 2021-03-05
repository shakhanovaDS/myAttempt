import React, {useEffect, useState} from "react";
import '../Style/page2.css'
import {AnchorButton, Button, Card, Elevation} from "@blueprintjs/core";

export default function Page2() {

    const [sortedByComment, setSortedByComment] = useState(true)
    const [sortedByTitle, setSortedByTitle] = useState(true)
    const [images, setImages] = useState([])
    const [posts, setPosts] = useState()
    const [refreshed, setRefreshed] = useState(false)
    const [data, setData] = useState([])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => {
                setImages(json)
            })
        const interval=setInterval(()=>{
            fetch('https://jsonplaceholder.typicode.com/photos')
                .then(response => response.json())
                .then(json => {
                    setImages(json)
                })
        },60000)
        return()=>clearInterval(interval)

    }, [refreshed])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                setPosts(json)
            })
    }, [images])

    useEffect(() => {
        let temp = [];
        for(let i=0; i<5000; i++){
            try {
                let title = posts[getRandomInt(100)].title;
                if (title.length > 30)
                    title = title.substr(0, 30);
                temp.push({
                    imageURL: images[i].thumbnailUrl,
                    imageTitle: images[i].title,
                    post: title,
                })
            } catch (e) {

            }
        }
        setData(temp)
    }, [posts])

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    async function getImages() {
        await fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => {
                setImages(json)
            })
    }

    async function getPosts() {
        await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                setPosts(json)
            })
    }

    function refreshHandler() {
        setRefreshed(!refreshed)
    }

    function sortByTitle(){
         data.sort((a,b)=>{
            if (sortedByTitle) {
                if (a.imageTitle > b.imageTitle)
                    return -1;
                else
                    return 1;
            }
            else if (a.imageTitle < b.imageTitle)
                return -1;
            else
                return 1;
        })
        setSortedByTitle(!sortedByTitle);
    }

    function sortByComment(){
        data.sort((a,b)=>{
            if (sortedByComment) {
                if (a.post > b.post)
                    return -1;
                else
                    return 1;
            }
            else if (a.post < b.post)
                return -1;
            else
                return 1;
        })
        setSortedByComment(!sortedByComment);
    }

    return (
        <div>
            <div className="menu">
                <h2>Sort by</h2>
                <ul>
                    <li>
                        <AnchorButton onClick={sortByTitle} text="Title" />
                    </li>
                    <li>
                        <AnchorButton onClick={sortByComment} text="Comment" />
                    </li>
                </ul>
                <AnchorButton className="refresh-button" onClick={refreshHandler} text="Refresh me!" />
            </div>

            <div className='cards'>
                {data.map((temp) => (
                    <Card className='Page2Card' interactive={true} elevation={Elevation.TWO}>
                        <img className='imgCard' src={temp.imageURL}/>
                        <h4>Title</h4>
                        <h5>{temp.imageTitle}</h5>
                        <p>Comment</p>
                        <p>{temp.post}</p>
                    </Card>
                ))}

            </div>
        </div>
    )
}
