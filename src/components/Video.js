import React from 'react';
import './Video.css';

const Video = () => {
  const images = [
    {
      src: "https://cdn.dribbble.com/users/1615584/screenshots/14952712/media/820c3eca781922b19953dcd7f3803b88.jpg",
      alt: "UI/UX Design",
      title: "UI/UX Design",
      description: "Craft intuitive and engaging user experiences.",
    },
    {
      src: "https://www.windmillstrategy.com/wp-content/uploads/2022/09/B2B-Industry-WebDesign-Path-Robotics-Featured.png",
      alt: "Website Development",
      title: "Website Development",
      description: "Build responsive and scalable websites.",
    },
    {
      src: "https://8allocate.com/wp-content/uploads/2024/03/Guide-to-Measuring-Software-Development-Productivity.jpg",
      alt: "Software Solutions",
      title: "Software Development",
      description: "Delivering custom software solutions for your business needs.",
    },
    {
      src: "https://internest.agency/wp-content/uploads/2023/12/ai-for-seo-2024.webp",
      alt: "SEO Optimization",
      title: "SEO Optimization",
      description: "Boost your website's visibility and rankings.",
    },
    {
      src: "https://thefusioneer.com/wp-content/uploads/2023/11/5-AI-Advancements-to-Expect-in-the-Next-10-Years-scaled.jpeg",
      alt: "AI Solutions",
      title: "Artificial Intelligence",
      description: "Implement AI to automate and optimize processes.",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhLCeWAb9AH23-nTwtpjASJ9HDYYpds4Vb5ZgeZZrQJrvWIFgHdOU_mgTV6dUZEwCfJD4&usqp=CAU",
      alt: "ERP Solutions",
      title: "ERP Solutions",
      description: "Streamline business operations with ERP systems.",
    },
    {
      src: "https://cdn.prod.website-files.com/6721faf356d83629b4c9faee/6745cb86c49921bdbd8d25dd_luma.png",
      alt: "User Training",
      title: "User Training",
      description: "Comprehensive training to empower users.",
    },
    {
      src: "https://www.businessvala.in/assets/images/product_image/1667819400-957691901.jpg",
      alt: "E-commerce Solutions",
      title: "E-commerce Solutions",
      description: "Launch and manage successful online stores.",
    },
    {
      src: "https://d502jbuhuh9wk.cloudfront.net/articles/63501fb7e4b02062ed070ffa/grHUWmaxresdefault.jpg",
      alt: "Training Provice 3D Design",
      title: "Training Provice 3D Design",
      description: "Create immersive 3D models and animations.",
    },
    {
      src: "https://www.elpassion.com/hubfs/react-native-native-development-pros-cons.jpg",
      alt: "React Native Development",
      title: "Training Provice App Development",
      description: "Build cross-platform mobile applications with React Native.",
    },
  ];

  return (
    <>
      <div className="video-page">
        <h2 className="video-title">Advanced Technology</h2><br />
        <div className="video-container">
          <video autoPlay loop muted className="full-screen-video">
            <source
              src="https://cdn.pixabay.com/video/2024/02/15/200675-913478706_large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="bubble-animation"></div>

        {/* Grid Section */}
        <section className="grid-section">
          <h3 className="grid-title">Services</h3>
          <br />
          <div className="grid-container">
            {images.map((image, index) => (
              <div key={index} className="grid-box">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="grid-image"
                />
                <div className="grid-content">
                  <h4>{image.title}</h4>
                  <p>{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
        <br />
        <div className="video-3">
  <div className="video-container left">
    <video 
      src="https://cdn.pixabay.com/video/2023/10/15/185096-874643413_large.mp4" 
      controls 
      autoPlay 
      loop 
      muted>
    </video>
  </div>
      <div className="text-container right">
        <h1>Welcome to Our Platform</h1>
        <p>
          Discover cutting-edge software solutions tailored to your business needs.
          From web applications to mobile development, we have you covered.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </div>
        </section>
      </div>
    </>
  );
};

export default Video;
