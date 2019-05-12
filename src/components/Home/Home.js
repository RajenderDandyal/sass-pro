/*eslint-disable*/
import React, {Component} from 'react';
import "./home.scss"

class Home extends Component {
  componentDidMount() {
    /*let el = document.getElementsByClassName('jsAnimate')[0];
    let left = 250;
    let animate = () => {
      left = left + 2;
      el.style.left = `${left}px`;
      console.log(getComputedStyle(el).left)
    }
    let aniFrame = setInterval(animate, 20)
    setTimeout(() => {
      clearInterval(aniFrame)
    }, 5000)*/
  }

  render() {
    return (
        <div>

          <header>
            <nav id="main-nav">
              <div className="wrapper">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Lessons</a></li>
                  <li><a href="#">Portfolio</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>

            </nav>
            {/*<div className={"jsAnimate"}></div>*/}

            <div className="lead-banner">
              <img src="/images/banner-1.png"/>
              <div className="banner-content">
                <div className="wrapper">
                  <span className="title">Check our video</span>
                  <span className="sub-title">Learning in 6 weeks</span>
                </div>
              </div>
            </div>
          </header>
          <section id="services">
            <div className="wrapper">
              <h1>Services</h1>

              <ul>
                <li>
                  <img src="/images/icon-1.png"/>
                  <a href="#">Recording<br/>services</a>
                </li>
                <li>
                  <img src="/images/icon-2.png"/>
                  <a href="#">Get a printed<br/>certificate</a>
                </li>
                <li>
                  <img src="/images/icon-3.png"/>
                  <a href="#">Lessons via<br/>Skype</a>
                </li>
              </ul>
            </div>
          </section>
          <div className="lessons-banner">
            <img src="/images/banner-2.png"/>
            <div className="banner-content">
              <div className="wrapper">
                <span className="title">Our Lessons</span>
                <span className="sub-title">Are Easy</span>
                <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
              </div>
            </div>
          </div>
          <section id="projects">
            <div className="wrapper">
              <h1>Our Projects</h1>
              <ul>
                <li><img src="http://placehold.it/150x150"/></li>
                <li><img src="http://placehold.it/150x150"/></li>
                <li><img src="http://placehold.it/150x150"/></li>
                <li><img src="http://placehold.it/150x150"/></li>
                <li><img src="http://placehold.it/150x150"/></li>
                <li><img src="http://placehold.it/150x150"/></li>
                <li><img src="http://placehold.it/150x150"/></li>
                <li><img src="http://placehold.it/150x150"/></li>
                <li><img src="http://placehold.it/150x150"/></li>
                <li><img src="http://placehold.it/150x150"/></li>
                <li><img src="http://placehold.it/150x150"/></li>
                <li><img src="http://placehold.it/150x150"/></li>
              </ul>
            </div>
          </section>
          <div id={'animate'}></div>
        </div>
    );
  }
}

export default Home;