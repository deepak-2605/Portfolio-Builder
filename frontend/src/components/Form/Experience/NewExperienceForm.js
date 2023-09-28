import React, { useState } from "react";
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import DatePicker from "react-date-picker";

import { format } from 'date-fns';
import moment from 'moment';
import { connect } from "react-redux";
import { createExperience } from "./actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const NewExperienceForm = ({ experiences=[], onCreatePressed }) =>{

    const [position, setPosition] = useState('');
    const [company, setCompany] = useState('');
    const [desc, setDesc] = useState('');
    const [start, setStartDate] = useState('');
    const [end, setEndDate] = useState('');
    const [presentJob, setPresentJob] = useState(false);
    const [endDateEnabled, setEndDateEnabled] = useState(true);
    return(
    <div className="border rounded bg-light p-3 m-2">
            <input 
                className="form-control form-control-sm mb-2 mr-2"
                type="text"
                placeholder="Position"
                value={position}
                onChange={e => setPosition(e.target.value)}
            />
            <input 
                className="form-control form-control-sm mb-2"
                type="text"
                placeholder="Company"
                value={company}
                onChange={e => setCompany(e.target.value)}
            />
            <textarea 
                className="form-control form-control-sm mb-2" 
                placeholder="Role description"
                rows="3" 
                value={desc}
                onChange={e => setDesc(e.target.value)}
            />
            <div className="row mb-2">
                <div className="col mb-2">
                    <input type="date"
                        placeholder="Start Date"
                        onChange={e=> setStartDate(moment(e.target.value).format("MM YYYY"))}
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
                            type="checkbox" 
                            value={presentJob} 
                            id="presentJob"
                            onChange={e => {
                                setPresentJob(e.target.checked);
                                setEndDateEnabled(!endDateEnabled);
                            }}
                            disabled={end !== ''}
                        />
                        <label className="form-check-label" htmlFor="presentJob">
                            Present
                        </label>
                    </div>
                </div>
            </div>
            
            <div className="text-right">
            <button 
                className="btn btn-success btn-sm rounded-circle cursor-pointer"
                disabled={position === '' ||
                          company === '' ||
                          desc === '' ||
                          start === '' ||
                          (end === '' && !presentJob)
                }
                onClick={() => {
                    {console.log("hello")}
                    onCreatePressed({position, company, desc, start, end, presentJob});
                    setPosition('');
                    setCompany('');
                    setDesc('')
                    setPresentJob(false);
                }}
            >
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    </div>
    )
}

const mapStateToProps = state =>({
    experiences: state.experiences,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: experience => dispatch(createExperience(experience)),
});

export default connect(mapStateToProps,mapDispatchToProps)(NewExperienceForm);