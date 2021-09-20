import React from "react";
import "./members.css"

const member1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrtTd0GOAkqfYR_Xcvck5M6PJs2Wekb_vgcg&usqp=CAU";
const member2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrtTd0GOAkqfYR_Xcvck5M6PJs2Wekb_vgcg&usqp=CAU";
const member3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrtTd0GOAkqfYR_Xcvck5M6PJs2Wekb_vgcg&usqp=CAU";
const member4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrtTd0GOAkqfYR_Xcvck5M6PJs2Wekb_vgcg&usqp=CAU";

const members = [
    { id: 1, name: "Marck Evans", description: "CEO - Director Executivo", url: member1 },
    { id: 2, name: "Nick Fury", description: "COO - Diretor de Operações", url: member2 },
    { id: 3, name: "Donald McDonald", description: "CTO - Diretor de Tecnologia", url: member3 },
    { id: 4, name: "Fernandez Soto", description: "CSO - Diretor Científico", url: member4 },
    { id: 5, name: "Marcos Oliveira", description: "CEO - Director Executivo", url: member1 },
    { id: 6, name: "Josh Michael", description: "COO - Diretor de Operações", url: member2 },
    { id: 7, name: "Yunior Escalona", description: "CTO - Diretor de Tecnologia", url: member3 },
    { id: 8, name: "Mike Jordan", description: "CSO - Diretor Científico", url: member4 }
]

const Members = () => (
    <div id="fsa-tm">
        <div className="fsa-tm-list cols">
            {
                members.length > 0 ? members.map(member => (
                    <div className="member-item" key={member.id}>
                        <div className="thumnailbx">
                            <img src={member.url} alt="" />
                        </div>
                        <div className="titledesbox">
                            <span className="title">{member.name}</span>
                            <cite>{member.description}</cite>
                        </div>
                    </div>
                )) : 'Sorry, not members to show'
            }
        </div>
    </div>
)

export default Members