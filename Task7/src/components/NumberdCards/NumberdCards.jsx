import'./NumberdCards.css'

export default function NumberdCards({Num ,CardTitle , NumColor , Content}) {
  return (
    <div className='number-card'>
        <p className={NumColor? 'border-num' : 'border-num2'}>{Num}</p>
        <h4>{CardTitle}</h4>
        <p className='card-content'>{Content}</p>
    </div>
  )
}
