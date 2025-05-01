import React from 'react'
interface FeatureComponentProps {  
    icon: string,
    title: string
}
function FeatureComponent(props: FeatureComponentProps) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center border mb-4" style={{padding: '30px'}}>
                    <h1 className={props.icon+ " text-primary m-0 mr-3"}></h1>
                    <h5 className="font-weight-semi-bold m-0">{props.title}</h5>
                </div>
    </div>
  )
}

export default React.memo(FeatureComponent);