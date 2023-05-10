// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = amount => {
    this.setState(prevState => ({balance: prevState.balance - amount}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const first = name.slice(0, 1)
    return (
      <div className="bgContainer">
        <div className="accountContainer">
          <div className="profileContainer">
            <div className="profile">
              <p className="initial">{first}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balanceContainer">
            <p className="yourBalance">Your Balance</p>
            <div className="rupees">
              <p className="balance">{balance}</p>
              <p className="inRupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="para">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominationsList">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
