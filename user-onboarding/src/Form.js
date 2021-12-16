import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    console.log(evt.target.checked, evt.target.type);
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <h2>Add New User Here</h2>

        <button disabled={disabled}>submit</button>

        <div className="errors">
          <div>{errors.first_name}</div>
          <div>{errors.last_name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.terms}</div>
        </div>

        <div className="form-group inputs">
          <h4>Sign up</h4>
          <label>First Name
            <input 
                value={values.first_name} 
                type="text" 
                name="first_name"
                onChange={onChange} 
            />
          </label>
          <label>Last Name
            <input 
                value={values.last_name} 
                type="text" 
                name="last_name"
                onChange={onChange} 
            />
          </label>
          <label>Email
              <input 
                value={values.email}
                type='text'
                name='email'
                onChange={onChange}
              />
          </label>
          <label>Password
              <input 
                value={values.password}
                type='password'
                name='password'
                onChange={onChange}
              />
          </label>
          <label>Check box if you agree to the terms of service
              <input 
                checked={values.terms}
                type='checkbox'
                name='terms'
                onChange={onChange}
              />
          </label>

        </div>
      </div>
    </form>
  );
}
