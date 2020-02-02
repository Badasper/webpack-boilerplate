import * as $ from 'jquery'
import Post from '@models/Post'
// import json from './assets/json'
import './styles/styles.css'
import WebPAckLogo from './assets/webpack-logo.png'
import xml from './assets/data.xml'
// import csv from './assets/csv.csv'
import './styles/less.less'
import './styles/scss.scss'
import './babel.js'
import React from 'react'
import { render } from 'react-dom'


const post = new Post('WebPack title', WebPAckLogo);
$('pre').addClass('code').html(post.toString())

const App = () => (
  <div className="container">
    <h1>Webpack Course from YouTube</h1>
    <hr />
    <div className="logo"></div>
    <hr />
    <pre></pre>
    <hr />
    <div className="box">
      <h2>LESS</h2>
    </div>
    <hr />
    <div className="card">
      <h2>SCSS</h2>
    </div>
  </div>
)

render(<App/>, document.getElementById('app'))

// console.log('Post to string: ', post.toString());
// console.log('JSON: ', json) 
// console.log('XML: ', xml)
// console.log('CSV: ', csv)
