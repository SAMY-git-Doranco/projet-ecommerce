import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Article from '../../components/Article'
//import Navbar from '../../components/Navbar/Navbar'
//import ProductCard from '../../components/ProductCard/ProductCard'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [articles, setArticles] = useState([])
    const [categories, setCategories] = useState([])

    const openMenu = () => {
        setIsOpen(true)
    }

       useEffect(() => {
        fetch("http://localhost:4000/articles", {
          method: "GET",
          
        }).then(res => res.json())
          .then(data => {
            setArticles(data);
            console.log(data);
          })
      }, [])


    return (
        <div className='app'>
            {/* {isOpen && <Navbar />} */}
            <div>Je suis dans home</div>
            <main className='p-8'>
            
                <section>
					<Swiper
						spaceBetween={30}
						slidesPerView={'auto'}
					>
						{
							articles.map(article => (
								<SwiperSlide key={article.id}>
									<Article
										name={article.name}
										image={article.image}
										description={article.description}
										price={article.price}
									/>
								</SwiperSlide>
							))
						}
						{/* {db.courses.map(course => (
							<SwiperSlide key={course.id}>
								<ProductCard
									name={course.name}
									image={course.image}
									description={course.description}
									price={course.price}
								/>
							</SwiperSlide>
						))} */}
					</Swiper>
				</section>

            </main>
        </div>
    )
}

export default Home
