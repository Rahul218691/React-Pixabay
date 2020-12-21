import React,{useState,useEffect} from 'react';
import Loader from './Loader';

const SingleImage = ({match}) =>{
	const [loading,setLoading] = useState(true);
	const [singleImg,setSingleImg] = useState({});
	const API_KEY = process.env.REACT_APP_PIXABAY_API;
	const loadImg = async(id) =>{
		const request = await fetch(`https://pixabay.com/api/?key=${API_KEY}&id=${id}`)
		const result = await request.json();
		setLoading(false)
		setSingleImg(result.hits[0])
	}

	useEffect(()=>{
		loadImg(match.params.id)
		// eslint-disable-next-line
	},[match])

 // console.log(singleImg)
	return loading ? <Loader /> :(
			<>
				<div className="row">
					<div className="col-md-6">
					<img src={singleImg.largeImageURL} alt={singleImg.type}
					 className="img-fluid"/>
					</div>
					<div className="col-md-6">
						<p>Image-ID: #{singleImg.id}</p>
						<p>Downloads: {singleImg.downloads}</p>
						<p>Comments: {singleImg.comments}</p>
						<p>Favourites: {singleImg.favorites}</p>
						<p>Views: {singleImg.views}</p>
					
					</div>
				</div>	
			</>
		)
}

export default SingleImage;