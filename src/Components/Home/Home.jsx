/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {

    // sate section
    const[allActors, setallActors] = useState([])
    const [selecedActors, setselecedActors] = useState([])
    const [remaining, setRemaining]=useState(0)
    const [totalcost, setTotalcost] = useState(0)

    // useEffect section
    useEffect(()=>{
        fetch("./data.json")
        .then(res => res.json())
        .then(data => setallActors(data))
    },[])

    const  handleselectActor = (actor) =>{
        // eta dile suddhu oi card er inf0 tai show korbe 
        // setselecedActors([actor])

        // eta dile ager card + jetay slec kora hobe seta soho show korbe 
        const isExist = selecedActors.find((item) => item.id == actor.id);
        let count = actor.salary;

        if(isExist){
            return alert('it exists')
        }else{
            
            selecedActors.forEach((item)=>{
                count = count + item.salary
            })
            //console.log(num)
            const totalRemaining = 20000 - count
        
            if(count>20000){
                return alert('taka nai')
            }
            else if(totalRemaining<800){
                return alert('500 rakhte hobe')
            }
            setTotalcost(count)
            setRemaining(totalRemaining)
            setselecedActors([...selecedActors,actor])
        }
        
    }

    // const generateSerialNumbers = () => {
    //     const serial = selecedActors.map((_, index) => index + 1);
    //     setSerial(serial);
    //   };
    //console.log('select',selecedActors)

    return (
        <div className='Container'>
            <div className="home-container">
                {/* card section */}
                <div className='gap-4 grid grid-cols-3'>
                    {
                        allActors.map(actor => (<div key={actor.id} className='w-72 h-72 bg-black'>
                        <div className="card_img">
                            <img className='photo' src={actor.image} alt="" />
                        </div>
                        <h2>{actor.name}</h2>
                        <p><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, ratione.</small></p>

                        <div className="info">
                            <p>Salary: {actor.salary}</p>
                            <p>Role: {actor.role}</p>
                        </div>
                        <button onClick={()=>handleselectActor(actor)} className='card-btn'>Select</button>
                    </div>))
                    }

                </div>

                {/* cart section */}
                <div className="cart">
                    <Cart selecedActors={selecedActors} remaining={remaining} totalcost ={totalcost} ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;