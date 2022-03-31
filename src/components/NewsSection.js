import { useNavigate } from 'react-router-dom';
import post1 from '../assets/images/post-1.jpg';
import post2 from '../assets/images/post-2.jpg';
import post3 from '../assets/images/post-3.jpg';
import post4 from '../assets/images/post-4.jpg';
import NewsCard from './NewsCard';


export default function NewsSection() {
    let navigate = useNavigate();

    let allNews = [
        {
            id: 1,
            title: 'Plants Around Us',
            image: post1,
            date: 'December 23, 2021',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui aut nobis consequatur illum, obcaecati unde suscipit sit praesentium quaerat ipsam tenetur beatae quidem! Voluptas, vel placeat libero sapiente nihil totam?',
        },
        {
            id: 2,
            title: 'Lush Gardens',
            image: post2,
            date: 'December 16, 2021',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui aut nobis consequatur illum, obcaecati unde suscipit sit praesentium quaerat ipsam tenetur beatae quidem! Voluptas, vel placeat libero sapiente nihil totam?',
        },
        {
            id: 3,
            title: 'Exotic Nature',
            image: post3,
            date: 'November 11, 2021',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui aut nobis consequatur illum, obcaecati unde suscipit sit praesentium quaerat ipsam tenetur beatae quidem! Voluptas, vel placeat libero sapiente nihil totam?',
        },
        {
            id: 4,
            title: 'It Starts with Soil',
            image: post4,
            date: 'November 3, 2021',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui aut nobis consequatur illum, obcaecati unde suscipit sit praesentium quaerat ipsam tenetur beatae quidem! Voluptas, vel placeat libero sapiente nihil totam?',
        }
    ]



    return (
        <section className="App-section">
            <div className="container lg:max-w-screen-xl mx-auto px-4 py-5 md:py-14">
                <div className="py-4">
                    <h2 className="section-title text-5xl">News & Updates</h2>
                    <div className="flex flex-wrap items-start justify-between">
                        <div className="w-full lg:w-5/12 py-4">
                            <div className="card flex flex-col sm:flex-row lg:flex-col justify-between">
                                <img src={allNews[0].image} alt="" className="w-full sm:w-1/2 lg:w-full" />
                                <div className="card-body w-full sm:w-5/12 lg:w-full">
                                    <h3 className="my-3 section-title text-lg text-primary">{allNews[0].title}</h3>
                                    <p className="my-3 truncate text-base text-body news-decs">{allNews[0].description}</p>
                                    <p className="my-3 italic text-secondary text-base">{allNews[0].date}</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            {
                                allNews.map((news, i) => {
                                    if (news.id === 1) {
                                        return
                                    }
                                    return (
                                        <div className={`py-4 ${(news.id < allNews.length) ? 'border-b' : ''}`}>
                                            <NewsCard key={news.id} {...news} />
                                        </div>
                                    )
                                })
                                //    <NewsCard  />
                            }
                        </div>
                    </div>
                    {/* <Link to='/'></Link> */}
                </div>
            </div>
        </section>
    )
}
