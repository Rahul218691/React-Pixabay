import React,{useState} from 'react';
import Searchbox from './Searchbox';
import ListImages from './ListImages';
import Loader from './Loader';

const Home = () =>{

const API_KEY = process.env.REACT_APP_PIXABAY_API;	

const [query,setQuery] = useState('');
const [page,setPage] = useState('');
const [loading,setLoading] = useState(false);
const [images,setImages] = useState([]);

const handleSubmit = async(e) =>{
	e.preventDefault();
	setLoading(true);
	const request = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&per_page=${page}`)
	const results = await request.json();
	setLoading(false)
	setImages(results.hits);
}

	return(
		<>
			<div>
				<Searchbox query={query} setQuery={setQuery}
				 page={page} setPage={setPage}
				 handleSubmit={handleSubmit}/>
			</div>
			<div>
			{loading && <Loader />}
				<ListImages images={images}/>
			</div>	
		</>	
		)
}

export default Home;