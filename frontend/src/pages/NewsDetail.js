import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getRequest } from "../api/api";

const NewsDetail = () => {
  const [visibleCount, setVisibleCount] = useState(2);
  const [data, setData] = useState([]);
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

  const relatedNewsItems = [
    {
      image: "/images/smiling-students-looking-globe.png",
      date: "00.00.00",
      title: (
        <p>
          <div
            dangerouslySetInnerHTML={{
              __html: data?.metaDescription,
            }}
          />
        </p>
      ),
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
  ];

  const showAll = () => {
    setVisibleCount(relatedNewsItems.length);
  };

  const showLess = () => {
    setVisibleCount(2);
  };

  return (
    <Layout>
      <section className='news-detail-banner'>
        <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='col-lg-5'>
              <div className='news-detail-img'>
                <img
                  src={data?.image?.url}
                  alt={data?.image?.altText}
                  className='news-detail-banner-img'
                />
              </div>
            </div>

            <div className='col-lg-7 news-detail-banner-section'>
              <div className='news-detail-content'>
                <div className='news-detail-content-subsection d-flex align-items-baseline'>
                  <h4>{data?.type?.toUpperCase()}</h4> <span></span>{" "}
                  <h6>
                    {data?.uploadDate
                      ? new Date(data.uploadDate)
                          .toLocaleDateString("en-GB")
                          .replace(/\//g, ".")
                      : "-"}
                  </h6>{" "}
                </div>
                <h1 className='section-title news-detail-title'>
                  {data?.title}
                </h1>

                <p className='paragraph bridge-para text-justify'>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.excerpt,
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='news-video-section'>
        <div className='container'>
          <video
            src='/videos/05 - Ram Mandir.mp4'
            controls
            className='w-100'
          ></video>
        </div>
      </section>

      {/* <section className="new-detail-para">
        <div className="container">
          <p className="paragraph bridge-para text-justify">
            Lorem ipsum dolor sit amet. In assumenda molestiae sit molestiae
            exercitationem quo dolorum dolores. 33 dolores sunt 33 consequatur
            rerum quo atque natus ut ratione ratione est minus mollitia 33 dicta
            voluptatem.
          </p>

          <p className="paragraph bridge-para text-justify">
            Qui ipsum error ut voluptates aliquid ab aperiam voluptate aut fuga
            dolores qui incidunt dolorem? Eum excepturi eveniet aut sint magni
            ex optio galisum. Id laudantium dolorem id eveniet temporibus ut
            velit aspernatur? Est omnis consectetur sit minima rerum et
            architecto odio et explicabo incidunt Cum libero temporibus id velit
            beatae sit culpa unde hic aspernatur maiores et enim fugit. Aut
            sequi illum ex repudiandae atque aut asperiores dolorem et beatae
            sunt et rerum possimus rem culpa quasi. Hic voluptas deserunt et
            iste ullam et nisi quia et repellat nisi vel omnis quia.
          </p>

          <p className="paragraph bridge-para text-justify">
            Lorem ipsum dolor sit amet. In assumenda molestiae sit molestiae
            exercitationem quo dolorum dolores. 33 dolores sunt 33 consequatur
            rerum quo atque natus ut ratione ratione est minus mollitia 33 dicta
            voluptatem.
          </p>

          <p className="paragraph bridge-para text-justify">
            Qui ipsum error ut voluptates aliquid ab aperiam voluptate aut fuga
            dolores qui incidunt dolorem? Eum excepturi eveniet aut sint magni
            ex optio galisum. Id laudantium dolorem id eveniet temporibus ut
            velit aspernatur? Est omnis consectetur sit minima rerum et
            architecto odio et explicabo incidunt.
          </p>

          <p className="paragraph bridge-para text-justify">
            Cum libero temporibus id velit beatae sit culpa unde hic aspernatur
            maiores et enim fugit. Aut sequi illum ex repudiandae atque aut
            asperiores dolorem et beatae sunt et rerum possimus rem culpa quasi.
            Hic voluptas deserunt et iste ullam et nisi quia et repellat nisi
            vel omnis quia. Lorem ipsum dolor sit amet. In assumenda molestiae
            sit molestiae exercitationem quo dolorum dolores. 33 dolores sunt 33
            consequatur rerum quo atque natus ut ratione ratione est minus
            mollitia 33 dicta voluptatem.
          </p>

          <p className="paragraph bridge-para text-justify">
            Qui ipsum error ut voluptates aliquid ab aperiam voluptate aut fuga
            dolores qui incidunt dolorem? Eum excepturi eveniet aut sint magni
            ex optio galisum. Id laudantium dolorem id eveniet temporibus ut
            velit aspernatur? Est omnis consectetur sit minima rerum et
            architecto odio et explicabo incidunt.
          </p>

          <p className="paragraph bridge-para text-justify">
            Cum libero temporibus id velit beatae sit culpa unde hic aspernatur
            maiores et enim fugit. Aut sequi illum ex repudiandae atque aut
            asperiores dolorem et beatae sunt et rerum possimus rem culpa quasi.
            Hic voluptas deserunt et iste ullam et nisi quia et repellat nisi
            vel omnis quia.
          </p>
        </div>
      </section> */}

      <section className='related-news-sections'>
        <div className='container'>
          <div className='row align-items-center mb-5'>
            <div className='col-lg-6'>
              <h2 className='section-title'>{data?.metaTitle}</h2>
            </div>
            <div className='col-lg-6 d-flex justify-content-lg-end justify-content-start'>
              {/* <h5 className="see-all-btn"> */}
              {/* See all */}
              {visibleCount < relatedNewsItems.length ? (
                <button onClick={showAll} className='see-all-btn'>
                  See all
                </button>
              ) : (
                <button onClick={showLess} className='see-all-btn'>
                  See less
                </button>
              )}
              {/* </h5> */}
            </div>
          </div>

          <div className='row'>
            {relatedNewsItems.slice(0, visibleCount).map((item, index) => (
              <div className='col-lg-6 mb-5'>
                <div className='row related-news align-items-center'>
                  <div className='col-lg-7'>
                    <img
                      src={item.image}
                      alt={`news-${index}`}
                      className='w-100'
                    />
                  </div>
                  <div className='col-lg-5'>
                    <div className='related-news-content mt-lg-0 mt-4'>
                      <div className='related-news-time'>
                        <h5>NEWS</h5>
                        <span></span>
                        <h6>{item.date}</h6>
                      </div>
                      <p>{item.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsDetail;
