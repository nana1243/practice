import React, {useEffect, useState} from 'react';
import MovieHeader from "./MovieHeader";
import MovieMain from "./MovieMain";
import MovieList from "./MovieList";
import axiosInstant from "../../api/axios";
import {useInView} from "react-intersection-observer";

function Movie() {
    const [nowData, setNowData] = useState([]);
    const [nowLoading, setNowLoading] = useState(false);
    const [nowError, setNowError] = useState(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const {ref} = useInView({
        threshold: 0.5,
        triggerOnce: false, // 이 부분을 false로 변경
        rootMargin: '200px',
        onChange: (inView) => {
            console.log('this is inView:', inView, 'nowLoading:', nowLoading, 'hasMore:', hasMore, 'page:', page);
            if (inView && !nowLoading && hasMore) {
                console.log('Element is in view');
                setPage(prevPage => prevPage + 1);
            }
        }
    });

    // Fetching now playing movies from the API
    useEffect(()=>{
        const fetchCategories = async () => {
            try{
                setNowLoading(true);
                // 💡 문제 해결: 응답 객체에서 data를 먼저 추출한 뒤, 그 안의 total_pages와 results를 구조 분해
                const response = await axiosInstant.get(`now_playing?page=${page}`);
                const { results, total_pages } = response.data;

                // 💡 초기에 영화 데이터가 없는 경우를 고려하여 조건문 수정
                if (page === 1) {
                    setNowData(results);
                } else {
                    setNowData(prev => [...prev, ...results]);
                }
                setHasMore(total_pages > page);
            }catch (e) {
                setNowError(e);
            }
            finally {
                setNowLoading(false);
            }
        }
        fetchCategories();
    },[page])

    return (
        <>
            <MovieHeader/>
            <MovieMain/>
            <MovieList title="Now Playing" movies={nowData} error={nowError}/>
            <div ref={ref}></div>
        </>
    );
}

export default Movie;