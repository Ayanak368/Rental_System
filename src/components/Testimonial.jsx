import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title';
import{motion} from 'motion/react'

// prebuiltui.com for testimonial
const Testimonial = () => {
    const testimonials = [
        {
            name: "Anjali R",
            address: "calicut",
            image: assets.testimonial_image_1,
            review: "I rented a stunning lehenga for my cousins wedding, and it fit perfectly! The quality was amazing, and I got so many compliments. Renting saved me so much time and money!"
        },
        {
            name: "Swathi P",
            address: "kochi",
            image: assets.testimonial_image_2,
            review: "Ive rented from them multiple times. Every outfit feels brand new, and the service is very reliable. Ill definitely keep using this for future events."
        },
        {
            name: "Priya S",
            address: "kochi",
            image: assets.testimonial_image_1,
            review: "Loved the gown I rented for a birthday party. The checkout process was smooth, and I didnt have to worry about dry cleaning afterward. Highly recommend!"
        }
        
    ];

    return (
        <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-24">
        <Title
                title="What Our Customers Say"
                subtitle="From weddings to parties, our users share their stories of looking fabulous without the hassle of buying. Discover what they have to say about our rental collection."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
                {testimonials.map((testimonial,index) => (
                    <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
                        viewport={{once:true,amount:0.3}}
                        key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">
                        <div className="flex items-center gap-3">
                            <img
                                className="w-12 h-12 rounded-full"
                                src={testimonial.image}
                                alt={testimonial.name}
                            />
                            <div>
                                <p className="text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.address}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <img key={index} src={assets.star_icon} alt="star-icon" />
                            ))}
                        </div>

                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.review}"</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Testimonial;
