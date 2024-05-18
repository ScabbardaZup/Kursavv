import '/workspaces/Kursavv/my-app/src/components/Body/body.css';
import loupe from '/workspaces/Kursavv/my-app/src/images/loupe.png'
import podium from '/workspaces/Kursavv/my-app/src/images/podium.png'
import megaphone from '/workspaces/Kursavv/my-app/src/images/megaphone.png'
import cleve from '/workspaces/Kursavv/my-app/src/images/cleve.png'

export default ({state, change}) => {
    return (
        <div class='buttonSection'>
          <button class='button' isActive={state==='search'} onClick={() => change('search')}>
            <img src={loupe} alt="My Image"></img>
            Search
          </button>
          <button class='button' isActive={state==='top'} onClick={() => change('top')}>
            <img src={podium} alt="My Image"></img>
            Top
          </button>
          <button class='button' isActive={state==='random_title'} onClick={() => change('random_title')}>
            <img src={cleve} alt="My Image"></img>
            Random title
          </button>
          <button class='button' isActive={state==='news'} onClick={() => change('news')}>
            <img src={megaphone} alt="My Image"></img>
            News
          </button>
        </div>
    )
}
