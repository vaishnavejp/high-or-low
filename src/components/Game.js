import React from 'react';
import finalList from './finalList';

export default function Header() {
    const i = Math.floor(Math.random() * 250);
    const j = Math.floor(Math.random() * 250);
    const [img1, setImg1] = React.useState({
        id1: finalList.titles[i],
        src1: "",
        name1: "",
        rating1: 0
    })

    const [img2, setImg2] = React.useState({
        id2: finalList.titles[j],
        src2: "",
        name2: "",
        rating2: 0
    })

    const [id1, setId1] = React.useState(finalList.titles[i])
    const [id2, setId2] = React.useState(finalList.titles[j])
    const [score, setScore] = React.useState(0)
    const [win, setWin] = React.useState(true)

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1882bdad27msh59692b8e77c412ep1c0cd3jsn60c490266dc1',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };

    React.useEffect(() => {
        fetch(`https://moviesdatabase.p.rapidapi.com/titles/${id1}?info=mini_info`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setImg1(prevState => ({
                    ...prevState,
                    src1: response.results.primaryImage["url"],
                    name1: response.results.titleText["text"]
                }))
            })
            .catch(err => {
                const i = Math.floor(Math.random() * 250);
                setImg1(prevState => ({
                    ...prevState,
                    id1: finalList.titles[i]
                }))
                setId1(finalList.titles[i])
            });
        fetch(`https://moviesdatabase.p.rapidapi.com/titles/${id1}/ratings`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response.results["averageRating"])
                setImg1(prevState => ({
                    ...prevState,
                    rating1: response.results["averageRating"]
                }))
            })
            .catch(err => {
                const i = Math.floor(Math.random() * 250);
                setImg1(prevState => ({
                    ...prevState,
                    id1: finalList.titles[i]
                }))
                setId1(finalList.titles[i])
            });
    }, [id1])

    React.useEffect(() => {
        fetch(`https://moviesdatabase.p.rapidapi.com/titles/${id2}?info=mini_info`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setImg2(prevState => ({
                    ...prevState,
                    src2: response.results.primaryImage["url"],
                    name2: response.results.titleText["text"]
                }))
            })
            .catch(err => {
                setImg2(prevState => ({
                    ...prevState,
                    id2: finalList.titles[i]
                }))
                setId2(finalList.titles[i])
            });
        fetch(`https://moviesdatabase.p.rapidapi.com/titles/${id2}/ratings`, options)
            .then(response => response.json())
            .then(response => {
                setImg2(prevState => ({
                    ...prevState,
                    rating2: response.results["averageRating"]
                }))
            })
            .catch(err => {
                setImg2(prevState => ({
                    ...prevState,
                    id2: finalList.titles[i]
                }))
                setId2(finalList.titles[i])
            });
    }, [id2])

    function handleButton1(event) {
        if (img1.rating1 > img2.rating2) {
            setScore(score + 1)
            ChangeImgs(2)
        }
        else {
            setWin(false)
        }
    }

    function handleButton2(event) {
        if (img1.rating1 < img2.rating2) {
            setScore(score + 1)
            ChangeImgs(1)
        }
        else {
            setWin(false)
        }
    }

    function handleButton3(event) {
        if (img1.rating1 === img2.rating2) {
            setScore(score + 1)
            ChangeImgs(3)
        }
        else {
            setWin(false)
        }
    }

    function ChangeImgs(e) {
        console.log(e)
        let i = Math.floor(Math.random() * 250);
        if (e === 2) {
            setImg2(prevState => ({
                ...prevState,
                id2: finalList.titles[i]
            }))
            setId2(finalList.titles[i])
        }
        else if (e === 1) {
            setImg1(prevState => ({
                ...prevState,
                id1: finalList.titles[i]
            }))
            setId1(finalList.titles[i])
        }
        else {
            let j = Math.floor(Math.random() * 250);
            let i = Math.floor(Math.random() * 250);
            setImg1(prevState => ({
                ...prevState,
                id1: finalList.titles[j]
            }))
            setId1(finalList.titles[j])
            setImg2(prevState => ({
                ...prevState,
                id2: finalList.titles[i]
            }))
            setId2(finalList.titles[i])
        }
    }

    function handleRefresh() {
        window.location.reload(false);
    }

    if (win) {
        return (
            <div className='imgs'>
                <div className='leftimg'>
                    <img src={img1.src1} alt={img1.name1} />
                    <button onClick={handleButton1} id='b1'>{img1.name1}</button>
                </div>
                <div className='score'>
                    <h1>Score : {score}</h1>
                    <button className="samebtn" onClick={handleButton3}>OR</button>
                </div>
                <div className='rightimg'>
                    <img src={img2.src2} alt={img2.name2} />
                    <button onClick={handleButton2} id='b1'>{img2.name2}</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='score2'>
                <img src="bg2.png" />
                <div className='scoreCard'>
                    <h1>Final Score : {score}</h1>
                    <button onClick={handleRefresh} className="play">Play Again</button>
                </div>
            </div>
        )
    }
}