'use client';
import ChartComponent from "@/_components/Chart";
import CustomTooltip from "@/_components/CustomTooltip";
import ProModal from "@/_components/ProModal";
import RelatedTopics from "@/_components/RelatedTopics";
import TimeFrameSelector from "@/_components/TimeFrameSelector";
import { cardsData } from "@/_utils/data";
import { calculatePercentageGrowth, formatNumberInK } from "@/_utils/helpers";
import { useData } from "@/contexts/DataContext";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Topic = () => {
  const { globalData } = useData();
  const router = useRouter();
  const { cardId } = router.query;
  const topic = cardsData.find((card) => card.id === cardId);

  const [selectedTimeFrame, setSelectedTimeFrame] = useState('5y');
  const [proModalVisible, setProModalVisible] = useState(false);

  useEffect(() => {
    const storedTimeFrame = localStorage.getItem('selectedTimeFrame');
    if(storedTimeFrame) {
      setSelectedTimeFrame(storedTimeFrame);
    }
  }, []); // Empty dependency array to run only once on mount

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = process.env.REACT_APP_API_URL + `/explore/${cardId}`;

        if (window.location.href.includes("localhost")) {
          url = "http://localhost:8010/proxy" + `/explore/${cardId}`;
        }

        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlYTY3MzgxNzFlYzNkODNhZjVkZWQiLCJpYXQiOjE3MDg1MjMxMTksImV4cCI6MTcwOTEyNzkxOX0.GLj0DriHZWnurnewqaF3vSrnhnp06-Qj3fumJcaU39c`,
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();
        setData(result.keyword);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (cardId) {
      fetchData();
    }
  }, [cardId]);
  return (
    <div>
      <Head>
        <title>{data?.keyword_name}</title>
      </Head>
      <div className="mainBod">
        <div className="grid_bg light_bg">
          <Image
            src="/static/images/grid-line.svg"
            alt="grid-line"
            width={1200}
            height={1200}
          />
        </div>
        <div className="basicPageContainer padContainerBottom padContainerTop">
          <div className="narrowPageInnerContainer ">
            <div className="breadcrumbsContainer">
              <a className="breadcrumbsBackItem">Trends Database</a>
              <div className="breadcrumbsSlash">/</div>
              <div className="breadcrumbsCurrentItem">{data?.keyword_name}</div>
            </div>
            <div className="trendTopicHead groupButtons ">
              <div className="trendHeaderContainer">
                <div className="trendTitleContainer">
                  <h1 className="trendTitle" style={{ display: "flex" }}>
                    {data?.keyword_name}
                  </h1>
                </div>
                <div className="trendActionContainer " />
              </div>
              <div className="trendBriefDescription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nemo alias? Totam!
              </div>
            </div>
            <div className="trendPageTiles ">
              {proModalVisible && <div className="freeToProUpsellModal">
                <ProModal setProModalVisible={setProModalVisible}/>
              </div>}
              <div className="trendPageTileSectionContainer  nonProChartToggle">
                <div>
                  <div className="topicScoresAndPeriodSelectorContainer  nonProChartToggle ">
                    <div className="chartToggleWrap">
                     <TimeFrameSelector setProModalVisible={setProModalVisible} selectedTimeFrame={selectedTimeFrame} setSelectedTimeFrame={setSelectedTimeFrame}/>
                      <div className="chartForecastToggle ">
                        <div className="customToggleWrapper" onClick={() => setProModalVisible(true)}>
                          <label className="customToggle">
                            <p>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={14}
                                height={8}
                                viewBox="0 0 14 8"
                                fill="none"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.4246 0H14V5.63333H12.4794V2.62273L7.15746 8L4.11633 4.92728L1.0752 8L0 6.91363L4.11633 2.75453L7.15746 5.82726L11.4042 1.53636H8.4246V0Z"
                                  fill="#2E5CE5"
                                />
                              </svg>
                            </p>
                            <p>Forecast</p>
                            <div className="toggleLable">
                              <input type="" id="forecastToggleBtn" />
                              <span />
                            </div>
                          </label>
                          <span>
                            <div
                              className="mr-1"
                              style={{ marginTop: 6 }}
                              id="Tooltip-tooltipToggleButtons"
                            >
                              <CustomTooltip text="Forecast predicts the growth of this trend over the next 12 months. Our forecasting uses a deep machine learning model trained on millions of data points." />
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="topicPageTrendScoresContainer  nonProChartToggle">
                      <div className="scoresContainer">
                        <div className="scoresInnerContainer">
                          <div className="scoreTag scoreTag--volume">
                            <div className="scoreTagTop">
                              {data?.trend_data?.length > 0 && formatNumberInK(data?.trend_data[data?.trend_data?.length - 1].value)}
                            </div>
                            <div className="scoreTagBottom">
                              Volume
                              <CustomTooltip text="Global Google search volume for the previous full month. For example, a topic with 6.6K volume means there were 6,600 searches on Google for that keyword last month." />
                            </div>
                          </div>
                          <div className="scoreTag last">
                            <div className="scoreTagTop growth scoreTagGradient">
                            {data?.trend_data?.length > 0 && calculatePercentageGrowth(data?.trend_data, selectedTimeFrame)}%
                            </div>
                            <div className="scoreTagBottom">
                              Growth
                              <CustomTooltip text="We use our proprietary trend finding technology to identify trends early on. This data is updated daily. % growth represents growth over the time period selected." />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {/* <div className="tileChartContainer topicPageTileChartContainer">
                    <div className="chartJsContainer">
                      <canvas height={150} width={300} id="canvas" />
                    </div>
                  </div> */}
                  <ChartComponent data={data} selectedTimeFrame={selectedTimeFrame}/>
                </div>
                <div className="tileTagsAndTrackButtonsContainer">
                  <div className="tileTagsContainer null">
                    <div className="tagContainer">
                      <div id="tooltipundefined" className="tileTag">
                        <div className="tileTagInnerContainer">exploding</div>
                      </div>
                    </div>
                  </div>
                  <div className="trackTopicButtonContainer" />
                </div>
              </div>
              <div className="trendPageTileSectionContainer ">
                <div className="topicPageSubheader">Categories</div>
                <div className="topicPageDivider" />
                <div className="categoriesContainer  ">
                  <a className="categoryTag" href="/ai-topics">
                    Artificial Intelligence
                  </a>
                  <a className="categoryTag" href="/technology-topics">
                    Technology
                  </a>
                  <a className="categoryTag" href="/concept-topics">
                    concept
                  </a>
                  <a className="categoryTag" href="/ecommerce-topics">
                    ecommerce
                  </a>
                  <a className="categoryTag" href="/finance-topics">
                    Finance
                  </a>
                </div>
              </div>
              <RelatedTopics selectedTimeFrame={selectedTimeFrame} globalData={globalData}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
