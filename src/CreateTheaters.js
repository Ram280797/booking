import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { createTheater } from "./api/Theater";

function CreateTheaters() {
  const formik = useFormik({
    initialValues: {
      name: "",
      type: "",
      address: {
        line1: "",
      },
      "owner name": "person1",
      "owner email": "person@gmail.com",
      phonenumber: "",
      url: " ",
      showtime: "",
    },
    onSubmit : async (values)=> {
    try {
      await createTheater();
    } catch (error) {
      alert("Something went wrong");
    }
 
    },

  });

  return (
    <div class="container-fluid">
      <form  onSubmit={ formik.handleSubmit}>
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-12">
                  <div class="card">
                    <div class="card-body">
                      <label>
                        <h5 class="card-title">Theater Name</h5>
                      </label>
                      <input 
                      name = "name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      type={"text"} className="form-control" />

                      <label>
                        <h5 class="card-title">type</h5>
                      </label>
                      <select className="form-control">
                        <option value={"Ac"}>Ac</option>
                        <option value={"non-Ac"}>non-Ac</option>
                      </select>
                      <div className="col-lg-4">
                        <label>Showtime</label>
                       <input
                        name ="showTime"
                        onChange={formik.handleChange}
                        value={formik.values.showTime}
                            type="time"
                            className="form-control"
                          
                          />
                       
                      </div>
                      <div className="col-lg-4">
                        <label>ShowEndtime</label>
                       
                          <input
                           name ="showEndtime"
                           onChange={formik.handleChange}
                           value={formik.values.showEndtime}
                            type="time"
                            className="form-control"
                           
                          />
                      
                      </div>
                      <div className="row">
                        <div className="col-sm-8">
                          <label> Phonenumber</label>
                          <input 
                          name="phonenumber"
                          onChange={formik.handleChange}
                          value={formik.values.phonenumber}
                          type={"number"} className="form-control" />
                        </div>
                        <div className="col-sm-12">
                          <label>Image url</label>
                          <input
                          name="url"
                           onChange={formik.handleChange}
                           value={formik.values.url}
                            type={"text"} className="form-control" />
                        </div>
                      </div>
                      <h3>Address</h3>
                      <div className="row">
                        <div className="col-sm-12">
                          <label>Line 1</label>
                          <input 
                          name="address"
                          onChange={formik.handleChange}
                          value={formik.values.address} 
                          type={"text"} className="form-control" />
                        </div>
                      </div>
                      <input
                        type={"submit"}
                        value="Submit"
                        className="mt-2 btn btn-primary "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateTheaters;
