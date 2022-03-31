
// import { useNavigate } from 'react-router-dom';
// import AboutImg1 from '../assets/images/about-img-1.jpg';
// import AboutImg2 from '../assets/images/about-img-2.jpg';


export default function NewsCard(data) {
    console.log(data);
    // let navigate = useNavigate();
    return (
            <div className="card flex flex-col sm:flex-row gap-x-5 justify-between">
                <img src={data.image} alt="" className="w-full sm:w-2/5 flex-none sm:flex-auto" />
                <div className="card-body w-full sm:w-3/5 flex-none sm:flex-auto">
                    <h3 className="my-3 section-title text-lg text-primary">{data.title}</h3>
                    <p className="my-3 truncate text-base text-body news-decs">{data.description}</p>
                    <p className="my-3 italic text-secondary text-base">{data.date}</p>
                </div>
            </div>
    )
}

