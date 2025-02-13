import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { APP_ID, SERVER_SECRET } from './constant';
import './VideoPage.css'; // Import the CSS file

const VideoPage = () => {
    const { id } = useParams();
    const roomID = id;
    const videoContainer = useRef(null);

    useEffect(() => {
        const myMeeting = async () => {
            // Generate Kit Token
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                APP_ID, SERVER_SECRET, roomID, Date.now().toString(), "User"
            );

            // Create instance object from Kit Token
            const zp = ZegoUIKitPrebuilt.create(kitToken);

            // Start the call
            zp.joinRoom({
                container: videoContainer.current,
                sharedLinks: [
                    {
                        name: 'Copy Link',
                        url: `${window.location.protocol}//${window.location.host}/room/${roomID}`,
                    },
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                },
            });
        };

        myMeeting();
    }, [roomID]);

    return (
        <div className="video-container">
            <div ref={videoContainer} className="video-box" />
        </div>
    );
};

export default VideoPage;
