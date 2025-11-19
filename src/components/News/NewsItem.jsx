const NewsItem = ({ item }) => {
  return (
    <div
      className="col-lg-4 col-md-6 col-sm-12 news-block"
      data-wow-duration="1500ms"
    >
      <div className="news-block-one wow fadeInUp animated">
        <div className="inner-box">
          <figure className="image-box">
            <a href={'news-detail/' + item._id}>
              <img
                src={item.image}
                alt={item.title}
              />
            </a>
          </figure>
          <div className="lower-content">
            <h3>
              <a href={'news-detail/' + item._id}>{item.title}</a>
            </h3>
            <p>{item.description}</p>
            <div className="link">
              <a href={'news-detail/' + item._id}>
                <i className="fas fa-arrow-right"></i>
                <span>Haberi Oku</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
