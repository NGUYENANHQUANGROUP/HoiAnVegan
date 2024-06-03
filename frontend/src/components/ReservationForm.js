import React from 'react'

const ReservationForm = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full">
                <h2 className="titleText mb-6 text-center">Reservation Form</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" className="w-full px-4 py-2 bg-transparent border rounded-lg focus:outline-none" style={{ border: '1px solid #efa765' }} placeholder="Your Name" />
                    </div>
                    <div className="mb-4 flex flex-wrap">
                        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-2">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" className="w-full px-4 py-2 bg-transparent border rounded-lg focus:outline-none " style={{ border: '1px solid #efa765' }} placeholder="Your Email" />
                        </div>
                        <div className="w-full md:w-1/2 md:pl-2">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" id="phone" className="w-full px-4 py-2 bg-transparent border rounded-lg focus:outline-none " style={{ border: '1px solid #efa765' }} placeholder="Your Phone Number" />
                        </div>
                    </div>
                    <div className="mb-4 flex flex-wrap">
                        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-2">
                            <label htmlFor="date">Reservation Date</label>
                            <input type="date" id="date" className="w-full px-4 py-2 bg-transparent border rounded-lg focus:outline-none " style={{ border: '1px solid #efa765' }} />
                        </div>
                        <div className="w-full md:w-1/2 md:pl-2">
                            <label htmlFor="time">Reservation Time</label>
                            <input type="time" id="time" className="w-full px-4 py-2 bg-transparent border rounded-lg focus:outline-none " style={{ border: '1px solid #efa765' }} />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="guests">Number of Guests</label>
                        <input type="number" min={1} id="guests" className="w-full px-4 py-2 bg-transparent border rounded-lg focus:outline-none " style={{ border: '1px solid #efa765' }} placeholder="Number of Guests" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="notes">Notes</label>
                        <textarea id="notes" className="w-full px-4 py-2 bg-transparent border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" style={{ border: '1px solid #efa765' }} placeholder="Additional Notes (if any)"></textarea>
                    </div>
                    <button type="submit" className="w-full  text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50" style={{ background: ' #efa765' }}>Make a Reservation</button>
                </form>
            </div>
        </div>


    )
}

export default ReservationForm