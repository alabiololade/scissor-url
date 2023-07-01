import { Link, Outlet } from "react-router-dom";
import LoaderProvider from "../LoaderContext";



export default function Layout() {
   
    return <>
        <LoaderProvider>
            <header className="bg-gradient-to-r from-[#FFFFEC] to-white">
                <nav className="px-4 xl:px-28">
                    <div className="pt-4">
                        <img width="150" src="/icons/logo.svg" />
                    </div>
                    
                    <ul className="hidden lg:block">
                        <button type="button" className="url">My URLs</button>

                        <li>
                            <a href="#">Features <i className="fa fa-angle-down"></i> </a>

                        </li>

                        <li>
                            <a href="#">Pricing</a>
                        </li>

                        <li>
                            <a href="#">Analytics</a>
                        </li>

                        <li>
                            <a href="#">FAQs</a>
                        </li>



                    </ul>
                    <div className="hidden md:flex justify-between w-1/3 lg:w-1/5 mt-4 lg:mt-0">
                        <Link to="/login" className="text-blue-700 font-bold pt-3">
                            Log in
                        </Link>

                        <Link to="/register" className="text-white bg-blue-700 rounded-full py-3 px-6">
                            Try for free
                        </Link>
                    </div>
                </nav>
            </header>
            <Outlet />
            <footer>
                <div id="scissors">
                    <div className="unit1 scissors-row-span-2" >
                        <img src="/icons/logo_2.svg" />
                        <img style={{ marginTop: '15px' }} src="/icons/socials.svg" />
                    </div>

                    <div className="unit2">
                        <h3>Why scissors ?</h3>
                        <ul style={{ marginTop: '10px' }}>
                            <li id="Api">
                                Scissors 101
                            </li>
                            <li id="Api">
                                Integrations & API
                            </li>
                            <li id="Api">
                                Pricing
                            </li>
                        </ul>
                    </div>

                    <div className="unit3">
                        <h3>Solutions</h3>
                        <ul style={{ marginTop: '10px' }}>
                            <li id="Api">
                                Social Media
                            </li>
                            <li id="Api">
                                Digital Marketing
                            </li>
                            <li id="Api">
                                Custom Service
                            </li>

                            <li id="Api">
                                For Developers
                            </li>
                        </ul>
                    </div>

                    <div className="unit4">
                        <h3>Products</h3>
                        <ul style={{ marginTop: '10px' }}>
                            <li id="Api">
                                Link Management
                            </li>
                            <li id="Api">
                                QR Codes
                            </li>
                            <li id="Api">
                                Link-in-bio
                            </li>
                        </ul>
                    </div>

                    <div className="unit5">
                        <h3>Company </h3>
                        <ul >
                            <li id="Api">
                                About Scissor
                            </li>
                            <li id="Api">
                                Careers
                            </li>
                            <li id="Api">
                                Partners
                            </li>

                            <li id="Api">
                                Press
                            </li>

                            <li id="Api">
                                Contact
                            </li>

                            <li id="Api">
                                Reviews
                            </li>
                        </ul>
                    </div>

                    <div className="unit6">
                        <h3>Resources</h3>
                        <ul style={{ marginTop: '10px' }}>
                            <li id="Api">
                                Blog
                            </li>
                            <li id="Api">
                                Resource Library
                            </li>
                            <li id="Api">
                                Developers
                            </li>

                            <li id="Api">
                                App Connectors
                            </li>

                            <li id="Api">
                                Support
                            </li>

                            <li id="Api">
                                Trust Center
                            </li>

                            <li id="Api">
                                Browser Extension
                            </li>

                            <li id="Api">
                                Mobile App
                            </li>
                        </ul>
                    </div>

                    <div className="unit7">
                        <h3>Features</h3>
                        <ul style={{ marginTop: '10px' }}>
                            <li id="Api">
                                Branded Links
                            </li>
                            <li id="Api">
                                Mobile Links
                            </li>
                            <li id="Api">
                                Campaign
                            </li>

                            <li id="Api">
                                Management &
                            </li>

                            <li id="Api">
                                Analytics
                            </li>

                            <li id="Api">
                                QR code generation
                            </li>
                        </ul>
                    </div>


                    <div className="unit8">
                        <h3>Legal</h3>
                        <ul style={{ marginTop: '10px' }}>
                            <li id="Api">
                                Privacy Policy
                            </li>
                            <li id="Api">
                                Cookie Policy
                            </li>
                            <li id="Api">
                                Terms of Service
                            </li>

                            <li id="Api">
                                Acceptable Use Policy
                            </li>

                            <li id="Api">
                                Code of Conduct
                            </li>

                        </ul>
                    </div>

                </div>

                <img style={{ marginTop: '30px', alignItems: 'left' }} src="/icons/footer.svg" />
            </footer>
        </LoaderProvider>
    </>
}