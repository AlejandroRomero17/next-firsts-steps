import type { Metadata } from "next";


export const metadata:Metadata = {
 title: 'Contact Page',
 description: 'Here you can see contact information',
};


export default function ContactPage() {
  return(
    <>
      <span className="text-7xl">Contact Page!</span>
    </>
  )
}
