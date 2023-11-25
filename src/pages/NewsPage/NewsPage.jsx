import { useState } from 'react';
import dateFormat from "dateformat";
import { useEffect } from "react";
import {
    NewsSection, HeroTitle, NewsList, NewsSearchForm, SearchInputNews, SearchInputSubmitButton, NewsCardContainer, NewsCardTopLine, NewsCardImage, NewsCardContentWrapper, NewsCardTextWrapper, NewsCardTitle, NewsCardSubTitle, NewsCardFooter,
    NewsCardFooterDate, NewsCardFooterLink
} from "./NewsPage.styled";
import sprite from "../../images/symbol-defs.svg";
import axios from "axios";
import { Pagination } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";


const NewsPage = () => {
const reserveImg = 'https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&dpr=1&w=1000'

  const [newsData, setNewsData] = useState([]);
  const [numOfPages, setNumOfPages] = useState(0);

    useEffect(() => {
        // const test = data[3].date;
        // const dateObj = dateFormat(test, "dd/mm/yyyy");
      // console.log(dateObj)
      fetchNews(1);
    }, [])
  

  const fetchNews = async (page) => {
    try {
      const {data} = await axios.get(`http://localhost:3001/api/news?page=${page}`);
      
      setNewsData(data.response);
      setNumOfPages(data.totalPageCount);
      // console.log(data[28]);
      // const url = data[86].imgUrl;
      // console.log(url)
      // // fetch(url).then(console.log).catch(error => console.log(error))
      // checkImg(url);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e, p) => {
    fetchNews(p);
  }

  const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-page.Mui-selected": {
      background: "#54ADFF",
      color: "white",
      border: "1px solid #54ADFF"
    }
  }
  }
  ));
  
  const classes = useStyles();

    return (
        <NewsSection>
            <HeroTitle>News</HeroTitle>
            <NewsSearchForm>
                <SearchInputNews type="text" placeholder="Search" />
                <SearchInputSubmitButton>
                    <svg width={24} height={24}>
                        <use href={sprite + "#search"}>
                        </use>
                    </svg>
                </SearchInputSubmitButton>
            </NewsSearchForm>
            <NewsList>
                {newsData.map(({ imgUrl, title, text, date, url, _id }) => (
                <li key={_id}>
                    <NewsCardContainer>
                        <NewsCardTopLine />
                        <NewsCardImage src={imgUrl ? imgUrl : reserveImg} alt="newsImg" />
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
                                    <NewsCardFooterLink href={url}>Read more</NewsCardFooterLink>
                                </li>
                            </NewsCardFooter>
                        </NewsCardContentWrapper>
                    </NewsCardContainer>
                </li>
                ))}
        </NewsList>
        <Pagination classes={{ ul: classes.ul}}  count={numOfPages} variant="outlined" color='primary' onChange={handleChange}/>
        </NewsSection>
    )
}

export default NewsPage;