import React from 'react'
import Card from './components/Card'

const App = () => {
  const cardData = [
  {
    "image": "https://randomuser.me/api/portraits/men/1.jpg",
    "rating": 5.0,
    "name": "Dr. Brayn Smith",
    "passion": "Clinical Psychologist",
    "location": "New York, USA",
    "experience": "10 yrs. of exp.",
    "consultations": "1000+ consultations",
    "tag1": "Abuse",
    "tag2": "Depression",
    "tag3": "PTSD",
    "pay": 120,
    "mode": "Online"
  },
  {
    "image": "https://randomuser.me/api/portraits/women/2.jpg",
    "rating": 4.6,
    "name": "Dr. Emma Watson",
    "passion": "Therapist",
    "location": "London, UK",
    "experience": "8 yrs. of exp.",
    "consultations": "800+ consultations",
    "tag1": "Anxiety",
    "tag2": "Stress",
    "tag3": "Burnout",
    "pay": 100,
    "mode": "Offline"
  },
  {
    "image": "https://randomuser.me/api/portraits/men/3.jpg",
    "rating": 4.7,
    "name": "Dr. Chris Evans",
    "passion": "Mental Health Counselor",
    "location": "Los Angeles, USA",
    "experience": "9 yrs. of exp.",
    "consultations": "900+ consultations",
    "tag1": "Trauma",
    "tag2": "PTSD",
    "tag3": "Grief",
    "pay": 110,
    "mode": "Online"
  },
  {
    "image": "https://randomuser.me/api/portraits/women/4.jpg",
    "rating": 4.9,
    "name": "Dr.Scarlett",
    "passion": "Psychiatrist",
    "location": "Chicago, USA",
    "experience": "12 yrs. of exp.",
    "consultations": "1500+ consultations",
    "tag1": "Depression",
    "tag2": "Anxiety",
    "tag3": " Disorders",
    "pay": 150,
    "mode": "Offline"
  },
  {
    "image": "https://randomuser.me/api/portraits/men/5.jpg",
    "rating": 4.5,
    "name": "Dr. Robert",
    "passion": "Addiction Specialist",
    "location": "San Francisco, USA",
    "experience": "11 yrs. of exp.",
    "consultations": "1200+ consultations",
    "tag1": "Addiction",
    "tag2": "Abuse",
    "tag3": "Recovery",
    "pay": 130,
    "mode": "Online"
  },
  {
    "image": "https://randomuser.me/api/portraits/women/6.jpg",
    "rating": 4.4,
    "name": "Dr. Natalie ",
    "passion": "Child Psychologist",
    "location": "Boston, USA",
    "experience": "7 yrs. of exp.",
    "consultations": "700+ consultations",
    "tag1": "Child Behavior",
    "tag2": "ADHD",
    "tag3": "Autism",
    "pay": 95,
    "mode": "Offline"
  },
  {
    "image": "https://randomuser.me/api/portraits/men/7.jpg",
    "rating": 4.6,
    "name": "Dr. Leonardo",
    "passion": "Relationship Counselor",
    "location": "Miami, USA",
    "experience": "10 yrs. of exp.",
    "consultations": "1100+ consultations",
    "tag1": "Relationships",
    "tag2": "Marriage",
    "tag3": "Communication",
    "pay": 125,
    "mode": "Online"
  },
  {
    "image": "https://randomuser.me/api/portraits/women/8.jpg",
    "rating": 4.7,
    "name": "Dr. Jennifer",
    "passion": "Behavioral Therapist",
    "location": "Seattle, USA",
    "experience": "9 yrs. of exp.",
    "consultations": "950+ consultations",
    "tag1": "Behavior",
    "tag2": "Anxiety",
    "tag3": "Stress",
    "pay": 105,
    "mode": "Offline"
  },
  {
    "image": "https://randomuser.me/api/portraits/men/9.jpg",
    "rating": 4.3,
    "name": "Dr.Tom Holland",
    "passion": "Youth Counselor",
    "location": "Toronto, Canada",
    "experience": "6 yrs. of exp.",
    "consultations": "600+ consultations",
    "tag1": "Youth",
    "tag2": "Career",
    "tag3": "Stress",
    "pay": 85,
    "mode": "Online"
  },
  {
    "image": "https://randomuser.me/api/portraits/women/10.jpg",
    "rating": 4.8,
    "name": "Dr.Gal Gadot",
    "passion": "Trauma Specialist",
    "location": "Tel Aviv, Israel",
    "experience": "11 yrs. of exp.",
    "consultations": "1300+ consultations",
    "tag1": "Trauma",
    "tag2": "PTSD",
    "tag3": "Recovery",
    "pay": 140,
    "mode": "Offline"
  }
]
  return (
    <div className='parent'>
     {cardData.map(function(elem,idx){
      return <div key={idx}><Card image={elem.image} rating={elem.rating} name={elem.name} passion={elem.passion} location={elem.location} experience={elem.experience} consultations={elem.consultations} tag1={elem.tag1} tag2={elem.tag2} tag3={elem.tag3} pay={elem.pay} mode={elem.mode}/></div>
     })}
    </div>
  )
}

export default App
