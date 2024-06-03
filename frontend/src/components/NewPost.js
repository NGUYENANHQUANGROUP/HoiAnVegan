import React from 'react'

const NewPost = () => {
    return (

        <div className="container mx-auto px-4 my-6 flex space-x-32 items-start">
            {/* col1 */}
            <div className='flex-1 grid '>

                <div className='customText'>
                    Our Featured Delicacies
                </div>

                <div className='p-8'>
                    <div>
                        <img alt='' src='https://res.cloudinary.com/deukdbm09/image/upload/v1716908981/fa6pujvfa7o3ygau4fpu.jpg' />
                    </div>
                    <div className='titleText text-right'>The restaurant specializes in typical vegetarian dishes of Hoi An</div>
                </div>
                <div className='p-8'>
                    <div>
                        <img alt='' src='https://res.cloudinary.com/deukdbm09/image/upload/v1716909074/wpbb2xugtvtoa4jn1s5y.jpg' />
                    </div>
                    <div className='titleText text-right'>Plant base Heaven Food</div>
                </div>
            </div>

            {/* col2 */}
            <div className='flex-1 grid'>
                <div className='p-8'>
                    <div>
                        <img alt='' src='https://res.cloudinary.com/deukdbm09/image/upload/v1716909153/yb7q0nq8wtmgky3clu67.jpg' />
                    </div>
                    <div className='titleText'>Wood Fire Charred Steak with BBQ Sauce</div>
                </div>
                <div className='p-8'>
                    <div>
                        <img alt='' src='https://res.cloudinary.com/deukdbm09/image/upload/v1716909239/aelx8ih2kynv3vtrzp2i.jpg' />
                    </div>
                    <div className='titleText'>Wood Fire Charred Steak with BBQ Sauce</div>
                </div>
            </div>

        </div>

        

    )
}

export default NewPost