import styles from './Form.module.css';
import {useState} from "react";

const initialData = {
    yearlyInvestment: 10000,
    returnRate: 10,
    timePeriod: 5
}
const Form = (props) => {
    const [investmentData, setInvestmentData] = useState(initialData);

    const inputChangeHandler = (identifier, value) => {
        setInvestmentData(prevState => {
            return {
                ...prevState,
                [identifier]: value
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onSubmitForm(investmentData);
    }

    const resetHandler = () => {
        setInvestmentData(initialData);
    }
    return (
        <div className={styles.formContainer}>
            <form style={{padding: 5}} onSubmit={submitHandler}>
                <div className="row gy-3">
                    <div className="form-group col-sm-6">
                        <label>Yearly Investment ($)</label>
                        <input type="number" value={investmentData['yearlyInvestment']}
                               placeholder="Enter your amount" className="form-control" onChange={(event) => {
                            inputChangeHandler('yearlyInvestment', event.target.value);
                        }}/>
                    </div>

                    <div className="form-group col-sm-6">
                        <label>Expected Return Rate (% per year)</label>
                        <input type="number" value={investmentData['returnRate']}
                               placeholder="Enter Return Rate" className="form-control" onChange={(event) => {
                            inputChangeHandler('returnRate', event.target.value)
                        }}/>
                    </div>

                    <div className="form-group col-sm-6">
                        <label>Investment Time Period (years)</label>
                        <input type="number" value={investmentData['timePeriod']} placeholder="Enter no. of years"
                               className="form-control" onChange={(event) => {
                            inputChangeHandler('timePeriod', event.target.value)
                        }}/>
                    </div>
                    <div className="col-sm-6 d-flex justify-content-center align-items-center">
                        <div>
                            <button type="button" onClick={resetHandler} className="btn btn-info mx-2">RESET</button>
                            <button type="submit" className="btn btn-success">CALCULATE</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Form;