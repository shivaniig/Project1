import '../assets/css/plugins/animation.css'; 


const Index = () => {
  return (
    <div>

<div className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1 slider-bg-shape" data-black-overlay="1">
    {/*..:: <div className="bg-blend-top bg_dot-mask"></div> ::..*/}
    <div className="container">
        <div className="row justify-content-center ">
            <div className="col-lg-12">
                <div className="inner text-center mt--140">
                    <h1 className="title display-one text">Book Blood Test 
                        <br /> 
                        <span className="header-caption ">
                            <span className="cd-headline rotate-1">
                                <span className="cd-words-wrapper" style={{width: "600px"}}>
                                    <b className="theme-gradient is-visible"> Appointments  </b>
                                    <b className="theme-gradient is-hidden">Blood Conenct</b>
                                  
                                </span>
                            </span>
                        </span> 
                          & Analyze Your Reports
                    </h1>
                
                    <div className="form-group">
                        <textarea name="text" id="slider-text-area" cols="30" rows="2" placeholder="Enter a prompt, for example: What are the eligibility requirements for donating blood"></textarea>
                        <a className="btn-default @@btnClass hover:rounded-full hover:scale-105 transition-all duration-400 hover:bg-blue-600" href="chatbot">Start with AI</a>
                    </div>
                    <div className="inner-shape">
                        <img src='src/assets/Images/bg/icon-shape/6629674.webp' alt="Icon Shape" className="iconshape iconshape-one " width={170} />
                        <img src="src/assets/images/bg/icon-shape/7416634.webp" alt="Icon Shape" className="iconshape iconshape-two" width={170}/>
                        <img src="src/assets/images/bg/icon-shape/5804678.webp" alt="Icon Shape" className="iconshape iconshape-three"width={170} />
                        <img src="src/assets/images/bg/icon-shape/8446496.webp" alt="Icon Shape" className="iconshape iconshape-four" width={170} />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Index
