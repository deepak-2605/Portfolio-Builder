import React, { useState } from "react";
import {DatePickerComponent} from '@syncfusion/ej2-react-calendars';
import moment from 'moment';
import { connect } from "react-redux";
import { createEducation } from "./actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const NewEducationForm = ({ educations=[], onCreatePressed }) =>{

    const [university, setUniversity] = useState('');
    const [degree, setDegree] = useState('');
    const [gpa, setGpa] = useState('');
    const [start, setStartDate] = useState('');
    const [end, setEndDate] = useState('');
    const [presentUniversity, setPresentUniversity] = useState(false);
    const [endDateEnabled, setEndDateEnabled] = useState(true);

    return(
    <div className="border rounded bg-light p-3 m-2 mb-4">
            <input 
                className="form-control form-control-sm mb-2 mr-2"
                type="text"
                placeholder="University/College"
                value={university}
                onChange={e => setUniversity(e.target.value)}
            />
            <input 
                className="form-control form-control-sm mb-2 mr-2"
                type="text"
                placeholder="Degree"
                value={degree}
                onChange={e => setDegree(e.target.value)}
            />
            <input 
                className="form-control form-control-sm mb-2" 
                type="text"
                placeholder="GPA"
                value={gpa}
                onChange={e => setGpa(e.target.value)}
            />
            <div className="row mb-2">
                <div className="col mb-2">
                     <input type="date"
                        placeholder="start Date"
                        onChange={e => setStartDate(moment(e.target.value).format("MM YYYY"))}
                    />
                </div>
                <div className="col mb-2">
                     <input type="date"
                        placeholder="End Date"
                        onChange={e => setEndDate(moment(e.target.value).format("MM YYYY"))}
                        enabled={endDateEnabled}
                    />
                </div>
                <div className="col">
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            id="presentUniversity"
                            type="checkbox" 
                            value={presentUniversity} 
                            onChange={e => {
                                setPresentUniversity(e.target.checked);
                                setEndDateEnabled(!endDateEnabled);
                            }}
                            disabled={end !== ''}
                        />
                        <label className="form-check-label" htmlFor="presentUniversity">
                            Present
                        </label>
                    </div>
                </div>
            </div>
            
            <div className="text-right">
            <button 
                className="btn btn-success btn-sm rounded-circle cursor-pointer"
                disabled={university === '' ||
                          degree === '' ||
                          gpa === '' ||
                          start === '' ||
                          (end === '' && !presentUniversity)
                }
                onClick={()=>{
                    onCreatePressed({university, degree, gpa, start, end, presentUniversity});
                    setUniversity('');
                    setDegree('');
                    setGpa('')
                    setPresentUniversity(false);
                }}
            >
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    </div>
    )
}

const mapStateToProps = state =>({
    experiences: state.educations,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: education => dispatch(createEducation(education)),
});

export default connect(mapStateToProps,mapDispatchToProps)(NewEducationForm);
