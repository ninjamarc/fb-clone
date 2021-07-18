import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://img.cinemablend.com/filter:scale/quill/f/b/5/1/e/6/fb51e6dc4b6f36c2735b8b41333806efaefdd4c4.jpg?fw=1200"
                profileSrc="https://imgix.ranker.com/user_node_img/53/1041357/original/gal-gadot-photo-u50?q=60&fit=crop&fm=pjpg&crop=faces&bg=fff&dpr=1&w=60&h=60"
                title="Gal Gadot"
            />
            <Story 
                image="https://img.cinemablend.com/filter:scale/quill/5/d/8/7/c/0/5d87c00c9d2929521fda05442a5f5d21f684e476.jpg?mw=600"
                profileSrc="https://www.byrdie.com/thmb/w5nMKVz8ktSb4k_cchGsm-dZn2c=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-5432593241-70673a664b3e42b6b216b7d4f1ea2715.jpg"
                title="Margot Robbie"
            />
            <Story 
                image="https://mediaproxy.salon.com/width/1200/https://media.salon.com/2021/06/black-widow-still03.jpg"
                profileSrc="https://www.refinery29.com/images/10549259.jpg?format=pjpg&auto=webp&resize-filter=lanczos2&quality=50&sharpen=a3%2Cr3%2Ct0&optimize=low&width=960"
                title="Scarlett Johansson"
            />
            <Story 
                image="https://cdn.shopify.com/s/files/1/1891/9175/articles/Jessica_Alba_grande.jpg?v=1580332226"
                profileSrc="https://www.hollywoodreporter.com/wp-content/uploads/2019/06/gettyimages-1127215777_0.jpg?w=681&h=383&crop=1"
                title="Jessica Alba"
            />
            <Story 
                image="https://www.etonline.com/sites/default/files/styles/970xh/public/images/2018-07/mila_kunis_cosmo_.jpg?itok=dEtWjeyw"
                profileSrc="https://www.thefamouspeople.com/profiles/images/mila-kunis-7.jpg"
                title="Mila Kunis"
            />
            <Story 
                image="https://img.cinemablend.com/filter:scale/quill/3/c/a/a/c/9/3caac94d0484e7bf52cf165eeada225f569e4973.jpg?mw=600"
                profileSrc="https://cdn.wealthygorilla.com/wp-content/uploads/2019/02/Hottest-Women-Kate-Beckinsale-800x450.jpg.webp"
                title="Kate Beckinsale"
            />
            <Story 
                image="https://etcanada.com/wp-content/uploads/2018/12/adriana-lima.png?w=450&h=300&crop=1"
                profileSrc="https://cdn.wealthygorilla.com/wp-content/uploads/2019/02/Hottest-Women-Adriana-Lima-800x450.jpg.webp"
                title="Adriana Lima"
            />
            
        </div>
    )
}

export default StoryReel
