// import React from 'react';
// 导入store
import App from './app'
import User from './user'
import Home from './home'
import Type from './type'
import Special from './special'
import Cart from './cart'

export default {
    app: new App(),
    user: new User(),
    home: new Home(),
    type: new Type(),
    special: new Special(),
    cart: new Cart()
}