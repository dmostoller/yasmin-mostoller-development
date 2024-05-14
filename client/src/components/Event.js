import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/user";
import { useAdmin } from "../context/admin.js"
import { Modal } from "semantic-ui-react";
import EventModal from "./EventModal.js";

export default function Event ({id, name, venue, location, details, image_url, event_date, event_link, onDeleteEvent}) {
    const { user } = useUser()
    const { isAdmin } = useAdmin()
    const [modalOpen, setModalOpen] = useState(false);

    function handleOpen() {
        setModalOpen(true)
    } 

    function handleClose() {
        setModalOpen(false)
    } 

    const handleDeleteEvent = (event) => {
        if (window.confirm("Are you sure you want to delete this event?")) {
        fetch(`/events/${id}`, {
            method: "DELETE"
            })
            .then(() => {
                onDeleteEvent(id)
            })
        }
    }    

    return (
        <div className="ui container fluid">
            <div className="ui horizontal card stackable fluid" style={{marginBottom: "15px"}}>
                <div className="item">
                    <img 
                    src={image_url} 
                    alt={name} 
                    onClick={handleOpen}  
                    className="ui large image"
                    >
                    </img>
                        <Modal
                            open={modalOpen}
                            onClose={handleClose}
                            basic={true}
                            >
                            <EventModal image={image_url} name={name}/>
                        </Modal>
                </div>
                <div className="content" style={{padding: "25px"}}>
                    <div className="header">{name}</div>
                    <div className="meta">{event_date}</div> 
                    <div className="description"><p style={{fontWeight: "bold"}}>{venue}</p></div>
                    <div className="description"><p style={{fontWeight: "bold"}}>{location}</p></div>                                   
                    <div className="description">{details}</div>
                    <div style={{paddingTop: "20px"}}> 
                    <a href={event_link} className="ui circular button small teal" target="_blank" rel="noopener noreferrer">Tickets / Info</a>
                    { user && isAdmin ? (
                        <>
                            <Link to={`/events/${id}/edit`} className="ui circular icon button small teal">
                                <i className="edit icon"></i>
                            </Link>
                            <div className="ui circular icon button small teal" onClick={handleDeleteEvent}>
                                <i class="trash icon"></i>
                            </div>
                        </>
                        )
                        : <></>    
                    }
                </div>
                </div>
            </div>
        </div>
    );
}
