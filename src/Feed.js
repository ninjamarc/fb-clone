import React from 'react'
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            <Post 
                profilePic="https://media.istockphoto.com/vectors/ninja-warrior-mascot-logo-vector-vector-id1012573350?k=6&m=1012573350&s=612x612&w=0&h=65Bc14kNAQdEx8gAkZ7IwnlvPjN8PeRPJlMNIO-A_FI="    
                message='Wow this works!'
                timestamp='Saturday 5:25pm'
                username='lmajor'
                image='https://content.thriveglobal.com/wp-content/uploads/2019/04/Denver-Severe-Storm-Damage-Lawyers.jpg'
            />
            <Post 
                profilePic="https://media1.popsugar-assets.com/files/thumbor/m7M1SKoqtWAEcNbi8JeusAYPYHk/144x83:1984x1923/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/02/24/897/n/1922398/582a03955e5432c1e88d95.90383166_/i/Katy-Perry.jpg"    
                message='What a view!'
                timestamp='Saturday 5:38pm'
                username='kperry'
                image='https://cdn.vox-cdn.com/thumbor/Al48-pEnyIn2rlgKX7MIHNmlE68=/0x0:5563x3709/1200x800/filters:focal(2302x1311:3192x2201)/cdn.vox-cdn.com/uploads/chorus_image/image/65752607/1048232144.jpg.0.jpg'
            />
            <Post
                profilePic="https://cdn.wealthygorilla.com/wp-content/uploads/2019/02/Hottest-Women-Kristen-Bell-800x557.jpg.webp"    
                message='Remembering what this was like...'
                timestamp='Saturday July 10th 5:44pm'
                username='kbell'
                image='https://evanevanstours.com/blog/wp-content/uploads/2019/06/music-festival-scaled.jpg'
            />
            <Post
                profilePic="https://cdn.wealthygorilla.com/wp-content/uploads/2019/02/hottest-Women-Jessica-Lucas-800x450.webp"    
                message='Take me back.'
                timestamp='Saturday July 10th 5:50pm'
                username='jlucas'
                image='https://www.greeka.com/photos/cyclades/santorini/hero/santorini-greece-1920.jpg'
            />
            <Post
                profilePic="https://cdn.wealthygorilla.com/wp-content/uploads/2019/02/Hottest-Women-Hayden-Panattiere-800x563.jpg.webp"    
                message='I miss you....ugh'
                timestamp='Saturday July 10th 5:55pm'
                username='hpanettiere'
                image='https://images.themodernproper.com/billowy-turkey/production/posts/2017/Banh-Mi-Burger-7.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1599771220&s=845f8ab395f6c67ca8e0212c7daa9458'
            />
            <Post
                profilePic="https://cdn.wealthygorilla.com/wp-content/uploads/2019/02/Hottest-Women-Keira-Knightley-800x450.jpg.webp"    
                message='Vegas bound baby!'
                timestamp='Saturday July 10th 6:01pm'
                username='kknightley'
                image='https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg'
            />
            <Post
                profilePic="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwMTgyMjU4NjIyMTQ1ODgw/gettyimages-469873772.jpg"    
                message='One of those nights...'
                timestamp='Saturday July 10th 6:11'
                username='jlopez'
                image='http://cdn.cnn.com/cnnnext/dam/assets/201216114748-12-india-cocktail-bars.jpg'
            />
        </div>
    )
}

export default Feed
