import './LqBrandSection.css'
export default function LqBrandSection({BrandContent}) {
  return (
    <>
    <section className='LQ-Brand'>
    {
             BrandContent.map((item , index)=>{
                return(
                     <img  className='brand-width' src={item.img}/>  
                )
             })
             
        }
    </section>
    </>
  )
}
