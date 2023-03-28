import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './FooterStyles.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='col solutions'>
                    <h6>راه حل</h6>
                    <ul>
                        <li><Link to='/' className='link'>مارکتینگ</Link></li>
                        <li><Link to='/' className='link'>آنالیز</Link></li>
                        <li><Link to='/' className='link'>تجاری</Link></li>
                        <li><Link to='/' className='link'>بینش ها </Link></li>
                    </ul>
                </div>
                <div className='col support'>
                    <h6>حمایت کردن</h6>
                    <ul>
                        <li><Link to='/' className='link'>قیمت گذاری</Link></li>
                        <li><Link to='/' className='link'>مستندات</Link></li>
                        <li><Link to='/' className='link'>راهنماها</Link></li>
                        <li><Link to='/' className='link'>API وضعیت</Link></li>
                    </ul>
                </div>
                <div className='col company'>
                    <h6>شرکت</h6>
                    <ul>
                        <li><Link to='/' className='link'>درباره</Link></li>
                        <li><Link to='/' className='link'>بلاگ ها</Link></li>
                        <li><Link to='/' className='link'>شغل</Link></li>
                        <li><Link to='/' className='link'>مطبوعات</Link></li>
                    </ul>
                </div>
                <div className='col legal'>
                    <h6>مجازات</h6>
                    <ul>
                        <li><Link to='/' className='link'>پاداش</Link></li>
                        <li><Link to='/' className='link'>حریم</Link></li>
                        <li><Link to='/' className='link'>کوکی</Link></li>
                        <li><Link to='/' className='link'>مقررات</Link></li>
                    </ul>
                </div>
                <div className='col-subscribe'>
                    <h6>مشترک شدن در خبرنامه ما
                    </h6>
                    <p>آخرین اخبار، مقالات و منابع به صورت هفتگی به صندوق ورودی شما ارسال می شود
                    </p>
                    <div className='subscribe'>
                        <input type='email' placeholder='Enter your email' />
                        <button>مشترک شدن</button>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='content'>
                    <div className='rights'>
                        <p>&copy; کلیه حقوق محفوظ است.</p>
                    </div>
                    <div>
                        <FaFacebook size={20} style={{ color: '#d3d3d3', marginRight: '10px' }} />
                        <FaInstagram size={20} style={{ color: '#d3d3d3', marginRight: '10px' }} />
                        <FaTwitter size={20} style={{ color: '#d3d3d3', marginRight: '10px' }} />
                        <FaGithub size={20} style={{ color: '#d3d3d3', marginRight: '10px' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer