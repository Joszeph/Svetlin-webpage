import AOS from "aos";
import "aos/dist/aos.css";

const Map =()=> {

      return(
         <div className="map-responsive">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d727.0782590309101!2d27.90594311779098!3d43.20292318788159!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x58deec9cec604902!2z0LDQtNCy0L7QutCw0YIg0KHQstC10YLQu9C40L0g0KLQvtC00L7RgNC-0LI!5e0!3m2!1sen!2sbg!4v1623776478552!5m2!1sen!2sbg" loading="lazy" width="100%" height="520" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        <style jsx>{`
          box-shadow:4px 4px 10px rgba(0,0,0,0.06);
        `}</style>
        </div>
      )
    }


export default Map


