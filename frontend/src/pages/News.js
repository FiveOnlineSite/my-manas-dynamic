import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import { getRequest } from "../api/api";

const News = () => {
  const [data, setData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  const fetchData = async () => {
    const res = await getRequest("/newsEvents");
    if (res.success) {
      setData(res.data[0]);
    } else {
    }
  };
  console.log(data, "uihuyg");

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

  return (
    <Layout>
      <section className='lastest-news'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <NavLink to='/news-detail'>
                <img
                  src='/images/banner/ram-mandir-img.png'
                  alt='news'
                  className='w-100'
                />
              </NavLink>
            </div>
            <div className='col-lg-6 ps-lg-5 ps-auto'>
              <div className='latest-news-content'>
                <div className='latest-news-time-div'>
                  <h6>News</h6> <span></span> <p> 15 minutes ago</p>
                </div>
                <NavLink to='/news-detail'>
                  <div className='latest-news-title'>
                    <h2>Ram Mandir</h2>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
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
  );
};

export default News;
