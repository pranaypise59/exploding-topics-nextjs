/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect } from "react";
import Link from "next/link";
import ChartPreview from "./PreviewChart";
import { useData } from "@/contexts/DataContext";
import { calculatePercentageGrowth, getVolumeFromData } from "@/_utils/helpers";

const RelatedTopics = ({ selectedTimeFrame, globalData }) => {
useEffect(() => {
  
}, [globalData])
  if (globalData?.length == 0) {
    return (
      <div className="topicTileSkeleton ">
        <div className="tile_skeleton project_tileSkeleton w_full">
          <div className="pro_tile_row">
            <div className="pro_tile_row_left">
              <div className="skeleton_line sk_thick" />
            </div>
          </div>
          <div className="pro_tile_row">
            <div className="pro_tile_row_left">
              <div className="skeleton_line sk_thick" />
            </div>
            <div className="pro_tile_row_right">
              <div>
                <div className="skeleton_line sk_thin" />
                <div className="skeleton_line sk_medium" />
              </div>
            </div>
          </div>
          <div className="pro_tile_row">
            <div className="pro_tile_row_left">
              <div className="skeleton_line sk_thick" />
            </div>
            <div className="pro_tile_row_right">
              <div>
                <div className="skeleton_line sk_thin" />
                <div className="skeleton_line sk_medium" />
              </div>
            </div>
          </div>
          <div className="pro_tile_row">
            <div className="pro_tile_row_left">
              <div className="skeleton_line sk_thick" />
            </div>
            <div className="pro_tile_row_right">
              <div>
                <div className="skeleton_line sk_thin" />
                <div className="skeleton_line sk_medium" />
              </div>
            </div>
          </div>
          <div className="pro_tile_row">
            <div className="pro_tile_row_left">
              <div className="skeleton_line sk_thick" />
            </div>
            <div className="pro_tile_row_right">
              <div>
                <div className="skeleton_line sk_thin" />
                <div className="skeleton_line sk_medium" />
              </div>
            </div>
          </div>
          <div className="pro_tile_row">
            <div className="pro_tile_row_left">
              <div className="skeleton_line sk_thick" />
            </div>
            <div className="pro_tile_row_right">
              <div>
                <div className="skeleton_line sk_thin" />
                <div className="skeleton_line sk_medium" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="trendPageTileSectionContainer related ">
        <div className="topicPageSubheader">Related Topics</div>
        <div className="topicPageDivider" />
        {globalData?.slice(0, 5).map((data) => (
          <div key={data.keyword_name}>
            <div>
              <Link
                className="wideShortTopicContainer"
                href={`/topic/${data._id}`}
              >
                <div className="wideShortTopicContainer">
                  <div className="wideShortTopicKeyword">
                    {data.keyword_name}
                  </div>
                  <div class Name="wideShortChartJsContainer">
                    <div className="chartjs-size-monitor">
                      <div className="chartjs-size-monitor-expand">
                        <div className="" />
                      </div>
                      <div className="chartjs-size-monitor-shrink">
                        <div className="" />
                      </div>
                    </div>
                    <ChartPreview
                      id={data._id}
                      isSmall={true}
                      trend_data={data.trend_data}
                      selectedTimeFrame={selectedTimeFrame}
                    />
                  </div>
                  <div className="trendScoresContainer">
                    <div className="scoresContainer">
                      <div className="scoresInnerContainer relatedScoresInnerContainer">
                        <div className="scoreTag">
                          <div className="scoreTagTop growth scoreTagGradient relatedTopicScoreTagTop">
                            {data.trend_data.length > 0 &&
                              calculatePercentageGrowth(
                                data.trend_data,
                                selectedTimeFrame
                              )}
                            %
                          </div>
                          <div className="scoreTagBottom relatedTopicScoreTagBottom">
                            Growth
                          </div>
                        </div>
                        <div className="scoreTag last">
                          <div className="scoreTagTop relatedTopicScoreTagTop">
                            {getVolumeFromData(data.trend_data)}
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
        ))}
      </div>
    </>
  );
};

export default RelatedTopics;
