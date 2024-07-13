

import Banner from '../components/Banner/Banner'
import Category from '../components/Category/Category';
import Gallery from '../components/Gallery/Gallery'
import Products from './Products/Products';
const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Category></Category>
            <Products></Products>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;