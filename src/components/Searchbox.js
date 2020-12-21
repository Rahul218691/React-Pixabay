import React from 'react';

const Searchbox = ({query,setQuery,page,setPage,handleSubmit}) =>{

	return(
			<div>
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-md-4">
							<div className="form-group">
								<input type="text" placeholder="Type your search..." 
								 className="form-control" required
								 value={query}
								 onChange={(e)=>setQuery(e.target.value)}/>
							</div>
						</div>
						<div className="col-md-4">
							<div className="form-group">
								<select className="form-control" value={page} onChange={(e)=>setPage(e.target.value)}
								required>
									<option value="">Choose number of images</option>
									<option value="5">5</option>
									<option value="10">10</option>
									<option value="15">15</option>
									<option value="20">20</option>
								</select>
							</div>
						</div>
						<div className="col-md-4">
							<button className="btn btn-warning">Search</button>
						</div>	
					</div>
				</form>	
			</div>
		)
}

export default Searchbox;