import styles from './Home.module.css';
import Form from "../form/Form";
import List from "../list/List";
import logo from '../../assets/money_investment.jpg'

const Home = () => {
    const investmentDataHandler = (data) => {
        console.log('Investment data: ', data);
        const amount = parseInt(data.monthlyInvestment);
        const rate = parseInt(data.returnRate);
        const duration = parseInt(data.timePeriod);

        let resultData = [];
        let totalInterest = 0;
        let principleAmount = amount;
        for (let i=1; i<=duration; i++) {
            const interest = Math.round((principleAmount * rate) / 100);
            totalInterest += interest;
            principleAmount += interest;
            resultData.push({
                year: i,
                totalPrincipalAmount: principleAmount,
                currentYearInterest: interest,
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
            <List/>
        </div>
    )
}
export default Home;