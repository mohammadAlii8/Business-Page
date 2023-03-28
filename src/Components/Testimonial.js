import React from 'react'
import { FaDatabase } from 'react-icons/fa'
import './TestimonialsStyles.css'

const Testimonials = () => {
    return (
        <div className='testimonial'>
            <div className='container'>
                <div className='outline'>
                    <div className='content'>
                        <i><FaDatabase /> Staxx</i>
                        <p className='body'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                        </p>
                        <div className='name'>
                            <p>گلکسی میرزاخانی</p>
                            <p>CEO, Staxx</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials