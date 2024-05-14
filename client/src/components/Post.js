import React from "react";
import {Link } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import { useDevice } from "../context/device";


export default function Post ({id, title, content, image_url, video_url, date_added}) {
    const {deviceSize} = useDevice();
    // console.log(video_url)
    return (
        <div className="ui container fluid">
            <Link to={`/posts/${id}`} className="ui horizontal card fluid" style={{marginBottom: "15px"}}>
                    {(image_url !== "undefined") &&
                    <div className="item">
                        <img className="ui large image" src={image_url} alt={title} ></img>
                    </div>
                    }

                    {(video_url !== "undefined") && (video_url !== null) && 
                        <div className="item">
                            {(deviceSize > 768 ) ?
                            <div className="ui large image">
                            <VideoPlayer videoUrl={video_url} />
                            </div>
                            :
                            <div style={{width: "90vw"}}>
                            <VideoPlayer videoUrl={video_url} />
                            </div>
                            }
                        </div>
                    }

                <div className="content" style={{padding: "25px"}}>
                    <div className="header">{title}</div>
                    <div className="meta">{date_added}</div> 
                    <div className="description">{content}</div>
                    <div style={{paddingTop: "15px"}}> 
                        <Link to={`/posts/${id}`}  className="ui circular icon button small teal"><i class="external alternate icon"></i></Link>
                        
                    </div>
                    {/* { isAdmin ? (
                        <div style={{paddingTop: "25px", float: "left"}}> 
                            <button className="ui icon button small teal" onClick={handleDeletePost}>
                            <i class="trash icon" style={{visibility: "visible"}}></i>
                            </button>
                        </div>
                    )
                    : <></>    
                } */}
                </div>
            </Link>
        </div>
    );
}
