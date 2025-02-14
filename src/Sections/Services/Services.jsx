import React from 'react'
import styles from './Service.module.css'
import ServiceList from '../../common/ServiceList'
import checkMarkLight from '../../assets/check-mark-light.svg'

function Services() {
    return (
        <section id='services' className={styles.Cont}>
            <h1 className='sectiontTitle'>Services</h1>
            <div className={styles.serviceList}>
                <ServiceList  src={checkMarkLight} service='Server-Side Logic'/>
                <ServiceList  src={checkMarkLight} service='Database Management'/>
                <ServiceList  src={checkMarkLight} service='API Development & Integration '/>
                <ServiceList  src={checkMarkLight} service=' Authentication & Authorization'/>
                <ServiceList  src={checkMarkLight} service='Cloud Deployment & Hosting'/>
                <ServiceList  src={checkMarkLight} service='Responsive Design'/>
                <ServiceList  src={checkMarkLight} service='Testing and Debugging'/>
                <ServiceList  src={checkMarkLight} service='Developer Documentation'/>
            </div>

        </section>
    )
}

export default Services
