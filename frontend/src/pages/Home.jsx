import React from "react";
import LatestOffer from "../components/LatestOffer";
import Footer from "../components/Footer";
import ProductsUI from "./product/Products";

export default function Home() {
  return (
    <>
      <div className="container-fluid carousel bg-light px-0">
        <div className="row g-0 justify-content-end">
          <div className="col-12 col-lg-7 col-xl-9">
            <div className="header-carousel owl-carousel bg-light py-5">
              <div className="row g-0 header-carousel-item align-items-center">
                <div
                  className="col-xl-6 carousel-img wow fadeInLeft"
                  data-wow-delay="0.1s"
                >
                  <img
                    src="img/carousel-1.png"
                    className="img-fluid w-100"
                    alt="Image"
                  />
                </div>
                <div className="col-xl-6 carousel-content p-4">
                  <h4
                    className="text-uppercase fw-bold mb-4 wow fadeInRight"
                    data-wow-delay="0.1s"
                    style={{ letterSpacing: 3 }}
                  >
                    Save Up To A $400
                  </h4>
                  <h1
                    className="display-3 text-capitalize mb-4 wow fadeInRight"
                    data-wow-delay="0.3s"
                  >
                    On Selected Laptops &amp; Desktop Or Smartphone
                  </h1>
                  <p className="text-dark wow fadeInRight" data-wow-delay="0.5s">
                    Terms and Condition Apply
                  </p>
                  <a
                    className="btn btn-primary rounded-pill py-3 px-5 wow fadeInRight"
                    data-wow-delay="0.7s"
                    href="#"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
              <div className="row g-0 header-carousel-item align-items-center">
                <div
                  className="col-xl-6 carousel-img wow fadeInLeft"
                  data-wow-delay="0.1s"
                >
                  <img
                    src="img/carousel-2.png"
                    className="img-fluid w-100"
                    alt="Image"
                  />
                </div>
                <div className="col-xl-6 carousel-content p-4">
                  <h4
                    className="text-uppercase fw-bold mb-4 wow fadeInRight"
                    data-wow-delay="0.1s"
                    style={{ letterSpacing: 3 }}
                  >
                    Save Up To A $200
                  </h4>
                  <h1
                    className="display-3 text-capitalize mb-4 wow fadeInRight"
                    data-wow-delay="0.3s"
                  >
                    On Selected Laptops &amp; Desktop Or Smartphone
                  </h1>
                  <p className="text-dark wow fadeInRight" data-wow-delay="0.5s">
                    Terms and Condition Apply
                  </p>
                  <a
                    className="btn btn-primary rounded-pill py-3 px-5 wow fadeInRight"
                    data-wow-delay="0.7s"
                    href="#"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-lg-5 col-xl-3 wow fadeInRight"
            data-wow-delay="0.1s"
          >
            <div className="carousel-header-banner h-100">
              <img
                src="img/header-img.jpg"
                className="img-fluid w-100 h-100"
                style={{ objectFit: "cover" }}
                alt="Image"
              />
              <div className="carousel-banner-offer">
                <p className="bg-primary text-white rounded fs-5 py-2 px-4 mb-0 me-3">
                  Save $48.00
                </p>
                <p className="text-primary fs-5 fw-bold mb-0">Special Offer</p>
              </div>
              <div className="carousel-banner">
                <div className="carousel-banner-content text-center p-4">
                  <a href="#" className="d-block mb-2">
                    SmartPhone
                  </a>
                  <a href="#" className="d-block text-white fs-3">
                    Apple iPad Mini <br /> G2356
                  </a>
                  <del className="me-2 text-white fs-5">$1,250.00</del>
                  <span className="text-primary fs-5">$1,050.00</span>
                </div>
                <a href="#" className="btn btn-primary rounded-pill py-2 px-4">
                  <i className="fas fa-shopping-cart me-2" /> Add To Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0">
        <div className="row g-0">
          <div
            className="col-6 col-md-4 col-lg-2 border-start border-end wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="p-4">
              <div className="d-inline-flex align-items-center">
                <i className="fa fa-sync-alt fa-2x text-primary" />
                <div className="ms-4">
                  <h6 className="text-uppercase mb-2">Free Return</h6>
                  <p className="mb-0">30 days money back guarantee!</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="p-4">
              <div className="d-flex align-items-center">
                <i className="fab fa-telegram-plane fa-2x text-primary" />
                <div className="ms-4">
                  <h6 className="text-uppercase mb-2">Free Shipping</h6>
                  <p className="mb-0">Free shipping on all order</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="p-4">
              <div className="d-flex align-items-center">
                <i className="fas fa-life-ring fa-2x text-primary" />
                <div className="ms-4">
                  <h6 className="text-uppercase mb-2">Support 24/7</h6>
                  <p className="mb-0">We support online 24 hrs a day</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="p-4">
              <div className="d-flex align-items-center">
                <i className="fas fa-credit-card fa-2x text-primary" />
                <div className="ms-4">
                  <h6 className="text-uppercase mb-2">Receive Gift Card</h6>
                  <p className="mb-0">Recieve gift all over oder $50</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="p-4">
              <div className="d-flex align-items-center">
                <i className="fas fa-lock fa-2x text-primary" />
                <div className="ms-4">
                  <h6 className="text-uppercase mb-2">Secure Payment</h6>
                  <p className="mb-0">We Value Your Security</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <div className="p-4">
              <div className="d-flex align-items-center">
                <i className="fas fa-blog fa-2x text-primary" />
                <div className="ms-4">
                  <h6 className="text-uppercase mb-2">Online Service</h6>
                  <p className="mb-0">Free return products in 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
              <a
                href="#"
                className="d-flex align-items-center justify-content-between border bg-white rounded p-4"
              >
                <div>
                  <p className="text-muted mb-3">Find The Best Camera for You!</p>
                  <h3 className="text-primary">Smart Camera</h3>
                  <h1 className="display-3 text-secondary mb-0">
                    40% <span className="text-primary fw-normal">Off</span>
                  </h1>
                </div>
                <img src="img/product-1.png" className="img-fluid" alt="" />
              </a>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
              <a
                href="#"
                className="d-flex align-items-center justify-content-between border bg-white rounded p-4"
              >
                <div>
                  <p className="text-muted mb-3">Find The Best Whatches for You!</p>
                  <h3 className="text-primary">Smart Whatch</h3>
                  <h1 className="display-3 text-secondary mb-0">
                    20% <span className="text-primary fw-normal">Off</span>
                  </h1>
                </div>
                <img src="img/product-2.png" className="img-fluid" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <LatestOffer />
 <ProductsUI/>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
              <a href="#"></a>
              <div className="bg-primary rounded position-relative">
                <a href="#">
                  <img
                    src="img/product-banner.jpg"
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                </a>
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center rounded p-4"
                  style={{ background: "rgba(255, 255, 255, 0.5)" }}
                >
                  <a href="#">
                    <h3 className="display-5 text-primary">
                      EOS Rebel <br /> <span>T7i Kit</span>
                    </h3>
                    <p className="fs-4 text-muted">$899.99</p>
                  </a>
                  <a
                    href="#"
                    className="btn btn-primary rounded-pill align-self-start py-2 px-4"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
              <a href="#"></a>
              <div className="text-center bg-primary rounded position-relative">
                <a href="#">
                  <img
                    src="img/product-banner-2.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                </a>
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center rounded p-4"
                  style={{ background: "rgba(242, 139, 0, 0.5)" }}
                >
                  <a href="#">
                    <h2 className="display-2 text-secondary">SALE</h2>
                    <h4 className="display-5 text-white mb-4">Get UP To 50% Off</h4>
                  </a>
                  <a
                    href="#"
                    className="btn btn-secondary rounded-pill align-self-center py-2 px-4"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid products productList overflow-hidden">
        <div className="container products-mini py-5">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
            <h4
              className="text-primary border-bottom border-primary border-2 d-inline-block p-2 title-border-radius wow fadeInUp"
              data-wow-delay="0.1s"
            >
              Products
            </h4>
            <h1 className="mb-0 display-3 wow fadeInUp" data-wow-delay="0.3s">
              All Product Items
            </h1>
          </div>
          <div
            className="productList-carousel owl-carousel pt-4 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="productImg-carousel owl-carousel productList-item">
              <div className="productImg-item products-mini-item border">
                <div className="row g-0">
                  <div className="col-5">
                    <div className="products-mini-img border-end h-100">
                      <img
                        src="img/product-4.png"
                        className="img-fluid w-100 h-100"
                        alt="Image"
                      />
                      <div className="products-mini-icon rounded-circle bg-primary">
                        <a href="#">
                          <i className="fa fa-eye fa-1x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="products-mini-content p-3">
                      <a href="#" className="d-block mb-2">
                        SmartPhone
                      </a>
                      <a href="#" className="d-block h4">
                        Apple iPad Mini <br /> G2356
                      </a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                </div>
                <div className="products-mini-add border p-3">
                  <a
                    href="#"
                    className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                  >
                    <i className="fas fa-shopping-cart me-2" /> Add To Cart
                  </a>
                  <div className="d-flex">
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-3"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-random" />
                      </span>
                    </a>
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-0"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-heart" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="productImg-item products-mini-item border">
                <div className="row g-0">
                  <div className="col-5">
                    <div className="products-mini-img border-end h-100">
                      <img
                        src="img/product-4.png"
                        className="img-fluid w-100 h-100"
                        alt="Image"
                      />
                      <div className="products-mini-icon rounded-circle bg-primary">
                        <a href="#">
                          <i className="fa fa-eye fa-1x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="products-mini-content p-3">
                      <a href="#" className="d-block mb-2">
                        SmartPhone
                      </a>
                      <a href="#" className="d-block h4">
                        Apple iPad Mini <br /> G2356
                      </a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                </div>
                <div className="products-mini-add border p-3">
                  <a
                    href="#"
                    className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                  >
                    <i className="fas fa-shopping-cart me-2" /> Add To Cart
                  </a>
                  <div className="d-flex">
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-3"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-random" />
                      </span>
                    </a>
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-0"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-heart" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="productImg-item products-mini-item border">
                <div className="row g-0">
                  <div className="col-5">
                    <div className="products-mini-img border-end h-100">
                      <img
                        src="img/product-6.png"
                        className="img-fluid w-100 h-100"
                        alt="Image"
                      />
                      <div className="products-mini-icon rounded-circle bg-primary">
                        <a href="#">
                          <i className="fa fa-eye fa-1x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="products-mini-content p-3">
                      <a href="#" className="d-block mb-2">
                        SmartPhone
                      </a>
                      <a href="#" className="d-block h4">
                        Apple iPad Mini <br /> G2356
                      </a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                </div>
                <div className="products-mini-add border p-3">
                  <a
                    href="#"
                    className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                  >
                    <i className="fas fa-shopping-cart me-2" /> Add To Cart
                  </a>
                  <div className="d-flex">
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-3"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-random" />
                      </span>
                    </a>
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-0"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-heart" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="productImg-item products-mini-item border">
                <div className="row g-0">
                  <div className="col-5">
                    <div className="products-mini-img border-end h-100">
                      <img
                        src="img/product-7.png"
                        className="img-fluid w-100 h-100"
                        alt="Image"
                      />
                      <div className="products-mini-icon rounded-circle bg-primary">
                        <a href="#">
                          <i className="fa fa-eye fa-1x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="products-mini-content p-3">
                      <a href="#" className="d-block mb-2">
                        SmartPhone
                      </a>
                      <a href="#" className="d-block h4">
                        Apple iPad Mini <br /> G2356
                      </a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                </div>
                <div className="products-mini-add border p-3">
                  <a
                    href="#"
                    className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                  >
                    <i className="fas fa-shopping-cart me-2" /> Add To Cart
                  </a>
                  <div className="d-flex">
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-3"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-random" />
                      </span>
                    </a>
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-0"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-heart" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="productImg-carousel owl-carousel productList-item">
              <div className="productImg-item products-mini-item border">
                <div className="row g-0">
                  <div className="col-5">
                    <div className="products-mini-img border-end h-100">
                      <img
                        src="img/product-8.png"
                        className="img-fluid w-100 h-100"
                        alt="Image"
                      />
                      <div className="products-mini-icon rounded-circle bg-primary">
                        <a href="#">
                          <i className="fa fa-eye fa-1x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="products-mini-content p-3">
                      <a href="#" className="d-block mb-2">
                        SmartPhone
                      </a>
                      <a href="#" className="d-block h4">
                        Apple iPad Mini <br /> G2356
                      </a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                </div>
                <div className="products-mini-add border p-3">
                  <a
                    href="#"
                    className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                  >
                    <i className="fas fa-shopping-cart me-2" /> Add To Cart
                  </a>
                  <div className="d-flex">
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-3"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-random" />
                      </span>
                    </a>
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-0"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-heart" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="productImg-item products-mini-item border">
                <div className="row g-0">
                  <div className="col-5">
                    <div className="products-mini-img border-end h-100">
                      <img
                        src="img/product-9.png"
                        className="img-fluid w-100 h-100"
                        alt="Image"
                      />
                      <div className="products-mini-icon rounded-circle bg-primary">
                        <a href="#">
                          <i className="fa fa-eye fa-1x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="products-mini-content p-3">
                      <a href="#" className="d-block mb-2">
                        SmartPhone
                      </a>
                      <a href="#" className="d-block h4">
                        Apple iPad Mini <br /> G2356
                      </a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                </div>
                <div className="products-mini-add border p-3">
                  <a
                    href="#"
                    className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                  >
                    <i className="fas fa-shopping-cart me-2" /> Add To Cart
                  </a>
                  <div className="d-flex">
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-3"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-random" />
                      </span>
                    </a>
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-0"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-heart" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="productImg-item products-mini-item border">
                <div className="row g-0">
                  <div className="col-5">
                    <div className="products-mini-img border-end h-100">
                      <img
                        src="img/product-10.png"
                        className="img-fluid w-100 h-100"
                        alt="Image"
                      />
                      <div className="products-mini-icon rounded-circle bg-primary">
                        <a href="#">
                          <i className="fa fa-eye fa-1x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="products-mini-content p-3">
                      <a href="#" className="d-block mb-2">
                        SmartPhone
                      </a>
                      <a href="#" className="d-block h4">
                        Apple iPad Mini <br /> G2356
                      </a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                </div>
                <div className="products-mini-add border p-3">
                  <a
                    href="#"
                    className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                  >
                    <i className="fas fa-shopping-cart me-2" /> Add To Cart
                  </a>
                  <div className="d-flex">
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-3"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-random" />
                      </span>
                    </a>
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-0"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-heart" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="productImg-item products-mini-item border">
                <div className="row g-0">
                  <div className="col-5">
                    <div className="products-mini-img border-end h-100">
                      <img
                        src="img/product-11.png"
                        className="img-fluid w-100 h-100"
                        alt="Image"
                      />
                      <div className="products-mini-icon rounded-circle bg-primary">
                        <a href="#">
                          <i className="fa fa-eye fa-1x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="products-mini-content p-3">
                      <a href="#" className="d-block mb-2">
                        SmartPhone
                      </a>
                      <a href="#" className="d-block h4">
                        Apple iPad Mini <br /> G2356
                      </a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                </div>
                <div className="products-mini-add border p-3">
                  <a
                    href="#"
                    className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                  >
                    <i className="fas fa-shopping-cart me-2" /> Add To Cart
                  </a>
                  <div className="d-flex">
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-3"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-random" />
                      </span>
                    </a>
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-0"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-heart" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="productImg-carousel owl-carousel productList-item">
              <div className="productImg-item products-mini-item border">
                <div className="row g-0">
                  <div className="col-5">
                    <div className="products-mini-img border-end h-100">
                      <img
                        src="img/product-12.png"
                        className="img-fluid w-100 h-100"
                        alt="Image"
                      />
                      <div className="products-mini-icon rounded-circle bg-primary">
                        <a href="#">
                          <i className="fa fa-eye fa-1x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="products-mini-content p-3">
                      <a href="#" className="d-block mb-2">
                        SmartPhone
                      </a>
                      <a href="#" className="d-block h4">
                        Apple iPad Mini <br /> G2356
                      </a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                </div>
                <div className="products-mini-add border p-3">
                  <a
                    href="#"
                    className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                  >
                    <i className="fas fa-shopping-cart me-2" /> Add To Cart
                  </a>
                  <div className="d-flex">
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-3"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-random" />
                      </span>
                    </a>
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-0"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-heart" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="productImg-item products-mini-item border">
                <div className="row g-0">
                  <div className="col-5">
                    <div className="products-mini-img border-end h-100">
                      <img
                        src="img/product-13.png"
                        className="img-fluid w-100 h-100"
                        alt="Image"
                      />
                      <div className="products-mini-icon rounded-circle bg-primary">
                        <a href="#">
                          <i className="fa fa-eye fa-1x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="products-mini-content p-3">
                      <a href="#" className="d-block mb-2">
                        SmartPhone
                      </a>
                      <a href="#" className="d-block h4">
                        Apple iPad Mini <br /> G2356
                      </a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                </div>
                <div className="products-mini-add border p-3">
                  <a
                    href="#"
                    className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                  >
                    <i className="fas fa-shopping-cart me-2" /> Add To Cart
                  </a>
                  <div className="d-flex">
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-3"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-random" />
                      </span>
                    </a>
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-0"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-heart" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="productImg-item products-mini-item border">
                <div className="row g-0">
                  <div className="col-5">
                    <div className="products-mini-img border-end h-100">
                      <img
                        src="img/product-14.png"
                        className="img-fluid w-100 h-100"
                        alt="Image"
                      />
                      <div className="products-mini-icon rounded-circle bg-primary">
                        <a href="#">
                          <i className="fa fa-eye fa-1x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="products-mini-content p-3">
                      <a href="#" className="d-block mb-2">
                        SmartPhone
                      </a>
                      <a href="#" className="d-block h4">
                        Apple iPad Mini <br /> G2356
                      </a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                </div>
                <div className="products-mini-add border p-3">
                  <a
                    href="#"
                    className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                  >
                    <i className="fas fa-shopping-cart me-2" /> Add To Cart
                  </a>
                  <div className="d-flex">
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-3"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-random" />
                      </span>
                    </a>
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-0"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-heart" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="productImg-item products-mini-item border">
                <div className="row g-0">
                  <div className="col-5">
                    <div className="products-mini-img border-end h-100">
                      <img
                        src="img/product-15.png"
                        className="img-fluid w-100 h-100"
                        alt="Image"
                      />
                      <div className="products-mini-icon rounded-circle bg-primary">
                        <a href="#">
                          <i className="fa fa-eye fa-1x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="products-mini-content p-3">
                      <a href="#" className="d-block mb-2">
                        SmartPhone
                      </a>
                      <a href="#" className="d-block h4">
                        Apple iPad Mini <br /> G2356
                      </a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                </div>
                <div className="products-mini-add border p-3">
                  <a
                    href="#"
                    className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                  >
                    <i className="fas fa-shopping-cart me-2" /> Add To Cart
                  </a>
                  <div className="d-flex">
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-3"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-random" />
                      </span>
                    </a>
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-0"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-heart" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="productImg-carousel owl-carousel productList-item">
              <div className="productImg-item products-mini-item border">
                <div className="row g-0">
                  <div className="col-5">
                    <div className="products-mini-img border-end h-100">
                      <img
                        src="img/product-16.png"
                        className="img-fluid w-100 h-100"
                        alt="Image"
                      />
                      <div className="products-mini-icon rounded-circle bg-primary">
                        <a href="#">
                          <i className="fa fa-eye fa-1x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="products-mini-content p-3">
                      <a href="#" className="d-block mb-2">
                        SmartPhone
                      </a>
                      <a href="#" className="d-block h4">
                        Apple iPad Mini <br /> G2356
                      </a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                </div>
                <div className="products-mini-add border p-3">
                  <a
                    href="#"
                    className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                  >
                    <i className="fas fa-shopping-cart me-2" /> Add To Cart
                  </a>
                  <div className="d-flex">
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-3"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-random" />
                      </span>
                    </a>
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-0"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-heart" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="productImg-item products-mini-item border">
                <div className="row g-0">
                  <div className="col-5">
                    <div className="products-mini-img border-end h-100">
                      <img
                        src="img/product-17.png"
                        className="img-fluid w-100 h-100"
                        alt="Image"
                      />
                      <div className="products-mini-icon rounded-circle bg-primary">
                        <a href="#">
                          <i className="fa fa-eye fa-1x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="products-mini-content p-3">
                      <a href="#" className="d-block mb-2">
                        SmartPhone
                      </a>
                      <a href="#" className="d-block h4">
                        Apple iPad Mini <br /> G2356
                      </a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                </div>
                <div className="products-mini-add border p-3">
                  <a
                    href="#"
                    className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                  >
                    <i className="fas fa-shopping-cart me-2" /> Add To Cart
                  </a>
                  <div className="d-flex">
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-3"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-random" />
                      </span>
                    </a>
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-0"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-heart" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="productImg-item products-mini-item border">
                <div className="row g-0">
                  <div className="col-5">
                    <div className="products-mini-img border-end h-100">
                      <img
                        src="img/product-3.png"
                        className="img-fluid w-100 h-100"
                        alt="Image"
                      />
                      <div className="products-mini-icon rounded-circle bg-primary">
                        <a href="#">
                          <i className="fa fa-eye fa-1x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="products-mini-content p-3">
                      <a href="#" className="d-block mb-2">
                        SmartPhone
                      </a>
                      <a href="#" className="d-block h4">
                        Apple iPad Mini <br /> G2356
                      </a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                </div>
                <div className="products-mini-add border p-3">
                  <a
                    href="#"
                    className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                  >
                    <i className="fas fa-shopping-cart me-2" /> Add To Cart
                  </a>
                  <div className="d-flex">
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-3"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-random" />
                      </span>
                    </a>
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-0"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-heart" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid products pb-5">
        <div className="container products-mini py-5">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: 700 }}>
            <h4
              className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius wow fadeInUp"
              data-wow-delay="0.1s"
            >
              Bestseller Products
            </h4>
            <p className="mb-0 wow fadeInUp" data-wow-delay="0.2s">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              asperiores ducimus sint quos tempore officia similique quia? Libero,
              pariatur consectetur?
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="products-mini-item border">
                <div className="row g-0">
                  <div className="col-5">
                    <div className="products-mini-img border-end h-100">
                      <img
                        src="img/product-3.png"
                        className="img-fluid w-100 h-100"
                        alt="Image"
                      />
                      <div className="products-mini-icon rounded-circle bg-primary">
                        <a href="#">
                          <i className="fa fa-eye fa-1x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="products-mini-content p-3">
                      <a href="#" className="d-block mb-2">
                        SmartPhone
                      </a>
                      <a href="#" className="d-block h4">
                        Apple iPad Mini <br /> G2356
                      </a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                </div>
                <div className="products-mini-add border p-3">
                  <a
                    href="#"
                    className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                  >
                    <i className="fas fa-shopping-cart me-2" /> Add To Cart
                  </a>
                  <div className="d-flex">
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-3"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-random" />
                      </span>
                    </a>
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-0"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-heart" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="products-mini-item border">
                <div className="row g-0">
                  <div className="col-5">
                    <div className="products-mini-img border-end h-100">
                      <img
                        src="img/product-4.png"
                        className="img-fluid w-100 h-100"
                        alt="Image"
                      />
                      <div className="products-mini-icon rounded-circle bg-primary">
                        <a href="#">
                          <i className="fa fa-eye fa-1x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="products-mini-content p-3">
                      <a href="#" className="d-block mb-2">
                        SmartPhone
                      </a>
                      <a href="#" className="d-block h4">
                        Apple iPad Mini <br /> G2356
                      </a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                </div>
                <div className="products-mini-add border p-3">
                  <a
                    href="#"
                    className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                  >
                    <i className="fas fa-shopping-cart me-2" /> Add To Cart
                  </a>
                  <div className="d-flex">
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-3"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-random" />
                      </span>
                    </a>
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-0"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-heart" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="products-mini-item border">
                <div className="row g-0">
                  <div className="col-5">
                    <div className="products-mini-img border-end h-100">
                      <img
                        src="img/product-5.png"
                        className="img-fluid w-100 h-100"
                        alt="Image"
                      />
                      <div className="products-mini-icon rounded-circle bg-primary">
                        <a href="#">
                          <i className="fa fa-eye fa-1x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="products-mini-content p-3">
                      <a href="#" className="d-block mb-2">
                        SmartPhone
                      </a>
                      <a href="#" className="d-block h4">
                        Apple iPad Mini <br /> G2356
                      </a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                </div>
                <div className="products-mini-add border p-3">
                  <a
                    href="#"
                    className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                  >
                    <i className="fas fa-shopping-cart me-2" /> Add To Cart
                  </a>
                  <div className="d-flex">
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-3"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-random" />
                      </span>
                    </a>
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-0"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-heart" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="products-mini-item border">
                <div className="row g-0">
                  <div className="col-5">
                    <div className="products-mini-img border-end h-100">
                      <img
                        src="img/product-6.png"
                        className="img-fluid w-100 h-100"
                        alt="Image"
                      />
                      <div className="products-mini-icon rounded-circle bg-primary">
                        <a href="#">
                          <i className="fa fa-eye fa-1x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="products-mini-content p-3">
                      <a href="#" className="d-block mb-2">
                        SmartPhone
                      </a>
                      <a href="#" className="d-block h4">
                        Apple iPad Mini <br /> G2356
                      </a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                </div>
                <div className="products-mini-add border p-3">
                  <a
                    href="#"
                    className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                  >
                    <i className="fas fa-shopping-cart me-2" /> Add To Cart
                  </a>
                  <div className="d-flex">
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-3"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-random" />
                      </span>
                    </a>
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-0"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-heart" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="products-mini-item border">
                <div className="row g-0">
                  <div className="col-5">
                    <div className="products-mini-img border-end h-100">
                      <img
                        src="img/product-7.png"
                        className="img-fluid w-100 h-100"
                        alt="Image"
                      />
                      <div className="products-mini-icon rounded-circle bg-primary">
                        <a href="#">
                          <i className="fa fa-eye fa-1x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="products-mini-content p-3">
                      <a href="#" className="d-block mb-2">
                        SmartPhone
                      </a>
                      <a href="#" className="d-block h4">
                        Apple iPad Mini <br /> G2356
                      </a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                </div>
                <div className="products-mini-add border p-3">
                  <a
                    href="#"
                    className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                  >
                    <i className="fas fa-shopping-cart me-2" /> Add To Cart
                  </a>
                  <div className="d-flex">
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-3"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-random" />
                      </span>
                    </a>
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-0"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-heart" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="products-mini-item border">
                <div className="row g-0">
                  <div className="col-5">
                    <div className="products-mini-img border-end h-100">
                      <img
                        src="img/product-11.png"
                        className="img-fluid w-100 h-100"
                        alt="Image"
                      />
                      <div className="products-mini-icon rounded-circle bg-primary">
                        <a href="#">
                          <i className="fa fa-eye fa-1x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="products-mini-content p-3">
                      <a href="#" className="d-block mb-2">
                        SmartPhone
                      </a>
                      <a href="#" className="d-block h4">
                        Apple iPad Mini <br /> G2356
                      </a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                </div>
                <div className="products-mini-add border p-3">
                  <a
                    href="#"
                    className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                  >
                    <i className="fas fa-shopping-cart me-2" /> Add To Cart
                  </a>
                  <div className="d-flex">
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-3"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-random" />
                      </span>
                    </a>
                    <a
                      href="#"
                      className="text-primary d-flex align-items-center justify-content-center me-0"
                    >
                      <span className="rounded-circle btn-sm-square border">
                        <i className="fas fa-heart" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
        <div className="container py-5">
          <div
            className="row g-4 rounded mb-5"
            style={{ background: "rgba(255, 255, 255, .03)" }}
          >
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="rounded p-4">
                <div
                  className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4"
                  style={{ width: 70, height: 70 }}
                >
                  <i className="fas fa-map-marker-alt fa-2x text-primary" />
                </div>
                <div>
                  <h4 className="text-white">Address</h4>
                  <p className="mb-2">123 Street New York.USA</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="rounded p-4">
                <div
                  className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4"
                  style={{ width: 70, height: 70 }}
                >
                  <i className="fas fa-envelope fa-2x text-primary" />
                </div>
                <div>
                  <h4 className="text-white">Mail Us</h4>
                  <p className="mb-2">info@example.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="rounded p-4">
                <div
                  className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4"
                  style={{ width: 70, height: 70 }}
                >
                  <i className="fa fa-phone-alt fa-2x text-primary" />
                </div>
                <div>
                  <h4 className="text-white">Telephone</h4>
                  <p className="mb-2">(+012) 3456 7890</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="rounded p-4">
                <div
                  className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4"
                  style={{ width: 70, height: 70 }}
                >
                  <i className="fab fa-firefox-browser fa-2x text-primary" />
                </div>
                <div>
                  <h4 className="text-white">Yoursite@ex.com</h4>
                  <p className="mb-2">(+012) 3456 7890</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <div className="footer-item">
                  <h4 className="text-primary mb-4">Newsletter</h4>
                  <p className="mb-3">
                    Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit consectetur
                    adipiscing elit.
                  </p>
                  <div className="position-relative mx-auto rounded-pill">
                    <input
                      className="form-control rounded-pill w-100 py-3 ps-4 pe-5"
                      type="text"
                      placeholder="Enter your email"
                    />
                    <button
                      type="button"
                      className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                    >
                      SignUp
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-primary mb-4">Customer Service</h4>
                <a href="#" className="">
                  <i className="fas fa-angle-right me-2" /> Contact Us
                </a>
                <a href="#" className="">
                  <i className="fas fa-angle-right me-2" /> Returns
                </a>
                <a href="#" className="">
                  <i className="fas fa-angle-right me-2" /> Order History
                </a>
                <a href="#" className="">
                  <i className="fas fa-angle-right me-2" /> Site Map
                </a>
                <a href="#" className="">
                  <i className="fas fa-angle-right me-2" /> Testimonials
                </a>
                <a href="#" className="">
                  <i className="fas fa-angle-right me-2" /> My Account
                </a>
                <a href="#" className="">
                  <i className="fas fa-angle-right me-2" /> Unsubscribe Notification
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-primary mb-4">Information</h4>
                <a href="#" className="">
                  <i className="fas fa-angle-right me-2" /> About Us
                </a>
                <a href="#" className="">
                  <i className="fas fa-angle-right me-2" /> Delivery infomation
                </a>
                <a href="#" className="">
                  <i className="fas fa-angle-right me-2" /> Privacy Policy
                </a>
                <a href="#" className="">
                  <i className="fas fa-angle-right me-2" /> Terms &amp; Conditions
                </a>
                <a href="#" className="">
                  <i className="fas fa-angle-right me-2" /> Warranty
                </a>
                <a href="#" className="">
                  <i className="fas fa-angle-right me-2" /> FAQ
                </a>
                <a href="#" className="">
                  <i className="fas fa-angle-right me-2" /> Seller Login
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-primary mb-4">Extras</h4>
                <a href="#" className="">
                  <i className="fas fa-angle-right me-2" /> Brands
                </a>
                <a href="#" className="">
                  <i className="fas fa-angle-right me-2" /> Gift Vouchers
                </a>
                <a href="#" className="">
                  <i className="fas fa-angle-right me-2" /> Affiliates
                </a>
                <a href="#" className="">
                  <i className="fas fa-angle-right me-2" /> Wishlist
                </a>
                <a href="#" className="">
                  <i className="fas fa-angle-right me-2" /> Order History
                </a>
                <a href="#" className="">
                  <i className="fas fa-angle-right me-2" /> Track Your Order
                </a>
                <a href="#" className="">
                  <i className="fas fa-angle-right me-2" /> Track Your Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
              <span className="text-white">
                <a href="#" className="border-bottom text-white">
                  <i className="fas fa-copyright text-light me-2" />
                  Your Site Name
                </a>
                , All right reserved.
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end text-white">
              Designed By{" "}
              <a className="border-bottom text-white" href="https://htmlcodex.com">
                HTML Codex
              </a>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="btn btn-primary btn-lg-square back-to-top">
        <i className="fa fa-arrow-up" />
      </a> */}
      <Footer />
    </>


  );
}
