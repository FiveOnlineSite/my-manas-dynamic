import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import { getRequest } from "../api/api";
import { Helmet } from "react-helmet-async";


const News = () => {
  const [data, setData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
      const [meta, setMeta] = useState(null);
  

  const fetchData = async () => {
    const res = await getRequest("/newsEvents");
    if (res.success) {
      setData(res.data);
    } else {
    }
  };
  console.log(data, "uihuyg");

   useEffect(() => {
        const fetchMetaData = async () => {
          const res = await getRequest("/mastermetadata/news");
          if (res.success && res.data.length > 0) {
             console.log("Meta from API:", res.data[0]);
            setMeta(res.data[0]); // assuming the backend returns an array
          }
        };
        fetchMetaData();
      }, []);

  useEffect(() => {
    fetchData();
    // setData((prev) =>
    //   prev.map((item) => ({
    //     ...item,
    //     checked: false,
    //   }))
    // );
  }, []);

  // All news items
  const newsItems = [
    {
      image: "/images/smiling-students-looking-globe.png",
      date: "00.00.00",
      title: "Lorem ipsum dolor sit amet",
    },
    {
      image: "/images/smiling-students-looking-globe.png",
      date: "00.00.01",
      title: "Lorem ipsum dolor sit amet",
    },
    {
      image: "/images/smiling-students-looking-globe.png",
      date: "00.00.02",
      title: "Lorem ipsum dolor sit amet",
    },
    {
      image: "/images/smiling-students-looking-globe.png",
      date: "00.00.03",
      title: "Lorem ipsum dolor sit amet",
    },
    {
      image: "/images/smiling-students-looking-globe.png",
      date: "00.00.04",
      title: "Lorem ipsum dolor sit amet",
    },
    {
      image: "/images/smiling-students-looking-globe.png",
      date: "00.00.05",
      title: "Lorem ipsum dolor sit amet",
    },
    {
      image: "/images/smiling-students-looking-globe.png",
      date: "00.00.06",
      title: "Lorem ipsum dolor sit amet",
    },
    {
      image: "/images/smiling-students-looking-globe.png",
      date: "00.00.07",
      title: "Lorem ipsum dolor sit amet",
    },
    {
      image: "/images/smiling-students-looking-globe.png",
      date: "00.00.08",
      title: "Lorem ipsum dolor sit amet",
    },
    {
      image: "/images/smiling-students-looking-globe.png",
      date: "00.00.09",
      title: "Lorem ipsum dolor sit amet",
    },
    {
      image: "/images/smiling-students-looking-globe.png",
      date: "00.00.10",
      title: "Lorem ipsum dolor sit amet",
    },
    {
      image: "/images/smiling-students-looking-globe.png",
      date: "00.00.11",
      title: "Lorem ipsum dolor sit amet",
    },
    {
      image: "/images/smiling-students-looking-globe.png",
      date: "00.00.12",
      title: "Lorem ipsum dolor sit amet",
    },
    {
      image: "/images/smiling-students-looking-globe.png",
      date: "00.00.13",
      title: "Lorem ipsum dolor sit amet",
    },
  ];

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const showLess = () => {
    setVisibleCount(6);
  };
const getRelativeTime = (dateString) => {
  const now = new Date();
  const past = new Date(dateString);
  const diffInSeconds = Math.floor((now - past) / 1000);

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  if (diffInSeconds < 60) return rtf.format(-diffInSeconds, "second");
  if (diffInSeconds < 3600)
    return rtf.format(-Math.floor(diffInSeconds / 60), "minute");
  if (diffInSeconds < 86400)
    return rtf.format(-Math.floor(diffInSeconds / 3600), "hour");

  return rtf.format(-Math.floor(diffInSeconds / 86400), "day");
};

  return (
    <>
     {meta?.metaTitle && (
                <Helmet>
                  <title>{meta.metaTitle}</title>
                  <meta name="description" content={meta.metaDescription} />
                  <meta name="keywords" content={meta.metaKeywords} />
                </Helmet>
              )}
    <Layout>
     {data.length > 0 && (
  <section className='lastest-news'>
    <div className='container'>
      {data.slice(0, visibleCount).map((item, index) => (
        <div className='row mb-5' key={item._id || index}>
          <div className='col-lg-4'>
<NavLink to={`/news-detail/${item.pageUrl}`}>
              <img
                src={item.image?.url}
                alt={item.image?.altText || `news-${index}`}
                className='w-100'
              />
            </NavLink>
          </div>
          <div className='col-lg-6 ps-lg-5 ps-auto'>
            <div className='latest-news-content'>
              <div className='latest-news-time-div'>
                <h6>
                  {item?.type?.charAt(0).toUpperCase() +
                    item?.type?.slice(1).toLowerCase()}
                </h6>
                <span></span>
               { console.log("item?.createdAt",item?.createdAt)}
                <p>{getRelativeTime(item?.createdAt)}</p>
              </div>
<NavLink to={`/news-detail/${item.pageUrl}`}>
                <div className='latest-news-title'>
                  <h2>{item.title}</h2>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      ))}

      {data.length > visibleCount && (
        <div className='show-more-div'>
          <button onClick={showMore} className='show-more'>
            Show more
          </button>
        </div>
      )}

      {data.length > 6 && visibleCount >= data.length && (
        <div className='show-more-div'>
          <button onClick={showLess} className='show-more'>
            Show Less
          </button>
        </div>
      )}
    </div>
  </section>
)}


      {/* 
      <section className="news-tabs-section">
        <div className="container">
          <div className="row">
            {newsItems.slice(0, visibleCount).map((item, index) => (
              <div className="col-lg-4">
                <NavLink to="/news-detail">
                  <div className="news-tab-div">
                    <img
                      src={item.image}
                      alt={`news-${index}`}
                      className="w-100 my-4"
                    />
                    <p>{item.date}</p>
                    <h5 className="py-3">{item.title}</h5>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>

          <div className="show-more-div">
            {visibleCount < newsItems.length ? (
              <button onClick={showMore} className="show-more">
                Show more
              </button>
            ) : (
              <button onClick={showLess} className="show-more">
                Show Less
              </button>
            )}
          </div>
        </div>
      </section> */}
    </Layout>
        </>

  );
};

export default News;
