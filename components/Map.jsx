const Map =()=> {
      return(
         <div className="map-responsive">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.327733574471!2d27.903925915483242!3d43.202614879139276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4538cbe578aa1%3A0x227314e4f4ebbdff!2sul.%20%22Aleksander%20Dyakovich%22%2045%2C%209000%20Varna%20Center%2C%20Varna!5e0!3m2!1sen!2sbg!4v1620642774680!5m2!1sen!2sbg" loading="lazy" width="380" height="520" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0" ></iframe>
        <style jsx>{`
          .map-responsive{
            overflow:hidden;
            padding:46%;
            position:relative;
            height:0;
        }
        .map-responsive iframe{
            left:0;
            top:0;
            height:100%;
            width:100%;
            position:absolute;
        }
        `}</style>
        </div>
      )
    }


export default Map


