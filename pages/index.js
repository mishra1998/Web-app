import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import TestimonialCarousel from "../components/testimonials";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import CallToAction from "../components/callToAction";
import BlogCarousel from "../components/Blogcarousel";
import { useState } from "react";
import LottieAnimation from "../components/LottieAnimation";
import LoyaltyAnimation from "../components/loyaltyAnimation";

const Home = () => {
  const [imagePath, setImagePath] = useState('https://www.finmapp.com/wp-content/uploads/2022/06/existinguser_dashboard-1-768x1365.png');

  const changeImage = (newImagePath) => {
    setImagePath(newImagePath);
  };

  const faqData = [
    {
      question: 'IS MY EMERGENCY FUND SUFFICIENT',
      answer: "Most experts believe you should have enough money in your emergency fund to cover at least 3 to 6 months' worth of living expenses. Take the Financial Health Check to find out!"
    },
    {
      question: 'HOW DO I SAVE MORE MONEY?',
      answer: "We can help you save more money with recommendations on Financial Planning and Tax Planning after you've taken the Financial Health Check and got your Financial Health Report!"
    },
    {
      question: 'HOW MUCH DO I NEED TO SAVE FOR RETIREMENT?',
      answer: ' Take the Financial Health Check and get the Financial Health Report that will detail out a savings and investment plan to help you achieve the corpus required for retirement.'
    },
    {
      question: 'HOW AND WHEN CAN I BECOME A CROREPATI?',
      answer: 'Simple! Use our cool Crorepati Calculator to discover how and when you can become a crorepati!'
    },
    {
      question: 'IS INVESTING IN MUTUAL FUND RISKY',
      answer: "After you've taken the Financial Health Check, you'll get a Financial Health Report that will give you personalised recommendations so you can invest in the most suitable Mutual Funds based on your age and risk appetite."
    },
  ];

  return (
    <>
      <Head>
        <title>COMMITEE Web</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="https://eazyfin.s3.ap-south-1.amazonaws.com/public-doc/d8caa120-1b17-11ee-a2b6-55c55d21878b-My_project-1-fotor-20230705121850-removebg-preview.png" />
      </Head>
      <Navbar />
      <CallToAction />
      <Hero />
      <div style={{color:'white',textAlign:'center', paddingRight:'200px',padding:'100px 0px 0px', fontSize:'30px'}}>
        CLICK THESE BUTTON'S AND KNOW THE WHOLE COMMITEE
      </div>
      <div style={{}} className="financialcontainer">
        <div className="image-container">
          <img width={500} src={imagePath} alt="Image" />
          <div className="buttons-container">
            <div style={{ padding: '0px 0px 100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="button">
              <button onClick={() => changeImage('https://eazyfin.s3.ap-south-1.amazonaws.com/public-doc/d9056250-1979-11ee-b70c-e3ee355e70b1-IMG_9056%20Mockup.png')}>
                <img width={100} src="https://eazyfin.s3.ap-south-1.amazonaws.com/public-doc/4ea22ee0-196f-11ee-943f-af6b82453064-Group%2037754.png" alt="Icon 1" />
              </button>
              <div style={{ color: 'white', textAlign: 'center', marginLeft: '300px' }}>
                <p >
                  <span className="solutions-top-header">Protect</span> <br />
                  We have packed all the tools you need to
                  <strong>
                    safeguard yourself and your loved ones
                  </strong>  in our
                  Insurance bucket, <strong>because Protection comes
                    first..</strong>
                </p>
              </div>
            </div>
            <div className="button">
              <button onClick={() => changeImage('https://eazyfin.s3.ap-south-1.amazonaws.com/public-doc/30daa400-1974-11ee-b70c-e3ee355e70b1-manage-dept.png')}>
                <img width={100} src="https://eazyfin.s3.ap-south-1.amazonaws.com/public-doc/596acda0-196f-11ee-943f-af6b82453064-Group%2037756.png" alt="Icon 1" />
              </button>
              <div style={{ color: 'white', textAlign: 'center',marginLeft:'300px'}}> <span className="solutions-top-header" > <span style={{ color: 'black' }}> Manage</span>  Debt</span> <br />
                It's easy to get stuck between Loans and Credit
                cards, but <strong>debt can also be a blessing,</strong> if
                <strong> managed appropriately.</strong> Let us help you with
                that.</div>
            </div>
            <div style={{ padding: '100px 0px 100px' }} className="button">
              <button onClick={() => changeImage('https://eazyfin.s3.ap-south-1.amazonaws.com/public-doc/c9a5efa0-1974-11ee-b70c-e3ee355e70b1-investments.png')}>
                <img width={120} src="https://eazyfin.s3.ap-south-1.amazonaws.com/public-doc/65976930-196f-11ee-943f-af6b82453064-Group%2037757.png" alt="Icon 1" />
              </button>
              <div style={{ color: 'white', textAlign: 'center',marginLeft:'300px'}}> <span className="solutions-top-header" > Execute <span style={{ color: 'black' }}> Investments</span></span> <br />
                We have gathered various <strong> Investment options</strong>
                for you. All you need to do is, make a quick
                choice as per your goals & risk appetite, and
                <strong>
                  execute within seconds.
                </strong></div>
            </div>
            <div className="button">
              <button onClick={() => changeImage('https://eazyfin.s3.ap-south-1.amazonaws.com/public-doc/c7533090-1975-11ee-b70c-e3ee355e70b1-IMG_9055%20Mockup.png')}>
                <img width={130} src="https://eazyfin.s3.ap-south-1.amazonaws.com/public-doc/4d564260-1979-11ee-b70c-e3ee355e70b1-tax-plan.png" alt="Icon 1" />
              </button>
              <div style={{ color: 'white', textAlign: 'center',marginLeft:'300px'}}>
                <span className="solutions-top-header" > <span style={{ color: 'black' }}>Tax Planning &
                  Utility</span>Calculat<span style={{ color: 'black' }}>ors</span></span>
                <span> <br />
                  We've taken the burden away from <strong> Tax
                    computation</strong>  to help you <strong> calculate and save
                      taxes</strong>  through a simple and quick tool, along
                  with simplifying other complex calculations
                  for you.</span>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '0px 30px 20px', padding: '0px 30px 0px' }} className="loyalty-coin">
        <div className="flex flex-wrap ">
          <div className="">
            <div className="max-w-2xl mb-8">
              <h1 className="header-text leading-snug tracking-tight" >
                <span style={{ color: "white" }}>A</span>REWARD<span style={{ color: 'white' }}>FOR <br /> YOUR</span>LOYALTY
              </h1>
              <p style={{ color: 'white', fontSize: '20px', fontWeight: '400px', textAlign: 'center', }}>
                From registration to transaction <strong>- Earn
                  reward</strong>  at every touch point <strong> through your
                    financial planning journey!</strong>
              </p>
              <p className="light-text">
                Get Cash 200 On Complete Your Kyc and Persolnal details
              </p>
            </div>
          </div>
          <div style={{ paddingLeft: '150px', width: '700px', }}>
            <LoyaltyAnimation />
          </div>
        </div>
      </div>
      <div style={{ margin: '30px 30px 30px ', color: 'white' }} className="blog-background">
        <BlogCarousel />
      </div>
      <div style={{ textAlign: 'center', margin: '40px 30px 40px', }} className="faq-container">
        <p style={{ fontWeight: 'bold', fontSize: '60px', color: 'white' }} >
          You <span style={{ color: '#e4e986' }}>Ask</span>, We <span style={{ color: '#e4e986' }}>Help</span>
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0px 0px 0px' }}>
          <div style={{ padding: '100px 0px 0px ' }} >
            <Faq faqData={faqData} />
          </div>
          <div style={{ width: '500px', height: '500px' }}>
            <LottieAnimation />
          </div>
        </div>
      </div>
      <div style={{ margin: '30px 30px 30px ' }} className="testimonial-background">
        <TestimonialCarousel />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{
          padding: '120px 0px 0px',
          alignItems: 'center', fontSize: "xx-large",
          fontWeight: "500"
        }}>
          <p>
            Your <span style={{ color: "#e4e986", fontSize: '30px' }}>Identity,</span> <br />
            Your <span style={{ color: "#e4e986", fontSize: '30px' }}>Money...</span>
          </p>
          <p style={{ fontWeight: 'bold', fontSize: "40px", color: 'darkblue' }}>
            Safe, Secured, & <br />
            Regulated By
          </p>
        </div>
        <div style={{ float: 'right' }}>
          <img width={500} src="https://eazyfin.s3.ap-south-1.amazonaws.com/public-doc/eee39dd0-14d8-11ee-b69a-b1b161baaf0d-5Asset%201.png" />
        </div>
      </div>
      <div className='footer-container-color'>
        <Footer />
      </div>
      <PopupWidget />
    </>
  );
}

export default Home;