import styles from './List.module.css';
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})
const List = (props) => {
    return (
        <table className="mt-3">
            <thead>
            <tr>
                <th>Year</th>
                <th>Total Principal Amount</th>
                <th>Yearly Interest</th>
                <th>Total Interest</th>
                <th>Total Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {props.data.map(yearlyData => (
                <tr key={yearlyData.year}>
                    <td>{yearlyData.year}</td>
                    <td>{formatter.format(yearlyData.totalPrincipalAmount)}</td>
                    <td>{formatter.format(yearlyData.yearlyInterest)}</td>
                    <td>{formatter.format(yearlyData.totalInterest)}</td>
                    <td>{formatter.format(yearlyData.totalInvestedCapital)}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}
export default List;