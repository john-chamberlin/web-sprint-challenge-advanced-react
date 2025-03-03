// write your custom hook here to control your checkout form
import e from 'cors'
import React from 'react'
import { useState } from 'react'

const useForm = (initialValue) => {
    const [values, setValues] = useState(initialValue)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    const handleChanges = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowSuccessMessage(true)
    }
    return [handleChanges, handleSubmit, values, showSuccessMessage ]

}

export default useForm;