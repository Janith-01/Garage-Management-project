import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import EmpNav from "../EmpNav/EmpNav"; // Importing a component for employee navigation
import './applyleave.css'; // Importing CSS styles for this component

function ApplyLeave() {
  const form = useRef(); // Create a ref to access the form DOM element
  const [nameError, setNameError] = useState(false); // State to manage name input error
  const [empIdError, setEmpIdError] = useState(false); // State to manage employee ID input error

  // Function to send email when form is submitted
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if any field is empty
    const formData = new FormData(form.current);
    let isValid = true;
    formData.forEach((value) => {
      if (!value.trim()) {
        isValid = false;
        return false; // Exit loop early if any field is empty
      }
    });

    if (!isValid) {
      alert("Please fill in all fields."); // Alert user if any field is empty
      return;
    }

    if (nameError || empIdError) {
      alert("Please correct the errors before submitting."); // Alert user if there are errors in name or employee ID
      return;
    }

    // Send form data via emailjs
    emailjs
      .sendForm("service_p8fbk0t", "template_pddn7nq", form.current, {
        publicKey: "ZYv3i2VO51H3yLrS2",
      })
      .then(
        () => {
          console.log('SUCCESS!'); // Log success message
          alert("Success! Your leave application has been submitted."); // Alert user about successful submission
        },
        (error) => {
          console.log('FAILED...', error.text); // Log failure message
          alert("Failed to submit leave application. Please try again later."); // Alert user about submission failure
        },
      );
  };

  // Function to handle name input change
  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/[^a-zA-Z0-9\s]/.test(value)) {
      setNameError(true); // Set name error state if input contains symbols
    } else {
      setNameError(false); // Clear name error state
    }
  };
  
  // Function to handle employee ID input change
  const handleEmpIdChange = (e) => {
    const value = e.target.value;
    if (/[^a-zA-Z0-9\s]/.test(value)) {
      setEmpIdError(true); // Set employee ID error state if input contains symbols
    } else {
      setEmpIdError(false); // Clear employee ID error state
    }
  };

  return (
    <div>
      <EmpNav /> {/* Render employee navigation component */}
      <div className='container20'>
        <h1 className='Ah1'>Apply Leave</h1>
        <form ref={form} onSubmit={sendEmail} className='formH'> {/* Form to apply for leave */}
        <label>EmpId</label>
          <input type='text' name="user_EmpId" required onChange={handleEmpIdChange} /> {/* Input field for employee ID */}
          {empIdError && <span className="error-message">Employee ID cannot contain symbols</span>} {/* Error message for employee ID */}
          <br /><br />
          <label>Name</label>
          <input type='text' name="user_name" required onChange={handleNameChange} /> {/* Input field for name */}
          {nameError && <span className="error-message">Name cannot contain symbols</span>} {/* Error message for name */}
          <br /><br />
          
          <label>Leave Type</label>
          <input type='text' name="user_leavetype" required /><br /><br /> {/* Input field for leave type */}
          <label>Start Date</label>
          <input type='date' name="user_Sdate" required /><br /><br /> {/* Input field for start date */}
          <label>End Date</label>
          <input type='date' name="user_Edate" required /><br /><br /> {/* Input field for end date */}
          <label>Reason</label>
          <textarea type='text' name="user_reason" required /><br /><br /> {/* Textarea for reason */}
          <button type="submit" value="Send">Send</button> {/* Submit button */}
        </form>
      </div>
    </div>
  );
}

export default ApplyLeave;

