import React from 'react'
import Card from './components/Card'

const App = () => {
  const jobOpenings = [
  {
    "brandLogo": "https://imgs.search.brave.com/j5FNhYRZkpcRlamgbXdPpPszJOrLUKGtgQMdE1q-Grg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjIv/NDg0LzUwOS9zbWFs/bC9nb29nbGUtbGVu/cy1pY29uLWxvZ28t/c3ltYm9sLWZyZWUt/cG5nLnBuZw",
    "companyName": "Google",
    "datePosted": "5 days ago",
    "post": "Software Engineer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "$45/hour",
    "location": "Bangalore, India"
  },
  {
    "brandLogo": "https://imgs.search.brave.com/GxVOq9xuqtiB4Tpa8JJxeWKumoDP0A9x9UXm7yU0e4A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMTg2/MC8xNjM3NS9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE2Mzc1NzYz/Mi1zdG9jay1waG90/by1hbWF6b24tbG9n/by1vbi1hLXdoaXRl/LmpwZw",
    "companyName": "Amazon",
    "datePosted": "2 weeks ago",
    "post": "Backend Developer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$50/hour",
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://imgs.search.brave.com/KX9lQYmGMvZRZeOxgq3gz-84WBhU3PzszozkeMODMNo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTUv/MjEwLzg5MC9zbWFs/bC9tZXRhLWxvZ28t/c3F1YXJlLXJvdW5k/ZWQtbWV0YS1sb2dv/LW1ldGEtbG9nby1m/cmVlLWRvd25sb2Fk/LWZyZWUtcG5nLnBu/Zw",
    "companyName": "Meta",
    "datePosted": "10 days ago",
    "post": "Frontend Engineer",
    "tag1": "Part Time",
    "tag2": "Senior Level",
    "pay": "$60/hour",
    "location": "Mumbai, India"
  },
  {
    "brandLogo": "https://imgs.search.brave.com/gv4WNLUEiumszrQhs9sYAc1KuwHIcrTS2l7O-UcZmTo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q4Lzhm/LzMyL2Q4OGYzMjQz/OTU0Zjc0NGI0YjIx/MmVmOTM1ODFhMTI0/LmpwZw",
    "companyName": "Apple",
    "datePosted": "1 week ago",
    "post": "iOS Developer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$70/hour",
    "location": "Delhi, India"
  },
  {
    "brandLogo": "https://imgs.search.brave.com/ooxXqITHt4SVhBVlRBD0fBCKeyKEma7-cgG4eGWmV88/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/MTkwLzY5OC9zbWFs/bC9uZXRmbGl4LWxv/Z28tbmV0ZmxpeC1p/Y29uLWZyZWUtZnJl/ZS12ZWN0b3IuanBn",
    "companyName": "Netflix",
    "datePosted": "3 days ago",
    "post": "Data Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$65/hour",
    "location": "Pune, India"
  },
  {
    "brandLogo": "https://imgs.search.brave.com/9lieCtgJxjDZ639TVZ38AZrq0ilUkBOwIcToEvO7i2g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9xcGgu/Y2YyLnF1b3JhY2Ru/Lm5ldC9tYWluLXFp/bWctZjUyMzdkY2U3/NzY5N2IzMjBjYjQ5/Mzc0ODlhYTU1NTAu/d2VicA",
    "companyName": "Microsoft",
    "datePosted": "8 days ago",
    "post": "Cloud Engineer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "$55/hour",
    "location": "Noida, India"
  },
  {
    "brandLogo": "https://imgs.search.brave.com/szwVYyj9nIXppAwe7H1Zy1A6DC2hAI6AaL4AIHcvVSA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0Fkb2JlLUxvZ28t/MTk5My01MDB4MzQ0/LmpwZw",
    "companyName": "Adobe",
    "datePosted": "4 days ago",
    "post": "UI/UX Designer",
    "tag1": "Part Time",
    "tag2": "Mid Level",
    "pay": "$40/hour",
    "location": "Bangalore, India"
  },
  {
    "brandLogo": "https://imgs.search.brave.com/5YEwYfjkJQFgwtCV0wRyjGu1fMFI-krKxY9uKJLVyY4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJhbmRmZXRjaC5p/by9pZGlkTmJpaU9k/L3cvMzk5L2gvMzk5/L3RoZW1lL2Rhcmsv/aWNvbi5qcGVnP2M9/MWJ4aWQ2NE11cDdh/Y3pld1NBWU1YJnQ9/MTY2ODUxNTI3OTgw/Nw",
    "companyName": "Uber",
    "datePosted": "6 days ago",
    "post": "DevOps Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$75/hour",
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://imgs.search.brave.com/hlimvJfVs49LXUX2pGRySukW84avZYsOR9X4P5Urz0U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI4LzEvYWlyYm5i/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTI4NDkw/Ny5wbmc",
    "companyName": "Airbnb",
    "datePosted": "12 days ago",
    "post": "Product Manager",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$80/hour",
    "location": "Gurgaon, India"
  },
  {
    "brandLogo": "https://imgs.search.brave.com/JoSN99Gcj-ZR09NGByTMzzByOMoofOZLhw9Gd4hQozs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0x4/OUZTWEZaZjRqNHBi/ZW16b29yYWMuanBn",
    "companyName": "Tesla",
    "datePosted": "2 days ago",
    "post": "Embedded Systems Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$68/hour",
    "location": "Mumbai, India"
  }
];

console.log(jobOpenings);
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        return <div key={idx}>
          <Card company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} brandLogo={elem.brandLogo} datePosted={elem.datePosted} location={elem.location}/>
        </div>
      })}
      </div>
  )
}

export default App
