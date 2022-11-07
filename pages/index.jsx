import { StyledTimeline } from '../src/components/Timeline'
import { CSSReset } from '../src/components/CSSReset'
import Menu from '../src/components/Menu'
import styled from 'styled-components'
import config from '../config.json'

function HomePage() {
  const homeStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  }

  return (
    <>
      <CSSReset />
      <div style={homeStyle}>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />
      </div>
    </>
  )
}

export default HomePage

const StyledHeader = styled.div`
  .banner {
    margin-top: 50px;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .profile {
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
    margin-top: 10px;
  }
`
function Header() {
  return (
    <StyledHeader>
      <img
        className="banner"
        src="https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      />

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

function Timeline(props) {
  const playlistNames = Object.keys(props.playlists)

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName]
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
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
