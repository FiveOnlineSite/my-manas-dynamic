import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getRequest } from "../api/api";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const NewsDetail = () => {
  //  const { id } = useParams();
const { pageUrl } = useParams();
const [relatedNews, setRelatedNews] = useState([]);
      const [meta, setMeta] = useState(null);


  const [visibleCount, setVisibleCount] = useState(2);
  const [data, setData] = useState(null);
  const fetchData = async () => {
  const res = await getRequest(`/newsEvents/page/${pageUrl}`);
  if (res.success) {
    setData(res.data.data); // your backend returns { success: true, data: {...} }
  }
};

//   const fetchData = async () => {
//     const res = await getRequest(`/newsEvents/${id}`);
//     if (res.success) {
// setData(res.data.data);
//     }
//   };
  console.log(data, "uihuyg");

  // useEffect(() => {
  //   fetchData();
  //   // setData((prev) =>
  //   //   prev.map((item) => ({
  //   //     ...item,
  //   //     checked: false,
  //   //   }))
  //   // );
  // }, []);

  // useEffect(() => {
  //   if (id) fetchData();
  // }, [id]);

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
  const fetchCurrentAndRelated = async () => {
    const currentRes = await getRequest(`/newsEvents/page/${pageUrl}`);
    if (currentRes.success) {
      const currentItem = currentRes.data.data;
      setData(currentItem);

      // Fetch all news and filter out the current one
      const allRes = await getRequest("/newsEvents");
      if (allRes.success) {
        const filtered = allRes.data.filter(
          (item) => item.pageUrl !== currentItem.pageUrl
        );
        setRelatedNews(filtered);
      }
    }
  };

  if (pageUrl) fetchCurrentAndRelated();
}, [pageUrl]);


  const relatedNewsItems = [
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
  ];

  const showAll = () => {
    setVisibleCount(relatedNewsItems.length);
  };

  const showLess = () => {
    setVisibleCount(2);
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
      {data && (
  <section className="news-detail-banner">
    <div className="container-fluid">
      <div className="row align-items-center mb-5">
        <div className="col-lg-5">
          <div className="news-detail-img">
            <img
              src={data?.image?.url}
              alt={data?.image?.altText || "News image"}
              className="news-detail-banner-img"
            />
          </div>
        </div>

        <div className="col-lg-7 news-detail-banner-section">
          <div className="news-detail-content">
            <div className="news-detail-content-subsection d-flex align-items-baseline">
              <h4>{data?.type?.toUpperCase()}</h4>
              <span></span>
              <h6>
                {data?.uploadDate
                  ? new Date(data.uploadDate).toLocaleDateString("en-GB").replace(/\//g, ".")
                  : "-"}
              </h6>
            </div>
            <h1 className="section-title news-detail-title">{data?.title}</h1>
            <div
              className="paragraph bridge-para text-justify"
              dangerouslySetInnerHTML={{ __html: data?.content }}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
)}



      {/* <section className='news-video-section'>
        <div className='container'>
          <video
            src='/videos/05 - Ram Mandir.mp4'
            controls
            className='w-100'
          ></video>
        </div>
      </section> */}


      {data?.video?.url && (
  <section className='news-video-section'>
    <div className='container'>
      <video
        src={data.video.url}
        controls
        className='w-100'
        style={{
          borderRadius: "8px",
          backgroundColor: "#000",
        }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  </section>
)}


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
              {/* <h2 className='section-title'>{data?.metaTitle}</h2> */}
              <h2 className='section-title'>Related News</h2>
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
            {relatedNews.slice(0, visibleCount).map((item, index) => (
              <div className='col-lg-6 mb-5' key={item._id}>
  <div className='row related-news align-items-center'>
    <div className='col-lg-7'>
      <img
        src={item.image?.url}
        alt={item.image?.altText || `related-news-${index}`}
        className='w-100'
      />
    </div>
    <div className='col-lg-5'>
      <div className='related-news-content mt-lg-0 mt-4'>
        <div className='related-news-time'>
          <h5>{item.type?.toUpperCase()}</h5>
          <span></span>
          <h6>{new Date(item.uploadDate).toLocaleDateString("en-GB").replace(/\//g, ".")}</h6>
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
    </>
  );
};

export default NewsDetail;
