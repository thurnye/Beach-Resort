import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from "./Title"

export default class Services extends Component {
    state={
        services: [
            {
                icon: <FaCocktail/>,
                title: "free Cocktails",
                info: " lorem ipsu dolor sit amet consectetur adipisicing emit. Magn,corporis!"

            },
            {
                icon: <FaHiking/>,
                title: "Endless Hiking",
                info: " lorem ipsu dolor sit amet consectetur adipisicing emit. Magn,corporis!"

            },
            {
                icon: <FaShuttleVan/>,
                title: "free Shuttle",
                info: " lorem ipsu dolor sit amet consectetur adipisicing emit. Magn,corporis!"

            },
            {
                icon: <FaBeer/>,
                title: "strongest Beer",
                info: " lorem ipsu dolor sit amet consectetur adipisicing emit. Magn,corporis!"

            }
        ]
    }
    render() {
        return (
            <section className="services">
               <Title title="services" />
               <div className="services-center">
                   {this.state.services.map((item,index)=>{
                       return <article key={index} className="service">
                           <span>{item.icon}</span>
                           <h6>{item.title}</h6>
                           <p>{item.info}</p>
                       </article>
                   })}
               </div>
            </section>
        )
    }
}
