
import ChartComponent from "@/_components/Chart";
import CustomTooltip from "@/_components/CustomTooltip";
import RelatedTopics from "@/_components/RelatedTopics";
import { cardsData } from "@/_utils/data";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Topic = () => {
    const router = useRouter();
    const { cardId } = router.query;
    const topic = cardsData.find((card) => card.id === cardId);
  return (
    <div>
      <div className="mainBod">
        <div className="grid_bg light_bg">
          <Image src="/static/images/grid-line.svg" alt="grid-line" width={1200} height={1200}/>
        </div>
        <div className="basicPageContainer padContainerBottom padContainerTop">
          <div className="narrowPageInnerContainer ">
            <div className="breadcrumbsContainer">
              <a className="breadcrumbsBackItem">Trends Database</a>
              <div className="breadcrumbsSlash">/</div>
              <div className="breadcrumbsCurrentItem">{topic && topic.label}</div>
            </div>
            <div className="trendTopicHead groupButtons ">
              <div className="trendHeaderContainer">
                <div className="trendTitleContainer">
                  <h1 className="trendTitle" style={{ display: "flex" }}>
                    {topic ? topic.label : ''}
                  </h1>
                </div>
                <div className="trendActionContainer " />
              </div>
              <div className="trendBriefDescription">
                {topic ? topic.description : ''}
              </div>
            </div>
            <div className="trendPageTiles ">
              <div className="trendPageTileSectionContainer  nonProChartToggle">
                <div>
                  <div className="topicScoresAndPeriodSelectorContainer  nonProChartToggle ">
                    <div className="chartToggleWrap">
                      <div className="trendPagePeriodSelectorContainer">
                        <div className="btn-group">
                          <button
                            type="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                            className="dropdownFilterButton dropdown-toggle btn btn-link btn-sm"
                          >
                            <span className="dropdownFilterButtonText">
                              5 years
                            </span>
                            <svg
                              style={{ marginLeft: 14 }}
                              width={14}
                              height={8}
                              viewBox="0 0 14 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 1L7 7L13 1"
                                stroke="#A0A2AF"
                                strokeLinecap="round"
                              ></path>
                            </svg>
                          </button>
                          <div
                            tabIndex={-1}
                            role="menu"
                            aria-hidden="true"
                            className="topicPageTimeframeDropdown dropdown-menu"
                          >
                            <div>
                              <div className="projection_tooltip">
                                Future Forecast
                                <span>
                                  <div
                                    className="mr-1"
                                    id="Tooltip-futureProjection"
                                  >
                                    <svg
                                      className="scoreQuestionIcon"
                                      id="TooltipfutureProjection"
                                      width={12}
                                      height={12}
                                      viewBox="0 0 12 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM5.27241 7.43881V7.72441H6.46581V7.44901C6.46581 7.23141 6.50661 7.03421 6.58821 6.85741C6.67661 6.68061 6.78201 6.53781 6.90441 6.42901C7.03361 6.31341 7.16961 6.18761 7.31241 6.05161C7.46201 5.91561 7.59801 5.78641 7.72041 5.66401C7.84961 5.53481 7.95501 5.36481 8.03661 5.15401C8.12501 4.94321 8.16921 4.70521 8.16921 4.44001C8.16921 3.84161 7.97541 3.35201 7.58781 2.97121C7.20701 2.59041 6.66981 2.40001 5.97621 2.40001C5.26221 2.40001 4.68761 2.61761 4.25241 3.05281C3.81721 3.48121 3.59961 4.07281 3.59961 4.82761H4.79301C4.79301 4.41961 4.89501 4.10341 5.09901 3.87901C5.30981 3.64781 5.60221 3.53221 5.97621 3.53221C6.28901 3.53221 6.53381 3.61721 6.71061 3.78721C6.88741 3.95721 6.97581 4.17481 6.97581 4.44001C6.97581 4.61681 6.93161 4.78341 6.84321 4.93981C6.76161 5.08941 6.65621 5.21521 6.52701 5.31721C6.40461 5.41241 6.26861 5.52801 6.11901 5.66401C5.97621 5.79321 5.84021 5.92921 5.71101 6.07201C5.58861 6.20801 5.48321 6.39501 5.39481 6.63301C5.31321 6.87101 5.27241 7.13961 5.27241 7.43881ZM5.87421 9.78481C6.10541 9.78481 6.29921 9.71001 6.45561 9.56041C6.61201 9.40401 6.69021 9.21361 6.69021 8.98921C6.69021 8.77161 6.61201 8.58461 6.45561 8.42821C6.29921 8.27181 6.10541 8.19361 5.87421 8.19361C5.64301 8.19361 5.44921 8.27181 5.29281 8.42821C5.13641 8.57781 5.05821 8.76481 5.05821 8.98921C5.05821 9.21361 5.13641 9.40401 5.29281 9.56041C5.44921 9.71001 5.64301 9.78481 5.87421 9.78481Z"
                                        fill="#828282"
                                      />
                                    </svg>
                                  </div>
                                </span>
                              </div>
                              <div className="filterItemWithProjection freeToProItems">
                                <button
                                  type="button"
                                  tabIndex={0}
                                  className="dropdown-item"
                                >
                                  1 year
                                </button>
                                <svg
                                  width={32}
                                  height={20}
                                  viewBox="0 0 32 20"
                                  fill="none"
                                >
                                  <rect
                                    width={32}
                                    height={20}
                                    rx={2}
                                    fill="url(#paint0_linear_1492_90)"
                                  />
                                  <path
                                    d="M6.16074 13.5V6.3H9.13574C9.20574 6.3 9.29574 6.30333 9.40574 6.31C9.51574 6.31333 9.61741 6.32333 9.71074 6.34C10.1274 6.40333 10.4707 6.54167 10.7407 6.755C11.0141 6.96833 11.2157 7.23833 11.3457 7.565C11.4791 7.88833 11.5457 8.24833 11.5457 8.645C11.5457 9.03833 11.4791 9.39833 11.3457 9.725C11.2124 10.0483 11.0091 10.3167 10.7357 10.53C10.4657 10.7433 10.1241 10.8817 9.71074 10.945C9.61741 10.9583 9.51408 10.9683 9.40074 10.975C9.29074 10.9817 9.20241 10.985 9.13574 10.985H7.36574V13.5H6.16074ZM7.36574 9.86H9.08574C9.15241 9.86 9.22741 9.85667 9.31074 9.85C9.39408 9.84333 9.47074 9.83 9.54074 9.81C9.74074 9.76 9.89741 9.67167 10.0107 9.545C10.1274 9.41833 10.2091 9.275 10.2557 9.115C10.3057 8.955 10.3307 8.79833 10.3307 8.645C10.3307 8.49167 10.3057 8.335 10.2557 8.175C10.2091 8.01167 10.1274 7.86667 10.0107 7.74C9.89741 7.61333 9.74074 7.525 9.54074 7.475C9.47074 7.455 9.39408 7.44333 9.31074 7.44C9.22741 7.43333 9.15241 7.43 9.08574 7.43H7.36574V9.86ZM12.8475 13.5V6.3H15.8225C15.8925 6.3 15.9825 6.30333 16.0925 6.31C16.2025 6.31333 16.3041 6.32333 16.3975 6.34C16.8141 6.40333 17.1575 6.54167 17.4275 6.755C17.7008 6.96833 17.9025 7.23833 18.0325 7.565C18.1658 7.88833 18.2325 8.24833 18.2325 8.645C18.2325 9.23167 18.0841 9.73667 17.7875 10.16C17.4908 10.58 17.0358 10.84 16.4225 10.94L15.9075 10.985H14.0525V13.5H12.8475ZM16.9825 13.5L15.5625 10.57L16.7875 10.3L18.3475 13.5H16.9825ZM14.0525 9.86H15.7725C15.8391 9.86 15.9141 9.85667 15.9975 9.85C16.0808 9.84333 16.1575 9.83 16.2275 9.81C16.4275 9.76 16.5841 9.67167 16.6975 9.545C16.8141 9.41833 16.8958 9.275 16.9425 9.115C16.9925 8.955 17.0175 8.79833 17.0175 8.645C17.0175 8.49167 16.9925 8.335 16.9425 8.175C16.8958 8.01167 16.8141 7.86667 16.6975 7.74C16.5841 7.61333 16.4275 7.525 16.2275 7.475C16.1575 7.455 16.0808 7.44333 15.9975 7.44C15.9141 7.43333 15.8391 7.43 15.7725 7.43H14.0525V9.86ZM22.794 13.65C22.074 13.65 21.4574 13.4933 20.944 13.18C20.4307 12.8633 20.0357 12.4233 19.759 11.86C19.4857 11.2967 19.349 10.6433 19.349 9.9C19.349 9.15667 19.4857 8.50333 19.759 7.94C20.0357 7.37667 20.4307 6.93833 20.944 6.625C21.4574 6.30833 22.074 6.15 22.794 6.15C23.514 6.15 24.1307 6.30833 24.644 6.625C25.1607 6.93833 25.5557 7.37667 25.829 7.94C26.1057 8.50333 26.244 9.15667 26.244 9.9C26.244 10.6433 26.1057 11.2967 25.829 11.86C25.5557 12.4233 25.1607 12.8633 24.644 13.18C24.1307 13.4933 23.514 13.65 22.794 13.65ZM22.794 12.515C23.2774 12.5183 23.679 12.4117 23.999 12.195C24.3224 11.9783 24.564 11.6733 24.724 11.28C24.8874 10.8867 24.969 10.4267 24.969 9.9C24.969 9.37333 24.8874 8.91667 24.724 8.53C24.564 8.14 24.3224 7.83667 23.999 7.62C23.679 7.40333 23.2774 7.29167 22.794 7.285C22.3107 7.28167 21.909 7.38833 21.589 7.605C21.269 7.82167 21.0274 8.12667 20.864 8.52C20.704 8.91333 20.624 9.37333 20.624 9.9C20.624 10.4267 20.704 10.885 20.864 11.275C21.024 11.6617 21.264 11.9633 21.584 12.18C21.9074 12.3967 22.3107 12.5083 22.794 12.515Z"
                                    fill="white"
                                  />
                                  <defs>
                                    <linearGradient
                                      id="paint0_linear_1492_90"
                                      x1="1.33739e-08"
                                      y1="0.328947"
                                      x2="17.9775"
                                      y2="29.093"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopColor="#2E5CE5" />
                                      <stop offset={1} stopColor="#348FEB" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </div>
                              <div className="topicPageDivider" />
                            </div>
                            <div className="timeframe_tooltip">
                              Timeframe
                              <span>
                                <div className="mr-1" id="Tooltip-timeframe">
                                  <svg
                                    className="scoreQuestionIcon"
                                    id="Tooltiptimeframe"
                                    width={12}
                                    height={12}
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM5.27241 7.43881V7.72441H6.46581V7.44901C6.46581 7.23141 6.50661 7.03421 6.58821 6.85741C6.67661 6.68061 6.78201 6.53781 6.90441 6.42901C7.03361 6.31341 7.16961 6.18761 7.31241 6.05161C7.46201 5.91561 7.59801 5.78641 7.72041 5.66401C7.84961 5.53481 7.95501 5.36481 8.03661 5.15401C8.12501 4.94321 8.16921 4.70521 8.16921 4.44001C8.16921 3.84161 7.97541 3.35201 7.58781 2.97121C7.20701 2.59041 6.66981 2.40001 5.97621 2.40001C5.26221 2.40001 4.68761 2.61761 4.25241 3.05281C3.81721 3.48121 3.59961 4.07281 3.59961 4.82761H4.79301C4.79301 4.41961 4.89501 4.10341 5.09901 3.87901C5.30981 3.64781 5.60221 3.53221 5.97621 3.53221C6.28901 3.53221 6.53381 3.61721 6.71061 3.78721C6.88741 3.95721 6.97581 4.17481 6.97581 4.44001C6.97581 4.61681 6.93161 4.78341 6.84321 4.93981C6.76161 5.08941 6.65621 5.21521 6.52701 5.31721C6.40461 5.41241 6.26861 5.52801 6.11901 5.66401C5.97621 5.79321 5.84021 5.92921 5.71101 6.07201C5.58861 6.20801 5.48321 6.39501 5.39481 6.63301C5.31321 6.87101 5.27241 7.13961 5.27241 7.43881ZM5.87421 9.78481C6.10541 9.78481 6.29921 9.71001 6.45561 9.56041C6.61201 9.40401 6.69021 9.21361 6.69021 8.98921C6.69021 8.77161 6.61201 8.58461 6.45561 8.42821C6.29921 8.27181 6.10541 8.19361 5.87421 8.19361C5.64301 8.19361 5.44921 8.27181 5.29281 8.42821C5.13641 8.57781 5.05821 8.76481 5.05821 8.98921C5.05821 9.21361 5.13641 9.40401 5.29281 9.56041C5.44921 9.71001 5.64301 9.78481 5.87421 9.78481Z"
                                      fill="#828282"
                                    />
                                  </svg>
                                </div>
                              </span>
                            </div>
                            <div className="filterItemWithProjection freeToProItems">
                              <button
                                type="button"
                                tabIndex={0}
                                className="dropdown-item"
                              >
                                3 months
                              </button>
                              <svg
                                width={32}
                                height={20}
                                viewBox="0 0 32 20"
                                fill="none"
                              >
                                <rect
                                  width={32}
                                  height={20}
                                  rx={2}
                                  fill="url(#paint0_linear_1492_90)"
                                />
                                <path
                                  d="M6.16074 13.5V6.3H9.13574C9.20574 6.3 9.29574 6.30333 9.40574 6.31C9.51574 6.31333 9.61741 6.32333 9.71074 6.34C10.1274 6.40333 10.4707 6.54167 10.7407 6.755C11.0141 6.96833 11.2157 7.23833 11.3457 7.565C11.4791 7.88833 11.5457 8.24833 11.5457 8.645C11.5457 9.03833 11.4791 9.39833 11.3457 9.725C11.2124 10.0483 11.0091 10.3167 10.7357 10.53C10.4657 10.7433 10.1241 10.8817 9.71074 10.945C9.61741 10.9583 9.51408 10.9683 9.40074 10.975C9.29074 10.9817 9.20241 10.985 9.13574 10.985H7.36574V13.5H6.16074ZM7.36574 9.86H9.08574C9.15241 9.86 9.22741 9.85667 9.31074 9.85C9.39408 9.84333 9.47074 9.83 9.54074 9.81C9.74074 9.76 9.89741 9.67167 10.0107 9.545C10.1274 9.41833 10.2091 9.275 10.2557 9.115C10.3057 8.955 10.3307 8.79833 10.3307 8.645C10.3307 8.49167 10.3057 8.335 10.2557 8.175C10.2091 8.01167 10.1274 7.86667 10.0107 7.74C9.89741 7.61333 9.74074 7.525 9.54074 7.475C9.47074 7.455 9.39408 7.44333 9.31074 7.44C9.22741 7.43333 9.15241 7.43 9.08574 7.43H7.36574V9.86ZM12.8475 13.5V6.3H15.8225C15.8925 6.3 15.9825 6.30333 16.0925 6.31C16.2025 6.31333 16.3041 6.32333 16.3975 6.34C16.8141 6.40333 17.1575 6.54167 17.4275 6.755C17.7008 6.96833 17.9025 7.23833 18.0325 7.565C18.1658 7.88833 18.2325 8.24833 18.2325 8.645C18.2325 9.23167 18.0841 9.73667 17.7875 10.16C17.4908 10.58 17.0358 10.84 16.4225 10.94L15.9075 10.985H14.0525V13.5H12.8475ZM16.9825 13.5L15.5625 10.57L16.7875 10.3L18.3475 13.5H16.9825ZM14.0525 9.86H15.7725C15.8391 9.86 15.9141 9.85667 15.9975 9.85C16.0808 9.84333 16.1575 9.83 16.2275 9.81C16.4275 9.76 16.5841 9.67167 16.6975 9.545C16.8141 9.41833 16.8958 9.275 16.9425 9.115C16.9925 8.955 17.0175 8.79833 17.0175 8.645C17.0175 8.49167 16.9925 8.335 16.9425 8.175C16.8958 8.01167 16.8141 7.86667 16.6975 7.74C16.5841 7.61333 16.4275 7.525 16.2275 7.475C16.1575 7.455 16.0808 7.44333 15.9975 7.44C15.9141 7.43333 15.8391 7.43 15.7725 7.43H14.0525V9.86ZM22.794 13.65C22.074 13.65 21.4574 13.4933 20.944 13.18C20.4307 12.8633 20.0357 12.4233 19.759 11.86C19.4857 11.2967 19.349 10.6433 19.349 9.9C19.349 9.15667 19.4857 8.50333 19.759 7.94C20.0357 7.37667 20.4307 6.93833 20.944 6.625C21.4574 6.30833 22.074 6.15 22.794 6.15C23.514 6.15 24.1307 6.30833 24.644 6.625C25.1607 6.93833 25.5557 7.37667 25.829 7.94C26.1057 8.50333 26.244 9.15667 26.244 9.9C26.244 10.6433 26.1057 11.2967 25.829 11.86C25.5557 12.4233 25.1607 12.8633 24.644 13.18C24.1307 13.4933 23.514 13.65 22.794 13.65ZM22.794 12.515C23.2774 12.5183 23.679 12.4117 23.999 12.195C24.3224 11.9783 24.564 11.6733 24.724 11.28C24.8874 10.8867 24.969 10.4267 24.969 9.9C24.969 9.37333 24.8874 8.91667 24.724 8.53C24.564 8.14 24.3224 7.83667 23.999 7.62C23.679 7.40333 23.2774 7.29167 22.794 7.285C22.3107 7.28167 21.909 7.38833 21.589 7.605C21.269 7.82167 21.0274 8.12667 20.864 8.52C20.704 8.91333 20.624 9.37333 20.624 9.9C20.624 10.4267 20.704 10.885 20.864 11.275C21.024 11.6617 21.264 11.9633 21.584 12.18C21.9074 12.3967 22.3107 12.5083 22.794 12.515Z"
                                  fill="white"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_1492_90"
                                    x1="1.33739e-08"
                                    y1="0.328947"
                                    x2="17.9775"
                                    y2="29.093"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#2E5CE5" />
                                    <stop offset={1} stopColor="#348FEB" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                            <div className="filterItemWithProjection freeToProItems">
                              <button
                                type="button"
                                tabIndex={0}
                                className="dropdown-item"
                              >
                                6 months
                              </button>
                              <svg
                                width={32}
                                height={20}
                                viewBox="0 0 32 20"
                                fill="none"
                              >
                                <rect
                                  width={32}
                                  height={20}
                                  rx={2}
                                  fill="url(#paint0_linear_1492_90)"
                                />
                                <path
                                  d="M6.16074 13.5V6.3H9.13574C9.20574 6.3 9.29574 6.30333 9.40574 6.31C9.51574 6.31333 9.61741 6.32333 9.71074 6.34C10.1274 6.40333 10.4707 6.54167 10.7407 6.755C11.0141 6.96833 11.2157 7.23833 11.3457 7.565C11.4791 7.88833 11.5457 8.24833 11.5457 8.645C11.5457 9.03833 11.4791 9.39833 11.3457 9.725C11.2124 10.0483 11.0091 10.3167 10.7357 10.53C10.4657 10.7433 10.1241 10.8817 9.71074 10.945C9.61741 10.9583 9.51408 10.9683 9.40074 10.975C9.29074 10.9817 9.20241 10.985 9.13574 10.985H7.36574V13.5H6.16074ZM7.36574 9.86H9.08574C9.15241 9.86 9.22741 9.85667 9.31074 9.85C9.39408 9.84333 9.47074 9.83 9.54074 9.81C9.74074 9.76 9.89741 9.67167 10.0107 9.545C10.1274 9.41833 10.2091 9.275 10.2557 9.115C10.3057 8.955 10.3307 8.79833 10.3307 8.645C10.3307 8.49167 10.3057 8.335 10.2557 8.175C10.2091 8.01167 10.1274 7.86667 10.0107 7.74C9.89741 7.61333 9.74074 7.525 9.54074 7.475C9.47074 7.455 9.39408 7.44333 9.31074 7.44C9.22741 7.43333 9.15241 7.43 9.08574 7.43H7.36574V9.86ZM12.8475 13.5V6.3H15.8225C15.8925 6.3 15.9825 6.30333 16.0925 6.31C16.2025 6.31333 16.3041 6.32333 16.3975 6.34C16.8141 6.40333 17.1575 6.54167 17.4275 6.755C17.7008 6.96833 17.9025 7.23833 18.0325 7.565C18.1658 7.88833 18.2325 8.24833 18.2325 8.645C18.2325 9.23167 18.0841 9.73667 17.7875 10.16C17.4908 10.58 17.0358 10.84 16.4225 10.94L15.9075 10.985H14.0525V13.5H12.8475ZM16.9825 13.5L15.5625 10.57L16.7875 10.3L18.3475 13.5H16.9825ZM14.0525 9.86H15.7725C15.8391 9.86 15.9141 9.85667 15.9975 9.85C16.0808 9.84333 16.1575 9.83 16.2275 9.81C16.4275 9.76 16.5841 9.67167 16.6975 9.545C16.8141 9.41833 16.8958 9.275 16.9425 9.115C16.9925 8.955 17.0175 8.79833 17.0175 8.645C17.0175 8.49167 16.9925 8.335 16.9425 8.175C16.8958 8.01167 16.8141 7.86667 16.6975 7.74C16.5841 7.61333 16.4275 7.525 16.2275 7.475C16.1575 7.455 16.0808 7.44333 15.9975 7.44C15.9141 7.43333 15.8391 7.43 15.7725 7.43H14.0525V9.86ZM22.794 13.65C22.074 13.65 21.4574 13.4933 20.944 13.18C20.4307 12.8633 20.0357 12.4233 19.759 11.86C19.4857 11.2967 19.349 10.6433 19.349 9.9C19.349 9.15667 19.4857 8.50333 19.759 7.94C20.0357 7.37667 20.4307 6.93833 20.944 6.625C21.4574 6.30833 22.074 6.15 22.794 6.15C23.514 6.15 24.1307 6.30833 24.644 6.625C25.1607 6.93833 25.5557 7.37667 25.829 7.94C26.1057 8.50333 26.244 9.15667 26.244 9.9C26.244 10.6433 26.1057 11.2967 25.829 11.86C25.5557 12.4233 25.1607 12.8633 24.644 13.18C24.1307 13.4933 23.514 13.65 22.794 13.65ZM22.794 12.515C23.2774 12.5183 23.679 12.4117 23.999 12.195C24.3224 11.9783 24.564 11.6733 24.724 11.28C24.8874 10.8867 24.969 10.4267 24.969 9.9C24.969 9.37333 24.8874 8.91667 24.724 8.53C24.564 8.14 24.3224 7.83667 23.999 7.62C23.679 7.40333 23.2774 7.29167 22.794 7.285C22.3107 7.28167 21.909 7.38833 21.589 7.605C21.269 7.82167 21.0274 8.12667 20.864 8.52C20.704 8.91333 20.624 9.37333 20.624 9.9C20.624 10.4267 20.704 10.885 20.864 11.275C21.024 11.6617 21.264 11.9633 21.584 12.18C21.9074 12.3967 22.3107 12.5083 22.794 12.515Z"
                                  fill="white"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_1492_90"
                                    x1="1.33739e-08"
                                    y1="0.328947"
                                    x2="17.9775"
                                    y2="29.093"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#2E5CE5" />
                                    <stop offset={1} stopColor="#348FEB" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                            <div className="filterItemWithProjection freeToProItems">
                              <button
                                type="button"
                                tabIndex={0}
                                className="dropdown-item"
                              >
                                1 year
                              </button>
                              <svg
                                width={32}
                                height={20}
                                viewBox="0 0 32 20"
                                fill="none"
                              >
                                <rect
                                  width={32}
                                  height={20}
                                  rx={2}
                                  fill="url(#paint0_linear_1492_90)"
                                />
                                <path
                                  d="M6.16074 13.5V6.3H9.13574C9.20574 6.3 9.29574 6.30333 9.40574 6.31C9.51574 6.31333 9.61741 6.32333 9.71074 6.34C10.1274 6.40333 10.4707 6.54167 10.7407 6.755C11.0141 6.96833 11.2157 7.23833 11.3457 7.565C11.4791 7.88833 11.5457 8.24833 11.5457 8.645C11.5457 9.03833 11.4791 9.39833 11.3457 9.725C11.2124 10.0483 11.0091 10.3167 10.7357 10.53C10.4657 10.7433 10.1241 10.8817 9.71074 10.945C9.61741 10.9583 9.51408 10.9683 9.40074 10.975C9.29074 10.9817 9.20241 10.985 9.13574 10.985H7.36574V13.5H6.16074ZM7.36574 9.86H9.08574C9.15241 9.86 9.22741 9.85667 9.31074 9.85C9.39408 9.84333 9.47074 9.83 9.54074 9.81C9.74074 9.76 9.89741 9.67167 10.0107 9.545C10.1274 9.41833 10.2091 9.275 10.2557 9.115C10.3057 8.955 10.3307 8.79833 10.3307 8.645C10.3307 8.49167 10.3057 8.335 10.2557 8.175C10.2091 8.01167 10.1274 7.86667 10.0107 7.74C9.89741 7.61333 9.74074 7.525 9.54074 7.475C9.47074 7.455 9.39408 7.44333 9.31074 7.44C9.22741 7.43333 9.15241 7.43 9.08574 7.43H7.36574V9.86ZM12.8475 13.5V6.3H15.8225C15.8925 6.3 15.9825 6.30333 16.0925 6.31C16.2025 6.31333 16.3041 6.32333 16.3975 6.34C16.8141 6.40333 17.1575 6.54167 17.4275 6.755C17.7008 6.96833 17.9025 7.23833 18.0325 7.565C18.1658 7.88833 18.2325 8.24833 18.2325 8.645C18.2325 9.23167 18.0841 9.73667 17.7875 10.16C17.4908 10.58 17.0358 10.84 16.4225 10.94L15.9075 10.985H14.0525V13.5H12.8475ZM16.9825 13.5L15.5625 10.57L16.7875 10.3L18.3475 13.5H16.9825ZM14.0525 9.86H15.7725C15.8391 9.86 15.9141 9.85667 15.9975 9.85C16.0808 9.84333 16.1575 9.83 16.2275 9.81C16.4275 9.76 16.5841 9.67167 16.6975 9.545C16.8141 9.41833 16.8958 9.275 16.9425 9.115C16.9925 8.955 17.0175 8.79833 17.0175 8.645C17.0175 8.49167 16.9925 8.335 16.9425 8.175C16.8958 8.01167 16.8141 7.86667 16.6975 7.74C16.5841 7.61333 16.4275 7.525 16.2275 7.475C16.1575 7.455 16.0808 7.44333 15.9975 7.44C15.9141 7.43333 15.8391 7.43 15.7725 7.43H14.0525V9.86ZM22.794 13.65C22.074 13.65 21.4574 13.4933 20.944 13.18C20.4307 12.8633 20.0357 12.4233 19.759 11.86C19.4857 11.2967 19.349 10.6433 19.349 9.9C19.349 9.15667 19.4857 8.50333 19.759 7.94C20.0357 7.37667 20.4307 6.93833 20.944 6.625C21.4574 6.30833 22.074 6.15 22.794 6.15C23.514 6.15 24.1307 6.30833 24.644 6.625C25.1607 6.93833 25.5557 7.37667 25.829 7.94C26.1057 8.50333 26.244 9.15667 26.244 9.9C26.244 10.6433 26.1057 11.2967 25.829 11.86C25.5557 12.4233 25.1607 12.8633 24.644 13.18C24.1307 13.4933 23.514 13.65 22.794 13.65ZM22.794 12.515C23.2774 12.5183 23.679 12.4117 23.999 12.195C24.3224 11.9783 24.564 11.6733 24.724 11.28C24.8874 10.8867 24.969 10.4267 24.969 9.9C24.969 9.37333 24.8874 8.91667 24.724 8.53C24.564 8.14 24.3224 7.83667 23.999 7.62C23.679 7.40333 23.2774 7.29167 22.794 7.285C22.3107 7.28167 21.909 7.38833 21.589 7.605C21.269 7.82167 21.0274 8.12667 20.864 8.52C20.704 8.91333 20.624 9.37333 20.624 9.9C20.624 10.4267 20.704 10.885 20.864 11.275C21.024 11.6617 21.264 11.9633 21.584 12.18C21.9074 12.3967 22.3107 12.5083 22.794 12.515Z"
                                  fill="white"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_1492_90"
                                    x1="1.33739e-08"
                                    y1="0.328947"
                                    x2="17.9775"
                                    y2="29.093"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#2E5CE5" />
                                    <stop offset={1} stopColor="#348FEB" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                            <button
                              type="button"
                              tabIndex={0}
                              className="filterItemWithProjection dropdown-item"
                            >
                              2 years
                            </button>
                            <button
                              type="button"
                              tabIndex={0}
                              className="filterItemWithProjection filterItemWithProjectionActive dropdown-item"
                            >
                              5 years
                            </button>
                            <button
                              type="button"
                              tabIndex={0}
                              className="filterItemWithProjection dropdown-item"
                            >
                              10 years
                            </button>
                            <button
                              type="button"
                              tabIndex={0}
                              className="filterItemWithProjection dropdown-item"
                            >
                              15 years
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="chartForecastToggle ">
                        <div className="customToggleWrapper">
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
                              style={{marginTop:3}}
                              id="Tooltip-tooltipToggleButtons"
                            >
                             <CustomTooltip text="Forecast predicts the growth of this trend over the next 12 months. Our forecasting uses a deep machine learning model trained on millions of data points."/>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="topicPageTrendScoresContainer  nonProChartToggle">
                      <div className="scoresContainer">
                        <div className="scoresInnerContainer">
                          <div className="scoreTag scoreTag--volume">
                            <div className="scoreTagTop">{topic ? topic.volume : ''}</div>
                            <div className="scoreTagBottom">
                              Volume
                              <CustomTooltip text="Global Google search volume for the previous full month. For example, a topic with 6.6K volume means there were 6,600 searches on Google for that keyword last month." />
                            </div>
                          </div>
                          <div className="scoreTag last">
                            <div className="scoreTagTop growth scoreTagGradient">
                            {topic ? topic.growth : ''}
                            </div>
                            <div className="scoreTagBottom">
                              Growth                                
                              <CustomTooltip text="We use our proprietary trend finding technology to identify trends early on. This data is updated daily. % growth represents growth over the time period selected."/>
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
                  <ChartComponent topic={topic}/>
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
              {/* <div className="topicTileSkeleton ">
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
              </div> */}
              <RelatedTopics />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
