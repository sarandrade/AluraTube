import { StyledTimeline } from '../src/components/Timeline'
import Menu from '../src/components/Menu'
import styled from 'styled-components'
import config from '../config.json'
import React from 'react'

function HomePage() {
  const homeStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  }

  const [filterValue, setFilterValue] = React.useState('')

  return (
    <>
      <div style={homeStyle}>
        <Menu filterValue={filterValue} setFilterValue={setFilterValue} />
        <Header />
        <Timeline searchValue={filterValue} playlists={config.playlists} />
      </div>
    </>
  )
}

export default HomePage

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`
const StyledBanner = styled.div`
  background-image: url(${({ bg }) => bg});
  height: 230px;
`
function Header() {
  return (
    <StyledHeader>
      <StyledBanner bg={config.banner} />

      <section className="user-info">
        <img
          className="profile"
          src={`https://github.com/${config.github}.png`}
        />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  )
}

function Timeline({ searchValue, ...props }) {
  const playlistNames = Object.keys(props.playlists)

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName]
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase()
                  const searchValueNormalized = searchValue.toLowerCase()

                  return titleNormalized.includes(searchValueNormalized)
                })
                .map((video) => {
                  return (
                    <a key={video.url} href={video.url}>
                      <img src={video.thumb} />
                      <span>{video.title}</span>
                    </a>
                  )
                })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}
