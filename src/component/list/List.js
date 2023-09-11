import styles from './List.module.css';

const List = () => {
    return (
        <table className="mt-3">
            <thead>
            <tr>
                <th>Year</th>
                <th>Total Principal Amount</th>
                <th>Interest(this year)</th>
                <th>Total Interest</th>
                <th>Total Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>1000</td>
                <td>100</td>
                <td>100</td>
                <td>500</td>
            </tr>
            <tr>
                <td>2</td>
                <td>2000</td>
                <td>200</td>
                <td>200</td>
                <td>600</td>
            </tr>
            <tr>
                <td>3</td>
                <td>3000</td>
                <td>300</td>
                <td>300</td>
                <td>700</td>
            </tr>
            <tr>
                <td>4</td>
                <td>4000</td>
                <td>400</td>
                <td>400</td>
                <td>800</td>
            </tr>
            <tr>
                <td>5</td>
                <td>5000</td>
                <td>500</td>
                <td>500</td>
                <td>900</td>
            </tr>
            </tbody>
        </table>
    )
}
export default List;