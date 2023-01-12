import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./home.css";

const Home = () => {
  return (
    <div className="container ">
      {/* Banner Section */}
      <div className="banner">
        <div className="banner_heading">
          <h1>PLAY - EARN - SELL</h1>
        </div>
        <div className="game_reward_assets">
          <img src="./images/Frame 63.png" alt="" />
        </div>
        <div className="banner_image">
          <img src="./Images/Group 928.png" alt="" />
        </div>
      </div>
      {/* Featured Game */}
      <div className="featured_game">
        <div className="featured_heading">
          <h1>FEATURE GAME</h1>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper_feature"
        >
          <SwiperSlide className="slider__card card__design">
            <div className="feature__card">
              <div className="feature_card_detail">
                <h1>Cryber Shot</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Convallis sagittis, mollis commodo purus.
                </p>
                <div className="play_game_button">
                  <button>PLAY NOW</button>
                </div>
              </div>
              <div className="avatar">
                <img src="./images/o.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider__card card__design2">
            <div className="feature__card">
              <div className="feature_card_detail">
                <h1>Cryber Shot</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Convallis sagittis, mollis commodo purus.
                </p>
                <div className="play_game_button">
                  <button>PLAY NOW</button>
                </div>
              </div>
              <div className="avatar">
                <img src="./images/Killjoy.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider__card card__design3">
            <div className="feature__card">
              <div className="feature_card_detail">
                <h1>Cryber Shot</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Convallis sagittis, mollis commodo purus.
                </p>
                <div className="play_game_button">
                  <button>PLAY NOW</button>
                </div>
              </div>
              <div className="avatar">
                <img src="./images/Astra.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider__card card__design4">
            <div className="feature__card">
              <div className="feature_card_detail">
                <h1>Cryber Shot</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Convallis sagittis, mollis commodo purus.
                </p>
                <div className="play_game_button">
                  <button>PLAY NOW</button>
                </div>
              </div>
              <div className="avatar">
                <img src="./images/Skye.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider__card card__design5">
            <div className="feature__card">
              <div className="feature_card_detail">
                <h1>Cryber Shot</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Convallis sagittis, mollis commodo purus.
                </p>
                <div className="play_game_button">
                  <button>PLAY NOW</button>
                </div>
              </div>
              <div className="avatar">
                <img src="./images/Omen.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Trending Game */}
      <div className="featured_game">
        <div className="trending_heading">
          <h1>FEATURE GAME</h1>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper_feature"
        >
          <SwiperSlide className="slider__card card__design">
            <div className="feature__card">
              <div className="feature_card_detail">
                <h1>Cryber Shot</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Convallis sagittis, mollis commodo purus.
                </p>
                <div className="play_game_button">
                  <button>PLAY NOW</button>
                </div>
              </div>
              <div className="avatar">
                <img src="./images/o.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider__card card__design2">
            <div className="feature__card">
              <div className="feature_card_detail">
                <h1>Cryber Shot</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Convallis sagittis, mollis commodo purus.
                </p>
                <div className="play_game_button">
                  <button>PLAY NOW</button>
                </div>
              </div>
              <div className="avatar">
                <img src="./images/Killjoy.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider__card card__design3">
            <div className="feature__card">
              <div className="feature_card_detail">
                <h1>Cryber Shot</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Convallis sagittis, mollis commodo purus.
                </p>
                <div className="play_game_button">
                  <button>PLAY NOW</button>
                </div>
              </div>
              <div className="avatar">
                <img src="./images/Astra.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider__card card__design4">
            <div className="feature__card">
              <div className="feature_card_detail">
                <h1>Cryber Shot</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Convallis sagittis, mollis commodo purus.
                </p>
                <div className="play_game_button">
                  <button>PLAY NOW</button>
                </div>
              </div>
              <div className="avatar">
                <img src="./images/Skye.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider__card card__design5">
            <div className="feature__card">
              <div className="feature_card_detail">
                <h1>Cryber Shot</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Convallis sagittis, mollis commodo purus.
                </p>
                <div className="play_game_button">
                  <button>PLAY NOW</button>
                </div>
              </div>
              <div className="avatar">
                <img src="./images/Omen.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* SUbscribe Section */}
      <div className="container">
        <div
          className="subscribe_section"
          style={{
            backgroundImage: `url("./Images/Group 932.png")`,
            height: "900px ",

            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="subscribe">
            <div className="bell_heading">
              <h6>Ideaology just launched a brand new game</h6>
            </div>
            <div>
              <img src="./Images/Vectary texture.png" alt="" />
            </div>
            <div className="subscribe_heading">
              <h1>Get Alerts for Latest Launched Games</h1>
            </div>

            <div class="input-group ">
              <input
                type="text"
                className="form-control subscribe_input"
                placeholder="Enter Your Email Address"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
