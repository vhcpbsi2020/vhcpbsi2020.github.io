import './style.css'

import { register } from 'swiper/element/bundle'
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {Swiper, SwiperSlide} from 'swiper/react' 

function PageMapa (){
    const data = [
        {id: '1', image: 'https://imazon.org.br/wp-content/uploads/2022/09/Simex-Amazonia-Agosto-2021-a-Julho-2021-IMAGEM-scaled.jpg'},
        {id: '2', image: 'https://imazon.org.br/wp-content/uploads/2022/09/Infografico_SIMEX_ACRE_ag2020_jul2021_A4-1-scaled.jpg'},
        {id: '3', image: 'https://imazon.org.br/wp-content/uploads/2022/09/Simex-Amazonas-Agosto-2021-a-Julho-2021-IMAGEM-scaled.jpg'},
        {id: '4', image: 'https://imazon.org.br/wp-content/uploads/2022/09/Simex-Mato-Grosso-Agosto-2021-a-Julho-2021-IMAGEM-1536x1086.jpg'},
        {id: '5', image: 'https://imazon.org.br/wp-content/uploads/2022/09/Simex-Agosto-2020-a-Julho-2021-1536x1086.jpg'},
        {id: '6', image: 'https://imazon.org.br/wp-content/uploads/2022/09/Simex-Rondonia-Agosto-2021-a-Julho-2021-IMAGEM-1536x1086.jpg'},
        {id: '7', image: 'https://imazon.org.br/wp-content/uploads/2022/09/Simex-RR-2022-1536x1037.png'},
        {id: '8', image: 'https://imazon.org.br/wp-content/uploads/2021/09/Simex_AP_Agosto2019-Julho2020.png'}
    ]
    
    return (
    <div className="conteiner">
        <Swiper
            slidesPerView={1}
            pagination={{clickable: true}}
            navigation
        >
            {data.map( (item) =>(
                <SwiperSlide key={item.id}>
                    <img
                        src={item.image}
                        alt="Slide"
                        className="slide-item"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
    )
}
export default PageMapa 