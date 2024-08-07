import React from 'react';
import finalList from './finalList';
import LandingPage from './LandingPage';

export default function Game() {
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

    const url = 'https://api.themoviedb.org/3/find/tt0111161?external_source=imdb_id';
    const baseUrl = 'https://image.tmdb.org/t/p/';
    const size = 'w500';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjVhYTlkZDFhOWJhMGY2YzJkYjAwMDhkMzQ2N2UyNCIsIm5iZiI6MTcyMzA1MDg1NS4zMzYwNDMsInN1YiI6IjY2YjNhYWU2MDFlZjcyMTgzMjg4NmMxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fduuq6IiO14nMCbL881iBTY0fziCkF4WPGvjtDsdM_4'
      }
    };

    const rate = {
        color: 'yellow',
    };

    // React.useEffect(() => {
    //     fetch(`https://api.themoviedb.org/3/find/${id1}?external_source=imdb_id`, options)
    //         .then(response => response.json())
    //         .then(response => {
    //             console.log(response)
    //             setImg1(prevState => ({
    //                 ...prevState,
    //                 src1: `${baseUrl}${size}${response.movie_results[0].poster_path}`,
    //                 name1: response.movie_results[0].title
    //             }))
    //         })
    //         .catch(err => {
    //             const i = Math.floor(Math.random() * 250);
    //             setImg1(prevState => ({
    //                 ...prevState,
    //                 id1: finalList.titles[i]
    //             }))
    //             setId1(finalList.titles[i])
    //         });


    //     fetch(`https://api.themoviedb.org/3/find/${id1}?external_source=imdb_id`, options)
    //         .then(response => response.json())
    //         .then(response => {
    //             console.log(response.results["averageRating"])
    //             setImg1(prevState => ({
    //                 ...prevState,
    //                 rating1: response.movie_results[0].vote_average
    //             }))
    //         })
    //         .catch(err => {
    //             const i = Math.floor(Math.random() * 250);
    //             setImg1(prevState => ({
    //                 ...prevState,
    //                 id1: finalList.titles[i]
    //             }))
    //             setId1(finalList.titles[i])
    //         });
    // }, [id1])

    React.useEffect(() => {
        fetch(`https://api.themoviedb.org/3/find/${id1}?external_source=imdb_id`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setImg1(prevState => ({
                    ...prevState,
                    src1: `${baseUrl}${size}${response.movie_results[0].poster_path}`,
                    name1: response.movie_results[0].title
                }))
            })
            .catch(err => {
                setImg1(prevState => ({
                    ...prevState,
                    id1: finalList.titles[i]
                }))
                setId1(finalList.titles[i])
            });
        fetch(`https://api.themoviedb.org/3/find/${id1}?external_source=imdb_id`, options)
            .then(response => response.json())
            .then(response => {
                setImg1(prevState => ({
                    ...prevState,
                    rating1: response.movie_results[0].vote_average
                }))
            })
            .catch(err => {
                setImg1(prevState => ({
                    ...prevState,
                    id1: finalList.titles[i]
                }))
                setId1(finalList.titles[i])
            });
    }, [id1])

    React.useEffect(() => {
        fetch(`https://api.themoviedb.org/3/find/${id2}?external_source=imdb_id`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setImg2(prevState => ({
                    ...prevState,
                    src2: `${baseUrl}${size}${response.movie_results[0].poster_path}`,
                    name2: response.movie_results[0].title
                }))
            })
            .catch(err => {
                setImg2(prevState => ({
                    ...prevState,
                    id2: finalList.titles[i]
                }))
                setId2(finalList.titles[i])
            });
        fetch(`https://api.themoviedb.org/3/find/${id2}?external_source=imdb_id`, options)
            .then(response => response.json())
            .then(response => {
                setImg2(prevState => ({
                    ...prevState,
                    rating2: response.movie_results[0].vote_average
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
        if (img1.rating1 <= img2.rating2) {
            console.log(img1.rating1);
            setScore(score + 1)
            ChangeImgs(2)
        }
        else {
            let topScore = localStorage.getItem('topScore');
            if(topScore !== null) {
                topScore = Math.max(topScore, score);
                localStorage.setItem('topScore', topScore);
            }
            else localStorage.setItem('topScore', score);
            setWin(false)
        }
    }

    function handleButton2(event) {
        if (img1.rating1 > img2.rating2) {
            setScore(score + 1)
            ChangeImgs(1)
        }
        else {
            let topScore = localStorage.getItem('topScore');
            if(topScore !== null) {
                topScore = Math.max(topScore, score);
                localStorage.setItem('topScore', topScore);
            }
            else localStorage.setItem('topScore', score);
            setWin(false)
        }
    }

    // function handleButton3(event) {
    //     if (img1.rating1 === img2.rating2) {
    //         setScore(score + 1)
    //         ChangeImgs(3)
    //     }
    //     else {
    //         setWin(false)
    //     }
    // }

    function ChangeImgs(e) {
        console.log(e)
        
        setImg1(prevState => ({
            ...prevState,
            id1: id2
        }))
        setId1(id2)

        let i = Math.floor(Math.random() * 250);
        
        setImg2(prevState => ({
            ...prevState,
            id2: finalList.titles[i]
        }))
        setId2(finalList.titles[i])

        // if (e === 2) {
        //     setImg2(prevState => ({
        //         ...prevState,
        //         id2: finalList.titles[i]
        //     }))
        //     setId2(finalList.titles[i])
        // }
        // else if (e === 1) {
        //     setImg1(prevState => ({
        //         ...prevState,
        //         id1: finalList.titles[i]
        //     }))
        //     setId1(finalList.titles[i])
        // }
        // else {
        //     let j = Math.floor(Math.random() * 250);
        //     let i = Math.floor(Math.random() * 250);
        //     setImg1(prevState => ({
        //         ...prevState,
        //         id1: finalList.titles[j]
        //     }))
        //     setId1(finalList.titles[j])
        //     setImg2(prevState => ({
        //         ...prevState,
        //         id2: finalList.titles[i]
        //     }))
        //     setId2(finalList.titles[i])
        // }
    }

    function handleRefresh() {
        window.location.reload(false);
    }

    if (win) {
        return (
            <div className='imgs'>
                {/* hi */}
                <div className='leftimg'>
                    <div className='nameMovie'>
                        <h3>"{img1.name1}"</h3> 
                        <p>has an IMdB rating of</p>
                        <h2 style={rate}>{img1.rating1}</h2>
                    </div>
                    <img src={img1.src1} alt={img1.name1} />
                </div>
                <div className='score'>
                    {/* <button onClick={handleButton1} id='b1'>{img1.name1}</button> <br/> <br/> */}
                    <button className="or">OR</button> <br/><br/>
                    {/* <button onClick={handleButton2} id='b1'>{img2.name2}</button> */}
                    <h1>Score : {score}</h1>
                </div>
                <div className='rightimg'>
                    <div className='nameMovie'>
                        <h3>"{img2.name2}"</h3> 
                        <p>has</p>
                        <div className='btns'> 
                            <p id='playy' onClick={handleButton1}>Higher</p> 
                            <p id='playy' onClick={handleButton2}>Lower</p> 
                            <p>rating than {img1.name1}</p>
                        </div>
                    </div>
                    <img src={img2.src2} alt={img2.name2} />
                </div>
            </div>
        )
    }
    else {
        return (
            <LandingPage score={score} />
        )
    }
}