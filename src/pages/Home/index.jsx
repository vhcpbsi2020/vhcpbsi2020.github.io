import { useLayoutEffect } from "react";
import "./style.css";
import { Carousel } from "antd";
import logo from "../../assets/OMBA.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const contentStyle = {
  height: "300px",
  color: "#fff",
  lineHeight: "100px",
  textAlign: "center",
};

function Home() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(".relogio", {
      x: 0,
      opacity: 1,
      rotate: "0deg",
      scrollTrigger: {
        trigger: ".layout-content-itens",
        markers: false,
        start: "top 300",
        end: "bottom 600",
        scrub: true
      }
    })

    return () => {
      gsap.killTweensOf(".relogio")
    }
  }, []);
  return (
    <>
      <section className="layout-carousel">
        <Carousel autoplay>
          <div>
            <img style={contentStyle} src={logo} alt="" />
          </div>
          <div>
            <img style={contentStyle} src={logo} alt="" />
          </div>
          <div>
            <img style={contentStyle} src={logo} alt="" />
          </div>
          <div>
            <img style={contentStyle} src={logo} alt="" />
          </div>
        </Carousel>
      </section>

      <section className="layout-content">

      </section>

      <section className="layout-content-itens">
        <div className="itens">
          <img className="relogio"
            src="https://www.bhphotovideo.com/images/images2500x2500/apple_mj2x2ll_a_watch_sport_smartwatch_38mm_1187194.jpg"
            width={200}
          />
        </div>np

      </section>

      <section className="layout-content-itens">
        <div>
          <img
            src="https://www.bhphotovideo.com/images/images2500x2500/apple_mj2x2ll_a_watch_sport_smartwatch_38mm_1187194.jpg"
            width={200}
          />
        </div>

        <div className="itens">
          <img
            src="https://www.bhphotovideo.com/images/images2500x2500/apple_mj2x2ll_a_watch_sport_smartwatch_38mm_1187194.jpg"
            width={200}
          />
        </div>
        <div className="itens">
          <img
            src="https://www.bhphotovideo.com/images/images2500x2500/apple_mj2x2ll_a_watch_sport_smartwatch_38mm_1187194.jpg"
            width={200}
          />
        </div>
        <div className="itens">
          <img
            src="https://www.bhphotovideo.com/images/images2500x2500/apple_mj2x2ll_a_watch_sport_smartwatch_38mm_1187194.jpg"


            
            width={200}
          />
        </div>
      </section>
    </>
  );
}

export default Home;
