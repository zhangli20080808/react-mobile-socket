// 纯函数 完全根据你传递的信息跳转地址
export function getRedirectPath({type, avatar}){
    console.log(type,avatar);
    
    // 根据用户信息 返回跳转地址
    // user.type  /boss /genius
    // user.avatar /bossinfo  /geniusinfo

    let url  =(type === 'boss') ? 'boss' :'genius'
    if(!avatar){
        url += 'info'
    }
    return url
}