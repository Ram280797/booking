import React from 'react'

function CreateMovies() {
  return (
   
    <div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Movies list</h6>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Movie Name</th>
                        <th>Poster</th>
                        <th>Show Time</th>
                        <th>Price</th>
                        
                    </tr>
                </thead>
                                      
                        <tr>
                        <td>Love today</td>
                        <td>
                        https://jbt-en-images.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/10/28141227/Love-Today-OTT-Release.jpg
                        </td>
                        <td>10:00 Am</td>
                        <td>100 Rs</td>
                      
                    </tr>
                    <tr>
                        <td>Sardar</td>
                        <td>  https://jbt-en-images.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/10/28141227/Love-Today-OTT-Release.jpg</td>
                        <td>1:00 Pm</td>
                        <td>120 Rs</td>
                       
                    </tr>
                    <tr>
                        <td>Vikram</td>
                        <td>  https://jbt-en-images.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/10/28141227/Love-Today-OTT-Release.jpg</td>
                        <td>5:00 Pm</td>
                        <td>150 Rs</td>
                        
                    </tr>
                    <tr>
                        <td>Adhiya varma</td>
                        <td>  https://jbt-en-images.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/10/28141227/Love-Today-OTT-Release.jpg</td>
                        <td>8:00 Pm</td>
                        <td>100 Rs</td>
                        
                    </tr>
                    </table>
                    </div>
                    </div>
                    </div> 
                    
                   
  )
}

export default CreateMovies