import React from 'react'
import './home.css'

function Home() {
  return (
    <div className='cont-body'>
    <div className="container">
    <div className="title-main">Help</div>
    <div className="title">Raise Support</div>
    <div className="content">
      <div className='form'>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Name</span>
            <input type="text" placeholder="name" required />
          </div>
          <div className="input-box">
            <span className="details">Target Field</span>
            <input type="text" placeholder="Website Link" required />
          </div>
          <div className="input-box-full input-box">
            <span className="details">Job Title</span>
            <input className='large-width' type="text" placeholder="Title" required />
          </div>
          <div className="input-box">
            <span className="details">Job Category</span>
            <select name="opt">
                <option value="Technology">Technology</option>
                <option value="Technology">Technology</option>
                <option value="Technology">Technology</option>
                <option value="Technology">Technology</option>
            </select>
          </div>
          <div className="input-box">
            <span className="details">Job Type</span>
            <select name="opt">
                <option value="Full Time">Full Time</option>
                <option value="Full Time">Full Time</option>
                <option value="Full Time">Full Time</option>               
                <option value="Full Time">Full Time</option>
            </select>
          </div>
          <div className="input-box">
            <span className="details">Job Location</span>
            <input type="text" placeholder="Location" required />
          </div>
          <div className="input-box">
            <span className="details">Salary Range</span>
            <input type="text" placeholder="Salary Range" required />
          </div>
          <div className="input-box">
            <span className="details">Experience</span>
            <input type="text" placeholder="Experience" required />
          </div>
          <div className="input-box">
            <span className="details">Qualification</span>
            <input type="text" placeholder="Qualification" required />
          </div>
        </div>
        
        <div className="button">
          <input type="submit" value="Submit" />
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Home