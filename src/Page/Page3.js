import React, {useEffect, useState} from "react";
import '../Style/page3.css'
import {Button, Card, Elevation} from "@blueprintjs/core";
import Footer from "../Component/Footer";
const unirest = require("unirest");

export default function Page3() {

    const [cats, setCats] = useState([])
    // number of page
    const [currentPage, setCurrentPage] = useState(0)
    // number of cats on page
    const [catsOnPage, setCatsOnPage] = useState(12)
    const [currentCats, setCurrentCats] = useState([])

    // getting cats data from api
    useEffect(() => {
        const req = unirest("GET", "https://api.thecatapi.com/v1/breeds");
        req.query({
            "attach_breed": "0"
        });
        req.headers({
            "x-api-key": "DEMO-API-KEY"
        });
        req.end(function (res) {
            if (res.error) throw new Error(res.error);
            let temp = [];
            for (let i = 0; i < res.body.length; i++) {
                try {
                    let tempCat = {
                        name: res.body[i].name,
                        description: res.body[i].description,
                        image: res.body[i].image.url,
                        intelligence: res.body[i].intelligence,
                    }
                    temp.push(tempCat);
                } catch (e) {

                }
            }
            setCats(temp)
        });
    }, [])

    // getting cats from var "cats" to current page
    useEffect(() => {
        while (cats.length === 0){
            const interval = setInterval(()=>console.log('im waiting'),1000)
            return ()=> clearInterval(interval)
        }
        console.log(currentPage);
        let tempCats = [];
        for (let i = 0; i < catsOnPage; i++) {
            if((currentPage * catsOnPage + i)<cats.length) {
                tempCats.push(cats[currentPage * catsOnPage + i])
            } else {
                break
            }
        }
        setCurrentCats(tempCats);
    }, [cats, currentPage])

    // next page
    function next() {
        setCurrentPage(Math.trunc((currentPage + 1) % (cats.length / catsOnPage)))
    }

    // previous page
    function back() {
        if (currentPage === 0)
            setCurrentPage(Math.trunc(cats.length / catsOnPage))
        else setCurrentPage(Math.trunc((currentPage - 1) % (cats.length / catsOnPage)))
    }

    if (currentCats.length === 0) {
        return (<h3>Загружаем котиков...</h3>)
    } else {
        console.log(currentCats)
        return (
            <div>
                <Button className='Back' onClick={back}>Назад!</Button>
                <Button className='Next' onClick={next}>Вперед!</Button>
            <div className='bigCard'>

                {currentCats.map(cat => (
                    <Card className='Page2Card' interactive={true} elevation={Elevation.TWO}>
                        <img className='imgCard' src={cat.image}/>
                        <h4>Breeds: {cat.name}</h4>
                        <p>Description: {cat.description.substring(0, 50)}</p>
                        <p>Intelligence: {cat.intelligence}</p>
                    </Card>
                ))}

            </div>
                <Footer />
            </div>
        )
    }
}