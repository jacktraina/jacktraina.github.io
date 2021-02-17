import React, {Component} from 'react';
import './ProjectCarousel.css';

import cx from 'classnames'
import NonPassiveTouchTarget from './NonPassiveTouchTarget'
import touchWithMouseHOC from './touchWithMouseHOC'

// images
import asgard from '../../../assets/img/asgard.jpg';
import gotg from '../../../assets/img/gotg.jpg';
import thor from '../../../assets/img/thor.jpg';

import TouchCarousel from 'react-touch-carousel'
 
const query = window.location.search.slice(1)
const enableLoop = /\bloop\b/.test(query)
const enableAutoplay = /\bautoplay\b/.test(query)

const data = [
  {
    title: 'Card 1',
    background: '#0072bb',
    text: `react-touch-carousel only handles the trouble parts, i.e.
    - touch gestures parsing
    - scroll cursor rounding and modding
    - items padding and looping
    - auto playing`
  },
  {
    title: 'Card 2',
    background: '#ff4c3b',
    text: `It is left up to you to
    - decide the carousel structure
    - render each item in the carousel
    - style everything
    - add some fancy decorators like dots`
  },
  {
    title: 'Card 3',
    background: '#ffca18',
    text: `Install it by
    - npm install --save react-touch-carousel`
  },
  {
    title: 'Card 4',
    background: '#44c1c1',
    text: `See some example code in the '/examples' dir at GitHub. And you can run and play with the code after cloning it, by
    - npm install
    - npm run dev
    - open localhost:5000`
  },
  {
    title: 'Card 5',
    background: '#29c53c',
    text: 'react-touch-carousel is released under MIT license'
  }
];

function clamp (n, min, max) {
  if (n < min) {
    return min
  }
  if (n > max) {
    return max
  }
  return n
}

const cardSize = 300
const cardPadCount = enableLoop ? 3 : 0
const carouselWidth = clamp(window.innerWidth, 0, 960)

function log (text) {
  document.getElementById('console').innerText = text
}

function CarouselContainer (props) {
  const {cursor, carouselState: {active, dragging}, ...rest} = props
  let current = -Math.round(cursor) % data.length
  while (current < 0) {
    current += data.length
  }
  // Put current card at center
  const translateX = (cursor - cardPadCount) * cardSize + (carouselWidth - cardSize) / 2
  return (
    <NonPassiveTouchTarget
      className={cx(
        'carousel-container',
        {
          'is-active': active,
          'is-dragging': dragging
        }
      )}
    >
      <NonPassiveTouchTarget
        className='carousel-track'
        style={{transform: `translate3d(${translateX}px, 0, 0)`}}
        {...rest}
      />

      <div className='carousel-pagination-wrapper'>
        <ol className='carousel-pagination'>
          {data.map((_, index) => (
            <li
              key={index}
              className={current === index ? 'current' : ''}
            />
          ))}
        </ol>
      </div>
    </NonPassiveTouchTarget>
  )
}

const Container = touchWithMouseHOC(CarouselContainer);

class ProjectCarousel extends Component {
  renderCard (index, modIndex) {
    const item = data[modIndex]
    return (
      <div
        key={index}
        className='carousel-card'
        onClick={() => log(`clicked card ${1 + modIndex}`)}
      >
        <div
          className='carousel-card-inner'
          style={{backgroundColor: item.background}}
        >
          <div className='carousel-title'>{item.title}</div>
          <div className='carousel-text'>{item.text}</div>
        </div>
      </div>
    )
  }

  render () {
    return (
      <React.StrictMode>
        <TouchCarousel
          component={Container}
          cardSize={cardSize}
          cardCount={data.length}
          cardPadCount={cardPadCount}
          loop={enableLoop}
          autoplay={enableAutoplay ? 2e3 : false}
          renderCard={this.renderCard}
        />
      </React.StrictMode>
    )
  }
}

export default ProjectCarousel;