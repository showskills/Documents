import React from "react";
import Footer from "../Footer";

const Blog = () =>{
    return (<>
<div style={{fontFamily: "sans-serif", textAlign: "center"}}>
    <h1>8 Blogs Every Freelancer Should be Reading</h1>
</div>
<br/>
<hr/>
<div style={{fontFamily: "sans-serif"}}>

    <p>As a freelance worker, you are responsible for actively selling yourself, fine tuning your skills, and maintaining the motivation required to produce quality work that keeps the paychecks coming in. The upside of this work for freelance designers, developers, photographers and writers is the ability to maintain a flexible schedule and work remotely as you wish. The downside is that most creative people tend to flourish when they have the opportunity to work face-to-face with other professionals in their field and share ideas. 

        If you are not working with an in-house team, it is a great idea to use the Internet to your advantage and follow the blogs of fellow freelancers to stay current in your field. Here is a list of 8 blogs every freelancer should be reading if they want to achieve ultimate success.</p>
</div>
<hr/>
<br/>
<div className="row row-cols-6 row-cols-md-3 g-3">
    <div className="card" style={{width: "22rem" }}>
        <div className="card-body">
          <h5 className="card-title">1. Freelancers Union</h5>
          
          <p className="card-text">Freelancers Union is designed to educate freelancers about the ins and outs of the business. This blog is especially helpful around this time of year – tax season – when many freelancers are left scratching their heads trying to figure out how to report their wages and how much taxes they will owe. </p>
          <a href="#" className="card-link">"https://blog.freelancersunion.org/</a>
          
        </div>
      </div>
      <div className="card" style={{width: "22rem" }}>
        <div className="card-body">
          <h5 className="card-title">2. Copyblogger</h5>
          
          <p className="card-text">Copyblogger strives to help you create quality content and master a successful content marketing strategy – which is essential is you want to get paid.</p>
          <br/>
          <p>“53 Freelancing Mistakes That Are Costing You Clients, Cash, and Credibility"
              
          </p>
          <a href="#" className="card-link">"https://copyblogger.com/blog/"</a>
          <a href="#" className="card-link">"https://copyblogger.com/53-freelancing-mistakes/"</a>
        </div>
      </div>
      <div className="card" style={{width: "22rem" }}>
        <div className="card-body">
          <h5 className="card-title">3. A Better Lemonade Stand</h5>
          
          <p className="card-text">A Better Lemonade Stand aims to inspire new entrepreneurs in the world of online e-commerce and provide more insight about the necessary tools and resources required to enhance your online business and drive sales. </p>
          <a href="#" className="card-link">"https://www.abetterlemonadestand.com/blog/"</a>
          
        </div>
      </div>
      <div className="card" style={{width: "22rem" }}>
        <div className="card-body">
          <h5 className="card-title">4. The Branded Solopreneur</h5>
          
          <p className="card-text">The Branded Solopreneur markets themselves as delivering “Visual Strategies & Branding Badassery.” As a freelancer, you may be underestimating the value of your brand and content strategy. </p>
          <a href="#" className="card-link">"https://thesolopreneursociety.com/blog/"</a>
          
        </div>
      </div>
    <div className="card" style={{width: "23rem" }}>
    <div className="card-body">
      <h5 className="card-title">5. Austin Kleon</h5>
      
      <p className="card-text">Austin Kleon is a blogger living in Austin, Texas who writes and draws. He made it to the New York Times bestselling author list with his three illustrated books Steal Like An Artist, Newspaper Blackout, and Show Your Work!. Through his blog, he helps freelance artists identify how to access their inner talents and utilize them to their advantage.</p>
      <a href="#" className="card-link">"https://austinkleon.com/about/"</a>
      <a href="#" className="card-link">"https://austinkleon.com/2014/02/19/10-ways-to-share-your-creativity/"</a>
    </div>
  </div>
  
  
  
  <div className="card" style={{width: "22rem" }}>
    <div className="card-body">
      <h5 className="card-title">6. ProBlogger</h5>
      
      <p className="card-text">ProBlogger is a great resource if you are interested in learning how to make money as a professional blogger.</p>
      <a href="#" className="card-link">"https://problogger.com/"</a>
      <a href="#" className="card-link">"https://problogger.com/5-ways-to-grow-your-blog-without-relying-on-google-traffic/"</a>
    </div>
  </div>
  <div className="card" style={{width: "22rem" }}>
    <div className="card-body">
      <h5 className="card-title">7. Just Creative Design</h5>
      
      <p className="card-text">Jacob Cass is the man behind Just Creative Design, a blog and design portfolio of his work. Even if you aren’t a designer, you stand to benefit from analyzing Jacob’s ability to successfully self-promote and navigate the freelancing world. Check out “How to Invoice Effectively to Avoid Poor Cash Flow.</p>
      <a href="#" className="card-link">"https://justcreative.com/"</a>
    </div>
  </div>
  
  <div className="card" style={{width: "22rem" }}>
    <div className="card-body">
      <h5 className="card-title">8. Zen Habits</h5>
      
      <p className="card-text">Zen Habits is an especially helpful blog for freelancers that are struggling to keep their stress levels and sanity in check. Freelancing requires immense self-discipline and work ethic.</p>
      <br/>
      <p>"3 Small Discipline Habits You Can Train" In Link Below</p>
      <a href="#" className="card-link">"https://zenhabits.net/"</a>
      <a href="#" className="card-link">""https://zenhabits.net/next/"</a>
    </div>
  </div>
  

</div>
<br/>
<hr/>
<Footer/>
    </>);
};

export default Blog;