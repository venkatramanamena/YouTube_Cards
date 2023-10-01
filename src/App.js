import './Components/style.css'
import './App.css';
import Header from './Components/header';
import Card from './Components/CradComponent'
const videos = [

  {
 
   id: 1,
   title:"JAWAN: Chaleya (Hindi) | Shah Rukh Khan | Nayanthara | Atlee | Anirudh | Arijit S, Shilpa R | Kumaar" ,
   thumbnailUrl: "https://c.saavncdn.com/026/Chaleya-From-Jawan-Hindi-2023-20230814014337-500x500.jpg",
   likes: "1.5M",
   views: "118M",
   channelName: "T-Series",
   channelLogoUrl: "https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s88-c-k-c0x00ffffff-no-rj",
 
  },
 
  {
 
      id: 2,
      title:"Britney Spears - Criminal (Lyrics) \"Mama I'm in love with a CRIMINAL\"" ,
      thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BN2NmN2E4YjEtMzQzYy00YmFiLThiNzItMWU1OGMwODhmODIwXkEyXkFqcGdeQXVyMjgzMzAzMjE@._V1_.jpg",
      likes: "296K",
      views: "30M",
      channelName: "Lazy Fox",
      channelLogoUrl: "https://yt3.ggpht.com/ytc/APkrFKYFs_nmSJK34_SxWUr_jy9FARqLoMqlvXIttjsIkw=s88-c-k-c0x00ffffff-no-rj",
    
     },
     {
 
      id: 3,
      title:"Shawn Mendes, Camila Cabello - Señorita" ,
      thumbnailUrl: "https://static.toiimg.com/thumb/msid-69889793,imgsize-825268,width-400,resizemode-4/69889793.jpg",
      likes: "20M",
      views: "1.6B",
      channelName: "Shawn mendes",
      channelLogoUrl: "https://yt3.ggpht.com/QTpsceScLWmzgZXO6lPJo-s0CzCaGoat2S8PZzfdKtvqJTUh7jCLtYvCPH1RbUzVCOz2t_RIqIA=s88-c-k-c0x00ffffff-no-nd-rj",      
     },
     {
 
      id: 4,
      title:"Astrid S - Hurts So Good" ,
      thumbnailUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBTvTQeyh2DKs30e9kr9uNSrNpUHIVlNMbsM6uBOc9OXzt4v5mlh3HEq3AhNTv0OkXrU&usqp=CAU",
      likes: "1.8M",
      views: "172M",
      channelName: "Astrid S",
      channelLogoUrl: "https://yt3.ggpht.com/xJ5jFrj1PMiHqdxbO_ASMiJ1KlGrCm63GKmijQLp3cgmZzG4lvc8Eif_cl0GzpIKbno7hJfh=s88-c-k-c0x00ffffff-no-nd-rj",      
     },
     {
 
      id: 5,
      title:"Rosa Linn - Snap - (Official Eurovision Music Video)" ,
      thumbnailUrl: "https://i.scdn.co/image/ab67616d0000b2731391b1fdb63da53e5b112224",
      likes: "1.2M",
      views: "86M",
      channelName: "Rosa Linn",
      channelLogoUrl: "https://yt3.ggpht.com/xoAivbWMQ8O3n3pk33zwHW465QpDaigpXJlpbsGEKAXPvHI6suDOYWnDEyByPGkA79RCeh5N=s88-c-k-c0x00ffffff-no-nd-rj",      
     },
     {
 
      id: 6,
      title:"The Kid LAROI, Justin Bieber - STAY (Official Video)" ,
      thumbnailUrl: "https://i.ytimg.com/vi/kTJczUoc26U/hqdefault.jpg?v=60e73455",
      likes: "10M",
      views: "800M",
      channelName: "The Kid LAROI.",
      channelLogoUrl: "https://yt3.ggpht.com/pFqjym2DvgUcYlETC2gq7UXdaluBV0owo35i426akAyJ8djLvS6fbqPdjggCn4bRGoG3JHLW1qs=s88-c-k-c0x00ffffff-no-nd-rj",      
     },
     {
 
      id: 7,
      title:"DJ Snake - Let Me Love You ft. Justin Bieber" ,
      thumbnailUrl: "https://www.billboard.com/wp-content/uploads/media/dj-snake-ft-justin-bieber-let-me-love-you-vid-still-2016-billboard-1548.jpg",
      likes: "9.3M",
      views: "1.3B",
      channelName: "DJ Snake",
      channelLogoUrl: "https://yt3.ggpht.com/kfw_1eOpjdYASmlAnSPa7XmXrYpaKjuW4k7_oB-hD5ljRSlT7yThew72ZxgW1UrAJ1e8vX1G=s88-c-k-c0x00ffffff-no-nd-rj",      
     },
     {
 
      id: 8,
      title:"One Kiss x I was never there" ,
      thumbnailUrl: "https://i.ytimg.com/vi/y4bNDvwQobY/sddefault.jpg",
      likes: "21K",
      views: "1.4M",
      channelName: "Pranav P3rcy",
      channelLogoUrl: "https://yt3.ggpht.com/l2uoUAb8Z4yDN-u91BMyLQVYoSKqHX6ssSBkvjlejIZrpSHku39__FGJ9TKuNpX3eobZ4MjwovE=s88-c-k-c0x00ffffff-no-nd-rj",      
     },
     {
 
      id: 9,
      title:"Alok & Alan Walker - Headlight (Fajar Asia Remix) feat. KIDDO" ,
      thumbnailUrl: "https://i.ytimg.com/vi/C7uuz2l4RQY/maxresdefault.jpg",
      likes: "594K",
      views: "127M",
      channelName: "Fajar Asia Music",
      channelLogoUrl: "https://yt3.ggpht.com/GvmCUWaOentyckIPz5P-Vpuc5XOUBx8uLEGs5nmZdyi6r02swA33HjcRXm0I1eCGKkxGijvovw=s88-c-k-c0x00ffffff-no-nd-rj",      
     },
     {
 
      id: 10,
      title:"NEJ' - Paro (Clip Officiel)" ,
      thumbnailUrl: "https://a10.gaanacdn.com/gn_img/albums/Rz4W8vKxD5/4W8eRQn6bx/size_l.jpg",
      likes: "1M",
      views: "92M",
      channelName: "NEJ'",
      channelLogoUrl: "https://yt3.ggpht.com/LrI-F3Fup8CCipKjUAaurZboVyrOBJKqhU61G8JXNxn8BmaVyWKipD9h6m4X5fGhABq_F9V00w=s88-c-k-c0x00ffffff-no-nd-rj",      
     },
     {
 
      id: 11,
      title:"Trevor Daniel - Falling (Lyrics)" ,
      thumbnailUrl: "https://i.ytimg.com/vi/dSDehTfGYK4/maxresdefault.jpg",
      likes: "6.1M",
      views: "557M",
      channelName: "SyrebralVibes",
      channelLogoUrl: "https://yt3.ggpht.com/Jd9XwEWVpzMz8fkO5fNFeCOpvRzyUwCmmZ3cGG8arZHP0tUdDhIw1a0MxAziBZaCvFcKxUH7hlw=s88-c-k-c0x00ffffff-no-rj",      
     },
     {
 
      id: 11,
      title:"Doja Cat - Demons (Lyrics)" ,
      thumbnailUrl: "https://i.ytimg.com/vi/MA0aCUxItYA/maxresdefault.jpg",
      likes: "7K",
      views: "715K",
      channelName: "SyrebralVibes",
      channelLogoUrl: "https://yt3.ggpht.com/Jd9XwEWVpzMz8fkO5fNFeCOpvRzyUwCmmZ3cGG8arZHP0tUdDhIw1a0MxAziBZaCvFcKxUH7hlw=s88-c-k-c0x00ffffff-no-rj",      
     },
 
 ];
function App() {
  return (
    <div>
      <Header/>
      <div id='flex'>
      {
        videos.map((item)=>{
          return(
          
          <Card  title={item.title} channelName={item.channelName} thumbnailUrl={item.thumbnailUrl} channelLogoUrl={item.channelLogoUrl} likes={item.likes} views={item.views}/>
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
