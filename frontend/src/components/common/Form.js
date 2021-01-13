import React, {Component} from 'react';
import Joi from 'joi-browser'
class Form extends Component {
    validateProperty = ({name, value}) => {
        const obj = {
            [name]: value
        }
        const schema = {
            [name]: this.schema[name]
        }
        const {error} = Joi.validate(obj, schema)

        return error ? error.details[0].message : null


    }
    handleChange = ({currentTarget: input}) => {
        const errors = {
            ...this.state.errors
        }

        const errorMessage = this.validateProperty(input)
        if (errorMessage) 
            errors[input.name] = errorMessage
         else 
            delete errors[input.name]


        


        let data = {
            ...this.state.data
        }
        data[input.name] = input.value
        this.setState({data})


    }

    renderInput(name, label, type = "text", required, min) {
        const classn = required ? "font-weight-bold required-field" : "font-weight-bold"
        return (<div className="form-group  col-lg-3">
            <label className={classn}
                htmlFor={name}> {label}</label>
            <input name={name}
                type={type}
                className="form-control"
                id={name}
                step="any"
                min={min}
                value={
                    this.state.data[name]
                }
                onChange={
                    this.handleChange
                }/>
        </div>)
    }
    renderSelect(name, label, options) {

        return (<div className="form-group  col-lg-3">
            <label className="font-weight-bold"
                htmlFor={name}> {label}</label>
            <select className="form-control"
                name={name}
                id={name}
                value={
                    this.state.data[name]
                }
                onChange={
                    this.handleChange
            }>
                <option value="" key="default"></option>
                {
                options.map((item) => (<option value={item}
                    key={item}> {item} </option>))
            } </select>
        </div>)
    }

    renderButton(label) {
        return (<div className="form-group m-3 col-lg-3">
            <button className="btn text-light bg-color"
                disabled={
                    this.validate()
            }> {label} </button>
        </div>)
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({loading: true})
        const errors = this.validate()
        this.setState({
            errors: errors || {}
        })
        if (errors) 
            return


        


        this.doSubmit(this.state.data)

    }
    validate = () => {
        const result = Joi.validate(this.state.data, this.schema, {abortEarly: false})
        if (! result.error) 
            return null


        


        const errors = {}

        for (let item of result.error.details) {
            errors[item.path[0]] = item.message
        }
        return errors
    }
    render() {
        return(null);
    }
}

export default Form;
