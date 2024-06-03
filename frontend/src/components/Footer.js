import React from 'react'
import ReservationForm from './ReservationForm'

const Footer = () => {
    return (
        <footer className='mt-32'>
            <div className='container mx-auto text-center m-10'>
                <p className='titleText' title="">Address</p>
                <p className='' title="">33 Ngô Thời Nhiệm, Phường 6, Quận 3</p>
            </div>
            <div className='container mx-auto p-16 grid grid-cols-2 space-x-16'>
                <div className="map-responsive">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4056917414564!2d106.68718567401717!3d10.780207759126071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1dc6b15e55%3A0x23f6e0d529dd01!2sHoi%20An%20Vegan!5e0!3m2!1sen!2s!4v1715935381550!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div>
                    <ReservationForm />
                </div>
            </div>
            <div className='container text-center mx-auto p-24'>
                <p className='titleText' title="">We Are Waiting to Serve You!</p>
                <p>
                    <button className='px-16 py-4 m-8 font-bold' style={{ border: '1px solid #efa765' }}>Book A Table</button>
                </p>
                <p className='titleText'>Or Call +1 234 56 7890</p>
                <div className='grid grid-cols-3 items-start mt-32'>
                    <div className='grid'>
                        <div className='mb-8'>
                            <span className='titleText'>Location</span>
                            <p>33 Ngô Thời Nhiệm, Phường 6, Quận 3</p>
                        </div>
                        <div>
                            <span className='titleText'>Follow Us</span>
                            <div></div>
                        </div>
                    </div>
                    <div className=''>
                        <img src='https://res.cloudinary.com/deukdbm09/image/upload/v1715831858/yfbwn1ogjqk5egnivg4t.jpg' />
                    </div>
                    <div className='titleText'>Hours</div>
                </div>
            </div>
            <div style={{ boxShadow: '0 -10px 15px -3px rgba(0, 0, 0, 0.5)' }} className='p-4 '>
                <p className='text-center font-bold' title="">Hội An Vegan</p>
            </div>
        </footer>
    )
}

export default Footer