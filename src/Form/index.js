import './style.css'

import { useRef, useState } from 'react';

const onSubmitAlert = (username) => alert(username)

export default function Form() {
    const inputRef = useRef("");
    const [allowBtn, setAllowBtn] = useState(true);

    function handleSubmit(event) {
        event.preventDefault()
        const val = inputRef.current.value
        onSubmitAlert((allowBtn) ? val : 'Error')
    }

    function handleChange() {
        const val = inputRef.current.value;
        const isLower = (val === val.toLowerCase())
        setAllowBtn(isLower)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="usernameInput">
                    Username:
                    <input ref={inputRef} onChange={handleChange} type="text" id="usernameInput"/>
                </label>
            </div>
            <div>
                { allowBtn 
                ? <span style={{color:'green'}}>Correct</span> 
                : <span style={{color:'red'}}>
                    Error: The username must be lowercase.
                   </span> 
                }
            </div>
            <button type="submit" disabled={!allowBtn}>Submit</button>
        </form> 
    )
}