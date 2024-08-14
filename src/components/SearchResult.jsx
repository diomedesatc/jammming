import React from 'react'
import spotifySongs from '../assets/songs';

const SearchResult = ({songName}) => {  

  return (
    <div>
      <ul>
        {
          spotifySongs.map((songInfo) =>
            <li key={songInfo.id}>
              <h3>Name: {songInfo.name}</h3>
              <h4>Artist: {songInfo.artist}</h4>
              <h5>Album: {songInfo.album}</h5>
            </li>
          )
        }
      </ul>
      
    </div>
  )
}

export default SearchResult
