/*
 * @Author: Gumizhu
 * @Date: 2023-04-18 15:10:55
 * @Descripttion:
 * @LastEditors: Gumizhu
 * @LastEditTime: 2023-04-20 20:14:51
 */
const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device
  // token: state => state.user.token,
  // avatar: state => state.user.avatar,
  // name: state => state.user.name
}
export default getters
