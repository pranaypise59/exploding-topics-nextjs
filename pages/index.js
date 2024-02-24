import Link from "next/link";
import CardsContainer from "@/_components/CardsContainer";
import TimeFrameSelector from "@/_components/TimeFrameSelector";
import { useEffect, useState } from "react";
import AllCategoriesSelector from "@/_components/AllCategoriesSelector";

export default function Home() {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('5y');

  useEffect(() => {
    const storedTimeFrame = localStorage.getItem('selectedTimeFrame');
    if(storedTimeFrame) {
      setSelectedTimeFrame(storedTimeFrame);
    }
  }, []); // Empty dependency array to run only once on mount
  return (
    <>
      <div className="container topic_grid_sec c_dark_blue padContainerBottom ">
        <div className="page_head text-center">
          <h2>Discover Exploding Topics</h2>
          <p>We surface rapidly growing topics before they take off.</p>
        </div>
        <div className="sortBar">
          <div className="mobileSelectorDarkBg" />
          <div className="dropdownOnlySelectorsPlusProToggleContainer topicsPagedropdownOnlySelectorsPlusProToggleContainer">
            <div className="dropdownOnlySelectors dropdownOnlySelectorsFilters">
              <div className="sortBarPretext">Filter By:</div>
              <div className="filterDropdownsAddRow freeFilters">
                <div className="filterDropdownsAddInnerRow ">
                  <div
                    className="filterContainer periodFilterContainer 
                freeToProPeriodSelector"
                  >
                    <div className="trendDbPageButtonDropdown btn-group">
                      <TimeFrameSelector selectedTimeFrame={selectedTimeFrame} setSelectedTimeFrame={setSelectedTimeFrame}/>
                    </div>
                  </div>
                  <div className="filterContainer periodFilterContainer">
                    <div className="trendDbPageButtonDropdown btn-group">
                      <AllCategoriesSelector/>
                    </div>
                  </div>
                </div>
                <div className="filterDropdownsAddInnerRow" />
              </div>
              <div className="freeToProInput">
                <svg width={14} height={14} viewBox="0 0 14 14" fill="none">
                  <path
                    d="M9.86401 9.86401C11.864 7.864 11.864 4.62135 9.86401 2.62134C7.864 0.621327 4.62135 0.621327 2.62134 2.62134C0.621328 4.62135 0.621328 7.864 2.62134 9.86401C4.62135 11.864 7.864 11.864 9.86401 9.86401ZM9.86401 9.86401L12.58 12.58"
                    stroke="#A0A2AF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <input placeholder="Search Trends" />
                <div className="freeToProSVG">
                  <svg width={32} height={20} viewBox="0 0 32 20" fill="none">
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
              </div>
            </div>
          </div>
        </div>
        <CardsContainer />
        <div className="pagerAndResultsContainer">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link className="pagerButton" style={{ display: "none" }} href="/">
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="#A3B7EB"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
            <div className="pagerButton selectedPagerButton">1</div>
            <a className="pagerButton" href="/topics?page=2">
              2
            </a>
            <a className="pagerButton" href="/topics?page=3">
              3
            </a>
            <a
              className="pagerButton"
              style={{ display: "flex", marginRight: 0 }}
              href="/topics?page=2"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="#A3B7EB"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
