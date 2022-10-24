import React from 'react'

function RaiseIssue() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <form onSubmit={handleSubmit}>
            {/* <TextField label='' variant='filled' onChange = {(e) => e.target.value} /> */}
        </form>
    )
}

export default RaiseIssue