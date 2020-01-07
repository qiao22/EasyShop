// import React from 'react';
// 导入store
import User from './user';
import Home from './home';
import Type from './type';
import Cart from './cart';
import My from './my';

export default {
    user: new User(),
    home: new Home(),
    type: new Type(),
    cart: new Cart(),
    my: new My()
}