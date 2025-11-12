const NewsItem = ({ item }) => {
  return (
    <div
      className="col-lg-4 col-md-6 col-sm-12 news-block"
      data-wow-delay={item.delay}
      data-wow-duration="1500ms"
    >
      <div className="news-block-one wow fadeInUp animated">
        <div className="inner-box">
          <figure className="image-box">
            <a href={item.link}>
              <img
                src={item.image}
                alt={item.title}
              />
            </a>
          </figure>
          <div className="lower-content">
            <h3>
              <a href={item.link}>{item.title}</a>
            </h3>
            <p>{item.description}</p>
            <div className="link">
              <a href={item.link}>
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
