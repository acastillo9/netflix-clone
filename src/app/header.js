"use client"

import { useState } from 'react'
import './header.css'

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <header className={isSidebarOpen ? "sidebar-nav-open" : ""}>
            <div className={"topbar"}>
                <div>
                    <button className="menu-button" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24">
                            <path
                                d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
                                fill="currentColor" />
                        </svg>
                    </button>
                    <a className="logo" href="#">
                        <img src="logo.png" alt="Netflix" />
                    </a>
                    <nav className="top-navigation">
                        <ul>
                            <li><a className="active" href="#">Home</a></li>
                            <li><a href="#">TV Shows</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">New &amp; Popular</a></li>
                            <li><a href="#">My List</a></li>
                            <li><a href="#">Browse by Languages</a></li>
                        </ul>
                    </nav>
                </div>
                <input className="search-input" type="text" name="search" defaultValue="" placeholder="Search" />
                <ul className="toolbar">
                    <li>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
                                <path
                                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                    fill="currentColor" />
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24">
                                <path
                                    d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"
                                    fill="currentColor" />
                            </svg>
                        </button>
                    </li>
                    <li className="profile">
                        <a href="#">
                            <img src="profile.png" alt="Andrés" />
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="12" height="12">
                                        <path
                                            d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                                            fill="currentColor" />
                                    </svg>
                                </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>
            <nav className="sidebar-nav">
                <div>
                    <ul className="settings">
                        <li className="profile">
                            <a href="#">
                                <img src="profile.png" alt="Andrés" />
                                    <div>
                                        <span>Andrés</span>
                                        <span className="switch-profile-link">Switch Profiles</span>
                                    </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">Account</a>
                        </li>
                        <li>
                            <a href="#">Help Center</a>
                        </li>
                        <li>
                            <a href="#">Sign Out of Netflix</a>
                        </li>
                    </ul>
                    <ul className="categories-list">
                        <li>
                            <a className="active" href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">My List</a>
                        </li>
                        <li>
                            <a href="#">Thrillers</a>
                        </li>
                        <li>
                            <a href="#">Latin American Movies &amp; TV</a>
                        </li>
                        <li>
                            <a href="#">Colombian Movies &amp; TV</a>
                        </li>
                        <li>
                            <a href="#">Kids &amp; Family</a>
                        </li>
                        <li>
                            <a href="#">International Movies &amp; TV</a>
                        </li>
                        <li>
                            <a href="#">Reality TV</a>
                        </li>
                        <li>
                            <a href="#">Action</a>
                        </li>
                        <li>
                            <a href="#">Anime</a>
                        </li>
                        <li>
                            <a href="#">Comedies</a>
                        </li>
                        <li>
                            <a href="#">Fantasy</a>
                        </li>
                        <li>
                            <a href="#">Sci-Fi</a>
                        </li>
                        <li>
                            <a href="#">Horro</a>
                        </li>
                        <li>
                            <a href="#">Stand-Up Comedy</a>
                        </li>
                        <li>
                            <a href="#">Documentaries</a>
                        </li>
                        <li>
                            <a href="#">Hollywood Movies</a>
                        </li>
                        <li>
                            <a href="#">Music &amp; Musicals</a>
                        </li>
                        <li>
                            <a href="#">Romance</a>
                        </li>
                        <li>
                            <a href="#">Dramas</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}