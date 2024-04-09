import React, { useEffect } from 'react'
import { useState } from 'react'

export default function MovieCastDetailsOne({id}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [scroll, setScroll] = useState(0);
    const [value, setValue] = useState(0);
    const containerRef = React.useRef(null);

    let size = 143;

    useEffect(() => {
      fetch (`https://api.themoviedb.org/3/movie/${id}/credits?api_key=294c3bed71b4dc93880885f944b67ed6`)
        .then(response => response.json())
        .then(data => {
          setData(data);
          setLoading(false);
          setValue((data.cast.length - 4) * size);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        })
    })

    const scrollHandler = () => {
      let newScrollPosition = 0;
      if (scroll + 4*size >= value) {
          let newValue = (value/size) % 4;
          if (newValue === 0) {
              newValue = 4
          }
          newScrollPosition = scroll + newValue * size
      }
      else{
          newScrollPosition = scroll + 4*size;
      }
      containerRef.current.scrollLeft = newScrollPosition;
      setScroll(newScrollPosition);
  }

  const scrollHandlerNew = () => {
    let newScrollPosition = 0
    if (scroll === value) {
        let newValue = (value/size) % 4;
        if (newValue === 0) {
            newValue = 4
        }
        newScrollPosition = scroll - newValue * size;
        containerRef.current.scrollLeft = newScrollPosition;
    }
    else {
        newScrollPosition = scroll - 4*size;
        containerRef.current.scrollLeft = newScrollPosition;
    }
    setScroll(newScrollPosition);
  }

  return (
    <div style = {{position: 'relative', height: '420px', display: 'flex', justifyContent: 'center', alignItems: 'center', top: '1050px'}}>
        { scroll > 0 && (<button className='button-new' onClick={scrollHandlerNew}  style={{backgroundImage: 'linear-gradient(270deg, rgba(255,255,255,0.5), rgba(255, 255, 255, 1))', position: 'absolute', zIndex: '5', width: '50px', border: '1px solid rgb(200,200,200)', marginTop : '-5px', marginLeft: '75px', left : '0', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '25px'}}>
            <i style={{color: '#1e90ff', fontSize: '25px', borderRadius: '25px'}} className="fa-solid fa-left-long"></i>
        </button>)}
        { scroll < value && (<button className='button-new' onClick={scrollHandler}  style={{backgroundImage: 'linear-gradient(270deg, rgba(255,255,255,0.5), rgba(255, 255, 255, 1))', position: 'absolute', zIndex: '4', width: '50px', marginLeft: '-205px', border: '1px solid rgb(200,200,200)', marginTop : '-5px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '25px'}}>
            <i style={{color: '#1e90ff', fontSize: '25px', borderRadius: '25px'}} className="fa-solid fa-right-long"></i>     
        </button>)}
        <div className='rowNew-cast' ref = {containerRef} style={{ scrollBehavior: 'smooth', gridTemplateColumns: `repeat(1000, minmax(135px, 135px)`, top: '1050px', left: '0px', right: '0px', bottom: '0px', height: '242px'}}>
            {
              loading ? (
                  <h1>Loading...</h1>
              ):
              (
                data.cast.map((cast, index) => cast.profile_path ? (
                    <div style = {{fontSize: '20px', fontFamily: 'Garamond, serif', fontWeight: '400', display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 'display', height: '242px', flexDirection: 'column', alignItems: 'center'}} key={index}>
                        <div>
                          <img style={{height: '200px', marginTop: '0px', borderRadius: '5px'}} src = {`https://image.tmdb.org/t/p/original${cast.profile_path}?api_key=294c3bed71b4dc93880885f944b67ed6`} alt = {cast.name}/>
                        </div>
                        <div style={{fontFamily: 'sans-serif', fontSize: '12px', color: 'black'}}>{cast.name}</div>
                        <div style={{fontFamily: 'sans-serif', fontSize: '10px', color: 'grey'}}>{cast.character.length > 30 ? cast.character.slice(0, 30) + '...' : cast.character}</div>
                        <div style={{fontFamily: 'sans-serif', fontSize: '10px', color: 'grey'}}>{cast.known_for_department}</div>
                    </div>
                ) : (
                  <div style = {{color: 'white', fontSize: '20px', fontFamily: 'Garamond, serif', fontWeight: '400', display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 'display', height: '242px', flexDirection: 'column', alignItems: 'center'}} key={index}>
                    <div style={{height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '3', borderRadius: '5px', backgroundColor: 'rgb(240,240,240)'}}> <i style={{fontSize: '9.7rem', backgroundColor: 'white', color: 'grey', backgroundColor: 'rgb(240,240,240)'}} className="fa-solid fa-user"></i> </div>
                    <div style={{fontFamily: 'sans-serif', fontSize: '12px', color: 'black'}}>{cast.name}</div>
                    <div style={{fontFamily: 'sans-serif', fontSize: '10px', color: 'grey'}}>{cast.character.length > 20 ? cast.character.slice(0, 20) + '...' : cast.character}</div>
                    <div style={{fontFamily: 'sans-serif', fontSize: '10px', color: 'grey'}}>{cast.known_for_department}</div>
                  </div> 
                ))
              )
           }
        </div>
    </div>
  )
}
