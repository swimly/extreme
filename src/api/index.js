// import wx from 'weixin-js-sdk'
export const wechat = (This) => {
  This.$http({
    method: 'get',
    url: 'https://api.weixin.qq.com/cgi-bin/token',
    headers: {
      'Content-Type': 'application/text; charset=UTF-8'
    },
    params: {
      grant_type: 'client_credential',
      appid: 'wxabf1c20c98f9cf4c',
      secret: 'edcc8198bcb39808019f91e195eafcc1'
    }
  }).then((res) => {
    console.log(res)
  })
}
