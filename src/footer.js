import Lottie from "lottie-react";
import React from "react";
import xx from '../../facbook/src/img/Animation - 1728714306091 (1).json'
import { useForm, ValidationError } from '@formspree/react';
const Footer =()=> {
    const [state, handleSubmit] = useForm("xrgvvdlo");

    return (
        <div>

<div className="tt">
<p>Get ln <span>Touch</span></p>
<div className="div"></div>
<div className="footer">

<div className="">
<Lottie style={{height:180}} animationData={xx}/>
</div>

<div className="max">
<form onSubmit={handleSubmit}>
<input name="email" type="text"/>

<ValidationError 
    prefix="Email" 
    field="email"
    errors={state.errors}
  />

<input name="email" type="email"/>
<ValidationError 
    prefix="Email" 
    field="email"
    errors={state.errors}
  />
</form>
<textarea name="Message" cols="25" rows="7"></textarea>
<ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
<button type="submit" disabled={state.submitting}>Save</button>
{state.succeeded && (<p>Thanks for joining!</p>)}
</div>
  </div>

</div>


        </div>
    )
}

export default Footer



