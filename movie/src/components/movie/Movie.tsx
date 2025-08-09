import React, { useEffect, useState, Suspense } from 'react';
import MovieHeader from "./MovieHeader";
import MovieMain from "./MovieMain";
import MovieList from "./MovieList";
import MovieLoader from "./MovieLoader";
import axiosInstant from "../../api/axios";
import { useInView } from "react-intersection-observer";


function Movie() {
    const [nowData, setNowData] = useState([]);
    const [nowLoading, setNowLoading] = useState(false);
    const [nowError, setNowError] = useState(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const { ref } = useInView({
        threshold: 0.5,
        triggerOnce: false, // 무한 스크롤을 위해 false로 설정
        rootMargin: '200px',
        onChange: (inView) => {
            console.log('this is inView:', inView, 'nowLoading:', nowLoading, 'hasMore:', hasMore, 'page:', page);
            if (inView && !nowLoading && hasMore) {
                console.log('Element is in view');
                setPage(prevPage => prevPage + 1);
            }
        }
    });

    const fetchCategories = async () => {
        try {
            setNowLoading(true);
            const response = await axiosInstant.get(`now_playing?page=${page}`);
            const { results, total_pages } = response.data;

            // 페이지가 1일 때는 새로운 데이터를 설정하고, 아니면 기존 데이터에 추가
            setNowData(prev => page === 1 ? results : [...prev, ...results]);

            setHasMore(total_pages > page);
        } catch (e) {
            setNowError(e);
        } finally {
            setNowLoading(false);
        }
    };

    // `page` 상태가 변경될 때마다 데이터를 가져오는 useEffect
    useEffect(() => {
        fetchCategories();
    }, [page]);

    return (
        <>
            <MovieHeader/>
            <MovieMain/>
            {/* 💡 `Suspense`를 사용해 초기 로딩만 처리. 무한 스크롤은 `nowLoading` 상태로 처리. */}
            <Suspense fallback={<MovieLoader />}>
                <MovieList title="Now Playing" movies={nowData} error={nowError}/>
            </Suspense>
            <div ref={ref} style={{ height: '50px' }}>
                {/* 💡 로딩 중일 때 로딩 스피너를 보여줌 */}
                {nowLoading && hasMore && <MovieLoader />}
                {!hasMore && <div>마지막 페이지입니다.</div>}
            </div>
        </>
    );
}

export default Movie;