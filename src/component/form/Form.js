import styles from './Form.module.css';
import {useState} from "react";

const Form = (props) => {
    const [monthlyInvestment, setMonthlyInvestment] = useState('');
    const [returnRate, setReturnRate] = useState('');
    const [timePeriod, setTimePeriod] = useState('');

    const inputChangeHandler = (identifier, value) => {
        if (identifier === 'MONTHLY_INVESTMENT') {
            setMonthlyInvestment(value);
        } else if (identifier === 'RETURN_RATE') {
            setReturnRate(value);
        } else {
            setTimePeriod(value);
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const investmentData = {
            monthlyInvestment: monthlyInvestment,
            returnRate: returnRate,
            timePeriod: timePeriod
        }
        props.onSubmitForm(investmentData);
        setMonthlyInvestment('');
        setReturnRate('');
        setTimePeriod('');
    }

    const resetHandler = () => {
        console.log('reset button is clicked');
    }
    return (
        <div className={styles.formContainer}>
            <form style={{padding: 5}} onSubmit={submitHandler}>
                <div className="row gy-3">
                    <div className="form-group col-sm-6">
                        <label>Monthly Investment ($)</label>
                        <input type="text" name="MONTHLY_INVESTMENT" value={monthlyInvestment}
                               placeholder="Enter your amount" className="form-control" onChange={(event) => {
                            inputChangeHandler(event.target.name, event.target.value);
                        }}/>
                    </div>

                    <div className="form-group col-sm-6">
                        <label>Expected Return Rate (% per year)</label>
                        <input type="text" name="RETURN_RATE" value={returnRate}
                               placeholder="Enter Return Rate" className="form-control" onChange={(event) => {
                            inputChangeHandler(event.target.name, event.target.value)
                        }}/>
                    </div>

                    <div className="form-group col-sm-6">
                        <label>Investment Time Period (years)</label>
                        <input type="text" name="TIME_PERIOD" value={timePeriod} placeholder="Enter no. of years"
                               className="form-control" onChange={(event) => {
                            inputChangeHandler(event.target.name, event.target.value)
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