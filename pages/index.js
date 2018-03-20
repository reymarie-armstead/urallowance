import React, { Component } from 'react'
import Head from 'next/head'
import connect from 'next-redux-wrapper'
import store from 'services/store'
import Default from 'components/layouts/default'
import { Router } from 'routes'
import Hero from 'components/home/hero'

const mapState = ({ auth: { accessToken } }) => ({
  accessToken
})

const mapDispatch = null

@connect(store, mapState, mapDispatch)
export default class Index extends Component {
  render() {
    return [
      <Head key="head">
        <title>Become The Authority | Drew J Rivera</title>
      </Head>,
      <Default key="body">
        <Hero />
      </Default>
    ]
  }
}
