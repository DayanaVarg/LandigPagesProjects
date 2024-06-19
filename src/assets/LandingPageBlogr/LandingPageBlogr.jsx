import './LandingPageBlogr.css'



const LandingPageBlogr = () => {
  return (
    <div className='landingpageblogr'>
        <div className="cont1">
            <div className='space1'>
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
        <div className="cont3">
            <div className='spaceLine'>
                
                <div className='imgs'>    
                    <div className='patternCircles'>
                    </div>
                </div>
                <div className='space-info'>
                    <div className='illustrationPhone'>
                    </div>
                    <div className='infoS'>
                    <h1>State of the Art Infrastructure</h1>
                    <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                    This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="cont4">
            <div className='ilustrationL'>
            </div>
            <div className='cont-i part2'>
                <div>
                    <h4>Free, open, simple</h4>
                    <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                    features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                    and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
                </div>
                <div>
                    <h4>Powerful tooling</h4>
                    <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                    capable of producing even the most complicated sites.
                    </p>
                </div>
            </div>    
        </div>

        <div className='cont5'>
            <footer className='footer'>
                <div className='imageLogo'>
                    <div className='logoF'></div>
                </div>
                
                <div className='infoSpa'>
                    <p className='title'>Product</p>
                    <a>Overview</a>
                    <a>Pricing</a>
                    <a>Marketplace</a>
                    <a>Features</a>
                    <a>Integrations</a>
                </div>
                <div className='infoSpa'>
                    <p className='title'>Company</p>
                    <a>About</a>
                    <a>Team</a>
                    <a>Blog</a>
                    <a>Careers</a>
                </div>
                <div className='infoSpa'>
                    <p className='title'>Connect</p>
                    <a>Contact</a>
                    <a>Newsletter</a>
                    <a>LinkedIn</a>
                </div>
            </footer>
        </div>
    </div>
  )
}

export default LandingPageBlogr