import { useState } from 'react';
import dateFormat from "dateformat";
import { useEffect } from "react";
import {
    NewsSection, HeroTitle, NewsList, NewsSearchForm, GoBackBtn, GoBackBtnSvg, SearchNewsWrapper, SearchInputNews, SearchInputClearBtn, SearchInputSubmitButton, NewsCardContainer, NewsCardTopLine, NewsCardImage, NewsCardContentWrapper, NewsCardTextWrapper, NewsCardTitle, NewsCardSubTitle, NewsCardFooter,
    NewsCardFooterDate, NewsCardFooterLink, PaginationContainer
} from "./NewsPage.styled";
import sprite from "../../images/symbol-defs.svg";
import axios from "axios";
import { Pagination } from '@mui/material';
import Notiflix from 'notiflix';

  let search = false;

const NewsPage = () => {
const reserveImg = 'https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&dpr=1&w=1000'

  const [newsData, setNewsData] = useState([]);
  const [numOfPages, setNumOfPages] = useState(0);
  const [request, setRequest] = useState("");

    useEffect(() => {
      fetchNews(1);
      // fetchNewsByReqest("Cat", 1)
    }, [])

  const fetchNews = async (page) => {
    try {

      search = false;

      const {data} = await axios.get(`https://happy-pets-rest-api.onrender.com/api/news?page=${page}`);
      
      setNewsData(data.response);
      setNumOfPages(data.totalPageCount);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchNewsByReqest = async (request, page) => {

    const defaultRequest = request.toLowerCase();

    try {
      const { data } = await axios.get(`https://happy-pets-rest-api.onrender.com/api/news/search/${defaultRequest}?page=${page}`);

      if (data.response.length === 0) {
        Notiflix.Notify.failure('Sorry, there are no news matching your search query. Please try again')
        setRequest("")
        fetchNews(1);
      }
      setNewsData(data.response);
      setNumOfPages(data.totalPageCount)

    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e, p) => {

    if (search === true) {
      fetchNewsByReqest(request, p)
    } else {
    fetchNews(p)

    }
  }

  const handleRequestChange = e => {
    setRequest(e.currentTarget.value)
  }

  const goBackBtn = () => {
    fetchNews(1);
    setRequest("")
  }

  const handleSubmit = async e => {
    e.preventDefault();

    e.target[0].value = "";

    console.log(123)

    if (request.trim() === "") {
      return Notiflix.Notify.failure('Sorry, there are no news matching your search query. Please try again')
    }

    search = true;
    
    await fetchNewsByReqest(request, 1);

  }

  const handleClear = e => {
    setRequest("");
    e.target.form[0].value = "";
  }

    return (
        <NewsSection>
            <HeroTitle>News</HeroTitle>
        <NewsSearchForm onSubmit={handleSubmit}>  
          {search && <GoBackBtn type='button' onClick={goBackBtn}>
            <svg width={24} height={24}>
              <GoBackBtnSvg href={sprite + "#ArrowLeft"}></GoBackBtnSvg>
            </svg>
            Back to all news
          </GoBackBtn>}
          <SearchNewsWrapper>
            <SearchInputNews type="text" placeholder="Search" onChange={handleRequestChange} />
              {request.length > 0 && !search && <SearchInputClearBtn type='button' onClick={handleClear}>X</SearchInputClearBtn>}
                <SearchInputSubmitButton type="submit">
                    <svg width={24} height={24}>
                        <use href={sprite + "#search"}>
                        </use>
                    </svg>
            </SearchInputSubmitButton>
            </SearchNewsWrapper>
            </NewsSearchForm>
            <NewsList>
                {newsData.map(({ imgUrl, title, text, date, url, _id }) => (
                <li key={_id}>
                    <NewsCardContainer>
                        <NewsCardTopLine />
                      <NewsCardImage onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src= reserveImg;
                          }} src={imgUrl} alt="newsImg" />
                            <NewsCardContentWrapper>
                                <NewsCardTextWrapper>
                                <NewsCardTitle>{ title }</NewsCardTitle>
                                <NewsCardSubTitle>{text}</NewsCardSubTitle>
                                </NewsCardTextWrapper>
                            <NewsCardFooter>
                                <li>
                                        <NewsCardFooterDate>{dateFormat(date, "dd/mm/yyyy")}</NewsCardFooterDate>
                                </li>
                                <li>
                                    <NewsCardFooterLink href={url} target='_blank'>Read more</NewsCardFooterLink>
                                </li>
                            </NewsCardFooter>
                        </NewsCardContentWrapper>
                    </NewsCardContainer>
                </li>
                ))}
        </NewsList>
        <PaginationContainer>
          <Pagination size='small' count={numOfPages} variant="outlined" color='primary' onChange={handleChange} />
        </PaginationContainer>
        </NewsSection>
    )
}

export default NewsPage;