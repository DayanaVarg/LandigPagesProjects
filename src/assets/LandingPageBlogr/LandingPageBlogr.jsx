import './LandingPageBlogr.css'



const LandingPageBlogr = () => {
  return (
    <div className='landingpageblogr'>
        <div className="cont1">
            <header>
                <div className='logo'></div>
                <div className='nav'>
                    <div class="dropdown">
                        <div className='spaceB'><button>Product</button><div className='img'></div></div>
                        <div class="dropdown-options">
                            <a href="#">Overview</a>
                            <a href="#">Pricing</a>
                            <a href="#">Marketplace</a>
                            <a href="#">Features</a>
                            <a href="#">Integrations</a>
                        </div>
                    </div>
                    <div class="dropdown">
                    <div className='spaceB'><button>Company</button><div className='img'></div></div> 
                        <div class="dropdown-options">
                            <a href="#">Integrations</a>
                            <a href="#">Team</a>
                            <a href="#">Blog</a>
                            <a href="#">Careers</a>
                        </div>
                    </div>
                    <div class="dropdown">
                    <div className='spaceB'><button>Connect</button><div className='img'></div></div>
                        <div class="dropdown-options">
                            <a href="#">Contact</a>
                            <a href="#">Newsletter</a>
                            <a href="#">LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div className='opc'>
                        <div className='buttonL'><button>Login</button></div>
                        <div className='buttonS'><button>Sign Up</button></div>
                </div>
            </header>
            <div className='info'>
                <h1>A modern publishing platform</h1>
                <p>Grow your audience and build your online brand</p>
                <div className='buttons'>
                    <button className='btn btn1'>Start for Free</button>
                    <button className='btn btn2'>Learn More</button>
                </div>
            </div>
        </div>
        <div className="cont2">
            <h1>Designed for the future</h1>
            <div className='subcont'>
                <div className='cont-i'>
                    <div>
                        <h4>Introducing an extensible editor</h4>
                        <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                        The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                        videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                        change the looks of a blog.</p>
                    </div>
                    <div>
                        <h4>Robust content management</h4>
                        <p>
                        Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                        by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                        </p>
                    </div>
                </div>

                <div className='ilustrationE'>
                </div>
            </div>
        </div>
       

        <div >

        </div>
    </div>
  )
}

export default LandingPageBlogr