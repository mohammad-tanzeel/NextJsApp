import Head from 'next/head'
import Image from 'next/image'
import Enquiry from '../components/Enquiry'
import Property from '../components/Property'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
            {/* <Script src="/public/scripts/menu.js" /> */}
    {/* <Enquiry></Enquiry> */}
    <Property></Property>
    </div>
  )
}
