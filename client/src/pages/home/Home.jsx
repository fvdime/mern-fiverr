import React from 'react'
import './Home.scss'
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/Slide/Slide'
import { cards, projects } from '../../data'
import CatCard from '../../components/catCard.jsx/CatCard'
import ProjectCard from "../../components/projectCard/ProjectCard";

const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map( card => (
          <CatCard key={card.id} item={card}/>
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>The best part? Everything.</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Stick to your budget
            </div>
            <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Get quality work done quickly
            </div>
            <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Pay when you're happy
            </div>
            <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Count on 24/7 support
            </div>
            <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
          </div>
          <div className="item">
            <video src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7" controls />
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <h1>You need it, we've got it</h1>
          <div className="items">
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Graphics & Design</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt=""
              />
              <div className="line"></div>

              <span>Digital Marketing</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Writing & Translation</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Video & Animation</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Music & Audio</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Programming & Tech</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Business</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Lifestyle</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Data</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Photography</span>
            </div>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>liverr <i>business</i></h1>
            <h1> A solution built for  <i>business</i></h1>
            <p>
            Upgrade to a curated experience to access vetted talent and exclusive tools
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Talent matching
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Dedicated account management
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Team collaboration tools
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Business payment solutions
            </div>
            <button>Explore Liverr Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  )
}

export default Home