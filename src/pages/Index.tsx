import { Link } from "react-router-dom";

export default function Index() {

    return <>
        <div className="bg-gradient-to-r from-[#FFFFEC] to-white">
            <div>
                <section className="hero px-4">
                    <div id="optimize">
                        <h1 className="text-4xl md:text-5xl pt-24"> Optimize Your Online Experience with Our <br />
                            Advanced <span className="blue">URL Shortening </span>Solution
                        </h1>

                        <div className="flex justify-center">
                            <img src="/icons/vector.svg" />
                        </div>


                        <p id="paragraph" className="mt-4">
                            Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, <br />
                            branded links, and domain customization options to reinforce your brand presence and <br />
                            enhance user engagement.
                        </p>
                        <div className="flex justify-center">
                            <div className="flex justify-between w-3/5 sm:w-2/5 md:w-1/3 xl:w-1/6 mt-4">
                                <Link to="/register" className="text-white bg-blue-700 rounded-full py-1 px-6">
                                    Sign Up
                                </Link>
                                <span id="learn">Learn more</span>
                            </div>   
                        </div>

                        <div className="flex flex-col justify-center mt-5">
                            <div className="flex justify-center">
                                <div className="mt-4 w-[701px] h-[337px]">
                                    <img src="/icons/group.svg" />
                                </div> 
                            </div>
                           
                            <img src="/icons/hero.svg" />
                        </div>                    
                    </div>
                </section>
            </div>
        </div>

        <div className="flex justify-between px-4 lg:px-36 pt-16">
            <p className="text-4xl font-bold">
                One stop.<br /> 
                Four <span className="blue">Possibilities</span>.</p>
            
            <div className="flex flex-col md:flex-row justify-between w-3/5">
                <p>
                    <span className="font-bold text-2xl">3M</span>
                    <br /> Active users
                </p>
                <p> <span className="font-bold text-2xl">60M</span> <br /> Links & QR codes created</p>
                <p> <span className="font-bold text-2xl">1B</span> <br /> Clicked & Scanned connections</p>
                <p> <span className="font-bold text-2xl">300K</span><br /> App Integrations</p>
            </div>
        </div>

        <div className="mt-32 px-4 lg:flex lg:justify-between lg:gap-x-10">
            <div className="lg:w-3/5">
                <div className="flex justify-center lg:justify-start">
                    <img src="/icons/line_70.svg" className="mr-3" />
                    <p className="text-3xl font-bold"> Why choose <span className="blue">Scissors</span></p>
                </div>
            
                
                <p className="scissors" style={{
                    lineHeight: '28px',
                    fontSize: '16px'
                }}
                >
                    Scissors is the hub of everything that has to do with your link management. We shorten your URLs, allow you creating custom ones for your personal, business, event usage. Our swift QR code creation, management and usage tracking with advance analytics for all of these is second to none.
                </p>
            </div>
            
            <div className="mt-5 lg:mt-0 grid md:grid-cols-2 gap-y-5">
            <div className="item2">
                <img src="/icons/group_6.svg" />
                <h2 className="shortening text-2xl"> URL Shortening</h2>
                <p style={{
                    lineHeight: '24px'
                }} className="scissors">Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.</p>
            </div>
            <div className="item3">
                <img src="/icons/frame_1.svg" />
                <h2 className="text-2xl">Custom URLs</h2>
                <p style={{ lineHeight: '24px' }} className="scissors">With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses.</p>
            </div>
            <div className="item4">
                <img className="text-2xl" src="/icons/frame_2.svg" />
                <h2 className="text-2xl">QR Codes</h2>
                <p style={{ lineHeight: '24px' }} className="scissors">Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.</p>
            </div>
            <div className="item5">
                <img className="text-2xl" src="/icons/frame_3.svg" />
                <h2 className="text-2xl">Data Analytics</h2>
                <p style={{ lineHeight: '24px' }} className="scissors">Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.</p>
            </div>
            </div>
          

        </div>

        <div className="pricing-table">
            <div className="details mt-40">
                <div className="text-3xl flex justify-center w-full font-bold">
                    <img className="mr-3" src="/icons/line_70.svg" /> 
                    <p>A <span className="blue">price perfect</span> for your needs.</p>
                </div>

                <p style={{ textAlign: 'center', lineHeight: '23px', marginTop: '12px' }}>
                    From catering for your personal, business, event, socials needs, you can be<br />
                    rest assured we have you in mind in our pricing.</p>
            </div>
        </div>

        <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 px-2 cards">
                <div className="border-2 rounded-lg">
                    <ul id="arranged">
                        <li className="button-bar text-xl">Basic</li>
                        <li className="button-bar"><h1 className="text-3xl font-bold">Free</h1></li>
                        <li className="button-bar"><h5>Free plan for all users</h5></li>
                        <li className="button-bar"><img src="/icons/check-circle.svg" />  Unlimited URL shortening</li>
                        <li className="button-bar"><img src="/icons/check-circle.svg" />  Basic Link Analytics</li>
                        <li className="button-bar"><img src="/icons/check-circle.svg" />  Customizable Short Links</li>
                        <li className="button-bar"><img src="/icons/check-circle.svg" />  Standard support</li>
                        <li className="button-bar"><img src="/icons/check-circle.svg" />  Ad-supported</li>


                    </ul>
                </div>

                <div className="card-active rounded-lg lg:scale-110">
                    <ul id="arranged">
                        <li className="button-bar text-xl">Professional</li>
                        <li className="button-bar"><h1 className="text-3xl font-bold">$15/month</h1></li>
                        <li className="button-bar"><h5>ideal for business creators</h5></li>
                        <li className="button-bar"><img src="/icons/check-circle.svg" />  Enhanced Link Analytics</li>
                        <li className="button-bar"><img src="/icons/check-circle.svg" />  Custom Branded Domains</li>
                        <li className="button-bar"><img src="/icons/check-circle.svg" />  Advanced Link customization</li>
                        <li className="button-bar"><img src="/icons/check-circle.svg" />  Priority support</li>
                        <li className="button-bar"><img src="/icons/check-circle.svg" />  Ad-free Experience</li>


                    </ul>
                </div>

                <div className="border-2 rounded-lg">
                    <ul id="arranged">
                        <li className="button-bar text-xl">Teams</li>
                        <li className="button-bar" ><h1 className="text-3xl font-bold">$25/month</h1></li>
                        <li className="button-bar" ><h5>share up to 10 users</h5></li>
                        <li className="button-bar"><img src="/icons/check-circle.svg" /> Team collaboration</li>
                        <li className="button-bar"><img src="/icons/check-circle.svg" />  User Roles and Permissions</li>
                        <li className="button-bar"><img src="/icons/check-circle.svg" /> Enhanced Security</li>
                        <li className="button-bar"><img src="/icons/check-circle.svg" />  Api Access</li>
                        <li className="button-bar"><img src="/icons/check-circle.svg" /> Dedicated Account Manager</li>


                    </ul>
                </div>

            </div>
        </div>

        <div id="custom">
            <button id="get">Get Custom Pricing</button>
            <button id="select"> select pricing</button>
        </div>

       

        <div id="line">
            <h1><img src="/icons/line_70.svg" />FAQs</h1>
            <div id="margin">
                <h4  > How does URL shortening work?</h4>
                <p className="name" >URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the <br />
                    original URL. When a user clicks on the shortened link, they are redirected to the intended destination.
                </p>
                <h4 className="name" >Is it necessary to create an account to use the URL shortening service?</h4>
                <h4 className="name" >Are the shortened links permanent? Will they expire?</h4>
                <h4 className="name" >Are there any limitations on the number of URLs I can shorten?</h4>
                <h4 className="name" >Can I customize the shortened URLs to reflect my brand or content?</h4>
                <h4 className="name" >Can I track the performance of my shortened URLs?</h4>
                <h4 className="name" >How secure is the URL shortening service? Are the shortened links protected against <br />
                    spam or malicious activity?</h4>
                <h4 className="name" >What is a QR code and what can it do?</h4>
                <h4 className="name" >Is there an API available for integrating the URL shortening service into my own <br />
                    applications or websites?  </h4>



            </div>
        </div>

        <div id="revolution">
            <h1>Revolutionizing Link Optimization</h1>
            <button style={{ marginTop: '15px' }}>Get Started</button>
        </div>

       
    </>
}