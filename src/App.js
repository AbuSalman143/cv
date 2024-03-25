import React from "react";
import  ReactDOM  from "react-dom";
import Header from "./componet/Header";
import About from "./componet/About";
import MainSection from "./componet/MainSection";
import Footer from "./componet/Footer";



let p1="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, natus, rem, quibusdam commodi pariatur nisi ducimus provident excepturi officia reiciendis nesciunt? Dignissimos explicabo consequatur ut delectus aliquid amet voluptas fugit.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, natus, rem, quibusdam commodi pariatur nisi ducimus provident excepturi officia reiciendis nesciunt? Dignissimos explicabo consequatur ut delectus aliquid amet voluptas fugit."

let p2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, natus, rem, quibusdam commodi pariatur nisi ducimus provident excepturi officia reiciendis nesciunt? Dignissimos explicabo consequatur ut delectus aliquid amet voluptas fugit.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, natus, rem, quibusdam commodi pariatur nisi ducimus provident excepturi officia reiciendis nesciunt? Dignissimos explicabo consequatur ut delectus aliquid amet voluptas fugit.";
let p3="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, natus, rem, quibusdam commodi pariatur nisi ducimus provident excepturi officia reiciendis nesciunt? Dignissimos explicabo consequatur ut delectus aliquid amet voluptas fugit.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, natus, rem, quibusdam commodi pariatur nisi ducimus provident excepturi officia reiciendis nesciunt? Dignissimos explicabo consequatur ut delectus aliquid amet voluptas fugit."
function App(){
    return (
                <div className="container">
                        <Header/>
                        <About/>
                        <div className="section">
                        <MainSection h1="Skill" p={p1} id="#skill" />
                        <MainSection h1="Qalfication" p={p1} id="#qualification"/>
                        <MainSection h1="Project" p={p1} id="#project"/>
                        </div>
                        <Footer/>
                </div>
            )
}


export default App;