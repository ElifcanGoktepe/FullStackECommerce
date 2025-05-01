import OfferComponent from '../molecules/OfferComponent'
function OfferListComponent() {
  return (
    <div className="container-fluid offer pt-5">
        <div className="row px-xl-5">
          <OfferComponent position='right' offer='20% indirim' title='Bahar Koleksiyonu' image='img/offer-1.png' />
          <OfferComponent position='left' offer='20% off the all order' title='Winter Collection' image='img/offer-2.png' />
        </div>
    </div>
  )
}

export default OfferListComponent