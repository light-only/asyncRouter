
//获取后台路由(动态路由)
export function getRouters(){
    return new Promise((resolve,reject)=>{
        const menuList = [
            // {
            //   "name": "Tool",
            //   "path": "/tool",
            //   "hidden": false,
            //   "redirect": "noRedirect",
            //   "component": "Layout",
            //   "alwaysShow": true,
            //   "meta": {
            //     "title": "系统工具",
            //     "icon": "tool",
            //     "noCache": false,
            //     "link": null
            //   },
            //   "children": [{
            //     "name": "Build",
            //     "path": "build",
            //     "hidden": false,
            //     "component": "tool/build/index",
            //     "meta": {
            //       "title": "表单构建",
            //       "icon": "build",
            //       "noCache": false,
            //       "link": null
            //     }
            //   }, {
            //     "name": "Gen",
            //     "path": "gen",
            //     "hidden": false,
            //     "component": "tool/gen/index",
            //     "meta": {
            //       "title": "代码生成",
            //       "icon": "code",
            //       "noCache": false,
            //       "link": null
            //     }
            //   }, {
            //     "name": "Swagger",
            //     "path": "swagger",
            //     "hidden": false,
            //     "component": "tool/swagger/index",
            //     "meta": {
            //       "title": "系统接口",
            //       "icon": "swagger",
            //       "noCache": false,
            //       "link": null
            //     }
            //   }]
            // },
            {
                "name":"",
                "path":"",
                "hidden":false,
                "redirect":"organization",
                "component":"Layout",
                // "alwaysShow":"true",
                "meta":{
                    "title":"组织管理",
                    "icon":"tool",
                    "nocache":false,
                    "link":null
                },
                "children":[
                    {
                        "name":"Organization",
                        "path":"organization",
                        "hidden":false,
                        "component":"organization/index",
                        "meta":{
                            "title":"组织管理",
                            "icon":"tool",
                            "nocache":false,
                            "link":"organization"
                        }
                    }
                ]
            },
            {
                "name":"",
                "path":"",
                "hidden":false,
                "redirect":"noRedirect",
                "component":"Layout",
                // "alwaysShow":"true",
                "meta":{
                    "title":"部门管理",
                    "icon":"tool",
                    "nocache":false,
                    "link":''
                },
                "children":[
                    {
                        "name":"Department",
                        "path":"department",
                        "hidden":false,
                        "component":"department/index",
                        "meta":{
                            "title":"部门管理",
                            "icon":"tool",
                            "nocache":false,
                            "link":"department"
                        }
                    }
                ]
            },
            {
                "name":"",
                "path":"",
                "hidden":false,
                "redirect":"noRedirect",
                "component":"Layout",
                // "alwaysShow":"true",
                "meta":{
                    "title":"岗位管理",
                    "icon":"tool",
                    "nocache":false,
                    "link":''
                },
                "children":[
                    {
                        "name":"Station",
                        "path":"station",
                        "hidden":false,
                        "component":"station/index",
                        "meta":{
                            "title":"岗位管理",
                            "icon":"tool",
                            "nocache":false,
                            "link":"station"
                        }
                    }
                ]
            },
            {
                "name":"",
                "path":"",
                "hidden":false,
                "redirect":"noRedirect",
                "component":"Layout",
                // "alwaysShow":"true",
                "meta":{
                    "title":"应用管理",
                    "icon":"tool",
                    "nocache":false,
                    "link":''
                },
                "children":[
                    {
                        "name":"Application",
                        "path":"application",
                        "hidden":false,
                        "component":"application/index",
                        "meta":{
                            "title":"应用管理",
                            "icon":"tool",
                            "nocache":false,
                            "link":"application"
                        }
                    }
                ]
            },
            {
                "name":"",
                "path":"",
                "hidden":false,
                "redirect":"noRedirect",
                "component":"Layout",
                // "alwaysShow":"true",
                "meta":{
                    "title":"菜单管理",
                    "icon":"tool",
                    "nocache":false,
                    "link":''
                },
                "children":[
                    {
                        "name":"Menulist",
                        "path":"menulist",
                        "hidden":false,
                        "component":"menuList/index",
                        "meta":{
                            "title":"菜单管理",
                            "icon":"tool",
                            "nocache":false,
                            "link":"menulist"
                        }
                    }
                ]
            },
            {
                "name":"DayRecord",
                "path":"/dayRecord",
                "hidden":false,
                "redirect":"noRedirect",
                "component":"Layout",
                "alwaysShow":"true",
                "meta":{
                    "title":"日志管理",
                    "icon":"tool",
                    "nocache":false,
                    "link":'dayRecord'
                },
                "children":[
                    {
                        "name":"LoginRecord",
                        "path":"loginRecord",
                        "hidden":false,
                        "component":"dayRecord/loginRecord/index",
                        "meta":{
                            "title":"登录日志",
                            "icon":"tool",
                            "nocache":false,
                            "link":"loginRecord"
                        }
                    },
                    {
                        "name":"HandleRecord",
                        "path":"handleRecord",
                        "hidden":false,
                        "component":"dayRecord/handleRecord/index",
                        "meta":{
                            "title":"操作日志",
                            "icon":"tool",
                            "nocache":false,
                            "link":"handleRecord"
                        }
                    },
                ]
            },
            {
                "name":"",
                "path":"",
                "hidden":false,
                "redirect":"noRedirect",
                "component":"Layout",
                // "alwaysShow":"true",
                "meta":{
                    "title":"应用组管理",
                    "icon":"tool",
                    "nocache":false,
                    "link":''
                },
                "children":[
                    {
                        "name":"AppGroup",
                        "path":"appGroup",
                        "hidden":false,
                        "component":"appGroup/index",
                        "meta":{
                            "title":"应用组管理",
                            "icon":"tool",
                            "nocache":false,
                            "link":"appGroup"
                        }
                    },
                    {
                        "name":"AssignUser",
                        "path":"assignUser/:id",
                        "hidden":true,
                        "component":"appGroup/assignUser/index",
                        "meta":{
                            title:"分配用户",
                            "link":"assignUser/:id"
                        }
                    }
                ]
            },
            {
                "name":"",
                "path":"",
                "hidden":false,
                "redirect":"noRedirect",
                "component":"Layout",
                // "alwaysShow":"true",
                "meta":{
                    "title":"用户管理",
                    "icon":"tool",
                    "nocache":false,
                    "link":''
                },
                "children":[
                    {
                        "name":"UserList",
                        "path":"userList",
                        "hidden":false,
                        "component":"user/index",
                        "meta":{
                            "title":"用户管理",
                            "icon":"tool",
                            "nocache":false,
                            "link":"userList"
                        }
                    }
                ]
            },
        ]
        resolve(menuList);
    })
}
