import ServiceComponentMain from '@/components/ServiceComponentMain'
import React from 'react'

const Service1 = () => {
  return (
    <div>
      <ServiceComponentMain
        imageUrl='/serviceCardNavbar1.jpg'
        title='Solar Engineering'
        serviceTitle='Solar Engineering'
        serviceContent='Expertly designed solar solutions that optimize energy efficiency and foster innovation. By integrating advanced technologies, our solar engineering services ensure your systems operate at peak performance, delivering reliable and sustainable energy for the long term.'
      />
    </div>
  )
}

export default Service1
