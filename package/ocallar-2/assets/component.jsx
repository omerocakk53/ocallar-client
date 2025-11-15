
export const Home = () => {
    return (
<>
  <div className="loader-wrap">
    <div className="preloader">
      <div className="preloader-close">Yükleyiciyi Kapat</div>
    </div>
    <div className="layer layer-one">
      <span className="overlay" />
    </div>
    <div className="layer layer-two">
      <span className="overlay" />
    </div>
    <div className="layer layer-three">
      <span className="overlay" />
    </div>
  </div>
  <header className="main-header style-one">
    <div className="header-top">
      <div className="auto-container">
        <div className="top-inner clearfix">
          <ul className="info top-left pull-left">
            <li>
              <i className="fas fa-map-marker-alt" />
              Adres
            </li>
            <li>
              <i className="fas fa-headphones" />
              Telefon <a href="tel:905555555555">0 555 555 55 55</a>
            </li>
          </ul>
          <div className="top-right pull-right">
            <ul className="social-links clearfix">
              <li>
                <a href="index.html">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="index.html">
                  <i className="fab fa-google-plus-g" />
                </a>
              </li>
              <li>
                <a href="index.html">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="index.html">
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
              <li>
                <a href="index.html">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="header-lower">
      <div className="auto-container">
        <div className="outer-box clearfix">
          <div className="logo-box pull-left">
            <figure className="logo">
              <a href="index.html">
                <img src="assets/images/logo.png" alt="" />
              </a>
            </figure>
          </div>
          <div className="menu-area pull-right">
            <div className="mobile-nav-toggler">
              <i className="icon-bar" />
              <i className="icon-bar" />
              <i className="icon-bar" />
            </div>
            <nav className="main-menu navbar-expand-md navbar-light">
              <div
                className="collapse navbar-collapse show clearfix"
                id="navbarSupportedContent"
              >
                <ul className="navigation clearfix">
                  <li>
                    <a href="index.html">Ana Sayfa</a>
                  </li>
                  <li>
                    <a href="#">Ürünlerimiz</a>
                  </li>
                  <li className="dropdown">
                    <a href="index.html">Dağıtım Merkezleri</a>
                    <ul>
                      <li>
                        <a href="#">Devrek Dağıtım Merkezi</a>
                      </li>
                      <li>
                        <a href="#">Düzce Dağıtım Merkezi</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Tedarikçilerimiz</a>
                  </li>
                  <li className="dropdown">
                    <a href="index.html">Kurumsal</a>
                    <ul>
                      <li>
                        <a href="#">İnsan Kaynakları</a>
                      </li>
                      <li>
                        <a href="#">Medya</a>
                      </li>
                      <li>
                        <a href="#">İletişim</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="menu-right-content clearfix">
              <div className="nav-btn nav-toggler navSidebar-button clearfix">
                <i className="fas fa-align-right" />
              </div>
              <div className="btn-box">
                <a href="index.html" className="theme-btn style-one">
                  TEKLİF AL
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="sticky-header">
      <div className="auto-container">
        <div className="outer-box clearfix">
          <div className="logo-box pull-left">
            <figure className="logo">
              <a href="index.html">
                <img src="assets/images/small-logo.png" alt="" />
              </a>
            </figure>
          </div>
          <div className="menu-area pull-right">
            <nav className="main-menu clearfix"></nav>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div className="mobile-menu">
    <div className="menu-backdrop" />
    <div className="close-btn">
      <i className="fas fa-times" />
    </div>
    <nav className="menu-box">
      <div className="nav-logo">
        <a href="index.html">
          <img src="assets/images/mobile-logo.png" alt="" title="" />
        </a>
      </div>
      <div className="menu-outer" />
      <div className="contact-info">
        <h4>Contact Info</h4>
        <ul>
          <li>Chicago 12, Melborne City, USA</li>
          <li>
            <a href="tel:+8801682648101">+88 01682648101</a>
          </li>
          <li>
            <a href="mailto:info@example.com">info@example.com</a>
          </li>
        </ul>
      </div>
      <div className="social-links">
        <ul className="clearfix">
          <li>
            <a href="index.html">
              <span className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="fab fa-facebook-square" />
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="fab fa-pinterest-p" />
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="fab fa-youtube" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <section className="banner-section">
    <div className="banner-carousel owl-theme owl-carousel owl-dots-none">
      <div className="slide-item">
        <div
          className="image-layer"
          style={{ backgroundImage: "url(assets/images/banner/banner-1.jpg)" }}
        />
        <div className="auto-container">
          <div className="content-box">
            <h5>Öcallar Petrol</h5>
            <h1>43 Yıllık Tecrübe ve Deneyimle Yolumuza Devam Ediyoruz</h1>
            <div className="btn-box">
              <a href="index.html" className="theme-btn style-one">
                Hakkımızda
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-item">
        <div
          className="image-layer"
          style={{ backgroundImage: "url(assets/images/banner/banner-2.jpg)" }}
        />
        <div className="auto-container">
          <div className="content-box centred">
            <ul className="list-item clearfix">
              <li>
                <a href="index.html">Öcallar Petrol</a>
              </li>
            </ul>
            <h1>
              Slider <br />
              Alanı 2
            </h1>
            <div className="btn-box">
              <a href="index.html" className="theme-btn style-one mar-0">
                Buton 2
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-item">
        <div
          className="image-layer"
          style={{ backgroundImage: "url(assets/images/banner/banner-3.jpg)" }}
        />
        <div className="auto-container">
          <div className="content-box">
            <h5>Öcallar Petrol</h5>
            <h1>
              Slider <br />
              Alanı 3
            </h1>
            <div className="btn-box">
              <a href="index.html" className="theme-btn style-one mr-10">
                Buton 3
              </a>
              <a href="index.html" className="banner-btn-two">
                Buton 4
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="info-section">
    <div className="auto-container">
      <div className="row clearfix">
        <div className="col-lg-7 col-md-12 col-sm-12 title-column">
          <div className="title-inner">
            <div className="year-box">
              <figure className="image-box">
                <img src="assets/images/icons/year-icon.png" alt="" />
              </figure>
              <h2>43</h2>
              <h3>Öcallar</h3>
            </div>
            <div className="title">
              <h2>
                Yıllık
                <span>
                  <br />
                </span>{" "}
                Tecrübe
              </h2>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12 text-column">
          <div className="text">
            <p>
              Hakkımızda yazısı gelicek. Hakkımızda yazısı gelicek. Hakkımızda
              yazısı gelicek. Hakkımızda yazısı gelicek. Hakkımızda yazısı
              gelicek. Hakkımızda yazısı gelicek. Hakkımızda yazısı gelicek.
              Hakkımızda yazısı gelicek.{" "}
            </p>
            <a href="index.html">
              <i className="fas fa-arrow-right" />
              <span>Hakkımızda</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="feature-section">
    <div className="auto-container">
      <div className="row clearfix">
        <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
          <div
            className="feature-block-one wow fadeInUp animated animated"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            <div className="inner-box">
              <figure className="image-box">
                <img src="assets/images/resource/feature-1.jpg" alt="" />
              </figure>
              <div className="lower-content">
                <div className="inner">
                  <h3>Araba Parçaları</h3>
                  <a href="index.html">
                    <span>İncele</span>
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
          <div
            className="feature-block-one wow fadeInUp animated animated"
            data-wow-delay="300ms"
            data-wow-duration="1500ms"
          >
            <div className="inner-box">
              <figure className="image-box">
                <img src="assets/images/resource/feature-2.jpg" alt="" />
              </figure>
              <div className="lower-content">
                <div className="inner">
                  <h3>Motor Parçaları</h3>
                  <a href="index.html">
                    <span>İncele</span>
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
          <div
            className="feature-block-one wow fadeInUp animated animated"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
          >
            <div className="inner-box">
              <figure className="image-box">
                <img src="assets/images/resource/feature-3.jpg" alt="" />
              </figure>
              <div className="lower-content">
                <div className="inner">
                  <h3>Diğer Parçalar</h3>
                  <a href="index.html">
                    <span>İncele</span>
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="about-section bg-color-1">
    <div className="auto-container">
      <div className="row clearfix">
        <div className="col-lg-6 col-md-12 col-sm-12 video-column">
          <div className="video-inner">
            <figure className="image-box">
              <img src="assets/images/resource/about-1.jpg" alt="" />
            </figure>
            <div className="video-btn">
              <a
                href=""
                className="lightbox-image"
                data-caption=""
                style={{
                  backgroundImage: "url(assets/images/resource/btn-bg.png)"
                }}
              >
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
          <div id="content_block_one">
            <div className="content-box">
              <div className="sec-title left">
                <h5>Öcallar Petrol</h5>
                <h2>Ürün Tanıtımı</h2>
              </div>
              <div className="text">
                <p>
                  Ürün tanıtım yazısı. Ürün tanıtım yazısı. Ürün tanıtım yazısı.
                  Ürün tanıtım yazısı. Ürün tanıtım yazısı. Ürün tanıtım yazısı.
                  Ürün tanıtım yazısı.
                </p>
              </div>
              <div className="inner-box">
                <div className="single-item">
                  <div className="icon-box">
                    <span className="bg-box" />
                    <i className="flaticon-computer-1" />
                  </div>
                  <h4>
                    <a href="index.html">Özellik 1</a>
                  </h4>
                  <p>Açıklama</p>
                </div>
                <div className="single-item">
                  <div className="icon-box">
                    <span className="bg-box" />
                    <i className="flaticon-browser-1" />
                  </div>
                  <h4>
                    <a href="index.html">Özellik 2</a>
                  </h4>
                  <p>Açıklama</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="service-section">
    <div className="auto-container">
      <div className="title-box">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 title-column">
            <div className="sec-title right">
              <h5>Öcallar Petrol</h5>
              <h2>Alanlarımız</h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 text-column">
            <div className="text">
              <p>
                Alanlar ile ilgili açıklama Alanlar ile ilgili açıklama Alanlar
                ile ilgili açıklama Alanlar ile ilgili açıklama{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="inner-content">
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div
              className="service-block-one wow fadeInUp animated animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <h4>
                  <a href="#">Alan 1</a>
                </h4>
                <div className="inner">
                  <div className="icon-box">
                    <i className="flaticon-browser-1" />
                  </div>
                  <p>
                    Açıklaması. Açıklaması. Açıklaması. Açıklaması. Açıklaması.
                    Açıklaması.{" "}
                  </p>
                  <a href="#">
                    <i className="fas fa-arrow-right" />
                    <span>İncele</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div
              className="service-block-one wow fadeInUp animated animated"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <h4>
                  <a href="#">Alan 2</a>
                </h4>
                <div className="inner">
                  <div className="icon-box">
                    <i className="flaticon-browser-1" />
                  </div>
                  <p>
                    Açıklaması. Açıklaması. Açıklaması. Açıklaması. Açıklaması.
                    Açıklaması.{" "}
                  </p>
                  <a href="#">
                    <i className="fas fa-arrow-right" />
                    <span>İncele</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div
              className="service-block-one wow fadeInUp animated animated"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <h4>
                  <a href="#">Alan 3</a>
                </h4>
                <div className="inner">
                  <div className="icon-box">
                    <i className="flaticon-browser-1" />
                  </div>
                  <p>
                    Açıklaması. Açıklaması. Açıklaması. Açıklaması. Açıklaması.
                    Açıklaması.{" "}
                  </p>
                  <a href="#">
                    <i className="fas fa-arrow-right" />
                    <span>İncele</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div
              className="service-block-one wow fadeInUp animated animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <h4>
                  <a href="#">Alan 4</a>
                </h4>
                <div className="inner">
                  <div className="icon-box">
                    <i className="flaticon-browser-1" />
                  </div>
                  <p>
                    Açıklaması. Açıklaması. Açıklaması. Açıklaması. Açıklaması.
                    Açıklaması.{" "}
                  </p>
                  <a href="#">
                    <i className="fas fa-arrow-right" />
                    <span>İncele</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div
              className="service-block-one wow fadeInUp animated animated"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <h4>
                  <a href="#">Alan 5</a>
                </h4>
                <div className="inner">
                  <div className="icon-box">
                    <i className="flaticon-browser-1" />
                  </div>
                  <p>
                    Açıklaması. Açıklaması. Açıklaması. Açıklaması. Açıklaması.
                    Açıklaması.{" "}
                  </p>
                  <a href="#">
                    <i className="fas fa-arrow-right" />
                    <span>İncele</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div
              className="service-block-one wow fadeInUp animated animated"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <h4>
                  <a href="#">Alan 6</a>
                </h4>
                <div className="inner">
                  <div className="icon-box">
                    <i className="flaticon-browser-1" />
                  </div>
                  <p>
                    Açıklaması. Açıklaması. Açıklaması. Açıklaması. Açıklaması.
                    Açıklaması.{" "}
                  </p>
                  <a href="#">
                    <i className="fas fa-arrow-right" />
                    <span>İncele</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="project-section">
    <div className="fluid-container">
      <div className="project-carousel theme-carousel owl-theme owl-carousel owl-dots-none owl-nav-none">
        <div className="project-block-one">
          <div className="inner-box">
            <figure className="image-box">
              <img src="assets/images/gallery/project-1.jpg" alt="" />
            </figure>
            <div className="lower-content">
              <p>Öcallar Petrol</p>
              <h2>
                <a href="index.html">Marka 1</a>
              </h2>
            </div>
          </div>
        </div>
        <div className="project-block-one">
          <div className="inner-box">
            <figure className="image-box">
              <img src="assets/images/gallery/project-1.jpg" alt="" />
            </figure>
            <div className="lower-content">
              <p>Öcallar Petrol</p>
              <h2>
                <a href="index.html">Marka 2</a>
              </h2>
            </div>
          </div>
        </div>
        <div className="project-block-one">
          <div className="inner-box">
            <figure className="image-box">
              <img src="assets/images/gallery/project-1.jpg" alt="" />
            </figure>
            <div className="lower-content">
              <p>Öcallar Petrol</p>
              <h2>
                <a href="index.html">Marka 3</a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="annual-stats">
    <div className="auto-container">
      <div className="row clearfix">
        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
          <div id="content_block_two">
            <div className="content-box">
              <div className="sec-title left">
                <h5>Öcallar Petrol</h5>
                <h2>Ek Alan</h2>
              </div>
              <div className="text">
                <p>
                  Ek Alan açıklaması. Ek Alan açıklaması. Ek Alan açıklaması. Ek
                  Alan açıklaması. Ek Alan açıklaması. Ek Alan açıklaması. Ek
                  Alan açıklaması.{" "}
                </p>
              </div>
              <div className="inner-box clearfix">
                <div className="single-progress-box">
                  <div className="box">
                    <div
                      className="piechart"
                      data-fg-color="#204669"
                      data-value=".75"
                    >
                      <span>.75</span>
                    </div>
                    <h5>Ek Alan 2</h5>
                    <h3>Açıklama</h3>
                  </div>
                </div>
                <div className="single-progress-box">
                  <div className="box">
                    <div
                      className="piechart"
                      data-fg-color="#da2c46"
                      data-value=".25"
                    >
                      <span>.25</span>
                    </div>
                    <h5>Ek Alan 3</h5>
                    <h3>Açıklama</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
          <div id="image_block_one">
            <div className="image-box">
              <div
                className="pattern-layer"
                style={{
                  backgroundImage: "url(assets/images/shape/shape-1.png)"
                }}
              />
              <figure className="image">
                <img src="assets/images/resource/state-1.jpg" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="world-cyber bg-color-1">
    <div
      className="pattern-layer"
      style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}
    />
    <div className="auto-container">
      <div className="sec-title centred">
        <h5>Öcallar Petrol</h5>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  </section>
  <section className="support-section">
    <div className="auto-container">
      <div className="inner-container">
        <div className="row clearfix">
          <div className="col-lg-7 col-md-12 col-sm-12 inner-column">
            <div className="inner-box">
              <div className="sec-title light left">
                <h5>Öcallar Petrol</h5>
                <h2>Bizimle iletişime geçin</h2>
                <p>Aşağıdaki formu doldurarak bizlere ulaşabilirsiniz.</p>
              </div>
              <form action="#" method="post" className="submit-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Adınız Soyadınız"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-Posta Adresiniz"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Telefon"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Mesajınız"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group message-btn">
                  <button type="submit" className="theme-btn style-one">
                    Mesajı Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 info-column">
            <div className="info-inner">
              <figure className="image-box">
                <img src="assets/images/resource/info-1.jpg" alt="" />
              </figure>
              <div className="info-box">
                <figure className="info-logo">
                  <img src="assets/images/icons/info-logo.png" alt="" />
                </figure>
                <div className="icon-box">
                  <i className="fas fa-phone" />
                </div>
                <h2>
                  <a href="tel:905555555555">0 555 555 55 55</a>
                </h2>
                <div className="email">
                  <a href="mailto:support@my-domain.net">
                    iletisim@ocallarpetrol.com
                  </a>
                </div>
                <ul className="list-item clearfix">
                  <li>
                    <a href="index.html">Öcallar Petrol</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    className="testimonial-section"
    style={{
      backgroundImage: "url(assets/images/background/testimonial-bg.jpg)"
    }}
  >
    <div className="auto-container">
      <div className="title-box">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 title-column">
            <div className="sec-title right">
              <h5>Öcallar Petrol</h5>
              <h2>
                Müşteri <br /> Yorumları
              </h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 text-column">
            <div className="text">
              <p>Müşteri yorumlarımızı aşağıdaki bölümden inceleyebilirsiniz</p>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-inner">
        <div className="client-testimonial-carousel owl-carousel owl-theme owl-nav-none owl-dots-none">
          <div className="testimonial-block">
            <div className="text">
              <p>
                Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum
                yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı.
                Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı.{" "}
              </p>
            </div>
          </div>
          <div className="testimonial-block">
            <div className="text">
              <p>
                Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum
                yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı.
                Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı.{" "}
              </p>
            </div>
          </div>
          <div className="testimonial-block">
            <div className="text">
              <p>
                Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum
                yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı.
                Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı.{" "}
              </p>
            </div>
          </div>
          <div className="testimonial-block">
            <div className="text">
              <p>
                Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum
                yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı.
                Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı.{" "}
              </p>
            </div>
          </div>
          <div className="testimonial-block">
            <div className="text">
              <p>
                Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum
                yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı.
                Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı.{" "}
              </p>
            </div>
          </div>
          <div className="testimonial-block">
            <div className="text">
              <p>
                Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum
                yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı.
                Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı.{" "}
              </p>
            </div>
          </div>
          <div className="testimonial-block">
            <div className="text">
              <p>
                Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum
                yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı.
                Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı.{" "}
              </p>
            </div>
          </div>
          <div className="testimonial-block">
            <div className="text">
              <p>
                Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum
                yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı.
                Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı.{" "}
              </p>
            </div>
          </div>
          <div className="testimonial-block">
            <div className="text">
              <p>
                Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum
                yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı.
                Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı.{" "}
              </p>
            </div>
          </div>
          <div className="testimonial-block">
            <div className="text">
              <p>
                Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum
                yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı.
                Yorum yazısı. Yorum yazısı. Yorum yazısı. Yorum yazısı.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="client-thumb-outer">
          <div className="client-thumbs-carousel owl-carousel owl-theme owl-nav-none owl-dots-none">
            <div className="thumb-item">
              <figure className="thumb-box">
                <img src="assets/images/resource/musteri.jpg" alt="" />
              </figure>
              <div className="info-box">
                <h5>Müşteri Adı Soyadı</h5>
                <span className="designation">Ünvanı</span>
              </div>
            </div>
            <div className="thumb-item">
              <figure className="thumb-box">
                <img src="assets/images/resource/musteri.jpg" alt="" />
              </figure>
              <div className="info-box">
                <h5>Müşteri Adı Soyadı</h5>
                <span className="designation">Ünvanı</span>
              </div>
            </div>
            <div className="thumb-item">
              <figure className="thumb-box">
                <img src="assets/images/resource/musteri.jpg" alt="" />
              </figure>
              <div className="info-box">
                <h5>Müşteri Adı Soyadı</h5>
                <span className="designation">Ünvanı</span>
              </div>
            </div>
            <div className="thumb-item">
              <figure className="thumb-box">
                <img src="assets/images/resource/musteri.jpg" alt="" />
              </figure>
              <div className="info-box">
                <h5>Müşteri Adı Soyadı</h5>
                <span className="designation">Ünvanı</span>
              </div>
            </div>
            <div className="thumb-item">
              <figure className="thumb-box">
                <img src="assets/images/resource/musteri.jpg" alt="" />
              </figure>
              <div className="info-box">
                <h5>Müşteri Adı Soyadı</h5>
                <span className="designation">Ünvanı</span>
              </div>
            </div>
            <div className="thumb-item">
              <figure className="thumb-box">
                <img src="assets/images/resource/musteri.jpg" alt="" />
              </figure>
              <div className="info-box">
                <h5>Müşteri Adı Soyadı</h5>
                <span className="designation">Ünvanı</span>
              </div>
            </div>
            <div className="thumb-item">
              <figure className="thumb-box">
                <img src="assets/images/resource/musteri.jpg" alt="" />
              </figure>
              <div className="info-box">
                <h5>Müşteri Adı Soyadı</h5>
                <span className="designation">Ünvanı</span>
              </div>
            </div>
            <div className="thumb-item">
              <figure className="thumb-box">
                <img src="assets/images/resource/musteri.jpg" alt="" />
              </figure>
              <div className="info-box">
                <h5>Müşteri Adı Soyadı</h5>
                <span className="designation">Ünvanı</span>
              </div>
            </div>
            <div className="thumb-item">
              <figure className="thumb-box">
                <img src="assets/images/resource/musteri.jpg" alt="" />
              </figure>
              <div className="info-box">
                <h5>Müşteri Adı Soyadı</h5>
                <span className="designation">Ünvanı</span>
              </div>
            </div>
            <div className="thumb-item">
              <figure className="thumb-box">
                <img src="assets/images/resource/musteri.jpg" alt="" />
              </figure>
              <div className="info-box">
                <h5>Müşteri Adı Soyadı</h5>
                <span className="designation">Ünvanı</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="news-section bg-color-1">
    <div className="auto-container">
      <div className="sec-title centred">
        <h5>Öcallar Petrol</h5>
        <h2>Haberler</h2>
      </div>
      <div className="row clearfix">
        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
          <div
            className="news-block-one wow fadeInUp animated animated"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            <div className="inner-box">
              <figure className="image-box">
                <a href="#">
                  <img src="assets/images/news/news-1.jpg" alt="" />
                </a>
              </figure>
              <div className="lower-content">
                <h3>
                  <a href="#">Haber 1</a>
                </h3>
                <p>
                  Haber açıklaması. Haber açıklaması. Haber açıklaması. Haber
                  açıklaması. Haber açıklaması. Haber açıklaması. Haber
                  açıklaması. Haber açıklaması. Haber açıklaması. Haber
                  açıklaması. Haber açıklaması.{" "}
                </p>
                <div className="link">
                  <a href="#">
                    <i className="fas fa-arrow-right" />
                    <span>Haberi Oku</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
          <div
            className="news-block-one wow fadeInUp animated animated"
            data-wow-delay="300ms"
            data-wow-duration="1500ms"
          >
            <div className="inner-box">
              <figure className="image-box">
                <a href="#">
                  <img src="assets/images/news/news-2.jpg" alt="" />
                </a>
              </figure>
              <div className="lower-content">
                <h3>
                  <a href="#">Haber 2</a>
                </h3>
                <p>
                  Haber açıklaması. Haber açıklaması. Haber açıklaması. Haber
                  açıklaması. Haber açıklaması. Haber açıklaması. Haber
                  açıklaması. Haber açıklaması. Haber açıklaması. Haber
                  açıklaması. Haber açıklaması.{" "}
                </p>
                <div className="link">
                  <a href="#">
                    <i className="fas fa-arrow-right" />
                    <span>Haberi Oku</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
          <div
            className="news-block-one wow fadeInUp animated animated"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
          >
            <div className="inner-box">
              <figure className="image-box">
                <a href="#">
                  <img src="assets/images/news/news-3.jpg" alt="" />
                </a>
              </figure>
              <div className="lower-content">
                <h3>
                  <a href="#">Haber 3</a>
                </h3>
                <p>
                  Haber açıklaması. Haber açıklaması. Haber açıklaması. Haber
                  açıklaması. Haber açıklaması. Haber açıklaması. Haber
                  açıklaması. Haber açıklaması. Haber açıklaması. Haber
                  açıklaması. Haber açıklaması.{" "}
                </p>
                <div className="link">
                  <a href="#">
                    <i className="fas fa-arrow-right" />
                    <span>Haberi Oku</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="clients-section">
    <div className="auto-container">
      <div className="clients-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
        <figure className="client-logo">
          <a href="index.html">
            <img src="assets/images/ocallar.png" alt="" />
          </a>
        </figure>
        <figure className="client-logo">
          <a href="index.html">
            <img src="assets/images/ocallar.png" alt="" />
          </a>
        </figure>
        <figure className="client-logo">
          <a href="index.html">
            <img src="assets/images/ocallar.png" alt="" />
          </a>
        </figure>
        <figure className="client-logo">
          <a href="index.html">
            <img src="assets/images/ocallar.png" alt="" />
          </a>
        </figure>
        <figure className="client-logo">
          <a href="index.html">
            <img src="assets/images/ocallar.png" alt="" />
          </a>
        </figure>
      </div>
    </div>
  </section>
  <section className="cta-section">
    <div
      className="pattern-layer"
      style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}
    />
    <div className="auto-container">
      <div className="inner-container clearfix">
        <div className="title pull-left">
          <h2>Sorularınızı iletebilmeniz için bizimle iletişime geçin</h2>
        </div>
        <div className="btn-box pull-right">
          <a href="index.html">iletişim</a>
        </div>
      </div>
    </div>
  </section>
  <footer className="main-footer">
    <div className="footer-top">
      <div className="auto-container">
        <div className="widget-section">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget logo-widget">
                <figure className="footer-logo">
                  <a href="index.html">
                    <img src="assets/images/footer-logo.png" alt="" />
                  </a>
                </figure>
                <div className="text">
                  <p>Öcallar Petrol</p>
                </div>
                <ul className="info-list clearfix">
                  <li>
                    <i className="fas fa-map-marker-alt" />
                    İsmetpaşa Mah. Hışıroğlu Çay Cad. No:64 Devrek Zonguldak
                  </li>
                  <li>
                    <i className="fas fa-envelope" />
                    E-Posta{" "}
                    <a href="mailto:iletisim@ocallarpetrol.com">
                      iletisim@ocallarpetrol.com
                    </a>
                  </li>
                  <li>
                    <i className="fas fa-headphones" />
                    Telefon <a href="tel:905555555555">0 555 555 55 55</a>
                  </li>
                </ul>
                <ul className="social-links clearfix">
                  <li>
                    <a href="index.html">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="index.html">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="index.html">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="index.html">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="index.html">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget ml-70">
                <div className="widget-title">
                  <h4>Dağıtım Merkezleri</h4>
                </div>
                <div className="widget-content">
                  <ul className="list clearfix">
                    <li>
                      <a href="index.html">Devrek Dağıtım Merkezi</a>
                    </li>
                    <li>
                      <a href="index.html">Düzce Dağıtım Merkezi</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget">
                <div className="widget-title">
                  <h4>Kurumsal</h4>
                </div>
                <div className="widget-content">
                  <ul className="list clearfix">
                    <li>
                      <a href="index.html">İnsan Kaynakları</a>
                    </li>
                    <li>
                      <a href="index.html">Medya</a>
                    </li>
                    <li>
                      <a href="index.html">İletişim</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="auto-container">
        <div className="copyright">
          <p>
            © 2025 <a href="index.html">ÖCALLAR</a>{" "}
          </p>
        </div>
      </div>
    </div>
  </footer>
  <button className="scroll-top scroll-to-target" data-target="html">
    <span className="fa fa-arrow-up" />
  </button>
  <div className="xs-sidebar-group info-group info-sidebar">
    <div className="xs-overlay xs-bg-black" />
    <div className="xs-sidebar-widget">
      <div className="sidebar-widget-container">
        <div className="widget-heading">
          <a href="#" className="close-side-widget">
            X
          </a>
        </div>
        <div className="sidebar-textwidget">
          <div className="sidebar-info-contents">
            <div className="content-inner">
              <div className="upper-box">
                <div className="logo">
                  <a href="index.html">
                    <img src="assets/images/sidebar-logo.png" alt="" />
                  </a>
                </div>
                <div className="text">
                  <p>Öcallar Hakkımızda</p>
                </div>
              </div>
              <div className="side-menu-box">
                <div className="side-menu">
                  <nav className="menu-box">
                    <div className="menu-outer"></div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
  )
}
export default Home