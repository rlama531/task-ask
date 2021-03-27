import React from 'react'
import "./uploadForm.css"

function uploadForm() {
    return (
        <div>
            <form className="uploadForm">
                <div>
                        <label className="uploadName" >
                            Name:
                            <div> 
                                <input type="text" name="name" placeholder="Emily Doe"/>
                            </div>
                        </label>
                    
                </div> 
                <div> 
                    <label className="category"> Category: </label>
                    <div> 
                        <select name="categories" id='categories'>
                            <optgroup label="Graphic Design">
                                <option value="Artwork">Artwork</option>
                                <option value="Business-Cards">Business Cards</option>
                                <option value="logoDesign">Logo Design</option>
                                <option value="Photoshop-Editing">Photoshop Editing</option>
                                <option value="T-shirts">T-shirts</option>
                                <option value="Web-design">Web Design</option>
                            </optgroup>
                            <optgroup label="Music and Audio">
                                <option value="production">Production</option>
                                <option value="Transcription">Transcription</option>
                                <option value="Voice-Over">Voice Over</option>
                                <option value="DJ-mixing">DJ Mixing</option>
                                <option value="Beat-Making">Beat Making</option>
                                <option value="Singers-Vocalists">Singers and Vocalists</option>
                            </optgroup>  
                        </select> 
                    </div> 
                </div> 
                <div> 
                    <label className="taskDescription">
                        Description:
                        <div> 
                            <textarea type="text" name="taskDescription" placeholder="I need a new business logo" style={{ height: "300px", textAlignVertical: "top" }}/>
                        </div> 
                    </label>
                </div> 
                <div> 
                    <label className="budget">
                        Budget(USD): 
                        <div> 
                        <input type="Number" name="taskDescription" placeholder="25"/>
                        </div> 
                    </label>
                </div>
                {/* <div>  
                    <label className="deadline">
                        Deadline: 
                        <div>
                            <input type="date" name="deadline" />
                        </div>
                    </label>
                </div>  */}
                <div> 
                    <input className="submitButton" type="submit" value="Submit" />
                </div> 
            </form>
        </div>
    )
}

export default uploadForm
