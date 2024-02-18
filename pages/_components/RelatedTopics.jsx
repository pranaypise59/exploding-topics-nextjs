/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { ChartPreview } from "./PreviewChart";
import { generateRandomArray } from "../_utils/helpers";
import { cardsData } from "../_utils/data";
import Link from "next/link";

const RelatedTopics = () => {
  return (
    <>
      <div className="trendPageTileSectionContainer related ">
        <div className="topicPageSubheader">Related Topics</div>
        <div className="topicPageDivider" />
        {
            cardsData.slice(0, 5).map((data) => (
                <div key={data.label}>
                <div>
                  <Link className="wideShortTopicContainer" href={`/topic/${data.id}`}>
                    <div className="wideShortTopicContainer">
                      <div className="wideShortTopicKeyword">{data.label}</div>
                      <div class Name="wideShortChartJsContainer">
                        <div className="chartjs-size-monitor">
                          <div className="chartjs-size-monitor-expand">
                            <div className="" />
                          </div>
                          <div className="chartjs-size-monitor-shrink">
                            <div className="" />
                          </div>
                        </div>
                        <ChartPreview chartValues={generateRandomArray(100, 500)} id={data.id} isSmall={true}/>
                      </div>
                      <div className="trendScoresContainer">
                        <div className="scoresContainer">
                          <div className="scoresInnerContainer relatedScoresInnerContainer">
                            <div className="scoreTag">
                              <div className="scoreTagTop growth scoreTagGradient relatedTopicScoreTagTop">
                                {data.growth}
                              </div>
                              <div className="scoreTagBottom relatedTopicScoreTagBottom">
                                Growth
                              </div>
                            </div>
                            <div className="scoreTag last">
                              <div className="scoreTagTop relatedTopicScoreTagTop">
                                {data.volume}
                              </div>
                              <div className="scoreTagBottom relatedTopicScoreTagBottom">
                                Volume
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="topicPageDivider" />
              </div>
            ))
        }

      </div>
    </>
  );
};

export default RelatedTopics;
