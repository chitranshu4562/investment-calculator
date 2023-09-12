import styles from './Home.module.css';
import Form from "../form/Form";
import List from "../list/List";
import logo from '../../assets/money_investment.jpg'
import {useState} from "react";

const Home = () => {
    const [userInput, setUserInput] = useState(null);
    const investmentDataHandler = (userInput) => {
        console.log('Investment data: ', userInput);
        setUserInput(userInput);
    }
    const resultData = [];
    if (userInput) {
        const amount = userInput['yearlyInvestment'];
        const rate = userInput['returnRate'];
        const duration = userInput['timePeriod'];

        let principalAmount = amount;
        let totalInterest = 0;
        for (let i=1; i<=duration; i++) {
            const interest = (principalAmount * rate) / 100;
            totalInterest += interest;
            principalAmount += interest;
            resultData.push({
                year: i,
                totalPrincipalAmount: principalAmount,
                yearlyInterest: interest,
                totalInterest: totalInterest,
                totalInvestedCapital: (amount * i)
            })
        }
    }
    return (
        <div className="container-fluid pt-3">
            <div className="w-100 m-auto">
                <div className="d-flex justify-content-center align-items-center">
                    <img
                        src={logo}
                        alt="" className={styles.image}/>
                </div>
                <div className={styles.title + ` text-center`}>Investment Calculator</div>
            </div>
            <Form onSubmitForm={investmentDataHandler}/>
            {!userInput &&
                <h2 className="d-flex justify-content-center align-items-center mt-2 text-light">No investment calculated yet.</h2>}
            {userInput && <List data={resultData}/>}
        </div>
    )
}
export default Home;