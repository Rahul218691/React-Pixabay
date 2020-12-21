import React from 'react';
import {Link} from 'react-router-dom';

const ListImages = ({images}) =>{
	return(
		<div className="row mt-2">
			{
				images && images.map(img=>(
						<div className="col-md-4 mb-2" key={img.id}>
							<Link to={`/image/${img.id}`}>
								<img src={img.largeImageURL} alt={img.type} className="img-fluid"/>
							</Link>	
						</div>
					))
			}
		</div>
		)
}

export default ListImages;