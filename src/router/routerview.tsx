import * as React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import { RouterPropType, RouterItemType } from '../utils/type'



export default (props: RouterPropType) => {
    return <Switch>
        {
            props.routes.map((item: RouterItemType, index:number)=>{
                if(item.from === '*'){
                    return <Redirect key={index} to={item.to} />
                }else if(item.from){
                    return <Redirect key={index} exact from={item.from} to={item.to} />
                }

                return <Route key={index} path={item.path} render={(props)=>{
                    if(item.children){
                        return <item.component {...props} routes={item.children} />
                    }else{
                        return <item.component {...props} />
                    }
                }}></Route>
            })
        }
    </Switch>
}